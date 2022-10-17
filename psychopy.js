/***************** 
 * Psychopy Test *
 *****************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'psychopy';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(WelcomeRoutineBegin());
flowScheduler.add(WelcomeRoutineEachFrame());
flowScheduler.add(WelcomeRoutineEnd());
flowScheduler.add(Blank500RoutineBegin());
flowScheduler.add(Blank500RoutineEachFrame());
flowScheduler.add(Blank500RoutineEnd());
flowScheduler.add(ConsentRoutineBegin());
flowScheduler.add(ConsentRoutineEachFrame());
flowScheduler.add(ConsentRoutineEnd());
flowScheduler.add(Blank500RoutineBegin());
flowScheduler.add(Blank500RoutineEachFrame());
flowScheduler.add(Blank500RoutineEnd());
flowScheduler.add(GeneralInstructionsRoutineBegin());
flowScheduler.add(GeneralInstructionsRoutineEachFrame());
flowScheduler.add(GeneralInstructionsRoutineEnd());
flowScheduler.add(Blank500RoutineBegin());
flowScheduler.add(Blank500RoutineEachFrame());
flowScheduler.add(Blank500RoutineEnd());
flowScheduler.add(GeneralInstructions2RoutineBegin());
flowScheduler.add(GeneralInstructions2RoutineEachFrame());
flowScheduler.add(GeneralInstructions2RoutineEnd());
flowScheduler.add(Blank500RoutineBegin());
flowScheduler.add(Blank500RoutineEachFrame());
flowScheduler.add(Blank500RoutineEnd());
const controlTaskOrderLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(controlTaskOrderLoopBegin(controlTaskOrderLoopScheduler));
flowScheduler.add(controlTaskOrderLoopScheduler);
flowScheduler.add(controlTaskOrderLoopEnd);
flowScheduler.add(End_ExperimentRoutineBegin());
flowScheduler.add(End_ExperimentRoutineEachFrame());
flowScheduler.add(End_ExperimentRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'Images/Lion 1.jpg', 'path': 'Images/Lion 1.jpg'},
    {'name': 'Images/Dancing 7.jpg', 'path': 'Images/Dancing 7.jpg'},
    {'name': 'Images/Dog 2.jpg', 'path': 'Images/Dog 2.jpg'},
    {'name': 'Images/Goat 1.jpg', 'path': 'Images/Goat 1.jpg'},
    {'name': 'Images/Yarn 1.jpg', 'path': 'Images/Yarn 1.jpg'},
    {'name': 'Images/Beach 2.jpg', 'path': 'Images/Beach 2.jpg'},
    {'name': 'Images/Lake 12.jpg', 'path': 'Images/Lake 12.jpg'},
    {'name': 'Images/Massage 2.jpg', 'path': 'Images/Massage 2.jpg'},
    {'name': 'ImageTests1.xlsx', 'path': 'ImageTests1.xlsx'},
    {'name': 'Images/Explosion 4.jpg', 'path': 'Images/Explosion 4.jpg'},
    {'name': 'Images/Gun 5.jpg', 'path': 'Images/Gun 5.jpg'},
    {'name': 'Images/Money 1.jpg', 'path': 'Images/Money 1.jpg'},
    {'name': 'Images/Fireworks 2.jpg', 'path': 'Images/Fireworks 2.jpg'},
    {'name': 'Images/Garbage dump 3.jpg', 'path': 'Images/Garbage dump 3.jpg'},
    {'name': 'Images/Destruction 10.jpg', 'path': 'Images/Destruction 10.jpg'},
    {'name': 'Images/Storage 3.jpg', 'path': 'Images/Storage 3.jpg'},
    {'name': 'Images/Frustrated pose 5.jpg', 'path': 'Images/Frustrated pose 5.jpg'},
    {'name': 'Images/Flowers 6.jpg', 'path': 'Images/Flowers 6.jpg'},
    {'name': 'Images/Snake 4.jpg', 'path': 'Images/Snake 4.jpg'},
    {'name': 'ImagePractices2_inherently_reversed.xlsx', 'path': 'ImagePractices2_inherently_reversed.xlsx'},
    {'name': 'Images/Galaxy 4.jpg', 'path': 'Images/Galaxy 4.jpg'},
    {'name': 'Images/Gun 6.jpg', 'path': 'Images/Gun 6.jpg'},
    {'name': 'Images/Tornado 4.jpg', 'path': 'Images/Tornado 4.jpg'},
    {'name': 'Images/Gun 4.jpg', 'path': 'Images/Gun 4.jpg'},
    {'name': 'Images/Picnic 1.jpg', 'path': 'Images/Picnic 1.jpg'},
    {'name': 'Images/Cold 8.jpg', 'path': 'Images/Cold 8.jpg'},
    {'name': 'Images/Elephant 1.jpg', 'path': 'Images/Elephant 1.jpg'},
    {'name': 'ImagePractices1.xlsx', 'path': 'ImagePractices1.xlsx'},
    {'name': 'Images/Fireworks 3.jpg', 'path': 'Images/Fireworks 3.jpg'},
    {'name': 'Images/Destruction 5.jpg', 'path': 'Images/Destruction 5.jpg'},
    {'name': 'ImageTests4_Reversed.xlsx', 'path': 'ImageTests4_Reversed.xlsx'},
    {'name': 'Images/Dog 18.jpg', 'path': 'Images/Dog 18.jpg'},
    {'name': 'Images/Bird 3.jpg', 'path': 'Images/Bird 3.jpg'},
    {'name': 'Images/Soldiers 7.jpg', 'path': 'Images/Soldiers 7.jpg'},
    {'name': 'Images/Frustrated pose 2.jpg', 'path': 'Images/Frustrated pose 2.jpg'},
    {'name': 'Images/Fire 7.jpg', 'path': 'Images/Fire 7.jpg'},
    {'name': 'Images/Cat 4.jpg', 'path': 'Images/Cat 4.jpg'},
    {'name': 'Images/Happy face 2.jpg', 'path': 'Images/Happy face 2.jpg'},
    {'name': 'Images/Dead bodies 2.jpg', 'path': 'Images/Dead bodies 2.jpg'},
    {'name': 'Images/Miserable pose 5.jpg', 'path': 'Images/Miserable pose 5.jpg'},
    {'name': 'Images/Scared face 3.jpg', 'path': 'Images/Scared face 3.jpg'},
    {'name': 'Images/Pigeon 4.jpg', 'path': 'Images/Pigeon 4.jpg'},
    {'name': 'Images/Rocks 3.jpg', 'path': 'Images/Rocks 3.jpg'},
    {'name': 'Images/Sad pose 1.jpg', 'path': 'Images/Sad pose 1.jpg'},
    {'name': 'Images/Gun 10.jpg', 'path': 'Images/Gun 10.jpg'},
    {'name': 'Images/Frustrated pose 1.jpg', 'path': 'Images/Frustrated pose 1.jpg'},
    {'name': 'Images/Tornado 1.jpg', 'path': 'Images/Tornado 1.jpg'},
    {'name': 'ImageTests1_Reversed.xlsx', 'path': 'ImageTests1_Reversed.xlsx'},
    {'name': 'Images/Flowers 1.jpg', 'path': 'Images/Flowers 1.jpg'},
    {'name': 'Images/Flowers 9.jpg', 'path': 'Images/Flowers 9.jpg'},
    {'name': 'Images/Sleepy pose 1.jpg', 'path': 'Images/Sleepy pose 1.jpg'},
    {'name': 'Images/Rainbow 1.jpg', 'path': 'Images/Rainbow 1.jpg'},
    {'name': 'Images/Lake 10.jpg', 'path': 'Images/Lake 10.jpg'},
    {'name': 'Images/Sad pose 4.jpg', 'path': 'Images/Sad pose 4.jpg'},
    {'name': 'Images/Toilet 4.jpg', 'path': 'Images/Toilet 4.jpg'},
    {'name': 'Images/Injury 4.jpg', 'path': 'Images/Injury 4.jpg'},
    {'name': 'Images/Intensity 1.jpg', 'path': 'Images/Intensity 1.jpg'},
    {'name': 'Images/Bridge 1.jpg', 'path': 'Images/Bridge 1.jpg'},
    {'name': 'ImageTests3_Reversed.xlsx', 'path': 'ImageTests3_Reversed.xlsx'},
    {'name': 'Images/Dog 12.jpg', 'path': 'Images/Dog 12.jpg'},
    {'name': 'Images/Wedding 2.jpg', 'path': 'Images/Wedding 2.jpg'},
    {'name': 'Images/Wedding 7.jpg', 'path': 'Images/Wedding 7.jpg'},
    {'name': 'Images/Bird 1.jpg', 'path': 'Images/Bird 1.jpg'},
    {'name': 'Images/Jail 2.jpg', 'path': 'Images/Jail 2.jpg'},
    {'name': 'Images/Car Accident 3.jpg', 'path': 'Images/Car Accident 3.jpg'},
    {'name': 'Images/Neonazi 1.jpg', 'path': 'Images/Neonazi 1.jpg'},
    {'name': 'Images/Cat 5.jpg', 'path': 'Images/Cat 5.jpg'},
    {'name': 'Images/Explosion 1.jpg', 'path': 'Images/Explosion 1.jpg'},
    {'name': 'Images/Tiger 2.jpg', 'path': 'Images/Tiger 2.jpg'},
    {'name': 'Images/Hangover 1.jpg', 'path': 'Images/Hangover 1.jpg'},
    {'name': 'ImageTests2_Reversed.xlsx', 'path': 'ImageTests2_Reversed.xlsx'},
    {'name': 'Images/Dog 19.jpg', 'path': 'Images/Dog 19.jpg'},
    {'name': 'Images/Miserable pose 4.jpg', 'path': 'Images/Miserable pose 4.jpg'},
    {'name': 'Images/Yarn 4.jpg', 'path': 'Images/Yarn 4.jpg'},
    {'name': 'Images/Sidewalk 6.jpg', 'path': 'Images/Sidewalk 6.jpg'},
    {'name': 'Images/Mother 5.jpg', 'path': 'Images/Mother 5.jpg'},
    {'name': 'Images/Sidewalk 3.jpg', 'path': 'Images/Sidewalk 3.jpg'},
    {'name': 'Images/Surprise 2.jpg', 'path': 'Images/Surprise 2.jpg'},
    {'name': 'Images/Wedding 4.jpg', 'path': 'Images/Wedding 4.jpg'},
    {'name': 'Images/Baby 5.jpg', 'path': 'Images/Baby 5.jpg'},
    {'name': 'Images/Office supplies 4.jpg', 'path': 'Images/Office supplies 4.jpg'},
    {'name': 'ImageTests4.xlsx', 'path': 'ImageTests4.xlsx'},
    {'name': 'Images/Lake 3.jpg', 'path': 'Images/Lake 3.jpg'},
    {'name': 'Images/Bloody knife 1.jpg', 'path': 'Images/Bloody knife 1.jpg'},
    {'name': 'Images/Lake 2.jpg', 'path': 'Images/Lake 2.jpg'},
    {'name': 'ImageTests2.xlsx', 'path': 'ImageTests2.xlsx'},
    {'name': 'Images/Storage 1.jpg', 'path': 'Images/Storage 1.jpg'},
    {'name': 'Images/Angry face 3.jpg', 'path': 'Images/Angry face 3.jpg'},
    {'name': 'Images/Sad face 1.jpg', 'path': 'Images/Sad face 1.jpg'},
    {'name': 'Images/Dirt 1.jpg', 'path': 'Images/Dirt 1.jpg'},
    {'name': 'Images/Nature 1.jpg', 'path': 'Images/Nature 1.jpg'},
    {'name': 'Images/Baby 6.jpg', 'path': 'Images/Baby 6.jpg'},
    {'name': 'ImageTests3.xlsx', 'path': 'ImageTests3.xlsx'},
    {'name': 'Images/Socks 1.jpg', 'path': 'Images/Socks 1.jpg'},
    {'name': 'Images/Monkey 1.jpg', 'path': 'Images/Monkey 1.jpg'},
    {'name': 'Images/Wedding 6.jpg', 'path': 'Images/Wedding 6.jpg'},
    {'name': 'Images/Birthday 3.jpg', 'path': 'Images/Birthday 3.jpg'},
    {'name': 'Images/Weapon 1.jpg', 'path': 'Images/Weapon 1.jpg'},
    {'name': 'Images/Jail 5.jpg', 'path': 'Images/Jail 5.jpg'},
    {'name': 'Images/Mother 1.jpg', 'path': 'Images/Mother 1.jpg'},
    {'name': 'Images/Shark 7.jpg', 'path': 'Images/Shark 7.jpg'},
    {'name': 'Images/Excited face 2.jpg', 'path': 'Images/Excited face 2.jpg'},
    {'name': 'Images/Injury 1.jpg', 'path': 'Images/Injury 1.jpg'},
    {'name': 'Images/Miserable pose 1.jpg', 'path': 'Images/Miserable pose 1.jpg'},
    {'name': 'Images/Couple 8.jpg', 'path': 'Images/Couple 8.jpg'},
    {'name': 'Images/Horse 1.jpg', 'path': 'Images/Horse 1.jpg'},
    {'name': 'Images/Police 5.jpg', 'path': 'Images/Police 5.jpg'},
    {'name': 'Images/Flowers 7.jpg', 'path': 'Images/Flowers 7.jpg'},
    {'name': 'Images/Galaxy 2.jpg', 'path': 'Images/Galaxy 2.jpg'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var WelcomeClock;
var key_resp;
var WelcomeText;
var Blank500Clock;
var text_2;
var ConsentClock;
var key_resp_2;
var ConsentText;
var GeneralInstructionsClock;
var key_resp_3;
var InstructionText;
var GeneralInstructions2Clock;
var key_resp_8;
var text_7;
var PracticeInstructions1Clock;
var text_4;
var key_resp_4;
var ImageStudyTrialClock;
var image;
var key_resp_7;
var TestInstructions1Clock;
var text_6;
var key_resp_6;
var ImageTests1Clock;
var image_2;
var key_resp_9;
var RestClock;
var text_5;
var key_resp_5;
var ImageTest2Clock;
var key_resp_10;
var image_3;
var ImageTest3Clock;
var key_resp_11;
var image_4;
var ImageTest4Clock;
var key_resp_12;
var image_5;
var PracticeInstructions2Clock;
var text_8;
var key_resp_13;
var StudyTrial2Clock;
var key_resp_14;
var image_7;
var TestInstructions2Clock;
var text_9;
var key_resp_15;
var ImageTest5Clock;
var key_resp_16;
var image_6;
var ImageTest6Clock;
var key_resp_17;
var image_8;
var ImageTest7Clock;
var key_resp_18;
var image_9;
var ImageTest8Clock;
var key_resp_19;
var image_10;
var End_ExperimentClock;
var key_resp_20;
var text_3;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Welcome"
  WelcomeClock = new util.Clock();
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  WelcomeText = new visual.TextStim({
    win: psychoJS.window,
    name: 'WelcomeText',
    text: 'This particular experiment aims to measure each participant’s level of prosociality. It is part of a broader experiment designed to increase levels of prosociality through mindfulness meditation interventions.\n\nPress space bar to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Blank500"
  Blank500Clock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Consent"
  ConsentClock = new util.Clock();
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  ConsentText = new visual.TextStim({
    win: psychoJS.window,
    name: 'ConsentText',
    text: 'Your participation in this study is completely voluntary. Your responses will be kept anonymous and confidential. Additionally, any personal information you submit will be kept private as well. In this particular experiment, you will be asked to determine whether a presented image represents an animate or inanimate entity. This research involves no more risk than encountered in everyday life. There is also no direct benefit for you to participate in this study, beyond the compensation agreed upon with the lab. Please note whether you consent to participate in this survey down below.\n\nPress space bar to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "GeneralInstructions"
  GeneralInstructionsClock = new util.Clock();
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  InstructionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'InstructionText',
    text: 'This experiment involves the use of image stimuli and a joystick. You will be presented with an image that will be either animate or inanimate, but not both. Please use your best judgment if this distinction seems unclear for any of the images. You will need to either push or pull the joystick, depending on whether the image is animate or inanimate. \n\nPress space bar to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "GeneralInstructions2"
  GeneralInstructions2Clock = new util.Clock();
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: 'You will be instructed whether to push for animate or pull for animate (along with the instructions for inanimate images, which will be opposite that for animate images) before each phase of the experiment. There will be two phases of the experiment, with each phase containing a total of 90 images–10 of which will be practice images presented before the data collection begins. Please push or pull as quickly as possible, as your reaction time will be measured.\n\nPress space bar to continue. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "PracticeInstructions1"
  PracticeInstructions1Clock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Please push the joystick if you believe the image to be animate, or pull the joystick if you believe the image to be inanimate. Next, you will begin the practice trial for this phase.\n\nPress space bar to continue. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ImageStudyTrial"
  ImageStudyTrialClock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TestInstructions1"
  TestInstructions1Clock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'You will now be presented with the official images that will be used for data collection in this phase. Please inform the researcher if you have any questions thus far, and note that there will be a slight break after every 20 images.\n\nPress space bar to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ImageTests1"
  ImageTests1Clock = new util.Clock();
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Rest"
  RestClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'Rest period. \n\nPress space bar to continue. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ImageTest2"
  ImageTest2Clock = new util.Clock();
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "ImageTest3"
  ImageTest3Clock = new util.Clock();
  key_resp_11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "ImageTest4"
  ImageTest4Clock = new util.Clock();
  key_resp_12 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_5', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "PracticeInstructions2"
  PracticeInstructions2Clock = new util.Clock();
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: 'Next, you will begin the practice trial for this phase. Please push the joystick if you believe the image to be inanimate, or pull the joystick if you believe the image to be animate. \n\nPress space bar to continue. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_13 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "StudyTrial2"
  StudyTrial2Clock = new util.Clock();
  key_resp_14 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_7', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "TestInstructions2"
  TestInstructions2Clock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'You will now be presented with the official images that will be used for data collection in this phase. Please inform the researcher if you have any questions thus far, and note that there will be a slight break after every 20 images.\n\nPress space bar to continue. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_15 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ImageTest5"
  ImageTest5Clock = new util.Clock();
  key_resp_16 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_6', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "ImageTest6"
  ImageTest6Clock = new util.Clock();
  key_resp_17 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_8', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "ImageTest7"
  ImageTest7Clock = new util.Clock();
  key_resp_18 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_9', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "ImageTest8"
  ImageTest8Clock = new util.Clock();
  key_resp_19 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_10 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_10', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "End_Experiment"
  End_ExperimentClock = new util.Clock();
  key_resp_20 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'The experiment has now ended. \n\t\n\tAs noted earlier, this particular experiment aims to measure each participant’s level of prosociality. That was done by measuring the reaction time difference between how long it takes for each participant to push for certain images and to pull for certain other images, as organized by animate/inanimate status and valence. It is part of a broader experiment designed to increase levels of prosociality through mindfulness meditation interventions.\n\nThank you for being part of the experiment, and please feel free to contact the researcher if you have any further questions.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_allKeys;
var WelcomeComponents;
function WelcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Welcome'-------
    t = 0;
    WelcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    WelcomeComponents = [];
    WelcomeComponents.push(key_resp);
    WelcomeComponents.push(WelcomeText);
    
    for (const thisComponent of WelcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function WelcomeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Welcome'-------
    // get current time
    t = WelcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *WelcomeText* updates
    if (t >= 0.0 && WelcomeText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      WelcomeText.tStart = t;  // (not accounting for frame time here)
      WelcomeText.frameNStart = frameN;  // exact frame index
      
      WelcomeText.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of WelcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WelcomeRoutineEnd() {
  return async function () {
    //------Ending Routine 'Welcome'-------
    for (const thisComponent of WelcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "Welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Blank500Components;
function Blank500RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Blank500'-------
    t = 0;
    Blank500Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    Blank500Components = [];
    Blank500Components.push(text_2);
    
    for (const thisComponent of Blank500Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function Blank500RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Blank500'-------
    // get current time
    t = Blank500Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Blank500Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Blank500RoutineEnd() {
  return async function () {
    //------Ending Routine 'Blank500'-------
    for (const thisComponent of Blank500Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var ConsentComponents;
function ConsentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Consent'-------
    t = 0;
    ConsentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    ConsentComponents = [];
    ConsentComponents.push(key_resp_2);
    ConsentComponents.push(ConsentText);
    
    for (const thisComponent of ConsentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ConsentRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Consent'-------
    // get current time
    t = ConsentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *ConsentText* updates
    if (t >= 0.0 && ConsentText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ConsentText.tStart = t;  // (not accounting for frame time here)
      ConsentText.frameNStart = frameN;  // exact frame index
      
      ConsentText.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ConsentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ConsentRoutineEnd() {
  return async function () {
    //------Ending Routine 'Consent'-------
    for (const thisComponent of ConsentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "Consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var GeneralInstructionsComponents;
function GeneralInstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'GeneralInstructions'-------
    t = 0;
    GeneralInstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    GeneralInstructionsComponents = [];
    GeneralInstructionsComponents.push(key_resp_3);
    GeneralInstructionsComponents.push(InstructionText);
    
    for (const thisComponent of GeneralInstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function GeneralInstructionsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'GeneralInstructions'-------
    // get current time
    t = GeneralInstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *InstructionText* updates
    if (t >= 0.0 && InstructionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InstructionText.tStart = t;  // (not accounting for frame time here)
      InstructionText.frameNStart = frameN;  // exact frame index
      
      InstructionText.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of GeneralInstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GeneralInstructionsRoutineEnd() {
  return async function () {
    //------Ending Routine 'GeneralInstructions'-------
    for (const thisComponent of GeneralInstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "GeneralInstructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_8_allKeys;
var GeneralInstructions2Components;
function GeneralInstructions2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'GeneralInstructions2'-------
    t = 0;
    GeneralInstructions2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    // keep track of which components have finished
    GeneralInstructions2Components = [];
    GeneralInstructions2Components.push(key_resp_8);
    GeneralInstructions2Components.push(text_7);
    
    for (const thisComponent of GeneralInstructions2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function GeneralInstructions2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'GeneralInstructions2'-------
    // get current time
    t = GeneralInstructions2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_8* updates
    if (t >= 0.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }

    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of GeneralInstructions2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GeneralInstructions2RoutineEnd() {
  return async function () {
    //------Ending Routine 'GeneralInstructions2'-------
    for (const thisComponent of GeneralInstructions2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
    if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
        routineTimer.reset();
        }
    
    key_resp_8.stop();
    // the Routine "GeneralInstructions2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var controlTaskOrder;
var currentLoop;
function controlTaskOrderLoopBegin(controlTaskOrderLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    controlTaskOrder = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 'conditions'+expInfo['group']+'.xlxs', method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'controlTaskOrder'
    });
    psychoJS.experiment.addLoop(controlTaskOrder); // add the loop to the experiment
    currentLoop = controlTaskOrder;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisControlTaskOrder of controlTaskOrder) {
      const snapshot = controlTaskOrder.getSnapshot();
      controlTaskOrderLoopScheduler.add(importConditions(snapshot));
      const part1LoopScheduler = new Scheduler(psychoJS);
      controlTaskOrderLoopScheduler.add(part1LoopBegin(part1LoopScheduler, snapshot));
      controlTaskOrderLoopScheduler.add(part1LoopScheduler);
      controlTaskOrderLoopScheduler.add(part1LoopEnd);
      const part2LoopScheduler = new Scheduler(psychoJS);
      controlTaskOrderLoopScheduler.add(part2LoopBegin(part2LoopScheduler, snapshot));
      controlTaskOrderLoopScheduler.add(part2LoopScheduler);
      controlTaskOrderLoopScheduler.add(part2LoopEnd);
      controlTaskOrderLoopScheduler.add(endLoopIteration(controlTaskOrderLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var part1;
function part1LoopBegin(part1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    part1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nRepsTask1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'part1'
    });
    psychoJS.experiment.addLoop(part1); // add the loop to the experiment
    currentLoop = part1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPart1 of part1) {
      const snapshot = part1.getSnapshot();
      part1LoopScheduler.add(importConditions(snapshot));
      part1LoopScheduler.add(PracticeInstructions1RoutineBegin(snapshot));
      part1LoopScheduler.add(PracticeInstructions1RoutineEachFrame());
      part1LoopScheduler.add(PracticeInstructions1RoutineEnd());
      const trialsStudyImagesLoopScheduler = new Scheduler(psychoJS);
      part1LoopScheduler.add(trialsStudyImagesLoopBegin(trialsStudyImagesLoopScheduler, snapshot));
      part1LoopScheduler.add(trialsStudyImagesLoopScheduler);
      part1LoopScheduler.add(trialsStudyImagesLoopEnd);
      part1LoopScheduler.add(TestInstructions1RoutineBegin(snapshot));
      part1LoopScheduler.add(TestInstructions1RoutineEachFrame());
      part1LoopScheduler.add(TestInstructions1RoutineEnd());
      const trialsTest1_1LoopScheduler = new Scheduler(psychoJS);
      part1LoopScheduler.add(trialsTest1_1LoopBegin(trialsTest1_1LoopScheduler, snapshot));
      part1LoopScheduler.add(trialsTest1_1LoopScheduler);
      part1LoopScheduler.add(trialsTest1_1LoopEnd);
      part1LoopScheduler.add(RestRoutineBegin(snapshot));
      part1LoopScheduler.add(RestRoutineEachFrame());
      part1LoopScheduler.add(RestRoutineEnd());
      const trialsTest1_2LoopScheduler = new Scheduler(psychoJS);
      part1LoopScheduler.add(trialsTest1_2LoopBegin(trialsTest1_2LoopScheduler, snapshot));
      part1LoopScheduler.add(trialsTest1_2LoopScheduler);
      part1LoopScheduler.add(trialsTest1_2LoopEnd);
      part1LoopScheduler.add(RestRoutineBegin(snapshot));
      part1LoopScheduler.add(RestRoutineEachFrame());
      part1LoopScheduler.add(RestRoutineEnd());
      const trialsTest1_3LoopScheduler = new Scheduler(psychoJS);
      part1LoopScheduler.add(trialsTest1_3LoopBegin(trialsTest1_3LoopScheduler, snapshot));
      part1LoopScheduler.add(trialsTest1_3LoopScheduler);
      part1LoopScheduler.add(trialsTest1_3LoopEnd);
      part1LoopScheduler.add(RestRoutineBegin(snapshot));
      part1LoopScheduler.add(RestRoutineEachFrame());
      part1LoopScheduler.add(RestRoutineEnd());
      const trialsTest1_4LoopScheduler = new Scheduler(psychoJS);
      part1LoopScheduler.add(trialsTest1_4LoopBegin(trialsTest1_4LoopScheduler, snapshot));
      part1LoopScheduler.add(trialsTest1_4LoopScheduler);
      part1LoopScheduler.add(trialsTest1_4LoopEnd);
      part1LoopScheduler.add(endLoopIteration(part1LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trialsStudyImages;
function trialsStudyImagesLoopBegin(trialsStudyImagesLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialsStudyImages = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'ImagePractices1.xlsx', '0:1'),
      seed: undefined, name: 'trialsStudyImages'
    });
    psychoJS.experiment.addLoop(trialsStudyImages); // add the loop to the experiment
    currentLoop = trialsStudyImages;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrialsStudyImage of trialsStudyImages) {
      const snapshot = trialsStudyImages.getSnapshot();
      trialsStudyImagesLoopScheduler.add(importConditions(snapshot));
      trialsStudyImagesLoopScheduler.add(ImageStudyTrialRoutineBegin(snapshot));
      trialsStudyImagesLoopScheduler.add(ImageStudyTrialRoutineEachFrame());
      trialsStudyImagesLoopScheduler.add(ImageStudyTrialRoutineEnd());
      trialsStudyImagesLoopScheduler.add(Blank500RoutineBegin(snapshot));
      trialsStudyImagesLoopScheduler.add(Blank500RoutineEachFrame());
      trialsStudyImagesLoopScheduler.add(Blank500RoutineEnd());
      trialsStudyImagesLoopScheduler.add(endLoopIteration(trialsStudyImagesLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsStudyImagesLoopEnd() {
  psychoJS.experiment.removeLoop(trialsStudyImages);

  return Scheduler.Event.NEXT;
}


var trialsTest1_1;
function trialsTest1_1LoopBegin(trialsTest1_1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialsTest1_1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'ImageTests1.xlsx', '0:1'),
      seed: undefined, name: 'trialsTest1_1'
    });
    psychoJS.experiment.addLoop(trialsTest1_1); // add the loop to the experiment
    currentLoop = trialsTest1_1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrialsTest1_1 of trialsTest1_1) {
      const snapshot = trialsTest1_1.getSnapshot();
      trialsTest1_1LoopScheduler.add(importConditions(snapshot));
      trialsTest1_1LoopScheduler.add(ImageTests1RoutineBegin(snapshot));
      trialsTest1_1LoopScheduler.add(ImageTests1RoutineEachFrame());
      trialsTest1_1LoopScheduler.add(ImageTests1RoutineEnd());
      trialsTest1_1LoopScheduler.add(Blank500RoutineBegin(snapshot));
      trialsTest1_1LoopScheduler.add(Blank500RoutineEachFrame());
      trialsTest1_1LoopScheduler.add(Blank500RoutineEnd());
      trialsTest1_1LoopScheduler.add(endLoopIteration(trialsTest1_1LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsTest1_1LoopEnd() {
  psychoJS.experiment.removeLoop(trialsTest1_1);

  return Scheduler.Event.NEXT;
}


var trialsTest1_2;
function trialsTest1_2LoopBegin(trialsTest1_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialsTest1_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'ImageTests2.xlsx', '0:1'),
      seed: undefined, name: 'trialsTest1_2'
    });
    psychoJS.experiment.addLoop(trialsTest1_2); // add the loop to the experiment
    currentLoop = trialsTest1_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrialsTest1_2 of trialsTest1_2) {
      const snapshot = trialsTest1_2.getSnapshot();
      trialsTest1_2LoopScheduler.add(importConditions(snapshot));
      trialsTest1_2LoopScheduler.add(ImageTest2RoutineBegin(snapshot));
      trialsTest1_2LoopScheduler.add(ImageTest2RoutineEachFrame());
      trialsTest1_2LoopScheduler.add(ImageTest2RoutineEnd());
      trialsTest1_2LoopScheduler.add(Blank500RoutineBegin(snapshot));
      trialsTest1_2LoopScheduler.add(Blank500RoutineEachFrame());
      trialsTest1_2LoopScheduler.add(Blank500RoutineEnd());
      trialsTest1_2LoopScheduler.add(endLoopIteration(trialsTest1_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsTest1_2LoopEnd() {
  psychoJS.experiment.removeLoop(trialsTest1_2);

  return Scheduler.Event.NEXT;
}


var trialsTest1_3;
function trialsTest1_3LoopBegin(trialsTest1_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialsTest1_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'ImageTests3.xlsx', '0:1'),
      seed: undefined, name: 'trialsTest1_3'
    });
    psychoJS.experiment.addLoop(trialsTest1_3); // add the loop to the experiment
    currentLoop = trialsTest1_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrialsTest1_3 of trialsTest1_3) {
      const snapshot = trialsTest1_3.getSnapshot();
      trialsTest1_3LoopScheduler.add(importConditions(snapshot));
      trialsTest1_3LoopScheduler.add(ImageTest3RoutineBegin(snapshot));
      trialsTest1_3LoopScheduler.add(ImageTest3RoutineEachFrame());
      trialsTest1_3LoopScheduler.add(ImageTest3RoutineEnd());
      trialsTest1_3LoopScheduler.add(Blank500RoutineBegin(snapshot));
      trialsTest1_3LoopScheduler.add(Blank500RoutineEachFrame());
      trialsTest1_3LoopScheduler.add(Blank500RoutineEnd());
      trialsTest1_3LoopScheduler.add(endLoopIteration(trialsTest1_3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsTest1_3LoopEnd() {
  psychoJS.experiment.removeLoop(trialsTest1_3);

  return Scheduler.Event.NEXT;
}


var trialsTest1_4;
function trialsTest1_4LoopBegin(trialsTest1_4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialsTest1_4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'ImageTests4.xlsx', '0:1'),
      seed: undefined, name: 'trialsTest1_4'
    });
    psychoJS.experiment.addLoop(trialsTest1_4); // add the loop to the experiment
    currentLoop = trialsTest1_4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrialsTest1_4 of trialsTest1_4) {
      const snapshot = trialsTest1_4.getSnapshot();
      trialsTest1_4LoopScheduler.add(importConditions(snapshot));
      trialsTest1_4LoopScheduler.add(ImageTest4RoutineBegin(snapshot));
      trialsTest1_4LoopScheduler.add(ImageTest4RoutineEachFrame());
      trialsTest1_4LoopScheduler.add(ImageTest4RoutineEnd());
      trialsTest1_4LoopScheduler.add(Blank500RoutineBegin(snapshot));
      trialsTest1_4LoopScheduler.add(Blank500RoutineEachFrame());
      trialsTest1_4LoopScheduler.add(Blank500RoutineEnd());
      trialsTest1_4LoopScheduler.add(endLoopIteration(trialsTest1_4LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsTest1_4LoopEnd() {
  psychoJS.experiment.removeLoop(trialsTest1_4);

  return Scheduler.Event.NEXT;
}


async function part1LoopEnd() {
  psychoJS.experiment.removeLoop(part1);

  return Scheduler.Event.NEXT;
}


var part2;
function part2LoopBegin(part2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    part2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nRepsTask2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'part2'
    });
    psychoJS.experiment.addLoop(part2); // add the loop to the experiment
    currentLoop = part2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPart2 of part2) {
      const snapshot = part2.getSnapshot();
      part2LoopScheduler.add(importConditions(snapshot));
      part2LoopScheduler.add(PracticeInstructions2RoutineBegin(snapshot));
      part2LoopScheduler.add(PracticeInstructions2RoutineEachFrame());
      part2LoopScheduler.add(PracticeInstructions2RoutineEnd());
      const trialsStudyImages2LoopScheduler = new Scheduler(psychoJS);
      part2LoopScheduler.add(trialsStudyImages2LoopBegin(trialsStudyImages2LoopScheduler, snapshot));
      part2LoopScheduler.add(trialsStudyImages2LoopScheduler);
      part2LoopScheduler.add(trialsStudyImages2LoopEnd);
      part2LoopScheduler.add(TestInstructions2RoutineBegin(snapshot));
      part2LoopScheduler.add(TestInstructions2RoutineEachFrame());
      part2LoopScheduler.add(TestInstructions2RoutineEnd());
      const trialsTestImages2_1LoopScheduler = new Scheduler(psychoJS);
      part2LoopScheduler.add(trialsTestImages2_1LoopBegin(trialsTestImages2_1LoopScheduler, snapshot));
      part2LoopScheduler.add(trialsTestImages2_1LoopScheduler);
      part2LoopScheduler.add(trialsTestImages2_1LoopEnd);
      part2LoopScheduler.add(RestRoutineBegin(snapshot));
      part2LoopScheduler.add(RestRoutineEachFrame());
      part2LoopScheduler.add(RestRoutineEnd());
      const trialsTestImages2_2LoopScheduler = new Scheduler(psychoJS);
      part2LoopScheduler.add(trialsTestImages2_2LoopBegin(trialsTestImages2_2LoopScheduler, snapshot));
      part2LoopScheduler.add(trialsTestImages2_2LoopScheduler);
      part2LoopScheduler.add(trialsTestImages2_2LoopEnd);
      part2LoopScheduler.add(RestRoutineBegin(snapshot));
      part2LoopScheduler.add(RestRoutineEachFrame());
      part2LoopScheduler.add(RestRoutineEnd());
      const trialsTestImages2_3LoopScheduler = new Scheduler(psychoJS);
      part2LoopScheduler.add(trialsTestImages2_3LoopBegin(trialsTestImages2_3LoopScheduler, snapshot));
      part2LoopScheduler.add(trialsTestImages2_3LoopScheduler);
      part2LoopScheduler.add(trialsTestImages2_3LoopEnd);
      part2LoopScheduler.add(RestRoutineBegin(snapshot));
      part2LoopScheduler.add(RestRoutineEachFrame());
      part2LoopScheduler.add(RestRoutineEnd());
      const trialsTestImages2_4LoopScheduler = new Scheduler(psychoJS);
      part2LoopScheduler.add(trialsTestImages2_4LoopBegin(trialsTestImages2_4LoopScheduler, snapshot));
      part2LoopScheduler.add(trialsTestImages2_4LoopScheduler);
      part2LoopScheduler.add(trialsTestImages2_4LoopEnd);
      part2LoopScheduler.add(endLoopIteration(part2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trialsStudyImages2;
function trialsStudyImages2LoopBegin(trialsStudyImages2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialsStudyImages2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'ImagePractices2_inherently_reversed.xlsx',
      seed: undefined, name: 'trialsStudyImages2'
    });
    psychoJS.experiment.addLoop(trialsStudyImages2); // add the loop to the experiment
    currentLoop = trialsStudyImages2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrialsStudyImages2 of trialsStudyImages2) {
      const snapshot = trialsStudyImages2.getSnapshot();
      trialsStudyImages2LoopScheduler.add(importConditions(snapshot));
      trialsStudyImages2LoopScheduler.add(StudyTrial2RoutineBegin(snapshot));
      trialsStudyImages2LoopScheduler.add(StudyTrial2RoutineEachFrame());
      trialsStudyImages2LoopScheduler.add(StudyTrial2RoutineEnd());
      trialsStudyImages2LoopScheduler.add(Blank500RoutineBegin(snapshot));
      trialsStudyImages2LoopScheduler.add(Blank500RoutineEachFrame());
      trialsStudyImages2LoopScheduler.add(Blank500RoutineEnd());
      trialsStudyImages2LoopScheduler.add(endLoopIteration(trialsStudyImages2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsStudyImages2LoopEnd() {
  psychoJS.experiment.removeLoop(trialsStudyImages2);

  return Scheduler.Event.NEXT;
}


var trialsTestImages2_1;
function trialsTestImages2_1LoopBegin(trialsTestImages2_1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialsTestImages2_1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'ImageTests1_Reversed.xlsx', '0:1'),
      seed: undefined, name: 'trialsTestImages2_1'
    });
    psychoJS.experiment.addLoop(trialsTestImages2_1); // add the loop to the experiment
    currentLoop = trialsTestImages2_1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrialsTestImages2_1 of trialsTestImages2_1) {
      const snapshot = trialsTestImages2_1.getSnapshot();
      trialsTestImages2_1LoopScheduler.add(importConditions(snapshot));
      trialsTestImages2_1LoopScheduler.add(ImageTest5RoutineBegin(snapshot));
      trialsTestImages2_1LoopScheduler.add(ImageTest5RoutineEachFrame());
      trialsTestImages2_1LoopScheduler.add(ImageTest5RoutineEnd());
      trialsTestImages2_1LoopScheduler.add(Blank500RoutineBegin(snapshot));
      trialsTestImages2_1LoopScheduler.add(Blank500RoutineEachFrame());
      trialsTestImages2_1LoopScheduler.add(Blank500RoutineEnd());
      trialsTestImages2_1LoopScheduler.add(endLoopIteration(trialsTestImages2_1LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsTestImages2_1LoopEnd() {
  psychoJS.experiment.removeLoop(trialsTestImages2_1);

  return Scheduler.Event.NEXT;
}


var trialsTestImages2_2;
function trialsTestImages2_2LoopBegin(trialsTestImages2_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialsTestImages2_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'ImageTests2_Reversed.xlsx', '0:20'),
      seed: undefined, name: 'trialsTestImages2_2'
    });
    psychoJS.experiment.addLoop(trialsTestImages2_2); // add the loop to the experiment
    currentLoop = trialsTestImages2_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrialsTestImages2_2 of trialsTestImages2_2) {
      const snapshot = trialsTestImages2_2.getSnapshot();
      trialsTestImages2_2LoopScheduler.add(importConditions(snapshot));
      trialsTestImages2_2LoopScheduler.add(ImageTest6RoutineBegin(snapshot));
      trialsTestImages2_2LoopScheduler.add(ImageTest6RoutineEachFrame());
      trialsTestImages2_2LoopScheduler.add(ImageTest6RoutineEnd());
      trialsTestImages2_2LoopScheduler.add(Blank500RoutineBegin(snapshot));
      trialsTestImages2_2LoopScheduler.add(Blank500RoutineEachFrame());
      trialsTestImages2_2LoopScheduler.add(Blank500RoutineEnd());
      trialsTestImages2_2LoopScheduler.add(endLoopIteration(trialsTestImages2_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsTestImages2_2LoopEnd() {
  psychoJS.experiment.removeLoop(trialsTestImages2_2);

  return Scheduler.Event.NEXT;
}


var trialsTestImages2_3;
function trialsTestImages2_3LoopBegin(trialsTestImages2_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialsTestImages2_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'ImageTests3_Reversed.xlsx', '0:20'),
      seed: undefined, name: 'trialsTestImages2_3'
    });
    psychoJS.experiment.addLoop(trialsTestImages2_3); // add the loop to the experiment
    currentLoop = trialsTestImages2_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrialsTestImages2_3 of trialsTestImages2_3) {
      const snapshot = trialsTestImages2_3.getSnapshot();
      trialsTestImages2_3LoopScheduler.add(importConditions(snapshot));
      trialsTestImages2_3LoopScheduler.add(ImageTest7RoutineBegin(snapshot));
      trialsTestImages2_3LoopScheduler.add(ImageTest7RoutineEachFrame());
      trialsTestImages2_3LoopScheduler.add(ImageTest7RoutineEnd());
      trialsTestImages2_3LoopScheduler.add(Blank500RoutineBegin(snapshot));
      trialsTestImages2_3LoopScheduler.add(Blank500RoutineEachFrame());
      trialsTestImages2_3LoopScheduler.add(Blank500RoutineEnd());
      trialsTestImages2_3LoopScheduler.add(endLoopIteration(trialsTestImages2_3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsTestImages2_3LoopEnd() {
  psychoJS.experiment.removeLoop(trialsTestImages2_3);

  return Scheduler.Event.NEXT;
}


var trialsTestImages2_4;
function trialsTestImages2_4LoopBegin(trialsTestImages2_4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialsTestImages2_4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'ImageTests4_Reversed.xlsx', '0:20'),
      seed: undefined, name: 'trialsTestImages2_4'
    });
    psychoJS.experiment.addLoop(trialsTestImages2_4); // add the loop to the experiment
    currentLoop = trialsTestImages2_4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrialsTestImages2_4 of trialsTestImages2_4) {
      const snapshot = trialsTestImages2_4.getSnapshot();
      trialsTestImages2_4LoopScheduler.add(importConditions(snapshot));
      trialsTestImages2_4LoopScheduler.add(ImageTest8RoutineBegin(snapshot));
      trialsTestImages2_4LoopScheduler.add(ImageTest8RoutineEachFrame());
      trialsTestImages2_4LoopScheduler.add(ImageTest8RoutineEnd());
      trialsTestImages2_4LoopScheduler.add(Blank500RoutineBegin(snapshot));
      trialsTestImages2_4LoopScheduler.add(Blank500RoutineEachFrame());
      trialsTestImages2_4LoopScheduler.add(Blank500RoutineEnd());
      trialsTestImages2_4LoopScheduler.add(endLoopIteration(trialsTestImages2_4LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsTestImages2_4LoopEnd() {
  psychoJS.experiment.removeLoop(trialsTestImages2_4);

  return Scheduler.Event.NEXT;
}


async function part2LoopEnd() {
  psychoJS.experiment.removeLoop(part2);

  return Scheduler.Event.NEXT;
}


async function controlTaskOrderLoopEnd() {
  psychoJS.experiment.removeLoop(controlTaskOrder);

  return Scheduler.Event.NEXT;
}


var _key_resp_4_allKeys;
var PracticeInstructions1Components;
function PracticeInstructions1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'PracticeInstructions1'-------
    t = 0;
    PracticeInstructions1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    PracticeInstructions1Components = [];
    PracticeInstructions1Components.push(text_4);
    PracticeInstructions1Components.push(key_resp_4);
    
    for (const thisComponent of PracticeInstructions1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function PracticeInstructions1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'PracticeInstructions1'-------
    // get current time
    t = PracticeInstructions1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PracticeInstructions1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PracticeInstructions1RoutineEnd() {
  return async function () {
    //------Ending Routine 'PracticeInstructions1'-------
    for (const thisComponent of PracticeInstructions1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "PracticeInstructions1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_7_allKeys;
var ImageStudyTrialComponents;
function ImageStudyTrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'ImageStudyTrial'-------
    t = 0;
    ImageStudyTrialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    image.setImage(ImageFile);
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    // keep track of which components have finished
    ImageStudyTrialComponents = [];
    ImageStudyTrialComponents.push(image);
    ImageStudyTrialComponents.push(key_resp_7);
    
    for (const thisComponent of ImageStudyTrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ImageStudyTrialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'ImageStudyTrial'-------
    // get current time
    t = ImageStudyTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }

    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_7.keys == AnimateInanimate) {
            key_resp_7.corr = 1;
        } else {
            key_resp_7.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ImageStudyTrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ImageStudyTrialRoutineEnd() {
  return async function () {
    //------Ending Routine 'ImageStudyTrial'-------
    for (const thisComponent of ImageStudyTrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_7.keys === undefined) {
      if (['None','none',undefined].includes(AnimateInanimate)) {
         key_resp_7.corr = 1;  // correct non-response
      } else {
         key_resp_7.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
    psychoJS.experiment.addData('key_resp_7.corr', key_resp_7.corr);
    if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
        routineTimer.reset();
        }
    
    key_resp_7.stop();
    // the Routine "ImageStudyTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_6_allKeys;
var TestInstructions1Components;
function TestInstructions1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'TestInstructions1'-------
    t = 0;
    TestInstructions1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    // keep track of which components have finished
    TestInstructions1Components = [];
    TestInstructions1Components.push(text_6);
    TestInstructions1Components.push(key_resp_6);
    
    for (const thisComponent of TestInstructions1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TestInstructions1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'TestInstructions1'-------
    // get current time
    t = TestInstructions1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }

    
    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }

    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TestInstructions1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TestInstructions1RoutineEnd() {
  return async function () {
    //------Ending Routine 'TestInstructions1'-------
    for (const thisComponent of TestInstructions1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "TestInstructions1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_9_allKeys;
var ImageTests1Components;
function ImageTests1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'ImageTests1'-------
    t = 0;
    ImageTests1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    image_2.setImage(ImageFile);
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    // keep track of which components have finished
    ImageTests1Components = [];
    ImageTests1Components.push(image_2);
    ImageTests1Components.push(key_resp_9);
    
    for (const thisComponent of ImageTests1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ImageTests1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'ImageTests1'-------
    // get current time
    t = ImageTests1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }

    
    // *key_resp_9* updates
    if (t >= 0.0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
    }

    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
        key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_9.keys == AnimateInanimate) {
            key_resp_9.corr = 1;
        } else {
            key_resp_9.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ImageTests1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ImageTests1RoutineEnd() {
  return async function () {
    //------Ending Routine 'ImageTests1'-------
    for (const thisComponent of ImageTests1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_9.keys === undefined) {
      if (['None','none',undefined].includes(AnimateInanimate)) {
         key_resp_9.corr = 1;  // correct non-response
      } else {
         key_resp_9.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
    psychoJS.experiment.addData('key_resp_9.corr', key_resp_9.corr);
    if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
        routineTimer.reset();
        }
    
    key_resp_9.stop();
    // the Routine "ImageTests1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_5_allKeys;
var RestComponents;
function RestRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Rest'-------
    t = 0;
    RestClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    RestComponents = [];
    RestComponents.push(text_5);
    RestComponents.push(key_resp_5);
    
    for (const thisComponent of RestComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function RestRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Rest'-------
    // get current time
    t = RestClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RestComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function RestRoutineEnd() {
  return async function () {
    //------Ending Routine 'Rest'-------
    for (const thisComponent of RestComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "Rest" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_10_allKeys;
var ImageTest2Components;
function ImageTest2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'ImageTest2'-------
    t = 0;
    ImageTest2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    image_3.setImage(ImageFile);
    // keep track of which components have finished
    ImageTest2Components = [];
    ImageTest2Components.push(key_resp_10);
    ImageTest2Components.push(image_3);
    
    for (const thisComponent of ImageTest2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ImageTest2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'ImageTest2'-------
    // get current time
    t = ImageTest2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_10* updates
    if (t >= 0.0 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_10.tStart = t;  // (not accounting for frame time here)
      key_resp_10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
    }

    if (key_resp_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_10.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
      if (_key_resp_10_allKeys.length > 0) {
        key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_10.keys == AnimateInanimate) {
            key_resp_10.corr = 1;
        } else {
            key_resp_10.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image_3* updates
    if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ImageTest2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ImageTest2RoutineEnd() {
  return async function () {
    //------Ending Routine 'ImageTest2'-------
    for (const thisComponent of ImageTest2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_10.keys === undefined) {
      if (['None','none',undefined].includes(AnimateInanimate)) {
         key_resp_10.corr = 1;  // correct non-response
      } else {
         key_resp_10.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_10.keys', key_resp_10.keys);
    psychoJS.experiment.addData('key_resp_10.corr', key_resp_10.corr);
    if (typeof key_resp_10.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_10.rt', key_resp_10.rt);
        routineTimer.reset();
        }
    
    key_resp_10.stop();
    // the Routine "ImageTest2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_11_allKeys;
var ImageTest3Components;
function ImageTest3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'ImageTest3'-------
    t = 0;
    ImageTest3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_11.keys = undefined;
    key_resp_11.rt = undefined;
    _key_resp_11_allKeys = [];
    image_4.setImage(ImageFile);
    // keep track of which components have finished
    ImageTest3Components = [];
    ImageTest3Components.push(key_resp_11);
    ImageTest3Components.push(image_4);
    
    for (const thisComponent of ImageTest3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ImageTest3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'ImageTest3'-------
    // get current time
    t = ImageTest3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_11* updates
    if (t >= 0.0 && key_resp_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_11.tStart = t;  // (not accounting for frame time here)
      key_resp_11.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_11.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.clearEvents(); });
    }

    if (key_resp_11.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_11.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_11_allKeys = _key_resp_11_allKeys.concat(theseKeys);
      if (_key_resp_11_allKeys.length > 0) {
        key_resp_11.keys = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].name;  // just the last key pressed
        key_resp_11.rt = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_11.keys == AnimateInanimate) {
            key_resp_11.corr = 1;
        } else {
            key_resp_11.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image_4* updates
    if (t >= 0.0 && image_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_4.tStart = t;  // (not accounting for frame time here)
      image_4.frameNStart = frameN;  // exact frame index
      
      image_4.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ImageTest3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ImageTest3RoutineEnd() {
  return async function () {
    //------Ending Routine 'ImageTest3'-------
    for (const thisComponent of ImageTest3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_11.keys === undefined) {
      if (['None','none',undefined].includes(AnimateInanimate)) {
         key_resp_11.corr = 1;  // correct non-response
      } else {
         key_resp_11.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_11.keys', key_resp_11.keys);
    psychoJS.experiment.addData('key_resp_11.corr', key_resp_11.corr);
    if (typeof key_resp_11.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_11.rt', key_resp_11.rt);
        routineTimer.reset();
        }
    
    key_resp_11.stop();
    // the Routine "ImageTest3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_12_allKeys;
var ImageTest4Components;
function ImageTest4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'ImageTest4'-------
    t = 0;
    ImageTest4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_12.keys = undefined;
    key_resp_12.rt = undefined;
    _key_resp_12_allKeys = [];
    image_5.setImage(ImageFile);
    // keep track of which components have finished
    ImageTest4Components = [];
    ImageTest4Components.push(key_resp_12);
    ImageTest4Components.push(image_5);
    
    for (const thisComponent of ImageTest4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ImageTest4RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'ImageTest4'-------
    // get current time
    t = ImageTest4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_12* updates
    if (t >= 0.0 && key_resp_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_12.tStart = t;  // (not accounting for frame time here)
      key_resp_12.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_12.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.clearEvents(); });
    }

    if (key_resp_12.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_12.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_12_allKeys = _key_resp_12_allKeys.concat(theseKeys);
      if (_key_resp_12_allKeys.length > 0) {
        key_resp_12.keys = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].name;  // just the last key pressed
        key_resp_12.rt = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_12.keys == AnimateInanimate) {
            key_resp_12.corr = 1;
        } else {
            key_resp_12.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image_5* updates
    if (t >= 0.0 && image_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_5.tStart = t;  // (not accounting for frame time here)
      image_5.frameNStart = frameN;  // exact frame index
      
      image_5.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ImageTest4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ImageTest4RoutineEnd() {
  return async function () {
    //------Ending Routine 'ImageTest4'-------
    for (const thisComponent of ImageTest4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_12.keys === undefined) {
      if (['None','none',undefined].includes(AnimateInanimate)) {
         key_resp_12.corr = 1;  // correct non-response
      } else {
         key_resp_12.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_12.keys', key_resp_12.keys);
    psychoJS.experiment.addData('key_resp_12.corr', key_resp_12.corr);
    if (typeof key_resp_12.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_12.rt', key_resp_12.rt);
        routineTimer.reset();
        }
    
    key_resp_12.stop();
    // the Routine "ImageTest4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_13_allKeys;
var PracticeInstructions2Components;
function PracticeInstructions2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'PracticeInstructions2'-------
    t = 0;
    PracticeInstructions2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_13.keys = undefined;
    key_resp_13.rt = undefined;
    _key_resp_13_allKeys = [];
    // keep track of which components have finished
    PracticeInstructions2Components = [];
    PracticeInstructions2Components.push(text_8);
    PracticeInstructions2Components.push(key_resp_13);
    
    for (const thisComponent of PracticeInstructions2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function PracticeInstructions2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'PracticeInstructions2'-------
    // get current time
    t = PracticeInstructions2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }

    
    // *key_resp_13* updates
    if (t >= 0.0 && key_resp_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_13.tStart = t;  // (not accounting for frame time here)
      key_resp_13.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_13.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_13.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_13.clearEvents(); });
    }

    if (key_resp_13.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_13.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_13_allKeys = _key_resp_13_allKeys.concat(theseKeys);
      if (_key_resp_13_allKeys.length > 0) {
        key_resp_13.keys = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].name;  // just the last key pressed
        key_resp_13.rt = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PracticeInstructions2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PracticeInstructions2RoutineEnd() {
  return async function () {
    //------Ending Routine 'PracticeInstructions2'-------
    for (const thisComponent of PracticeInstructions2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_13.keys', key_resp_13.keys);
    if (typeof key_resp_13.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_13.rt', key_resp_13.rt);
        routineTimer.reset();
        }
    
    key_resp_13.stop();
    // the Routine "PracticeInstructions2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_14_allKeys;
var StudyTrial2Components;
function StudyTrial2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'StudyTrial2'-------
    t = 0;
    StudyTrial2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_14.keys = undefined;
    key_resp_14.rt = undefined;
    _key_resp_14_allKeys = [];
    image_7.setImage(ImageFile);
    // keep track of which components have finished
    StudyTrial2Components = [];
    StudyTrial2Components.push(key_resp_14);
    StudyTrial2Components.push(image_7);
    
    for (const thisComponent of StudyTrial2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function StudyTrial2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'StudyTrial2'-------
    // get current time
    t = StudyTrial2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_14* updates
    if (t >= 0.0 && key_resp_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_14.tStart = t;  // (not accounting for frame time here)
      key_resp_14.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_14.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_14.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_14.clearEvents(); });
    }

    if (key_resp_14.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_14.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_14_allKeys = _key_resp_14_allKeys.concat(theseKeys);
      if (_key_resp_14_allKeys.length > 0) {
        key_resp_14.keys = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].name;  // just the last key pressed
        key_resp_14.rt = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image_7* updates
    if (t >= 0.0 && image_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_7.tStart = t;  // (not accounting for frame time here)
      image_7.frameNStart = frameN;  // exact frame index
      
      image_7.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of StudyTrial2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function StudyTrial2RoutineEnd() {
  return async function () {
    //------Ending Routine 'StudyTrial2'-------
    for (const thisComponent of StudyTrial2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_14.keys', key_resp_14.keys);
    if (typeof key_resp_14.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_14.rt', key_resp_14.rt);
        routineTimer.reset();
        }
    
    key_resp_14.stop();
    // the Routine "StudyTrial2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_15_allKeys;
var TestInstructions2Components;
function TestInstructions2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'TestInstructions2'-------
    t = 0;
    TestInstructions2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_15.keys = undefined;
    key_resp_15.rt = undefined;
    _key_resp_15_allKeys = [];
    // keep track of which components have finished
    TestInstructions2Components = [];
    TestInstructions2Components.push(text_9);
    TestInstructions2Components.push(key_resp_15);
    
    for (const thisComponent of TestInstructions2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TestInstructions2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'TestInstructions2'-------
    // get current time
    t = TestInstructions2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }

    
    // *key_resp_15* updates
    if (t >= 0.0 && key_resp_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_15.tStart = t;  // (not accounting for frame time here)
      key_resp_15.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_15.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_15.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_15.clearEvents(); });
    }

    if (key_resp_15.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_15.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_15_allKeys = _key_resp_15_allKeys.concat(theseKeys);
      if (_key_resp_15_allKeys.length > 0) {
        key_resp_15.keys = _key_resp_15_allKeys[_key_resp_15_allKeys.length - 1].name;  // just the last key pressed
        key_resp_15.rt = _key_resp_15_allKeys[_key_resp_15_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TestInstructions2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TestInstructions2RoutineEnd() {
  return async function () {
    //------Ending Routine 'TestInstructions2'-------
    for (const thisComponent of TestInstructions2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_15.keys', key_resp_15.keys);
    if (typeof key_resp_15.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_15.rt', key_resp_15.rt);
        routineTimer.reset();
        }
    
    key_resp_15.stop();
    // the Routine "TestInstructions2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_16_allKeys;
var ImageTest5Components;
function ImageTest5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'ImageTest5'-------
    t = 0;
    ImageTest5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_16.keys = undefined;
    key_resp_16.rt = undefined;
    _key_resp_16_allKeys = [];
    image_6.setImage(ImageFile);
    // keep track of which components have finished
    ImageTest5Components = [];
    ImageTest5Components.push(key_resp_16);
    ImageTest5Components.push(image_6);
    
    for (const thisComponent of ImageTest5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ImageTest5RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'ImageTest5'-------
    // get current time
    t = ImageTest5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_16* updates
    if (t >= 0.0 && key_resp_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_16.tStart = t;  // (not accounting for frame time here)
      key_resp_16.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_16.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_16.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_16.clearEvents(); });
    }

    if (key_resp_16.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_16.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_16_allKeys = _key_resp_16_allKeys.concat(theseKeys);
      if (_key_resp_16_allKeys.length > 0) {
        key_resp_16.keys = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].name;  // just the last key pressed
        key_resp_16.rt = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_16.keys == AnimateInanimate) {
            key_resp_16.corr = 1;
        } else {
            key_resp_16.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image_6* updates
    if (t >= 0.0 && image_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_6.tStart = t;  // (not accounting for frame time here)
      image_6.frameNStart = frameN;  // exact frame index
      
      image_6.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ImageTest5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ImageTest5RoutineEnd() {
  return async function () {
    //------Ending Routine 'ImageTest5'-------
    for (const thisComponent of ImageTest5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_16.keys === undefined) {
      if (['None','none',undefined].includes(AnimateInanimate)) {
         key_resp_16.corr = 1;  // correct non-response
      } else {
         key_resp_16.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_16.keys', key_resp_16.keys);
    psychoJS.experiment.addData('key_resp_16.corr', key_resp_16.corr);
    if (typeof key_resp_16.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_16.rt', key_resp_16.rt);
        routineTimer.reset();
        }
    
    key_resp_16.stop();
    // the Routine "ImageTest5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_17_allKeys;
var ImageTest6Components;
function ImageTest6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'ImageTest6'-------
    t = 0;
    ImageTest6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_17.keys = undefined;
    key_resp_17.rt = undefined;
    _key_resp_17_allKeys = [];
    image_8.setImage(ImageFile);
    // keep track of which components have finished
    ImageTest6Components = [];
    ImageTest6Components.push(key_resp_17);
    ImageTest6Components.push(image_8);
    
    for (const thisComponent of ImageTest6Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ImageTest6RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'ImageTest6'-------
    // get current time
    t = ImageTest6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_17* updates
    if (t >= 0.0 && key_resp_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_17.tStart = t;  // (not accounting for frame time here)
      key_resp_17.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_17.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_17.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_17.clearEvents(); });
    }

    if (key_resp_17.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_17.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_17_allKeys = _key_resp_17_allKeys.concat(theseKeys);
      if (_key_resp_17_allKeys.length > 0) {
        key_resp_17.keys = _key_resp_17_allKeys[_key_resp_17_allKeys.length - 1].name;  // just the last key pressed
        key_resp_17.rt = _key_resp_17_allKeys[_key_resp_17_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_17.keys == AnimateInanimate) {
            key_resp_17.corr = 1;
        } else {
            key_resp_17.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image_8* updates
    if (t >= 0.0 && image_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_8.tStart = t;  // (not accounting for frame time here)
      image_8.frameNStart = frameN;  // exact frame index
      
      image_8.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ImageTest6Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ImageTest6RoutineEnd() {
  return async function () {
    //------Ending Routine 'ImageTest6'-------
    for (const thisComponent of ImageTest6Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_17.keys === undefined) {
      if (['None','none',undefined].includes(AnimateInanimate)) {
         key_resp_17.corr = 1;  // correct non-response
      } else {
         key_resp_17.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_17.keys', key_resp_17.keys);
    psychoJS.experiment.addData('key_resp_17.corr', key_resp_17.corr);
    if (typeof key_resp_17.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_17.rt', key_resp_17.rt);
        routineTimer.reset();
        }
    
    key_resp_17.stop();
    // the Routine "ImageTest6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_18_allKeys;
var ImageTest7Components;
function ImageTest7RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'ImageTest7'-------
    t = 0;
    ImageTest7Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_18.keys = undefined;
    key_resp_18.rt = undefined;
    _key_resp_18_allKeys = [];
    image_9.setImage(ImageFile);
    // keep track of which components have finished
    ImageTest7Components = [];
    ImageTest7Components.push(key_resp_18);
    ImageTest7Components.push(image_9);
    
    for (const thisComponent of ImageTest7Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ImageTest7RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'ImageTest7'-------
    // get current time
    t = ImageTest7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_18* updates
    if (t >= 0.0 && key_resp_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_18.tStart = t;  // (not accounting for frame time here)
      key_resp_18.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_18.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_18.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_18.clearEvents(); });
    }

    if (key_resp_18.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_18.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_18_allKeys = _key_resp_18_allKeys.concat(theseKeys);
      if (_key_resp_18_allKeys.length > 0) {
        key_resp_18.keys = _key_resp_18_allKeys[_key_resp_18_allKeys.length - 1].name;  // just the last key pressed
        key_resp_18.rt = _key_resp_18_allKeys[_key_resp_18_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_18.keys == AnimateInanimate) {
            key_resp_18.corr = 1;
        } else {
            key_resp_18.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image_9* updates
    if (t >= 0.0 && image_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_9.tStart = t;  // (not accounting for frame time here)
      image_9.frameNStart = frameN;  // exact frame index
      
      image_9.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ImageTest7Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ImageTest7RoutineEnd() {
  return async function () {
    //------Ending Routine 'ImageTest7'-------
    for (const thisComponent of ImageTest7Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_18.keys === undefined) {
      if (['None','none',undefined].includes(AnimateInanimate)) {
         key_resp_18.corr = 1;  // correct non-response
      } else {
         key_resp_18.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_18.keys', key_resp_18.keys);
    psychoJS.experiment.addData('key_resp_18.corr', key_resp_18.corr);
    if (typeof key_resp_18.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_18.rt', key_resp_18.rt);
        routineTimer.reset();
        }
    
    key_resp_18.stop();
    // the Routine "ImageTest7" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_19_allKeys;
var ImageTest8Components;
function ImageTest8RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'ImageTest8'-------
    t = 0;
    ImageTest8Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_19.keys = undefined;
    key_resp_19.rt = undefined;
    _key_resp_19_allKeys = [];
    image_10.setImage(ImageFile);
    // keep track of which components have finished
    ImageTest8Components = [];
    ImageTest8Components.push(key_resp_19);
    ImageTest8Components.push(image_10);
    
    for (const thisComponent of ImageTest8Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ImageTest8RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'ImageTest8'-------
    // get current time
    t = ImageTest8Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_19* updates
    if (t >= 0.0 && key_resp_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_19.tStart = t;  // (not accounting for frame time here)
      key_resp_19.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_19.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_19.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_19.clearEvents(); });
    }

    if (key_resp_19.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_19.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_19_allKeys = _key_resp_19_allKeys.concat(theseKeys);
      if (_key_resp_19_allKeys.length > 0) {
        key_resp_19.keys = _key_resp_19_allKeys[_key_resp_19_allKeys.length - 1].name;  // just the last key pressed
        key_resp_19.rt = _key_resp_19_allKeys[_key_resp_19_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_19.keys == AnimateInanimate) {
            key_resp_19.corr = 1;
        } else {
            key_resp_19.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image_10* updates
    if (t >= 0.0 && image_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_10.tStart = t;  // (not accounting for frame time here)
      image_10.frameNStart = frameN;  // exact frame index
      
      image_10.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ImageTest8Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ImageTest8RoutineEnd() {
  return async function () {
    //------Ending Routine 'ImageTest8'-------
    for (const thisComponent of ImageTest8Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_19.keys === undefined) {
      if (['None','none',undefined].includes(AnimateInanimate)) {
         key_resp_19.corr = 1;  // correct non-response
      } else {
         key_resp_19.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_19.keys', key_resp_19.keys);
    psychoJS.experiment.addData('key_resp_19.corr', key_resp_19.corr);
    if (typeof key_resp_19.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_19.rt', key_resp_19.rt);
        routineTimer.reset();
        }
    
    key_resp_19.stop();
    // the Routine "ImageTest8" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_20_allKeys;
var End_ExperimentComponents;
function End_ExperimentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'End_Experiment'-------
    t = 0;
    End_ExperimentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_20.keys = undefined;
    key_resp_20.rt = undefined;
    _key_resp_20_allKeys = [];
    // keep track of which components have finished
    End_ExperimentComponents = [];
    End_ExperimentComponents.push(key_resp_20);
    End_ExperimentComponents.push(text_3);
    
    for (const thisComponent of End_ExperimentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function End_ExperimentRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'End_Experiment'-------
    // get current time
    t = End_ExperimentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_20* updates
    if (t >= 0.0 && key_resp_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_20.tStart = t;  // (not accounting for frame time here)
      key_resp_20.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_20.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_20.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_20.clearEvents(); });
    }

    if (key_resp_20.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_20.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_20_allKeys = _key_resp_20_allKeys.concat(theseKeys);
      if (_key_resp_20_allKeys.length > 0) {
        key_resp_20.keys = _key_resp_20_allKeys[_key_resp_20_allKeys.length - 1].name;  // just the last key pressed
        key_resp_20.rt = _key_resp_20_allKeys[_key_resp_20_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of End_ExperimentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function End_ExperimentRoutineEnd() {
  return async function () {
    //------Ending Routine 'End_Experiment'-------
    for (const thisComponent of End_ExperimentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_20.keys', key_resp_20.keys);
    if (typeof key_resp_20.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_20.rt', key_resp_20.rt);
        routineTimer.reset();
        }
    
    key_resp_20.stop();
    // the Routine "End_Experiment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
