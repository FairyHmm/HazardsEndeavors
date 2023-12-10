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
  vC = "#3366FF",
  fC = "#cba6f7";
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

var state = "none";
var ending = "null";
var canTrigger = true;
const trigDur = 750;

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
        state = "paulinetest1-helped";
        paulineTest1F();
        break;
      }
      case "vtestnothelp":  {
        state = "paulinetest1-nothelped";
        paulineTest1F();
        break;
      }
      case "paulinetest1-helped":  {
        state = "paulinetest2-helped";
        paulineTest2F();
        break;
      }
      case "paulinetest1-nothelped":  {
        state = "paulinetest2-nothelped";
        paulineTest2F();
        break;
      }
      case "paulinetest2-helped":  {
        state = "paulinetest3-helped";
        paulineTest3HelpedF();
        break;
      }
      case "paulinetest2-nothelped":  {
        state = "paulinetest3-nothelped";
        paulineTest3NotHelpedF();
        break;
      }
      case "paulinetest3-helped":  {
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
      case "paulinetest3-nothelped":  {
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
        state = "heathersgopickonv";
        heathersGoPickOnVF();
        break;
      }
      case "heathersgopickonv":  {
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
      case "vjoinbully":  {
        state = "vjoinbullyc";
        vJoinBullyCF();
        break;
      }
      case "vjoinbullyc":  {
        state = "vjoinbullyd";
        vJoinBullyDF();
        break;
      }
      case "vjoinbullyd":  {
        state = "vjoinbullym";
        vJoinBullyMF();
        break;
      }
      case "vjoinbullym":  {
        state = "veronicabully1";
        veronicaBully1F();
        break;
      }
      case "veronicabully1":  {
        state = "veronicabully2";
        veronicaBully2F();
        break;
      }
      case "veronicabully2":  {
        state = "veronicabully3";
        veronicaBully3F();
        break;
      }
      case "veronicabully3":  {
        state = "bullyendingexplain";
        bullyEndingExplainF();
        break;
      }
      case "bullyendingexplain":  {
        state = "ending1";
        ending = "The bully";
        ending1F();
        break;
      }
      case "vstopbully":  {
        state = "vstopbullyC";
        vStopBullyCF();
        break;
      }
      case "vstopbullyC":  {
        state = "vstopbullyD";
        vStopBullyDF();
        break;
      }
      case "vstopbullyD":  {
        state = "vstopbullyM";
        vStopBullyMF();
        break;
      }
      case "vreporttopauline":  {
        state = "vreporttopauline2";
        reportToPauline2F();
        break;
      }
      case "vreporttopauline2":  {
        state = "vreporttopauline3";
        reportToPauline3F();
        break;
      }
      case "vignoreit":  {
        state = "vignoreit2";
        ignoreIt2F();
        break;
      }
      case "vignoreit2":  {
        state = "vignoreit3";
        ignoreIt3F();
        break;
      }
      case "vignoreit3":  {
        state = "vignoreit4";
        ignoreIt4F();
        break;
      }
      case "vbullied-pre":
      case "vstopbullyM":
      case "vreporttopauline3":
      case "vignoreit4": {
        state = "vcontinuebeingbullied";
        vContinueBeingBulliedF();
        break;
      }
      case "vcontinuebeingbullied":  {
        state = "vcontinuebulliedchoose";
        vContinueBulliedChooseF();
        break;
      }
      case "vstaysilence":  {
        state = "bullyingcontinues";
        bullyingContinuesF();
        break;
      }
      case "bullyingcontinues":  {
        state = "bullyingcontinues2choose";
        vContinueBullied2ChooseF();
        break;
      }
      case "vtellpauline2":  {
        state = "vtellpauline3";
        vTellPauline3F();
        break;
      }
      case "vtellpauline3":  {
        state = "heathersupsetveroc";
        heathersUpsetVeroCF();
        break;
      }
      case "heathersupsetveroc":  {
        state = "heathersupsetverod";
        heathersUpsetVeroDF();
        break;
      }
      case "heathersupsetverod":  {
        state = "heathersupsetverom";
        heathersUpsetVeroMF();
        break;
      }
      case "heathersupsetverom":  {
        state = "heathersfightvero1";
        heathersFightVero1F();
        break;
      }
      case "heathersfightvero1":  {
        state = "heathersfightvero2";
        heathersFightVero2F();
        break;
      }
      case "heathersfightvero2":  {
        state = "heathersfightvero3";
        heathersFightVero3F();
        break;
      }
      case "vstaysilence2":  {
        state = "vstaysilence2choose";
        vstaysilence2ChooseF();
        break;
      }
      case "vtellparents22":  {
        state = "cynthiaunderstands1";
        cynthiaUnderstands1F();
        break;
      }
      case "vtellparents22":  {
        state = "cynthiaunderstands2";
        cynthiaUnderstands2F();
        break;
      }
      case "cynthiaunderstands2":  {
        state = "assistedexplain";
        ending = "The assisted";
        assistedEndingExplainF();
        break;
      }
      case "helpedexplain":  {
        state = "ending1";
        ending1();
        break;
      }
      case "heathersfightvero3":
      case "vfightback":
      case "vtellparents":  {
        state = "vtellparents2";
        vTellParents2F();
        break;
      }
      case "vtellparents2":  {
        state = "chapterIII";
        chapterIIIF();
        break;
      }
      case "chapterIII":  {
        state = "moveschool";
        moveSchoolF();
        break;
      }
      case "ending1":  {
        state = "ending2";
        ending2F();
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
  veronica.x = app.screen.width / 3;
  veronica.y = app.screen.height / 2;
  westerburg.x = app.screen.width * 3 / 4;
  westerburg.y = veronica.y - veronica.height/2;
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

var pauline = new Sprite(Texture("/assets/peeps/pauline.svg"));
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
    setObject(pauline, 1, 1);
    pauline.scale.x = -1;
    chandler.scale.x = duke.scale.x = mcnamara.scale.x = 1;
    pauline.y = veronica.y;
    pauline.x = app.screen.width * 3 / 4;
    veronica.x = chandler.x = app.screen.width / 2;
    veronica.y = duke.y = app.screen.height / 3;
    chandler.y = mcnamara.y = app.screen.height * 2 / 3;
    duke.x = mcnamara.x = veronica.x - 300;
    setText(deskT, 1, 1);
    deskT.scale.x = -1;
    alignText(deskT, pauline, -30);
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
  alignText(questionText, pauline);
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

var paulineCallText = new Text("Yes, Veronica, what is it?", h1S(tC));
function vanswer2F() {
  hideSprite(vAnswerText);
  setText(paulineCallText, 1, 1);
  alignText(paulineCallText, pauline, 150);
}

var vAnswer2Text = new Text("It is 110!", h1S(vC));
function vanswer3F() {
  hideSprite(paulineCallText);
  setText(vAnswer2Text, 1, 1);
  alignText(vAnswer2Text, veronica, 150);
}

var paulineCall2Text = new Text("Great job Veronica!\nYou get extra credits.", h1S(tC));
function vanswer4F() {
  hideSprite(vAnswer2Text);
  setText(paulineCall2Text, 1, 1);
  alignText(paulineCall2Text, pauline);
}

var whatANerdText = new Text("What a nerd.", h1S(hCC));
function classLaughF() {
  hideSprite(paulineCall2Text);
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

var paulinePassText = new Text("No one wants to answer?\nAlright, let's move on.", h1S(tC));
function vNotAnswerF() {
  state = "vnotanswer";
  hideSprite(vAnswer);
  hideSprite(vNotAnswer);
  hideSprite(vAnswerChooseText);
  vAnswerButton.interactive = false;
  vNotAnswerButton.interactive = false;
  setText(paulinePassText, 1, 1);
  alignText(paulinePassText, pauline);
}

var lunchTimeText = new Text("It's lunch time.", h1S());
function lunch1F() {
  hideSprite(paulinePassText);
  hideSprite(hahaCText);
  hideSprite(hahaDText);
  hideSprite(hahaMText);
  hideSprite(pauline);
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
    veronica.y = chandler.y = duke.y = mcnamara.y = pauline.y;
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

var cLunchYesText = new Text("Oh, yes, totally!", h1S(hCC));
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

var fromThenOnText = new Text("From then on, Veronica finds herself being the subject of bullying.", h1S());
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
    veronica.y = chandler.y = pauline.y + 100;
    duke.y = mcnamara.y = pauline.y - 100;
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
    showSprite(pauline);
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
    veronica.y = pauline.y;
    veronica.x = chandler.x = app.screen.width / 2;
    veronica.y = duke.y = app.screen.height / 3;
    chandler.y = mcnamara.y = app.screen.height * 2 / 3;
    duke.x = mcnamara.x = veronica.x - 300;
    alignText(deskT, pauline, -70);
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

var paulineTestResult1Text = new Text("Alright, class.\nThe results are in.", h1S(tC));
function paulineTest1F() {
  hideSprite(vHelpHeathersText);
  hideSprite(vNotHelpHeathersText);
  hideSprite(main);
  setTimeout(() => {
    showSprite(main);
    setText(paulineTestResult1Text, 1, 1);
    alignText(paulineTestResult1Text, pauline)
  }, 500);
}

var paulineTestResult2Text = new Text("Veronica.\nA perfect A+!", h1S(tC));
function paulineTest2F() {
  hideSprite(paulineTestResult1Text);
  setText(paulineTestResult2Text, 1, 1);
  alignText(paulineTestResult2Text, pauline);
}

var paulineTestResult3HelpedText = new Text("And the Heathers.\nA for each of you!\nGood jobs!", h1S(tC));
function paulineTest3HelpedF() {
  hideSprite(paulineTestResult2Text);
  setText(paulineTestResult3HelpedText, 1, 1);
  alignText(paulineTestResult3HelpedText, pauline);
}

var heathersAcceptVeronica1Text = new Text("Hey, Veronica!", h1S(hCC));
function heathersAcceptVeronica1F() {
  hideSprite(pauline);
  hideSprite(veronica);
  hideSprite(chandler);
  hideSprite(duke);
  hideSprite(mcnamara);
  hideSprite(deskT);
  hideSprite(deskV);
  hideSprite(deskC);
  hideSprite(deskD);
  hideSprite(deskM);
  hideSprite(paulineTestResult3HelpedText);
  hideSprite(paulineTestResult3NotHelpedText);
  setTimeout(() => {
    veronica.x = app.screen.width / 3;
    chandler.scale.x = duke.scale.x = mcnamara.scale.x = -1;
    chandler.x = app.screen.width * 2 / 3 - 150;
    duke.x = chandler.x + 120;
    mcnamara.x = chandler.x + 240;
    chandler.y = duke.y = mcnamara.y = veronica.y = pauline.y;
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

var paulineTestResult3NotHelpedText = new Text("And the Heathers.\nD for each of you.\nYou need to do better.", h1S(tC));
function paulineTest3NotHelpedF() {
  hideSprite(paulineTestResult2Text);
  setText(paulineTestResult3NotHelpedText, 1, 1);
  alignText(paulineTestResult3NotHelpedText, pauline);
}

var heathersDislikeVeronica1Text = new Text("Ugh. I dislike that dork, Heather.", h1S(hCC));
function heathersDislikeVeronica1F() {
  hideSprite(pauline);
  hideSprite(veronica);
  hideSprite(chandler);
  hideSprite(duke);
  hideSprite(mcnamara);
  hideSprite(deskT);
  hideSprite(deskV);
  hideSprite(deskC);
  hideSprite(deskD);
  hideSprite(deskM);
  hideSprite(paulineTestResult3HelpedText);
  hideSprite(paulineTestResult3NotHelpedText);
  setTimeout(() => {
    chandler.scale.x = mcnamara.scale.x = -1;
    chandler.x = app.screen.width / 2
    duke.x = chandler.x - 200;
    mcnamara.x = chandler.x + 200;
    chandler.y = duke.y = mcnamara.y = veronica.y = pauline.y;
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

var heathersDislikeVeronica3Text = new Text("Let's go picking on her, Heather!", h1S(hMC));
function heathersDislikeVeronica3F() {
  hideSprite(heathersDislikeVeronica2Text);
  setText(heathersDislikeVeronica3Text, 1, 1);
  alignText(heathersDislikeVeronica3Text, mcnamara, 150);
}

function heathersGoPickOnVF() {
  hideSprite(heathersDislikeVeronica3Text);
  chandler.scale.x = mcnamara.scale.x = 1;
  move(chandler, app.screen.width + 200 + duke.width, chandler.y, 2000);
  move(duke, app.screen.width + duke.width, duke.y, 2000);
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
  hideSprite(chapterIIText);
  chandler = new Sprite(Texture("/assets/peeps/chandler/cruel.svg"));
  duke = new Sprite(Texture("/assets/peeps/duke/shifty.svg"));
  mcnamara = new Sprite(Texture("/assets/peeps/mcnamara/unpleasant.svg"));
  setTimeout(() => {
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
    veronica.y = chi.y = chandler.y = pauline.y + 100;
    duke.y = mcnamara.y = pauline.y - 100;
    move(veronica, app.screen.width / 4, veronica.y, 1000);
  }, 200);
}

var vFindHeathersBullyChooseText = new Text("What should Veronica do?", h1S());
var vStopThem = new PIXI.Container();
var vStopThemButton = new Button();
var reportToPauline = new PIXI.Container();
var reportToPaulineButton = new Button();
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

  reportToPauline.x = (app.screen.width * 3) / 4 - 150;
  reportToPauline.y = app.screen.height - 160;
  reportToPauline.alpha = 0;
  main.addChild(reportToPauline);
  reportToPaulineButton.interactive = true;
  reportToPaulineButton.buttonMode = true;
  reportToPauline.addChild(reportToPaulineButton);
  reportToPaulineButton.on("click", () => {
    timeout();
    reportToPaulineF();
  });
  var reportToPaulineText = new Text("Report to teacher", h2S);
  reportToPauline.addChild(reportToPaulineText);
  reportToPaulineText.anchor.set(1, 0.5);
  reportToPaulineText.x = 280;
  reportToPaulineText.y = 40;
  var pauline1 = new Sprite(Texture("/assets/peeps/pauline.svg"));
  reportToPauline.addChild(pauline1);
  pauline1.anchor.set(0, 0.5);
  pauline1.x = 20;
  pauline1.y = 40;
  pauline1.scale.set(0.3, 0.3);
  showSprite(reportToPauline);
  
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

var vStopThemText = new Text("No, stop!", h1S(vC));
function vStopThemF() {
  state = "vstopbully";
  hideSprite(vStopThem);
  hideSprite(reportToPauline);
  hideSprite(ignoreIt);
  hideSprite(joinThem);
  hideSprite(vFindHeathersBullyChooseText);
  vStopThemButton.interactive = false;
  reportToPaulineButton.interactive = false;
  ignoreItButton.interactive = false;
  joinThemButton.interactive = false;
  move(veronica, app.screen.width / 3, veronica.y, 1000);
  setText(vStopThemText, 1, 1);
  alignText(vStopThemText, veronica, 150);
}

var vStopBullyCText = new Text("Are we gonna have a problem?", h1S(hCC));
function vStopBullyCF() {
  hideSprite(vStopThemText);
  setText(vStopBullyCText, 1, 1);
  alignText(vStopBullyCText, chandler, 150);
}

var vStopBullyDText = new Text("You got a bone to pick?", h1S(hDC));
function vStopBullyDF() {
  hideSprite(vStopBullyCText);
  setText(vStopBullyDText, 1, 1);
  alignText(vStopBullyDText, duke, 150);
}

var vStopBullyMText = new Text("I think you should get away, Veronica.", h1S(hMC));
function vStopBullyMF() {
  hideSprite(vStopBullyDText);
  setText(vStopBullyMText, 1, 1);
  alignText(vStopBullyMText, mcnamara, 150);
}

function reportToPaulineF() {
  state = "vreporttopauline";
  hideSprite(vStopThem);
  hideSprite(reportToPauline);
  hideSprite(ignoreIt);
  hideSprite(joinThem);
  hideSprite(vFindHeathersBullyChooseText);
  vStopThemButton.interactive = false;
  reportToPaulineButton.interactive = false;
  ignoreItButton.interactive = false;
  joinThemButton.interactive = false;
  veronica.scale.x = -1;
  move(veronica, -veronica.width, veronica.y, 2000);
}

function reportToPauline2F() {
  pauline.y = mcnamara.y;
  pauline.x = veronica.x;
  pauline.scale.x = 1;
  veronica.scale.x = 1;
  showSprite(pauline);
  move(veronica, app.screen.width/4, veronica.y, 2000);
  move(pauline, app.screen.width/4, pauline.y, 2000);
  hideSprite(chandler);
  hideSprite(duke);
  chandler = new Sprite(Texture("/assets/peeps/chandler/chandler.svg"));
  duke = new Sprite(Texture("/assets/peeps/duke/duke.svg"));
  setTimeout(() => {
    chandler.scale.x = duke.scale.x = -1;
    setObject(chandler, 1, 1);
    setObject(duke, 1, 1);
    chandler.x = app.screen.width / 2 + 300;
    duke.x = chandler.x + 200;
    chandler.y = veronica.y
    duke.y = mcnamara.y;
  }, 100);
}

var reportToPauline3Text = new Text("Well, well, well.\nIsn't it the Heathers?", h1S(tC));
function reportToPauline3F() {
  setText(reportToPauline3Text, 1, 1);
  alignText(reportToPauline3Text, pauline);
}

function ignoreItF() {
  state = "vignoreit";
  hideSprite(vStopThem);
  hideSprite(reportToPauline);
  hideSprite(ignoreIt);
  hideSprite(joinThem);
  hideSprite(vFindHeathersBullyChooseText);
  vStopThemButton.interactive = false;
  reportToPaulineButton.interactive = false;
  ignoreItButton.interactive = false;
  joinThemButton.interactive = false;
  veronica.scale.x = -1;
  move(veronica, -veronica.width, veronica.y, 2000);
}

function ignoreIt2F() {
  pauline.y = mcnamara.y;
  pauline.x = veronica.x;
  pauline.scale.x = 1;
  showSprite(pauline);
  move(pauline, app.screen.width/4, pauline.y, 2000);
  hideSprite(chandler);
  hideSprite(duke);
  chandler = new Sprite(Texture("/assets/peeps/chandler/chandler.svg"));
  duke = new Sprite(Texture("/assets/peeps/duke/duke.svg"));
  setTimeout(() => {
    chandler.scale.x = duke.scale.x = -1;
    setObject(chandler, 1, 1);
    setObject(duke, 1, 1);
    chandler.x = app.screen.width / 2 + 300;
    duke.x = chandler.x + 200;
    chandler.y = veronica.y
    duke.y = mcnamara.y;
  }, 100);
}

function ignoreIt3F() {
  setText(reportToPauline3Text, 1, 1);
  alignText(reportToPauline3Text, pauline);
}

var ignoreIt4CText = new Text("It's Veronica!", h1S(hCC));
var ignoreIt4DText = new Text("It's Veronica!", h1S(hDC));
function ignoreIt4F() {
  hideSprite(reportToPauline3Text);
  setText(ignoreIt4CText, 1, 1);
  alignText(ignoreIt4CText, chandler, 150);
  setText(ignoreIt4DText, 1, 1);
  alignText(ignoreIt4DText, duke, 150);
}

var vJoinThemText = new Text("Ha ha ha", h1S(vC));
function joinThemF() {
  state = "vjoinbully";
  hideSprite(vStopThem);
  hideSprite(reportToPauline);
  hideSprite(ignoreIt);
  hideSprite(joinThem);
  hideSprite(vFindHeathersBullyChooseText);
  vStopThemButton.interactive = false;
  reportToPaulineButton.interactive = false;
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

var vJoinBullyCText = new Text("You know what, Veronica?", h1S(hCC));
function vJoinBullyCF() {
  hideSprite(veronica);
  hideSprite(chi);
  hideSprite(chandler);
  hideSprite(duke);
  hideSprite(mcnamara);
  hideSprite(vJoinThemText);
  veronica = new Sprite(Texture("/assets/peeps/veronica/veronica.svg"));
  chandler = new Sprite(Texture("/assets/peeps/chandler/chandler.svg"));
  duke = new Sprite(Texture("/assets/peeps/duke/duke.svg"));
  mcnamara = new Sprite(Texture("/assets/peeps/mcnamara/mcnamara.svg"));
  setTimeout(() => {
    chandler.scale.x = duke.scale.x = mcnamara.scale.x = -1;
    veronica.y = chandler.y = duke.y = mcnamara.y = pauline.y;
    chandler.x = app.screen.width * 3 / 5;
    duke.x = chandler.x + 200;
    mcnamara.x = chandler.x + 400;
    veronica.x = app.screen.width / 4;
    move(veronica, app.screen.width / 3, veronica.y, 2000);
    setObject(veronica, 1, 1);
    setObject(chandler, 1, 1);
    setObject(duke, 1, 1);
    setObject(mcnamara, 1, 1);
    setText(vJoinBullyCText, 1, 1);
    alignText(vJoinBullyCText, chandler, 150);
  }, 200);
}

var vJoinBullyDText = new Text("You seem pretty cool.", h1S(hDC));
function vJoinBullyDF() {
  hideSprite(vJoinBullyCText);
  setText(vJoinBullyDText, 1, 1);
  alignText(vJoinBullyDText, duke, 150);
}

var vJoinBullyMText = new Text("You can join\nour group!", h1S(hMC));
function vJoinBullyMF() {
  hideSprite(vJoinBullyDText);
  setText(vJoinBullyMText, 1, 1);
  alignText(vJoinBullyMText, mcnamara);
}

var veronicaBully1Text = new Text("From then on, Veronica becomes one of the Heathers.", h1S());
function veronicaBully1F() {
  hideSprite(vJoinBullyMText);
  setText(veronicaBully1Text, 1, 1);
  hideSprite(veronica);
  hideSprite(chandler);
  hideSprite(duke);
  hideSprite(mcnamara);
  chandler = new Sprite(Texture("/assets/peeps/chandler/cruel.svg"));
  duke = new Sprite(Texture("/assets/peeps/duke/shifty.svg"));
  mcnamara = new Sprite(Texture("/assets/peeps/mcnamara/unpleasant.svg"));
  setTimeout(() => {
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
    veronica.y = chi.y = chandler.y = pauline.y + 100;
    duke.y = mcnamara.y = pauline.y - 100;
    move(veronica, app.screen.width / 4, veronica.y, 1000);
  }, 200);
}

var veronicaBully2Text = new Text("Bullying other students.", h1S());
function veronicaBully2F() {
  hideSprite(veronicaBully1Text);
  hideSprite(veronica);
  veronica = new Sprite(Texture("/assets/peeps/veronica/cruel.svg"));
  setTimeout(() => {
    setText(veronicaBully2Text, 1, 1);
    setObject(veronica, 1, 1);
    veronica.y = chi.y;
    veronica.x = app.screen.width / 4;
    move(veronica, app.screen.width / 3, veronica.y, 1000);
  }, 200);
}

var veronicaBully3Text = new Text("Is this the best for her?", h1S());
function veronicaBully3F() {
  hideSprite(veronicaBully2Text);
  setText(veronicaBully3Text, 1, 1);
  move(chi, app.screen.width + chi.width, chi.y, 10000);
}

var vContinueBeingBulliedText = new Text("Veronica finds herself being bullied yet again.", h1S());
function vContinueBeingBulliedF() {
  hideSprite(chapterIIText);
  hideSprite(vStopBullyMText);
  hideSprite(reportToPauline3Text);
  hideSprite(ignoreIt4CText);
  hideSprite(ignoreIt4DText);
  hideSprite(chi);
  hideSprite(pauline);
  hideSprite(veronica);
  hideSprite(chandler);
  hideSprite(duke);
  hideSprite(mcnamara);
  setText(vContinueBeingBulliedText, 1, 1);
  veronica = new Sprite(Texture("/assets/peeps/veronica/shock.svg"));
  chandler = new Sprite(Texture("/assets/peeps/chandler/cruel.svg"));
  duke = new Sprite(Texture("/assets/peeps/duke/shifty.svg"));
  mcnamara = new Sprite(Texture("/assets/peeps/mcnamara/unpleasant.svg"));
  setTimeout(() => {
    setObject(veronica, 1, 1);
    setObject(chandler, 1, 1);
    setObject(duke, 1, 1);
    setObject(mcnamara, 1, 1);
    veronica.x = app.screen.width / 2 - 150;
    chandler.x = app.screen.width / 2 + 150;
    duke.x = chandler.x + 200;
    mcnamara.x = veronica.x - 200;
    veronica.y = chandler.y = app.screen.height / 2 + 100;
    duke.y = mcnamara.y = app.screen.height / 2 - 100;
  }, 500);
}

var vContinueBulliedChooseText = new Text("What should Veronica do?", h1S());
var vStaySilence = new PIXI.Container();
var vStaySilenceButton = new Button();
var vTellParents = new PIXI.Container();
var vTellParentsButton = new Button();
function vContinueBulliedChooseF() {
  hideSprite(vContinueBeingBulliedText);
  hideSprite(chandler);
  hideSprite(duke);
  hideSprite(mcnamara);
  hideSprite(hMAskText);
  timeout();
  setText(vContinueBulliedChooseText, 1, 1);

  vStaySilence.x = app.screen.width / 4 - 150;
  vStaySilence.y = app.screen.height - 160;
  vStaySilence.alpha = 0;
  main.addChild(vStaySilence);
  vStaySilenceButton.interactive = true;
  vStaySilenceButton.buttonMode = true;
  vStaySilence.addChild(vStaySilenceButton);
  vStaySilenceButton.on("click", () => {
    timeout();
    vStaySilenceF();
  });
  var vStaySilenceText = new Text("Stay silence", h2S);
  vStaySilence.addChild(vStaySilenceText);
  vStaySilenceText.anchor.set(1, 0.5);
  vStaySilenceText.x = 280;
  vStaySilenceText.y = 40;
  var vero = new Sprite(Texture("/assets/peeps/veronica/veronica.svg"));
  vStaySilence.addChild(vero);
  vero.anchor.set(0, 0.5);
  vero.x = 20;
  vero.y = 40;
  vero.scale.set(0.3, 0.3);
  showSprite(vStaySilence);

  vTellParents.x = (app.screen.width * 3) / 4 - 150;
  vTellParents.y = app.screen.height - 160;
  vTellParents.alpha = 0;
  main.addChild(vTellParents);
  vTellParentsButton.interactive = true;
  vTellParentsButton.buttonMode = true;
  vTellParents.addChild(vTellParentsButton);
  vTellParentsButton.on("click", () => {
    timeout();
    vTellParentsF();
  });
  var vTellParentsText = new Text("Tell parents", h2S);
  vTellParents.addChild(vTellParentsText);
  vTellParentsText.anchor.set(1, 0.5);
  vTellParentsText.x = 280;
  vTellParentsText.y = 40;
  var mom = new Sprite(Texture("/assets/peeps/cynthia.svg"));
  vTellParents.addChild(mom);
  mom.anchor.set(0, 0.5);
  mom.x = 20;
  mom.y = 40;
  mom.scale.set(0.3, 0.3);
  showSprite(vTellParents);
}

var cynthia = new Sprite(Texture("/assets/peeps/cynthia.svg"));
function vTellParentsF() {
  state = "vtellparents";
  hideSprite(vStaySilence);
  hideSprite(vTellParents);
  hideSprite(vContinueBulliedChooseText);
  vAnswerButton.interactive = false;
  vTellParentsButton.interactive = false;
  hideSprite(veronica);
  veronica = new Sprite(Texture("/assets/peeps/veronica/worried.svg"));
  setTimeout(() => {
    veronica.x = app.screen.width/2 - 100;
    cynthia.x = app.screen.width/2 + 100;
    cynthia.scale.x = -1;
    veronica.y = cynthia.y = app.screen.height/2;
    setObject(veronica, 1, 1);
    setObject(cynthia, 1, 1);
  }, 200);
}

var cynthiaToldText = new Text("This cannot continue.", h1S(hMC));
function vTellParents2F() {
  veronica.x = app.screen.width/2 - 100;
  cynthia.x = app.screen.width/2 + 100;
  cynthia.scale.x = -1;
  veronica.y = cynthia.y = app.screen.height/2;
  setObject(veronica, 1, 1);
  setObject(cynthia, 1, 1);
  hideSprite(fightBack);
  setText(cynthiaToldText, 1, 1);
  alignText(cynthiaToldText, cynthia, 150);
}

function vStaySilenceF() {
  state = "vstaysilence";
  hideSprite(vStaySilence);
  hideSprite(vTellParents);
  hideSprite(vContinueBulliedChooseText);
  vStaySilenceButton.interactive = false;
  vTellParentsButton.interactive = false;
  hideSprite(veronica);
  veronica = new Sprite(Texture("/assets/peeps/veronica/worried.svg"));
  setTimeout(() => {
    veronica.x = app.screen.width/2;
    veronica.y = app.screen.height/2;
    setObject(veronica, 1, 1);
  }, 200);
}

var bullyingContinuesText = new Text("The bullying continues.", h1S());
function bullyingContinuesF() {
  move(veronica, app.screen.width/3, veronica.y, 1000);
  chandler.y = duke.y = mcnamara.y = veronica.y;
  chandler.x = app.screen.width*2/3 - 100;
  duke.x = chandler.x + 150;
  mcnamara.x = chandler.x + 300;
  mcnamara.scale.x = -1;
  setObject(chandler, 1, 1);
  setObject(duke, 1, 1);
  setObject(mcnamara, 1, 1);
  setText(bullyingContinuesText, 1, 1);
}

var vContinueBullied2ChooseText = new Text("What should Veronica do?", h1S());
var vStaySilence2 = new PIXI.Container();
var vStaySilence2Button = new Button();
var vFightBack = new PIXI.Container();
var vFightBackButton = new Button();
var vTellPauline2 = new PIXI.Container();
var vTellPauline2Button = new Button();
function vContinueBullied2ChooseF() {
  hideSprite(bullyingContinuesText);
  hideSprite(hMAskText);
  timeout();
  setText(vContinueBullied2ChooseText, 1, 1);

  vStaySilence2.x = app.screen.width / 4 - 150;
  vStaySilence2.y = app.screen.height - 160;
  vStaySilence2.alpha = 0;
  main.addChild(vStaySilence2);
  vStaySilence2Button.interactive = true;
  vStaySilence2Button.buttonMode = true;
  vStaySilence2.addChild(vStaySilence2Button);
  vStaySilence2Button.on("click", () => {
    timeout();
    vStaySilence2F();
  });
  var vStaySilence2Text = new Text("Stay silence", h2S);
  vStaySilence2.addChild(vStaySilence2Text);
  vStaySilence2Text.anchor.set(1, 0.5);
  vStaySilence2Text.x = 280;
  vStaySilence2Text.y = 40;
  var vero = new Sprite(Texture("/assets/peeps/veronica/veronica.svg"));
  vStaySilence2.addChild(vero);
  vero.anchor.set(0, 0.5);
  vero.x = 20;
  vero.y = 40;
  vero.scale.set(0.3, 0.3);
  showSprite(vStaySilence2);

  vFightBack.x = (app.screen.width * 3) / 4 - 150;
  vFightBack.y = app.screen.height - 160;
  vFightBack.alpha = 0;
  main.addChild(vFightBack);
  vFightBackButton.interactive = true;
  vFightBackButton.buttonMode = true;
  vFightBack.addChild(vFightBackButton);
  vFightBackButton.on("click", () => {
    timeout();
    vFightBackF();
  });
  var vFightBackText = new Text("Fight back", h2S);
  vFightBack.addChild(vFightBackText);
  vFightBackText.anchor.set(1, 0.5);
  vFightBackText.x = 280;
  vFightBackText.y = 40;
  var fight = new Sprite(Texture("/aassets/games/school/fight.svg"));
  vFightBack.addChild(fight);
  fight.anchor.set(0, 0.5);
  fight.x = 20;
  fight.y = 40;
  fight.scale.set(0.3, 0.3);
  showSprite(vFightBack);
  
  vTellPauline2.x = app.screen.width / 2 - 150;
  vTellPauline2.y = app.screen.height - 160;
  vTellPauline2.alpha = 0;
  main.addChild(vTellPauline2);
  vTellPauline2Button.interactive = true;
  vTellPauline2Button.buttonMode = true;
  vTellPauline2.addChild(vTellPauline2Button);
  vTellPauline2Button.on("click", () => {
    timeout();
    vTellPauline2F();
  });
  var vTellPauline2Text = new Text("Tell teacher", h2S);
  vTellPauline2.addChild(vTellPauline2Text);
  vTellPauline2Text.anchor.set(1, 0.5);
  vTellPauline2Text.x = 280;
  vTellPauline2Text.y = 40;
  var pauline2 = new Sprite(Texture("/assets/peeps/pauline.svg"));
  vTellPauline2.addChild(pauline2);
  pauline2.anchor.set(0, 0.5);
  pauline2.x = 20;
  pauline2.y = 40;
  pauline2.scale.set(0.3, 0.3);
  showSprite(vTellPauline2);
}

function vTellPauline2F() {
  state = "vtellpauline2";
  hideSprite(vStaySilence2);
  hideSprite(vFightBack);
  hideSprite(vTellPauline2);
  hideSprite(vContinueBullied2ChooseText);
  vStaySilence2Button.interactive = false;
  vFightBackButton.interactive = false;
  vTellPauline2Button.interactive = false;
  hideSprite(chandler);
  hideSprite(duke);
  hideSprite(mcnamara);
  setObject(pauline, 1, 1);
  pauline.x = app.screen.width*2/3;
  pauline.y = veronica.y;
  move(veronica, app.screen.width/3, veronica.y, 500);
}

var vTellPauline3Text = new Text("I understand.", h1S(tC));
function vTellPauline3F() {
  setText(vTellPauline3Text, 1, 1);
  alignText(vTellPauline3Text, pauline, 150);
}

var heathersUpsetVeroCText = new Text("Ugh, that dork got us in trouble again, Heather.", h1S(hCC));
function heathersUpsetVeroCF() {
  hideSprite(vTellPauline3Text);
  hideSprite(veronica);
  hideSprite(pauline);
  chandler = new Sprite(Texture("/assets/peeps/chandler/chandler.svg"))
  duke = new Sprite(Texture("/assets/peeps/duke/duke.svg"))
  mcnamara = new Sprite(Texture("/assets/peeps/mcnamara/mcnamara.svg"))
  chandler.scale.x = mcnamara.scale.x = -1;
  chandler.x = app.screen.width / 2
  duke.x = chandler.x - 200;
  mcnamara.x = chandler.x + 200;
  chandler.y = duke.y = mcnamara.y = veronica.y = pauline.y;
  setObject(chandler, 1, 1);
  setObject(duke, 1, 1);
  setObject(mcnamara, 1, 1);
  setText(heathersUpsetVeroCText, 1, 1);
  alignText(heathersUpsetVeroCText, chandler, 150);
}

var heathersUpsetVeroDText = new Text("Yes Heather, I wanna get revenge.", h1S(hDC));
function heathersUpsetVeroDF() {
  hideSprite(heathersUpsetVeroCText);
  setText(heathersUpsetVeroDText, 1, 1);
  alignText(heathersUpsetVeroDText, duke, 150);
}

var heathersUpsetVeroMText = new Text("Let's go picking on her, Heather!", h1S(hMC));
function heathersUpsetVeroMF() {
  hideSprite(heathersUpsetVeroDText);
  setText(heathersUpsetVeroMText, 1, 1);
  alignText(heathersUpsetVeroMText, mcnamara, 150);
}

function heathersFightVero1F() {
  hideSprite(heathersUpsetVeroMText);
  chandler.scale.x = mcnamara.scale.x = 1;
  move(chandler, app.screen.width + 200 + duke.width, chandler.y, 1000);
  move(duke, app.screen.width + duke.width, duke.y, 1000);
  move(mcnamara, app.screen.width + 400 + duke.width, mcnamara.y, 1000);
}

function heathersFightVero2F() {
  veronica.scale.x = chandler.scale.x = duke.scale.x = mcnamara.scale.x = -1;
  chandler.x = app.screen.width * 2 / 3 - 100;
  veronica.x = app.screen.width / 3;
  duke.x = chandler.x + 120;
  mcnamara.x = chandler.x + 240;
  chandler.y = duke.y = mcnamara.y = veronica.y;
  showSprite(veronica);
  showSprite(chandler);
  showSprite(duke);
  showSprite(mcnamara);
}

function heathersFightVero3F() {
  move(chandler, app.screen.width/3+10, chandler.y, 500);
  move(duke, app.screen.width/3+10, duke.y, 500);
  move(mcnamara, app.screen.width/3+10, mcnamara.y, 500);
  fightBack.x = veronica.x;
  fightBack.y = veronica.y;
  setTimeout(() => {
    hideSprite(veronica);
    hideSprite(chandler);
    hideSprite(duke);
    hideSprite(mcnamara);
    setObject(fightBack, 1, 1);
  }, 300);
}

var fightBack = new Sprite(Texture("/assets/games/school/fight.svg"));
function vFightBackF() {
  state = "vfightback";
  hideSprite(vStaySilence2);
  hideSprite(vFightBack);
  hideSprite(vTellPauline2);
  hideSprite(vContinueBullied2ChooseText);
  vStaySilence2Button.interactive = false;
  vFightBackButton.interactive = false;
  vTellPauline2Button.interactive = false;
  fightBack.x = app.screen.width/2;
  fightBack.y = veronica.y;
  move(veronica, app.screen.width/2-10, veronica.y, 500);
  move(chandler, app.screen.width/2+10, chandler.y, 500);
  move(duke, app.screen.width/2+10, duke.y, 500);
  move(mcnamara, app.screen.width/2+10, mcnamara.y, 500);
  setTimeout(() => {
    hideSprite(veronica);
    hideSprite(chandler);
    hideSprite(duke);
    hideSprite(mcnamara);
    setObject(fightBack, 1, 1);
  }, 300);
}

var vStaySilence2Text = new PIXI.Text("Veronica's performance at school keeps dropping. Her parents are not happy.", h1S());
function vStaySilence2F() {
  state = "vstaysilence2";
  hideSprite(vStaySilence2);
  hideSprite(vFightBack);
  hideSprite(vTellPauline2);
  hideSprite(vContinueBullied2ChooseText);
  vStaySilence2Button.interactive = false;
  vFightBackButton.interactive = false;
  vTellPauline2Button.interactive = false;
  hideSprite(chandler);
  hideSprite(duke);
  hideSprite(mcnamara);
  move(veronica, app.screen.width/2, veronica.y, 500);
  setText(vStaySilence2Text, 1, 1);
}

var vstaysilence2ChooseText = new Text("What should Veronica do?", h1S());
var vStaySilence3 = new PIXI.Container();
var vStaySilence3Button = new Button();
var vTellParents22 = new PIXI.Container();
var vTellParents22Button = new Button();
function vstaysilence2ChooseF() {
  timeout();
  setText(vstaysilence2ChooseText, 1, 1);

  vStaySilence3.x = app.screen.width / 4 - 150;
  vStaySilence3.y = app.screen.height - 160;
  vStaySilence3.alpha = 0;
  main.addChild(vStaySilence3);
  vStaySilence3Button.interactive = true;
  vStaySilence3Button.buttonMode = true;
  vStaySilence3.addChild(vStaySilence3Button);
  vStaySilence3Button.on("click", () => {
    timeout();
    vStaySilence3F();
  });
  var vStaySilence3Text = new Text("Stay silence", h2S);
  vStaySilence3.addChild(vStaySilence3Text);
  vStaySilence3Text.anchor.set(1, 0.5);
  vStaySilence3Text.x = 280;
  vStaySilence3Text.y = 40;
  var vero = new Sprite(Texture("/assets/peeps/veronica/veronica.svg"));
  vStaySilence3.addChild(vero);
  vero.anchor.set(0, 0.5);
  vero.x = 20;
  vero.y = 40;
  vero.scale.set(0.3, 0.3);
  showSprite(vStaySilence3);

  vTellParents22.x = (app.screen.width * 3) / 4 - 150;
  vTellParents22.y = app.screen.height - 160;
  vTellParents22.alpha = 0;
  main.addChild(vTellParents22);
  vTellParents22Button.interactive = true;
  vTellParents22Button.buttonMode = true;
  vTellParents22.addChild(vTellParents22Button);
  vTellParents22Button.on("click", () => {
    timeout();
    vTellParents222F();
  });
  var vTellParents22Text = new Text("Tell parents", h2S);
  vTellParents22.addChild(vTellParents22Text);
  vTellParents22Text.anchor.set(1, 0.5);
  vTellParents22Text.x = 280;
  vTellParents22Text.y = 40;
  var mom = new Sprite(Texture("/assets/peeps/cynthia.svg"));
  vTellParents22.addChild(mom);
  mom.anchor.set(0, 0.5);
  mom.x = 20;
  mom.y = 40;
  mom.scale.set(0.3, 0.3);
  showSprite(vTellParents22);
}

function vTellParents22F() {
  state = "vtellparents22";
  hideSprite(vStaySilence3);
  hideSprite(vTellParents22);
  hideSprite(vContinueBullied2ChooseText);
  vStaySilence3Button.interactive = false;
  vTellParents22Button.interactive = false;
  veronica.y = cynthia.y = app.screen.height/2;
  veronica.x = app.screen.width/2-100;
  cynthia.x = app.screen.width/2+100;
  cynthia.scale.x = -1;
  setObject(veronica, 1, 1);
  setObject(cynthia, 1, 1);
}

var cynthiaUnderstands1Text = new PIXI.Text("Oh my dear Veronica!\nI never realised what you had to go through.\nI am so sorry.", h1S(hMC));
function cynthiaUnderstands1F() {
  setText(cynthiaUnderstands1Text, 1, 1);
  alignText(cynthiaUnderstands1Text, cynthia);
}

var cynthiaUnderstands2Text = new PIXI.Text("I promise you will never\nhave to go through this anymore.", h1S(hMC));
function cynthiaUnderstands2F() {
  hideText(cynthiaUnderstands2Text);
  setText(cynthiaUnderstands2Text, 1, 1);
  alignText(cynthiaUnderstands2Text, cynthia);
}

var chapterIIIText = new PIXI.Text("Chapter III: A new beginning", h1S());
function chapterIIIF() {
  hideSprite(veronica);
  hideSprite(cynthia);
  hideSprite(cynthiaToldText);
  chapterIIIText.x = 40;
  chapterIIIText.y = 20;
  chapterIIIText.alpha = 0;
  chapterIIIText.scale.set(1.2, 1.2);
  main.addChild(chapterIIIText);
  showSprite(chapterIIIText);
  document.title = "Seventeen: A new beginning";
}

var cynthiaMoveSchoolText = new Text("I'm sure\nyou'll find peace here!", h1S(hMC));
var northshore = new Sprite(Texture("/assets/games/school/northshore.svg"));
function moveSchoolF() {
  hideSprite(chapterIIIText);
  veronica = new Sprite(Texture("/assets/peeps/veronica/veronica.svg"));
  veronica.x = app.screen.width / 3;
  cynthia.x = veronica.x - 120;
  veronica.y = cynthia.y = app.screen.height / 2;
  northshore.x = app.screen.width * 3 / 4;
  northshore.y = veronica.y - veronica.height/2;
  cynthia.scale.x = 1;
  setTimeout(() => {
    setObject(veronica, 1, 1);
    setObject(cynthia, 1, 1);
    setObject(northshore, 1, 1);
    setText(cynthiaMoveSchoolText, 1, 1);
    alignText(cynthiaMoveSchoolText, cynthia);
  }, 50);
}

var bullyEndingExplainText = new Text("Bullying others is not a good behavior, as it can cause physical and emotional damage to others. Let's be friends with everyone!", h1S(fC));
var blackLayer = new PIXI.Graphics();
blackLayer.beginFill(0x000000, 0.75);
blackLayer.drawRect(0, 0, app.screen.width, app.screen.height);
blackLayer.alpha = 0;
var ndt = new Sprite(Texture("/assets/people/ndt.svg"));
function bullyEndingExplainF() {
  hideSprite(veronicaBully3Text);
  ndt.x = app.screen.width/2;
  ndt.y = app.screen.height/2;
  main.addChild(blackLayer);
  showSprite(blackLayer);
  setText(bullyEndingExplainText, 1, 1);
  setObject(ndt, 1, 1);
}

var assistedEndingExplainText = new Text("It is important to share your feelings with others when you cannot solve a problem on your own. That way, everyone can help you get through that situation!", h1S(hDC));
var elsthie = new Sprite(Texture("/assets/people/elsthie.svg"));
function assistedEndingExplainF() {
  hideSprite(veronicaBully3Text);
  elsthie.x = app.screen.width/2;
  elsthie.y = app.screen.height/2;
  main.addChild(blackLayer);
  showSprite(blackLayer);
  setText(assistedEndingExplainText, 1, 1);
  setObject(elsthie, 1, 1);
}

var ending1Text = new Text("Seventeen:", h1S());
var ending2Text = new Text(`Seventeen:\n${ending}`, h1S());
function ending1F() {
  hideSprite(bullyEndingExplainText);
  hideSprite(blackLayer);
  hideSprite(ndt);
  hideSprite(esthie);
  setText(ending1Text, 1, 1);
  setText(ending2Text, 1);
  ending2Text = new Text(`Seventeen:\n${ending}`, h1S());
  setTimeout(() => {
    showSprite(ending2Text);
  }, 500);
  document.title = `Seventeen: ${ending}`;
}

const copiedText = new Text("Copied!", h1S());
const retry = new PIXI.Container();
const retryButton = new Button();
const home = new PIXI.Container();
const homeButton = new Button();
const share = new PIXI.Container();
const shareButton = new Button();
function ending2F() {
  main.removeChild(blackLayer);
  main.addChild(blackLayer);
  showSprite(blackLayer);
  setText(copiedText, 1);
  retry.x = app.screen.width / 4 - 150;
  retry.y = app.screen.height / 2;
  retry.alpha = 0;
  main.addChild(retry);
  retryButton.interactive = true;
  retryButton.buttonMode = true;
  retry.addChild(retryButton);
  retryButton.on("click", () => {
    window.location.reload();
  });
  const retryText = new Text("Retry this senerio", h2S);
  retry.addChild(retryText);
  retryText.anchor.set(1, 0.5);
  retryText.x = 280;
  retryText.y = 40;
  const reloadSprite = new Sprite(Texture("/assets/games/misc/reload.svg"));
  retry.addChild(reloadSprite);
  reloadSprite.anchor.set(0, 0.5);
  reloadSprite.x = 20;
  reloadSprite.y = 40;
  showSprite(retry);

  home.x = app.screen.width / 2 - 150;
  home.y = app.screen.height / 2;
  home.alpha = 0;
  main.addChild(home);
  homeButton.interactive = true;
  homeButton.buttonMode = true;
  home.addChild(homeButton);
  homeButton.on("click", () => {
    window.location.href = "/play";
  });
  const homeText = new Text("Return to home", h2S);
  home.addChild(homeText);
  homeText.anchor.set(1, 0.5);
  homeText.x = 280;
  homeText.y = 40;
  const homeSprite = new Sprite(Texture("/assets/games/misc/home.svg"));
  home.addChild(homeSprite);
  homeSprite.anchor.set(0, 0.5);
  homeSprite.x = 20;
  homeSprite.y = 40;
  showSprite(home);

  share.x = (app.screen.width * 3) / 4 - 150;
  share.y = app.screen.height / 2;
  share.alpha = 0;
  main.addChild(share);
  shareButton.interactive = true;
  shareButton.buttonMode = true;
  share.addChild(shareButton);
  shareButton.on("click", () => {
    navigator.clipboard.writeText(`Seventeen: ${ending}\n${window.location.href}`);
    showSprite(copiedText);
  });
  const shareText = new Text("Share with others", h2S);
  share.addChild(shareText);
  shareText.anchor.set(1, 0.5);
  shareText.x = 280;
  shareText.y = 40;
  const shareSprite = new Sprite(Texture("/assets/games/misc/share.svg"));
  share.addChild(shareSprite);
  shareSprite.anchor.set(0, 0.5);
  shareSprite.x = 20;
  shareSprite.y = 40;
  showSprite(share);
}
