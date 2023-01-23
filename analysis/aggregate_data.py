"""Convert raw PsychoPy data to cleaner csv file.
Mostly this is to make sense of the joystick response patterns.
"""
import ast
from pathlib import Path
import numpy as np
import pandas as pd


export_path = "./PEAC_data.csv"

data_dir = Path("../data")
glob = data_dir.glob("2*.csv")

columns = [
    "participant",
    "session",
    "group",
    "ImageFile",
    "AnimateInanimate",
    "ValenceScore",
    "img.animacy",
    "joy.reversed",
    "img.started",
    "joy.direction",
    "joy.rt",
    "joy.animacy",
]

skip_files = [
    "209_psychopy_2022-10-28_13h03.14.201",
    "218_psychopy_2022-11-09_17h58.11.994",
    "218_psychopy_2022-11-09_17h59.54.404",
]


def joystick_list_to_responses(row):
    time_list_as_string = row["joy.time_list"]
    y_list_as_string = row["joy.y_list"]
    time_list = ast.literal_eval(time_list_as_string)
    y_list = ast.literal_eval(y_list_as_string)
    if (-0.5 in y_list and 0.5 in y_list):
        direction = "both"
        rt = pd.NA
    elif min(y_list) == -0.5: # pulled
        direction = "pull"
        argmin = y_list.index(min(y_list))
        rt = time_list[argmin] - time_list[0]
    elif max(y_list) == 0.5: # pushed
        direction = "push"
        argmax = y_list.index(max(y_list))
        rt = time_list[argmax] - time_list[0]
    else:
        direction = "neither"
        rt = pd.NA
    return direction, rt


def get_image_animacy(row):
    animate_val = row["AnimateInanimate"] # 1 or 2
    is_reversed = row["joy.reversed"] # True or False
    if (animate_val == 1 and not is_reversed
        ) or (animate_val == 2 and is_reversed):
        animacy = "animate"
    else:
        animacy = "inanimate"
    return animacy

def get_response_animacy(row):
    direction_val = row["joy.direction"] # push, pull, neither, or both
    is_reversed = row["joy.reversed"] # True or False
    if direction_val in ["both", "neither"]:
        animacy_response = pd.NA
    elif (direction_val == "push" and not is_reversed
        ) or (direction_val == "pull" and is_reversed):
        animacy_response = "inanimate"
    else:
        animacy_response = "animate"
    return animacy_response


data = []
for fp in glob:
    if fp.stem in skip_files:
        continue
    
    dat = pd.read_csv(fp)

    # Merge all joysticks into one column per measure
    # (except joystick and joystick 2, which is from practice)
    # (only need joystick 3 and 4)
    # (3 always reversed [r], 4 always not reversed [o])
    dat["joy.x"] = dat["joystick_3.x"].fillna(dat["joystick_4.x"])
    dat["joy.y"] = dat["joystick_3.y"].fillna(dat["joystick_4.y"])
    dat["joy.time"] = dat["joystick_3.time"].fillna(dat["joystick_4.time"])
    dat["joy.x_list"] = dat["joystick_3.x_r"].fillna(dat["joystick_4.x_o"])
    dat["joy.y_list"] = dat["joystick_3.y_r"].fillna(dat["joystick_4.y_o"])
    dat["joy.time_list"] = dat["joystick_3.t_r"].fillna(dat["joystick_4.t_o"])
    dat["joy.reversed"] = dat["joystick_3.t_r"].notna().fillna(~dat["joystick_4.t_o"].notna())
    dat["img.started"] = dat["image.started"].fillna(dat["image_2.started"]).fillna(dat["image_6.started"]).fillna(dat["image_7.started"])
    # dat = dat.dropna(subset="joy.time")
    dat = dat.dropna(subset=["joy.time_list"])

    # Get psychopy's joystick RT
    # dat["joy.rt"] = dat["joy.time"].sub(dat["img.started"])

    # Get custom joystick RT
    # x and y coords each range -.5 to .5
    dat["joy.direction"], dat["joy.rt"] = zip(*dat.apply(joystick_list_to_responses, axis=1))
    # dat["argmax"] = dat["joy.y_list"].apply(ast.literal_eval).map(np.argmax)

    # Get response details
    dat["img.animacy"] = dat.apply(get_image_animacy, axis=1)
    dat["joy.animacy"] = dat.apply(get_response_animacy, axis=1)
    dat["joy.accuracy"] = dat["joy.animacy"].eq(dat["img.animacy"])

    # Clean image name
    dat["ImageFile"] = dat["ImageFile"].str.split("Images/").str[-1].str.split(".jpg").str[0]

    # Remove trials that did not get a clear push or pull response.
    dat = dat.dropna(subset=["joy.animacy"])

    data.append(dat[columns])


df = pd.concat(data, ignore_index=True)

df.to_csv(export_path, index=False)
