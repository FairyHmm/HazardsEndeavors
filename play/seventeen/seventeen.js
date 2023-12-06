// Aliases
const Application = PIXI.Application,
  Sprite = PIXI.Sprite,
  Texture = PIXI.Texture.from,
  TextS = PIXI.TextStyle,
  Text = PIXI.Text;

// Colors
const tC = "#ffb3b3",
  hCC = "#FF4444",
  hDC = "#00FF00",
  hMC = "#FFFF66",
  vC = "#3366FF";
// Create app
const app = new Application({
  background: "#252627",
  resizeTo: window,
  antialias: true,
});

document.body.appendChild(app.view);
const main = new PIXI.Container();
app.stage.addChild(main);

function h1S(fillColor = "#ffffff") {
  return new TextS({
    fontFamily: "Helvetica",
    fontSize: 35,
    lineHeight: 36,
    align: "center",
    fill: fillColor,
    stroke: "#000000",
    strokeThickness: 4,
    lineJoin: "round",
    wordWrap: true,
    wordWrapWidth: app.screen.width / 1.5,
  });
}

const h2S = new TextS({
  fontFamily: "Helvetica",
  fontSize: 25,
  lineHeight: 26,
  align: "center",
  fill: "#ffffff",
  stroke: "#000000",
  strokeThickness: 5,
  lineJoin: "round",
  wordWrap: true,
  wordWrapWidth: app.screen.width / 1.5,
});

function setText(object, add = 0, show = 0) {
  object.anchor.set(0.5, 0);
  object.x = app.screen.width / 2;
  object.y = 10;
  object.alpha = 0;
  if (add) {
    main.addChild(object);
  }
  if (show) {
    showSprite(object);
  }
}

function alignText(object, sprite, height = 200) {
  object.x = sprite.x;
  object.y = sprite.y - height;
}

function setObject(object, add = 0, show = 0) {
  object.anchor.set(0.5);
  object.alpha = 0;
  if (add) {
    main.addChild(object);
  }
  if (show) {
    showSprite(object);
  }
}

// Tap to continue...
const fadeText = new TextS({
  fontfamily: "Helvetica",
  fontsize: 20,
  align: "center",
  fill: "#ffffff99",
  wordWrap: true,
  wordWrapWidth: app.screen.width / 1.5,
});

const tapToCont = new PIXI.Text("Tap to continue...", fadeText);
tapToCont.anchor.set(0.5, 1);
tapToCont.x = app.screen.width / 2;
tapToCont.y = app.screen.height - 20;
tapToCont.alpha = 0;
main.addChild(tapToCont);

let timerId;

startTimer();

function startTimer() {
  setTimeout(() => {
    showSprite(tapToCont);
  }, 10000);
}

window.addEventListener("click", function (event) {
  clearTimeout(timerId);
  hideSprite(tapToCont);
  startTimer();
});

function showSprite(text) {
  if (text.alpha !== 0) {
    return;
  }
  let startTime = null;
  function animate(currentTime) {
    if (!startTime) {
      startTime = currentTime;
    }
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / 500, 1);
    text.alpha = progress;
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }
  requestAnimationFrame(animate);
}

function hideSprite(text) {
  if (text.alpha !== 1) {
    return;
  }
  let startTime = null;
  function animate(currentTime) {
    if (!startTime) {
      startTime = currentTime;
    }
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / 100, 1);
    text.alpha = 1 - progress;
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }
  requestAnimationFrame(animate);
}

let elapsedTimeShake = 0;
let tickerFunction = null;
function shakeObject(object, delta) {
  object.rotation = 0.2 * ((elapsedTimeShake % 2) - 1);
  elapsedTimeShake += app.ticker.elapsedMS;
}

function toggleShake(object) {
  if (elapsedTimeShake === 0) {
    tickerFunction = (delta) => shakeObject(object, delta);
    app.ticker.add(tickerFunction);
  } else {
    app.ticker.remove(tickerFunction);
    object.rotation = 0;
    elapsedTimeShake = 0;
  }
}

function move(object, targetX, targetY, duration) {
  var startTime = Date.now();
  function animate() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const newX = object.position.x + (targetX - object.position.x) * progress;
    const newY = object.position.y + (targetY - object.position.y) * progress;
    object.position.set(newX, newY);
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }
  requestAnimationFrame(animate);
}

function rotate(object, targetAngle, duration) {
  var initialAngle = object.rotation;
  var startTime = Date.now();
  function update() {
    var elapsedTime = Date.now() - startTime;
    var progress = Math.min(elapsedTime / duration, 1);
    var currentAngle = initialAngle + (targetAngle - initialAngle) * progress;
    object.rotation = currentAngle;
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  requestAnimationFrame(update);
}

class Button extends PIXI.Container {
  constructor() {
    super();
    this.sprite = new PIXI.Graphics();
    this.addChild(this.sprite);

    this.sprite.interactive = true;
    this.sprite.buttonMode = true;

    this.sprite.lineStyle(3, 0x4cc9f0);
    this.sprite.drawRoundedRect(0, 0, 300, 80, 20);
    this.sprite.beginFill(0x252627);
    this.sprite.drawRoundedRect(0, 0, 300, 80, 20);
    this.sprite.endFill();

    this.sprite.on("mouseover", () => {
      this.sprite.beginFill(0x4cc9f0);
      this.sprite.drawRoundedRect(0, 0, 300, 80, 20);
      this.sprite.endFill();
    });

    this.sprite.on("mouseout", () => {
      this.sprite.beginFill(0x252627);
      this.sprite.drawRoundedRect(0, 0, 300, 80);
      this.sprite.endFill();
    });
  }
}

let state = "none";
let ending = "null";
let canTrigger = true;
const trigDur = 500;

window.addEventListener("click", function (event) {
  console.log(state);
  if (canTrigger) {
    switch (state) {
      case "none": {
        state = "chapterI";
        chapterIF();
        break;
      }
      case "chapterI": {
        state = "veronica1";
        veronica1F();
        break;
      }
      case "veronica1": {
        state = "veronica2";
        veronica2F();
        break;
      }
      case "veronica2": {
        state = "heathers1";
        heathers1F();
        break;
      }
      case "heathers1": {
        state = "heatherC";
        heatherCF();
        break;
      }
      case "heatherC": {
        state = "heatherD";
        heatherDF();
        break;
      }
      case "heatherD": {
        state = "heatherM";
        heatherMF();
        break;
      }
      case "heatherM": {
        state = "heathers2";
        heathers2F();
        break;
      }
      case "heathers2": {
        state = "bellrings";
        bellRingsF();
        break;
      }
      case "bellrings": {
        state = "class1";
        class1F();
        break;
      }
      case "class1": {
        state = "class2";
        class2F();
        break;
      }
      case "class2": {
        state = "hcanswer";
        hcanswerF();
        break;
      }
      case "hcanswer": {
        state = "hdanswer";
        hdanswerF();
        break;
      }
      case "hdanswer": {
        state = "hmanswer";
        hmanswerF();
        break;
      }
      case "hmanswer": {
        state = "vanswerchoose";
        vAnswerChooseF();
        break;
      }
      case "vanswer": {
        state = "vanswer2";
        vanswer2F();
        break;
      }
      case "vanswer2": {
        state = "vanswer3";
        vanswer3F();
        break;
      }
      case "vanswer3": {
        state = "vanswer4";
        vanswer4F();
        break;
      }
      case "vanswer4": {
        state = "classlaugh";
        classLaughF();
        break;
      }
      case "classlaugh": {
        state = "classlaugh2";
        classLaugh2F();
        break;
      }
      case "classlaugh2":
      case "vnotanswer":  {
        state = "lunch1";
        lunch1F();
        break;
      }
      case "lunch1":  {
        state = "lunch2";
        lunch2F();
        break;
      }
      case "lunch2":  {
        state = "lunch3";
        lunch3F();
        break;
      }
      case "lunch3":  {
        state = "lunch4";
        lunch4F();
        break;
      }
      case "lunch4":  {
        state = "lunch5";
        lunch5F();
        break;
      }
      case "lunch5":  {
        state = "lunchwhattodo";
        lunchWhatToDoF();
        break;
      }
      case "vlunchgetaway":  {
        state = "vlunchgetaway2";
        vLunchGetAway2F();
        break;
      }
      case "vlunchplease":  {
        state = "vlunchplease2";
        vLunchPlease2F();
        break;
      }
      case "vlunchplease2":  {
        state = "vlunchplease3";
        vLunchPlease3F();
        break;
      }
      case "vlunchgetaway2":
      case "vlunchplease3":  {
        state = "fromthenon";
        fromThenOnF();
        break;
      }
      case "fromthenon":  {
        state = "test";
        testF();
        break;
      }
      case "test":  {
        state = "testC";
        testCF();
        break;
      }
      case "testC":  {
        state = "testD";
        testDF();
        break;
      }
      case "testD":  {
        state = "testM";
        testMF();
        break;
      }
      case "testM":  {
        state = "testChoose";
        testChooseF();
        break;
      }
      case "vtesthelp":  {
        state = "teachertest1-helped";
        teacherTest1F();
        break;
      }
      case "vtestnothelp":  {
        state = "teachertest1-nothelped";
        teacherTest1F();
        break;
      }
      case "teachertest1-helped":  {
        state = "teachertest2-helped";
        teacherTest2F();
        break;
      }
      case "teachertest1-nothelped":  {
        state = "teachertest2-nothelped";
        teacherTest2F();
        break;
      }
      case "teachertest2-helped":  {
        state = "teachertest3-helped";
        teacherTest3HelpedF();
        break;
      }
      case "teachertest2-nothelped":  {
        state = "teachertest3-nothelped";
        teacherTest3NotHelpedF();
        break;
      }
      case "teachertest3-helped":  {
        state = "heathersacceptveronica1";
        heathersAcceptVeronica1F();
        break;
      }
      case "heathersacceptveronica1":  {
        state = "heathersacceptveronica2";
        heathersAcceptVeronica2F();
        break;
      }
      case "heathersacceptveronica2":  {
        state = "heathersacceptveronica3";
        heathersAcceptVeronica3F();
        break;
      }
      case "heathersacceptveronica3":  {
        state = "vfindheathersbully-pre";
        chapterIIF();
        break;
      }
      case "teachertest3-nothelped":  {
        state = "heathersdislikeveronica1";
        heathersDislikeVeronica1F();
        break;
      }
      case "heathersdislikeveronica1":  {
        state = "heathersdislikeveronica2";
        heathersDislikeVeronica2F();
        break;
      }
      case "heathersdislikeveronica2":  {
        state = "heathersdislikeveronica3";
        heathersDislikeVeronica3F();
        break;
      }
      case "heathersdislikeveronica3":  {
        state = "heathersGoPickOnV";
        heathersGoPickOnVF();
        break;
      }
      case "heathersGoPickOnV":  {
        state = "vbullied-pre";
        chapterIIF();
        break;
      }
      case "vfindheathersbully-pre":  {
        state = "vfindheathersbully";
        vFindHeathersBullyF();
        break;
      }
      case "vfindheathersbully":  {
        state = "vfindheathersbullychoose";
        vFindHeathersBullyChooseF();
        break;
      }
    }
    canTrigger = false;
    setTimeout(() => {
      canTrigger = true;
    }, trigDur);
  }
});

function timeout() {
  canTrigger = false;
  setTimeout(() => {
    canTrigger = true;
  }, 10);
}

var chapterIText = new PIXI.Text("Chapter I: Friends or Foes?", h1S());
function chapterIF() {
  chapterIText.x = 40;
  chapterIText.y = 20;
  chapterIText.alpha = 0;
  chapterIText.scale.set(1.2, 1.2);
  main.addChild(chapterIText);
  showSprite(chapterIText);
  document.title = "Seventeen: Friends or Foes?";
}

var veronica1Text = new PIXI.Text("Veronica just got accepted to a high-profile school!", h1S());
var westerburg = new Sprite(Texture("/assets/games/school/westerburg.svg"));
var veronica = new Sprite(Texture("/assets/peeps/veronica/veronica.svg"));
function veronica1F() {
  hideSprite(chapterIText);
  setText(veronica1Text, 1, 1);
  setObject(westerburg, 1, 1);
  setObject(veronica, 1, 1);
  westerburg.x = app.screen.width * 2 / 3
  westerburg.y = app.screen.height / 2;
  veronica.x = app.screen.width / 3;
  veronica.y = app.screen.height / 2;
}

var veronica2Text = new PIXI.Text("She has to go far away from home, away from her old friends.", h1S());
var martha = new Sprite(Texture("/assets/peeps/unknown.svg"));
function veronica2F() {
  hideSprite(veronica1Text);
  hideSprite(westerburg);
  setText(veronica2Text, 1, 1);
  setObject(martha, 1, 1);
  hideSprite(veronica);
  martha.x = veronica.y - 100;
  martha.y = veronica.y;
  veronica.scale.x = -1;
  setTimeout(() => {
    showSprite(veronica);
  }, 200);
  setTimeout(() => {
    move(martha, -martha.width, martha.y, 100000);
  }, 1000);
}

var heathers1Text = new PIXI.Text("Being a new student, Veronica often gets bullied or isolated.", h1S());
var chandler = new Sprite(Texture("/assets/peeps/chandler/chandler.svg"));
var duke = new Sprite(Texture("/assets/peeps/duke/duke.svg"));
var mcnamara = new Sprite(Texture("/assets/peeps/mcnamara/mcnamara.svg"));
function heathers1F() {
  hideSprite(veronica2Text);
  hideSprite(martha);
  setText(heathers1Text, 1, 1);
  setObject(mcnamara, 1, 1);
  setObject(duke, 1, 1);
  setObject(chandler, 1, 1);
  veronica.scale.x = 1;
  chandler.scale.x = duke.scale.x = mcnamara.scale.x = -1;
  chandler.x = app.screen.width * 2 / 3 - 100;
  duke.x = chandler.x + 120;
  mcnamara.x = chandler.x + 240;
  chandler.y = duke.y = mcnamara.y = veronica.y;
  setTimeout(() => {
    showSprite(veronica);
  }, 200);
}

var heatherCText = new PIXI.Text("I'm Heather Chandler,\nthe fearless Queen Bee.", h1S(hCC));
function heatherCF() {
  hideSprite(heathers1Text);
  setText(heatherCText, 1, 1);
  alignText(heatherCText, chandler);
}

var heatherDText = new PIXI.Text("It's Heather Duke,\nthe cunning and ambitious one.", h1S(hDC));
function heatherDF() {
  hideSprite(heatherCText);
  setText(heatherDText, 1, 1);
  alignText(heatherDText, duke);
}

var heatherMText = new PIXI.Text("Heather McNamara here,\nthe compassionate peacemaker.", h1S(hMC));
function heatherMF() {
  hideSprite(heatherDText);
  setText(heatherMText, 1, 1);
  alignText(heatherMText, mcnamara);

}

var heathers2Text = new PIXI.Text("We are the Heathers.\nBe sure to remember us.", h1S());
function heathers2F() {
  hideSprite(heatherMText);
  setText(heathers2Text, 1, 1);
  alignText(heathers2Text, duke);
}

var bellRingsText = new PIXI.Text("It's time for class. Quick!", h1S());
function bellRingsF() {
  hideSprite(heathers2Text);
  setText(bellRingsText, 1, 1);
}

var teacher = new Sprite(Texture("/assets/people/vtl.svg"));
var deskT = new Sprite(Texture("/assets/games/school/desk.svg"));
var deskV = new Sprite(Texture("/assets/games/school/desk.svg"));
var deskC = new Sprite(Texture("/assets/games/school/desk.svg"));
var deskD = new Sprite(Texture("/assets/games/school/desk.svg"));
var deskM = new Sprite(Texture("/assets/games/school/desk.svg"));
function class1F() {
  hideSprite(bellRingsText);
  hideSprite(veronica);
  hideSprite(chandler);
  hideSprite(duke);
  hideSprite(mcnamara);
  setTimeout(() => { 
    setObject(teacher, 1, 1);
    teacher.scale.x = -1;
    chandler.scale.x = duke.scale.x = mcnamara.scale.x = 1;
    teacher.y = veronica.y;
    teacher.x = app.screen.width * 3 / 4;
    veronica.x = chandler.x = app.screen.width / 2;
    veronica.y = duke.y = app.screen.height / 3;
    chandler.y = mcnamara.y = app.screen.height * 2 / 3;
    duke.x = mcnamara.x = veronica.x - 300;
    setText(deskT, 1, 1);
    deskT.scale.x = -1;
    alignText(deskT, teacher, -30);
    setText(deskV, 1, 1);
    alignText(deskV, veronica, -30);
    setText(deskC, 1, 1);
    alignText(deskC, chandler, -30);
    setText(deskD, 1, 1);
    alignText(deskD, duke, -30);
    setText(deskM, 1, 1);
    alignText(deskM, mcnamara, -30);
    showSprite(veronica);
    showSprite(chandler);
    showSprite(duke);
    showSprite(mcnamara);
  }, 200);
}

var questionText = new PIXI.Text("Alright class.\nWho can answer this question:\nWhat is 33+77?", h1S(tC));
function class2F() {
  setText(questionText, 1, 1);
  alignText(questionText, teacher);
}

var hcanswerText = new PIXI.Text("I think it is 100, Heather.", h1S(hCC));
function hcanswerF() {
  hideSprite(questionText);
  setText(hcanswerText, 1, 1);
  alignText(hcanswerText, chandler, 150);
}

var hdanswerText = new PIXI.Text("It seems to be 100, Heather.", h1S(hDC));
function hdanswerF() {
  hideSprite(hcanswerText);
  setText(hdanswerText, 1, 1);
  alignText(hdanswerText, duke, 150);
}

var hmanswerText = new PIXI.Text("It is definitely 100, Heather.", h1S(hMC));
function hmanswerF() {
  hideSprite(hdanswerText);
  setText(hmanswerText, 1, 1);
  alignText(hmanswerText, mcnamara, 150);
}

var vAnswerChooseText = new Text("Will Veronica answer?", h1S());
var vAnswer = new PIXI.Container();
var vAnswerButton = new Button();
var vNotAnswer = new PIXI.Container();
var vNotAnswerButton = new Button();
function vAnswerChooseF() {
  hideSprite(hmanswerText);
  timeout();
  setText(vAnswerChooseText, 1, 1);

  vAnswer.x = app.screen.width / 4 - 150;
  vAnswer.y = app.screen.height - 160;
  vAnswer.alpha = 0;
  main.addChild(vAnswer);
  vAnswerButton.interactive = true;
  vAnswerButton.buttonMode = true;
  vAnswer.addChild(vAnswerButton);
  vAnswerButton.on("click", () => {
    timeout();
    vAnswerF();
  });
  var vAnswerText = new Text("Answer", h2S);
  vAnswer.addChild(vAnswerText);
  vAnswerText.anchor.set(1, 0.5);
  vAnswerText.x = 280;
  vAnswerText.y = 40;
  var vero1 = new Sprite(Texture("/assets/peeps/veronica/veronica.svg"));
  vAnswer.addChild(vero1);
  vero1.anchor.set(0, 0.5);
  vero1.x = 20;
  vero1.y = 40;
  vero1.scale.set(0.3, 0.3);
  showSprite(vAnswer);

  vNotAnswer.x = (app.screen.width * 3) / 4 - 150;
  vNotAnswer.y = app.screen.height - 160;
  vNotAnswer.alpha = 0;
  main.addChild(vNotAnswer);
  vNotAnswerButton.interactive = true;
  vNotAnswerButton.buttonMode = true;
  vNotAnswer.addChild(vNotAnswerButton);
  vNotAnswerButton.on("click", () => {
    timeout();
    vNotAnswerF();
  });
  var vNotAnswerText = new Text("Don't answer", h2S);
  vNotAnswer.addChild(vNotAnswerText);
  vNotAnswerText.anchor.set(1, 0.5);
  vNotAnswerText.x = 280;
  vNotAnswerText.y = 40;
  var vero2 = new Sprite(Texture("/assets/peeps/veronica/veronica.svg"));
  vNotAnswer.addChild(vero2);
  vero2.anchor.set(0, 0.5);
  vero2.x = 20;
  vero2.y = 40;
  vero2.scale.set(0.3, 0.3);
  showSprite(vNotAnswer);
}

var vAnswerText = new Text("Me!", h1S(vC));
function vAnswerF() {
  state = "vanswer";
  hideSprite(vAnswer);
  hideSprite(vNotAnswer);
  hideSprite(vAnswerChooseText);
  vAnswerButton.interactive = false;
  vNotAnswerButton.interactive = false;
  setText(vAnswerText, 1, 1);
  alignText(vAnswerText, veronica, 150);
}

var teacherCallText = new Text("Yes, Veronica, what is it?", h1S(tC));
function vanswer2F() {
  hideSprite(vAnswerText);
  setText(teacherCallText, 1, 1);
  alignText(teacherCallText, teacher, 150);
}

var vAnswer2Text = new Text("It is 110!", h1S(vC));
function vanswer3F() {
  hideSprite(teacherCallText);
  setText(vAnswer2Text, 1, 1);
  alignText(vAnswer2Text, veronica, 150);
}

var teacherCall2Text = new Text("Great job Veronica!\nYou get extra credits.", h1S(tC));
function vanswer4F() {
  hideSprite(vAnswer2Text);
  setText(teacherCall2Text, 1, 1);
  alignText(teacherCall2Text, teacher);
}

var whatANerdText = new Text("What a nerd.", h1S(hCC));
function classLaughF() {
  hideSprite(teacherCall2Text);
  setText(whatANerdText, 1, 1);
  alignText(whatANerdText, chandler, 150);
}

var hahaCText = new Text("Ha ha ha.", h1S(hCC));
var hahaDText = new Text("Ha ha ha.", h1S(hDC));
var hahaMText = new Text("Ha ha ha.", h1S(hMC));
function classLaugh2F() {
  hideSprite(whatANerdText);
  setText(hahaCText, 1, 1);
  alignText(hahaCText, chandler, 150);
  setText(hahaDText, 1, 1);
  alignText(hahaDText, duke, 150);
  setText(hahaMText, 1, 1);
  alignText(hahaMText, mcnamara, 150);
}

var teacherPassText = new Text("No one wants to answer?\nAlright, let's move on.", h1S(tC));
function vNotAnswerF() {
  state = "vnotanswer";
  hideSprite(vAnswer);
  hideSprite(vNotAnswer);
  hideSprite(vAnswerChooseText);
  vAnswerButton.interactive = false;
  vNotAnswerButton.interactive = false;
  setText(teacherPassText, 1, 1);
  alignText(teacherPassText, teacher);
}

var lunchTimeText = new Text("It's lunch time.", h1S());
function lunch1F() {
  hideSprite(teacherPassText);
  hideSprite(hahaCText);
  hideSprite(hahaDText);
  hideSprite(hahaMText);
  hideSprite(teacher);
  hideSprite(veronica);
  hideSprite(chandler);
  hideSprite(duke);
  hideSprite(mcnamara);
  hideSprite(deskT);
  hideSprite(deskV);
  hideSprite(deskC);
  hideSprite(deskD);
  hideSprite(deskM);
  setTimeout(() => {
    setText(lunchTimeText, 1, 1);
    chandler.scale.x = duke.scale.x = mcnamara.scale.x = -1;
    veronica.y = chandler.y = duke.y = mcnamara.y = teacher.y;
    chandler.x = app.screen.width * 3 / 5;
    duke.x = chandler.x + 200;
    mcnamara.x = chandler.x + 400;
    veronica.x = app.screen.width / 4;
    move(veronica, app.screen.width / 3, veronica.y, 2000);
    showSprite(veronica);
    showSprite(chandler);
    showSprite(duke);
    showSprite(mcnamara);
  }, 200);
}

var vAskLunchText = new Text("Hey... I want to ask...\nCould you girls let me sit with you?", h1S(vC));
function lunch2F() {
  hideSprite(lunchTimeText);
  setText(vAskLunchText, 1, 1);
  alignText(vAskLunchText, veronica);
}

var cLunchYesText = new Text("Oh, yes, definitely!", h1S(hCC));
function lunch3F() {
  hideSprite(vAskLunchText);
  setText(cLunchYesText, 1, 1);
  alignText(cLunchYesText, chandler, 150);
}

var vAskLunch2Text = new Text("Really?", h1S(vC));
function lunch4F() {
  hideSprite(cLunchYesText);
  setText(vAskLunch2Text, 1, 1);
  alignText(vAskLunch2Text, veronica, 150);
}

var hDNoText = new Text("Ha ha. No.", h1S(hDC));
function lunch5F() {
  hideSprite(vAskLunch2Text);
  setText(hDNoText, 1, 1);
  alignText(hDNoText, duke, 150);
}

var vLunchWhatToDoText = new Text("Will Veronica answer?", h1S());
var vLunchGetAway = new PIXI.Container();
var vLunchGetAwayButton = new Button();
var vLunchPlease = new PIXI.Container();
var vLunchPleaseButton = new Button();
function lunchWhatToDoF() {
  hideSprite(hDNoText);
  timeout();
  setText(vLunchWhatToDoText, 1, 1);

  vLunchGetAway.x = app.screen.width / 4 - 150;
  vLunchGetAway.y = app.screen.height - 160;
  vLunchGetAway.alpha = 0;
  main.addChild(vLunchGetAway);
  vLunchGetAwayButton.interactive = true;
  vLunchGetAwayButton.buttonMode = true;
  vLunchGetAway.addChild(vLunchGetAwayButton);
  vLunchGetAwayButton.on("click", () => {
    timeout();
    vLunchGetAwayF();
  });
  var vLunchGetAwayText = new Text("Get away", h2S);
  vLunchGetAway.addChild(vLunchGetAwayText);
  vLunchGetAwayText.anchor.set(1, 0.5);
  vLunchGetAwayText.x = 280;
  vLunchGetAwayText.y = 40;
  var vero1 = new Sprite(Texture("/assets/peeps/veronica/veronica.svg"));
  vLunchGetAway.addChild(vero1);
  vero1.anchor.set(0, 0.5);
  vero1.x = 20;
  vero1.y = 40;
  vero1.scale.set(0.3, 0.3);
  showSprite(vLunchGetAway);

  vLunchPlease.x = (app.screen.width * 3) / 4 - 150;
  vLunchPlease.y = app.screen.height - 160;
  vLunchPlease.alpha = 0;
  main.addChild(vLunchPlease);
  vLunchPleaseButton.interactive = true;
  vLunchPleaseButton.buttonMode = true;
  vLunchPlease.addChild(vLunchPleaseButton);
  vLunchPleaseButton.on("click", () => {
    timeout();
    vLunchPleaseF();
  });
  var vLunchPleaseText = new Text("Continue asking", h2S);
  vLunchPlease.addChild(vLunchPleaseText);
  vLunchPleaseText.anchor.set(1, 0.5);
  vLunchPleaseText.x = 280;
  vLunchPleaseText.y = 40;
  var vero2 = new Sprite(Texture("/assets/peeps/veronica/veronica.svg"));
  vLunchPlease.addChild(vero2);
  vero2.anchor.set(0, 0.5);
  vero2.x = 20;
  vero2.y = 40;
  vero2.scale.set(0.3, 0.3);
  showSprite(vLunchPlease);
}

function vLunchGetAwayF() {
  state = "vlunchgetaway";
  hideSprite(vLunchGetAway);
  hideSprite(vLunchPlease);
  hideSprite(vLunchWhatToDoText);
  vLunchGetAwayButton.interactive = false;
  vLunchPleaseButton.interactive = false;
  setTimeout(() => {
    veronica.scale.x = -1;
    move(veronica, app.screen.width / 5, veronica.y, 1000);
  }, 200);
  setTimeout(() => {
    rotate(veronica, -Math.PI / 2, 500);
  }, 300);
}

function vLunchGetAway2F() {
  setText(hahaCText, 1, 1);
  alignText(hahaCText, chandler, 150);
  setText(hahaDText, 1, 1);
  alignText(hahaDText, duke, 150);
  setText(hahaMText, 1, 1);
  alignText(hahaMText, mcnamara, 150);
  rotate(veronica, 0, 500);
  setTimeout(() => {
    move(veronica, -veronica.width-1, veronica.y, 2000);
  }, 300);
}

var vLunchPleaseText = new Text("Please?", h1S(vC));
function vLunchPleaseF() {
  state = "vlunchplease";
  hideSprite(vLunchGetAway);
  hideSprite(vLunchPlease);
  hideSprite(vLunchWhatToDoText);
  vLunchGetAwayButton.interactive = false;
  vLunchPleaseButton.interactive = false;
  setText(vLunchPleaseText, 1, 1);
  alignText(vLunchPleaseText, veronica, 150);
}

var vLunchPlease2Text = new Text("Did you really think\nthat you will fit us?", h1S(hMC));
function vLunchPlease2F() {
  hideSprite(vLunchPleaseText);
  setText(vLunchPlease2Text, 1, 1);
  alignText(vLunchPlease2Text, mcnamara);
}

function vLunchPlease3F() {
  hideSprite(vLunchPlease2Text);
  setText(hahaCText, 1, 1);
  alignText(hahaCText, chandler, 150);
  setText(hahaDText, 1, 1);
  alignText(hahaDText, duke, 150);
  setText(hahaMText, 1, 1);
  alignText(hahaMText, mcnamara, 150);
}

var fromThenOnText = new Text("From then on, Veronica consistently finds herself being the subject of bullying.", h1S());
function fromThenOnF() {
  hideSprite(hahaCText);
  hideSprite(hahaDText);
  hideSprite(hahaMText);
  hideSprite(veronica);
  hideSprite(chandler);
  hideSprite(duke);
  hideSprite(mcnamara);
  veronica = new Sprite(Texture("/assets/peeps/veronica/shock.svg"));
  chandler = new Sprite(Texture("/assets/peeps/chandler/cruel.svg"));
  duke = new Sprite(Texture("/assets/peeps/duke/shifty.svg"));
  mcnamara = new Sprite(Texture("/assets/peeps/mcnamara/unpleasant.svg"));
  setTimeout(() => {
    setText(fromThenOnText, 1, 1);
    setObject(veronica, 1, 1);
    setObject(chandler, 1, 1);
    setObject(duke, 1, 1);
    setObject(mcnamara, 1, 1);
    veronica.x = app.screen.width / 2 - 150;
    chandler.x = app.screen.width / 2 + 150;
    duke.x = chandler.x + 200;
    mcnamara.x = veronica.x - 200;
    veronica.y = chandler.y = teacher.y + 100;
    duke.y = mcnamara.y = teacher.y - 100;
  }, 500);
}

var testText = new Text("During the test, the Heathers want to copy Veronica's answers.", h1S());
function testF() {
  hideSprite(fromThenOnText);
  hideSprite(veronica);
  hideSprite(chandler);
  hideSprite(duke);
  hideSprite(mcnamara);
  veronica = new Sprite(Texture("/assets/peeps/veronica/veronica.svg"));
  chandler = new Sprite(Texture("/assets/peeps/chandler/chandler.svg"));
  duke = new Sprite(Texture("/assets/peeps/duke/duke.svg"));
  mcnamara = new Sprite(Texture("/assets/peeps/mcnamara/mcnamara.svg"));
  setTimeout(() => {
    showSprite(teacher);
    setObject(veronica, 1, 1);
    setObject(chandler, 1, 1);
    setObject(duke, 1, 1);
    setObject(mcnamara, 1, 1);
    setObject(deskT, 1, 1);
    setObject(deskV, 1, 1);
    setObject(deskC, 1, 1);
    setObject(deskD, 1, 1);
    setObject(deskM, 1, 1);
    setText(testText, 1, 1);
    veronica.y = teacher.y;
    veronica.x = chandler.x = app.screen.width / 2;
    veronica.y = duke.y = app.screen.height / 3;
    chandler.y = mcnamara.y = app.screen.height * 2 / 3;
    duke.x = mcnamara.x = veronica.x - 300;
    alignText(deskT, teacher, -70);
    alignText(deskV, veronica, -70);
    alignText(deskC, chandler, -70);
    alignText(deskD, duke, -70);
    alignText(deskM, mcnamara, -70);
  }, 500);
}

var hCAskText = new Text("Hey, Veronica.", h1S(hCC));
function testCF() {
  hideSprite(testText);
  setText(hCAskText, 1, 1);
  alignText(hCAskText, chandler, 150);
}

var hDAskText = new Text("We want to copy your answers.", h1S(hDC));
function testDF() {
  hideSprite(hCAskText);
  setText(hDAskText, 1, 1);
  alignText(hDAskText, duke, 150);
}

var hMAskText = new Text("Could you please let us?", h1S(hMC));
function testMF() {
  hideSprite(hDAskText);
  setText(hMAskText, 1, 1);
  alignText(hMAskText, mcnamara, 150);
}

var testChooseText = new Text("Will Veronica answer?", h1S());
var vTestHelp = new PIXI.Container();
var vTestHelpButton = new Button();
var vTestNotHelp = new PIXI.Container();
var vTestNotHelpButton = new Button();
function testChooseF() {
  hideSprite(hMAskText);
  timeout();
  setText(testChooseText, 1, 1);

  vTestHelp.x = app.screen.width / 4 - 150;
  vTestHelp.y = app.screen.height - 160;
  vTestHelp.alpha = 0;
  main.addChild(vTestHelp);
  vTestHelpButton.interactive = true;
  vTestHelpButton.buttonMode = true;
  vTestHelp.addChild(vTestHelpButton);
  vTestHelpButton.on("click", () => {
    timeout();
    vTestHelpF();
  });
  var vTestHelpText = new Text("Help the Heathers", h2S);
  vTestHelp.addChild(vTestHelpText);
  vTestHelpText.anchor.set(1, 0.5);
  vTestHelpText.x = 280;
  vTestHelpText.y = 40;
  var testA = new Sprite(Texture("/assets/games/school/testa+.svg"));
  vTestHelp.addChild(testA);
  testA.anchor.set(0, 0.5);
  testA.x = 20;
  testA.y = 40;
  testA.scale.set(0.3, 0.3);
  showSprite(vTestHelp);

  vTestNotHelp.x = (app.screen.width * 3) / 4 - 150;
  vTestNotHelp.y = app.screen.height - 160;
  vTestNotHelp.alpha = 0;
  main.addChild(vTestNotHelp);
  vTestNotHelpButton.interactive = true;
  vTestNotHelpButton.buttonMode = true;
  vTestNotHelp.addChild(vTestNotHelpButton);
  vTestNotHelpButton.on("click", () => {
    timeout();
    vTestNotHelpF();
  });
  var vTestNotHelpText = new Text("Don't help them", h2S);
  vTestNotHelp.addChild(vTestNotHelpText);
  vTestNotHelpText.anchor.set(1, 0.5);
  vTestNotHelpText.x = 280;
  vTestNotHelpText.y = 40;
  var testD = new Sprite(Texture("/assets/games/school/testd.svg"));
  vTestNotHelp.addChild(testD);
  testD.anchor.set(0, 0.5);
  testD.x = 20;
  testD.y = 40;
  testD.scale.set(0.3, 0.3);
  showSprite(vTestNotHelp);
}

var vHelpHeathersText = new Text("Ok.", h1S(vC));
function vTestHelpF() {
  state = "vtesthelp";
  hideSprite(vTestNotHelp);
  hideSprite(vTestHelp);
  hideSprite(testChooseText);
  vTestNotHelpButton.interactive = false;
  vTestHelpButton.interactive = false;
  setText(vHelpHeathersText, 1, 1);
  alignText(vHelpHeathersText, veronica, 150);
}

var vNotHelpHeathersText = new Text("I'm sorry, but I can't.", h1S(vC));
function vTestNotHelpF() {
  state = "vtestnothelp";
  hideSprite(vTestNotHelp);
  hideSprite(vTestHelp);
  hideSprite(testChooseText);
  vTestNotHelpButton.interactive = false;
  vTestHelpButton.interactive = false;
  setText(vNotHelpHeathersText, 1, 1);
  alignText(vNotHelpHeathersText, veronica, 150);
}

var teacherTestResult1Text = new Text("Alright, class.\nThe results are in.", h1S(tC));
function teacherTest1F() {
  hideSprite(vHelpHeathersText);
  hideSprite(vNotHelpHeathersText);
  hideSprite(main);
  setTimeout(() => {
    showSprite(main);
    setText(teacherTestResult1Text, 1, 1);
    alignText(teacherTestResult1Text, teacher)
  }, 500);
}

var teacherTestResult2Text = new Text("Veronica.\nA perfect A+!", h1S(tC));
function teacherTest2F() {
  hideSprite(teacherTestResult1Text);
  setText(teacherTestResult2Text, 1, 1);
  alignText(teacherTestResult2Text, teacher);
}

var teacherTestResult3HelpedText = new Text("And the Heathers.\nA+ for each of you!\nGood jobs!", h1S(tC));
function teacherTest3HelpedF() {
  hideSprite(teacherTestResult2Text);
  setText(teacherTestResult3HelpedText, 1, 1);
  alignText(teacherTestResult3HelpedText, teacher);
}

var heathersAcceptVeronica1Text = new Text("Hey, Veronica!", h1S(hCC));
function heathersAcceptVeronica1F() {
  hideSprite(teacher);
  hideSprite(veronica);
  hideSprite(chandler);
  hideSprite(duke);
  hideSprite(mcnamara);
  hideSprite(deskT);
  hideSprite(deskV);
  hideSprite(deskC);
  hideSprite(deskD);
  hideSprite(deskM);
  hideSprite(teacherTestResult3HelpedText);
  hideSprite(teacherTestResult3NotHelpedText);
  setTimeout(() => {
    veronica.x = app.screen.width / 3;
    chandler.scale.x = duke.scale.x = mcnamara.scale.x = -1;
    chandler.x = app.screen.width * 2 / 3 - 100;
    duke.x = chandler.x + 120;
    mcnamara.x = chandler.x + 240;
    chandler.y = duke.y = mcnamara.y = veronica.y = teacher.y;
    showSprite(veronica);
    showSprite(chandler);
    showSprite(duke);
    showSprite(mcnamara);
    setText(heathersAcceptVeronica1Text, 1, 1);
    alignText(heathersAcceptVeronica1Text, chandler, 150);
  }, 200);
}

var heathersAcceptVeronica2Text = new Text("Thank you so much\nfor helping us!", h1S(hDC));
function heathersAcceptVeronica2F() {
  hideSprite(heathersAcceptVeronica1Text);
  setText(heathersAcceptVeronica2Text, 1, 1);
  alignText(heathersAcceptVeronica2Text, duke);
}

var heathersAcceptVeronica3Text = new Text("You can hang around with us\nif you want!", h1S(hMC));
function heathersAcceptVeronica3F() {
  hideSprite(heathersAcceptVeronica2Text);
  setText(heathersAcceptVeronica3Text, 1, 1);
  alignText(heathersAcceptVeronica3Text, mcnamara);
}

var teacherTestResult3NotHelpedText = new Text("And the Heathers.\nD for each of you.\nYou need to do better.", h1S(tC));
function teacherTest3NotHelpedF() {
  hideSprite(teacherTestResult2Text);
  setText(teacherTestResult3NotHelpedText, 1, 1);
  alignText(teacherTestResult3NotHelpedText, teacher);
}

var heathersDislikeVeronica1Text = new Text("Uhh. I dislike that dork, Heather.", h1S(hCC));
function heathersDislikeVeronica1F() {
  hideSprite(teacher);
  hideSprite(veronica);
  hideSprite(chandler);
  hideSprite(duke);
  hideSprite(mcnamara);
  hideSprite(deskT);
  hideSprite(deskV);
  hideSprite(deskC);
  hideSprite(deskD);
  hideSprite(deskM);
  hideSprite(teacherTestResult3HelpedText);
  hideSprite(teacherTestResult3NotHelpedText);
  setTimeout(() => {
    chandler.scale.x = mcnamara.scale.x = -1;
    chandler.x = app.screen.width / 2
    duke.x = chandler.x - 200;
    mcnamara.x = chandler.x + 200;
    chandler.y = duke.y = mcnamara.y = veronica.y = teacher.y;
    showSprite(chandler);
    showSprite(duke);
    showSprite(mcnamara);
    setText(heathersDislikeVeronica1Text, 1, 1);
    alignText(heathersDislikeVeronica1Text, chandler, 150);
  }, 200);
}

var heathersDislikeVeronica2Text = new Text("Me too, Heather.", h1S(hDC));
function heathersDislikeVeronica2F() {
  hideSprite(heathersDislikeVeronica1Text);
  setText(heathersDislikeVeronica2Text, 1, 1);
  alignText(heathersDislikeVeronica2Text, duke, 150);
}

var heathersDislikeVeronica3Text = new Text("Let's go picking on her, Heather.", h1S(hMC));
function heathersDislikeVeronica3F() {
  hideSprite(heathersDislikeVeronica2Text);
  setText(heathersDislikeVeronica3Text, 1, 1);
  alignText(heathersDislikeVeronica3Text, mcnamara, 150);
}

function heathersGoPickOnVF() {
  hideSprite(heathersDislikeVeronica3Text);
  chandler.scale.x = mcnamara.scale.x = 1;
  move(chandler, app.screen.width + 200 + duke.width, chandler.y, 5000);
  move(duke, app.screen.width + duke.width, duke.y, 5000);
  move(mcnamara, app.screen.width + 400 + duke.width, mcnamara.y, 2000);
}

var chapterIIText = new PIXI.Text("Chapter II: The incident", h1S());
function chapterIIF() {
  hideSprite(heathersAcceptVeronica3Text);
  hideSprite(veronica);
  hideSprite(chandler);
  hideSprite(duke);
  hideSprite(mcnamara);
  chapterIIText.x = 40;
  chapterIIText.y = 20;
  chapterIIText.alpha = 0;
  chapterIIText.scale.set(1.2, 1.2);
  main.addChild(chapterIIText);
  showSprite(chapterIIText);
  document.title = "Seventeen: The incident";
}

var vFindHeathersBullyText = new PIXI.Text("Veronica finds Chi, a friend of her, being bullied by the Heathers.", h1S());
var chi = new Sprite(Texture("/assets/peeps/chi/shock.svg"));
function vFindHeathersBullyF() {
  setText(vFindHeathersBullyText, 1, 1);
  chandler = new Sprite(Texture("/assets/peeps/chandler/cruel.svg"));
  duke = new Sprite(Texture("/assets/peeps/duke/shifty.svg"));
  mcnamara = new Sprite(Texture("/assets/peeps/mcnamara/unpleasant.svg"));
  setTimeout(() => {
    hideSprite(chapterIIText);
    setObject(veronica, 1, 1);
    setObject(chi, 1, 1);
    setObject(chandler, 1, 1);
    setObject(duke, 1, 1);
    setObject(mcnamara, 1, 1);
    veronica.x = app.screen.width / 5;
    chi.x = app.screen.width / 2;
    chandler.x = app.screen.width / 2 + 300;
    duke.x = chandler.x + 200;
    mcnamara.x = chi.x - 200;
    veronica.y = chi.y = chandler.y = teacher.y + 100;
    duke.y = mcnamara.y = teacher.y - 100;
    move(veronica, app.screen.width / 4, veronica.y, 1000);
  }, 500);
}

var vFindHeathersBullyChooseText = new Text("What should Veronica do?", h1S());
var vStopThem = new PIXI.Container();
var vStopThemButton = new Button();
var reportToTeacher = new PIXI.Container();
var reportToTeacherButton = new Button();
var ignoreIt = new PIXI.Container();
var ignoreItButton = new Button();
var joinThem = new PIXI.Container();
var joinThemButton = new Button();
function vFindHeathersBullyChooseF() {
  hideSprite(vFindHeathersBullyText);
  timeout();
  setText(vFindHeathersBullyChooseText, 1, 1);

  vStopThem.x = app.screen.width / 4 - 150;
  vStopThem.y = app.screen.height - 160;
  vStopThem.alpha = 0;
  main.addChild(vStopThem);
  vStopThemButton.interactive = true;
  vStopThemButton.buttonMode = true;
  vStopThem.addChild(vStopThemButton);
  vStopThemButton.on("click", () => {
    timeout();
    vStopThemF();
  });
  var vStopThemText = new Text("Stop them", h2S);
  vStopThem.addChild(vStopThemText);
  vStopThemText.anchor.set(1, 0.5);
  vStopThemText.x = 280;
  vStopThemText.y = 40;
  var chi1 = new Sprite(Texture("/assets/peeps/chi/chi.svg"));
  vStopThem.addChild(chi1);
  chi1.anchor.set(0, 0.5);
  chi1.x = 20;
  chi1.y = 40;
  chi1.scale.set(0.3, 0.3);
  showSprite(vStopThem);

  reportToTeacher.x = (app.screen.width * 3) / 4 - 150;
  reportToTeacher.y = app.screen.height - 160;
  reportToTeacher.alpha = 0;
  main.addChild(reportToTeacher);
  reportToTeacherButton.interactive = true;
  reportToTeacherButton.buttonMode = true;
  reportToTeacher.addChild(reportToTeacherButton);
  reportToTeacherButton.on("click", () => {
    timeout();
    reportToTeacherF();
  });
  var reportToTeacherText = new Text("Report to teacher", h2S);
  reportToTeacher.addChild(reportToTeacherText);
  reportToTeacherText.anchor.set(1, 0.5);
  reportToTeacherText.x = 280;
  reportToTeacherText.y = 40;
  var teacher1 = new Sprite(Texture("/assets/people/vtl.svg"));
  reportToTeacher.addChild(teacher1);
  teacher1.anchor.set(0, 0.5);
  teacher1.x = 20;
  teacher1.y = 40;
  teacher1.scale.set(0.3, 0.3);
  showSprite(reportToTeacher);
  
  ignoreIt.x = app.screen.width / 4 - 150;
  ignoreIt.y = app.screen.height - 160 - 100;
  ignoreIt.alpha = 0;
  main.addChild(ignoreIt);
  ignoreItButton.interactive = true;
  ignoreItButton.buttonMode = true;
  ignoreIt.addChild(ignoreItButton);
  ignoreItButton.on("click", () => {
    timeout();
    ignoreItF();
  });
  var ignoreItText = new Text("Ignore", h2S);
  ignoreIt.addChild(ignoreItText);
  ignoreItText.anchor.set(1, 0.5);
  ignoreItText.x = 280;
  ignoreItText.y = 40;
  var vero1 = new Sprite(Texture("/assets/peeps/veronica/veronica.svg"));
  ignoreIt.addChild(vero1);
  vero1.anchor.set(0, 0.5);
  vero1.x = 20;
  vero1.y = 40;
  vero1.scale.set(0.3, 0.3);
  showSprite(ignoreIt);

  joinThem.x = (app.screen.width * 3) / 4 - 150;
  joinThem.y = app.screen.height - 160 - 100;
  joinThem.alpha = 0;
  main.addChild(joinThem);
  joinThemButton.interactive = true;
  joinThemButton.buttonMode = true;
  joinThem.addChild(joinThemButton);
  joinThemButton.on("click", () => {
    timeout();
    joinThemF();
  });
  var joinThemText = new Text("Join them", h2S);
  joinThem.addChild(joinThemText);
  joinThemText.anchor.set(1, 0.5);
  joinThemText.x = 280;
  joinThemText.y = 40;
  var vero2 = new Sprite(Texture("/assets/peeps/veronica/cruel.svg"));
  joinThem.addChild(vero2);
  vero2.anchor.set(0, 0.5);
  vero2.x = 20;
  vero2.y = 40;
  vero2.scale.set(0.3, 0.3);
  showSprite(joinThem);
}

var vStopThemText = new Text("No, stop!", h2S(vC));
function vStopThemF() {
  state = "vstopbully";
  hideSprite(vStopThem);
  hideSprite(reportToTeacher);
  hideSprite(ignoreIt);
  hideSprite(joinThem);
  hideSprite(vFindHeathersBullyChooseText);
  vStopThemButton.interactive = false;
  reportToTeacherButton.interactive = false;
  ignoreItButton.interactive = false;
  joinThemButton.interactive = false;
  move(veronica, app.screen.width / 3, veronica.y, 1000);
  setText(vStopThemText, 1, 1);
  alignText(vStopThemText, veronica, 150);
}

function reportToTeacherF() {
  state = "vreporttoteacher";
  hideSprite(vStopThem);
  hideSprite(reportToTeacher);
  hideSprite(ignoreIt);
  hideSprite(joinThem);
  hideSprite(vFindHeathersBullyChooseText);
  vStopThemButton.interactive = false;
  reportToTeacherButton.interactive = false;
  ignoreItButton.interactive = false;
  joinThemButton.interactive = false;
  veronica.scale.x = -1;
  move(veronica, -veronica.width, veronica.y, 2000);
}

function ignoreItF() {
  state = "vignoreit";
  hideSprite(vStopThem);
  hideSprite(reportToTeacher);
  hideSprite(ignoreIt);
  hideSprite(joinThem);
  hideSprite(vFindHeathersBullyChooseText);
  vStopThemButton.interactive = false;
  reportToTeacherButton.interactive = false;
  ignoreItButton.interactive = false;
  joinThemButton.interactive = false;
  veronica.scale.x = -1;
  move(veronica, -veronica.width, veronica.y, 2000);
}

var vJoinThemText = new Text("Ha ha ha", h2S(vC));
function joinThemF() {
  state = "vjoinbully";
  hideSprite(vStopThem);
  hideSprite(reportToTeacher);
  hideSprite(ignoreIt);
  hideSprite(joinThem);
  hideSprite(vFindHeathersBullyChooseText);
  vStopThemButton.interactive = false;
  reportToTeacherButton.interactive = false;
  ignoreItButton.interactive = false;
  joinThemButton.interactive = false;
  hideSprite(veronica);
  veronica = new Sprite(Texture("/assets/peeps/veronica/cruel.svg"));
  setObject(veronica, 1, 1);
  veronica.x = app.screen.width / 4;
  veronica.y = chi.y;
  move(veronica, app.screen.width / 3, veronica.y, 1000);
  setText(vJoinThemText, 1, 1);
  alignText(vJoinThemText, veronica, 150);
}