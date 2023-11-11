// Aliases
const Application = PIXI.Application,
  Sprite = PIXI.Sprite,
  Texture = PIXI.Texture.from,
  TextS = PIXI.TextStyle,
  Text = PIXI.Text;
// Create app
const app = new Application({
  background: "#252627",
  resizeTo: window,
  antialias: true,
});

document.body.appendChild(app.view);
const main = new PIXI.Container();
app.stage.addChild(main);

const h1S = new TextS({
  fontFamily: "Helvetica",
  fontSize: 35,
  lineHeight: 36,
  align: "center",
  fill: "#ffffff",
  stroke: "#000000",
  strokeThickness: 5,
  lineJoin: "round",
  wordWrap: true,
  wordWrapWidth: app.screen.width / 1.5,
});

const h1FairyS = new TextS({
  fontFamily: "Helvetica",
  fontSize: 35,
  lineHeight: 36,
  align: "center",
  fill: "#cba6f7",
  stroke: "#000000",
  strokeThickness: 5,
  lineJoin: "round",
  wordWrap: true,
  wordWrapWidth: app.screen.width / 1.5,
});

const h1FireS = new TextS({
  fontFamily: "Helvetica",
  fontSize: 35,
  lineHeight: 36,
  align: "center",
  fill: "#ff4444",
  stroke: "#000000",
  strokeThickness: 5,
  lineJoin: "round",
  wordWrap: true,
  wordWrapWidth: app.screen.width / 1.5,
});

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

function setText(object) {
  object.anchor.set(0.5, 0);
  object.x = app.screen.width / 2;
  object.y = 10;
  object.alpha = 0;
  object.interactive = true;
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
app.stage.addChild(tapToCont);

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

let elapsedTimeMove = 0;
function move(object, targetX, targetY, duration, delta) {
  elapsedTimeMove += delta;
  const progress = Math.min(elapsedTimeMove / duration, 1);
  const newX = object.position.x + (targetX - object.position.x) * progress;
  const newY = object.position.y + (targetY - object.position.y) * progress;
  object.position.set(newX, newY);
  if (elapsedTimeMove >= duration) {
    app.ticker.remove(move);
    elapsedTimeMove = 0;
    return;
  }
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
        state = "welcome";
        welcomeF();
        break;
      }
      case "welcome": {
        state = "kitchen";
        kitchenF();
        break;
      }
      case "kitchen": {
        state = "phoneCall";
        phoneCallF();
        break;
      }
      case "phoneCall": {
        state = "phoneRings";
        phoneRingsF();
        break;
      }
      case "phoneRings": {
        state = "mattTurns";
        mattTurnsF();
        break;
      }
      case "mattTurns": {
        state = "mattGoes";
        mattGoesF();
        break;
      }
      case "mattGoes": {
        state = "phoneAnnie";
        phoneAnnieF();
        break;
      }
      case "phoneAnnie": {
        state = "phoneAnnieAccept";
        phoneAnnieAcceptF();
        break;
      }
      case "phoneAnnieAccept": {
        state = "panFire";
        panFireF();
        break;
      }
      case "panFire": {
        state = "mattPanic";
        mattPanicF();
        break;
      }
      case "mattPanic": {
        state = "whatToDo";
        whatToDoF();
        break;
      }
      case "turnOffStove": {
        state = "turnOffStove2";
        turnOffStove2F();
        break;
      }
      case "turnOffStove2": {
        state = "stoveWhatToDo";
        stoveWhatToDoF();
        break;
      }
      case "bringOutside": {
        state = "outside";
        outsideF();
        break;
      }
      case "outside": {
        state = "outsideBurn";
        outsideBurnF();
        break;
      }
      case "outsideBurn": {
        state = "endingBurn";
        ending = "Burned";
        endingBurnF();
        break;
      }
      case "endingBurn": {
        state = "ending";
        endingF();
        break;
      }
      case "useSalt": {
        state = "useSaltExplain";
        useSaltExplainF();
        break;
      }
      case "useSaltExplain": {
        state = "extinguised";
        extinguisedF();
        break;
      }
      case "extinguised": {
        state = "endingextinguised";
        ending = "Extinguised";
        endingExtinguisedF();
        break;
      }
      case "endingextinguised": {
        state = "ending";
        endingF();
        break;
      }
      case "pourWater": {
        state = "pourWater2";
        pourWater2F();
        break;
      }
      case "pourWater2": {
        state = "oilOverflow";
        oilOverflow2F();
        break;
      }
      case "oilOverflow": {
        state = "oilExplain";
        oilExplainF();
        break;
      }
      case "oilExplain": {
        state = "oilExplain2";
        oilExplain2F();
        break;
      }
      case "oilExplain2": {
        state = "callWho";
        callWhoF();
        break;
      }
      case "callMom": {
        state = "callMom2";
        callMom2F();
        break;
      }
      case "callMom2": {
        state = "callWho";
        callMom3F();
        break;
      }
      case "callFirefighter": {
        state = "callFirefighter2";
        callFirefighter2F();
        break;
      }
      case "callFirefighter2": {
        state = "endingRescued";
        ending = "Rescued";
        endingRescuedF();
        break;
      }
      case "endingRescued": {
        state = "endingRescued2";
        endingRescued2F();
        break;
      }
      case "endingRescued2": {
        state = "ending";
        endingF();
        break;
      }
    }
    canTrigger = false;
    setTimeout(() => {
      canTrigger = true;
    }, trigDur);
  }
});

const welcomeText = new Text("Matthew, living in his home, is cooking breakfast.", h1S);
function welcomeF() {
  setText(welcomeText);
  app.stage.addChild(welcomeText);
  showSprite(welcomeText);
}

const kitchen = new Sprite(Texture("/assets/games/kitchen/kitchen.svg"));
const pan = new Sprite(Texture("/assets/games/kitchen/pan.svg"));
const firepan = new Sprite(Texture("/assets/games/kitchen/firepan.svg"));
const phoneSide = new Sprite(Texture("/assets/games/misc/phoneside.svg"));
const matt = new Sprite(Texture("/assets/peeps/matthew/default.svg"));
function kitchenF() {
  kitchen.anchor.set(0.5);
  matt.anchor.set(0.5);
  pan.anchor.set(0.5);
  firepan.anchor.set(0.5);
  phoneSide.anchor.set(0.5);
  kitchen.x = app.screen.width / 2;
  kitchen.y = app.screen.height / 2 - 20;
  matt.x = kitchen.x - 140;
  matt.y = kitchen.y + 20;
  matt.scale.x = -0.75;
  pan.x = kitchen.x - 195;
  pan.y = kitchen.y + 23;
  firepan.x = pan.x - 13;
  firepan.y = pan.y + 10;
  phoneSide.x = kitchen.x + 185;
  phoneSide.y = kitchen.y + 65;
  kitchen.scale.set(0.75, 0.75);
  matt.scale.set(-0.75, 0.75);
  pan.scale.set(0.75, 0.75);
  firepan.scale.set(0.45, 0.45);
  phoneSide.scale.set(0.2, 0.2);
  kitchen.alpha = 0;
  matt.alpha = 0;
  pan.alpha = 0;
  firepan.alpha = 0;
  phoneSide.alpha = 0;
  main.addChild(kitchen);
  main.addChild(phoneSide);
  main.addChild(matt);
  main.addChild(pan);
  main.addChild(firepan);
  showSprite(kitchen);
  showSprite(phoneSide);
  showSprite(matt);
  showSprite(pan);
  showSprite(firepan);
}

const phoneCallText = new Text("Suddenly, his phone rings.", h1S);
function phoneCallF() {
  hideSprite(welcomeText);
  setText(phoneCallText);
  app.stage.addChild(phoneCallText);
  showSprite(phoneCallText);
}

function phoneRingsF() {
  toggleShake(phoneSide);
}

function mattTurnsF() {
  hideSprite(matt);
  matt.scale.set(0.75, 0.75);
  matt.x = kitchen.x - 120;
  setTimeout(() => {
    showSprite(matt);
  }, 200);
}

const goText = new Text("He goes to get it.", h1S);
function mattGoesF() {
  hideSprite(phoneCallText);
  setText(goText);
  app.stage.addChild(goText);
  showSprite(goText);
  app.ticker.add((delta) => move(matt, kitchen.x + 155, matt.y, 1000, delta));
}

const anniePhone = new Sprite(Texture("/assets/games/misc/phoneannie.svg"));
const blackLayer = new PIXI.Graphics();
function phoneAnnieF() {
  hideSprite(goText);
  toggleShake(phoneSide);
  blackLayer.beginFill(0x000000, 0.75);
  blackLayer.drawRect(0, 0, app.screen.width, app.screen.height);
  blackLayer.alpha = 0;
  anniePhone.anchor.set(0.5);
  anniePhone.x = app.screen.width / 2;
  anniePhone.y = app.screen.height * 2;
  anniePhone.alpha = 0;
  app.stage.addChild(blackLayer);
  app.stage.addChild(anniePhone);
  showSprite(blackLayer);
  showSprite(anniePhone);
  app.ticker.add((delta) => move(anniePhone, anniePhone.x, app.screen.height / 2, 1000, delta));
}

const mattCall = new Sprite(Texture("/assets/peeps/matthew/phone.svg"));
const annieCallText = new Text("They're chatting!", h1S);
function phoneAnnieAcceptF() {
  hideSprite(phoneCallText);
  hideSprite(blackLayer);
  hideSprite(matt);
  hideSprite(phoneSide);
  app.ticker.add((delta) => move(anniePhone, anniePhone.x, app.screen.height * 2, 1000, delta));
  setTimeout(() => {
    hideSprite(anniePhone);
  }, 1000);
  setText(annieCallText);
  mattCall.anchor.set(0.5);
  mattCall.x = matt.x;
  mattCall.y = matt.y;
  mattCall.alpha = 0;
  mattCall.scale.set(-0.75, 0.75);
  app.stage.addChild(mattCall);
  app.stage.addChild(annieCallText);
  showSprite(annieCallText);
  showSprite(mattCall);
}

const panFire = new Sprite(Texture("/assets/games/kitchen/fire1.svg"));
const smoke1 = new Sprite(Texture("/assets/games/kitchen/smoke1.svg"));
const fireStartText = new Text("Oh no! He forgot to turn off the stove.", h1S);
function panFireF() {
  hideSprite(annieCallText);
  setText(fireStartText);
  panFire.anchor.set(0.5);
  smoke1.anchor.set(0.5);
  panFire.x = pan.x - 15;
  panFire.y = pan.y - 40;
  smoke1.x = pan.x - 10;
  smoke1.y = pan.y - 85;
  panFire.scale.set(0.4, 0.4);
  smoke1.scale.set(0.7, 0.7);
  panFire.alpha = 0;
  smoke1.alpha = 0;
  app.stage.addChild(panFire);
  app.stage.addChild(smoke1);
  app.stage.addChild(fireStartText);
  showSprite(panFire);
  showSprite(smoke1);
  showSprite(fireStartText);
}

const mattPanic = new Sprite(Texture("/assets/peeps/matthew/panic.svg"));
const onFireText = new Text("The pan is on fire!", h1S);
function mattPanicF() {
  hideSprite(mattCall);
  hideSprite(fireStartText);
  setText(onFireText);
  mattPanic.anchor.set(0.5);
  mattPanic.x = mattCall.x;
  mattPanic.y = mattCall.y;
  mattPanic.alpha = 0;
  mattPanic.scale.set(-0.75, 0.75);
  app.stage.addChild(mattPanic);
  app.stage.addChild(onFireText);
  showSprite(mattPanic);
  showSprite(onFireText);
}

const whatToDoText = new Text("What should he do?", h1S);
const turnOffStove = new PIXI.Container();
const turnOffStoveButton = new Button();
const pourWater = new PIXI.Container();
const pourWaterButton = new Button();
function whatToDoF() {
  hideSprite(onFireText);
  setText(whatToDoText);
  app.stage.addChild(whatToDoText);
  showSprite(whatToDoText);

  turnOffStove.x = app.screen.width / 4 - 150;
  turnOffStove.y = app.screen.height - 160;
  turnOffStove.alpha = 0;
  app.stage.addChild(turnOffStove);
  turnOffStoveButton.interactive = true;
  turnOffStoveButton.buttonMode = true;
  turnOffStove.addChild(turnOffStoveButton);
  turnOffStoveButton.on("click", () => {
    turnOffStoveF();
  });
  const turnOffStoveText = new Text("Turn off the stove", h2S);
  turnOffStove.addChild(turnOffStoveText);
  turnOffStoveText.anchor.set(1, 0.5);
  turnOffStoveText.x = 280;
  turnOffStoveText.y = 40;
  const stove = new Sprite(Texture("/assets/games/kitchen/stove.svg"));
  turnOffStove.addChild(stove);
  stove.anchor.set(0, 0.5);
  stove.x = 20;
  stove.y = 40;
  stove.scale.set(0.3, 0.3);
  showSprite(turnOffStove);

  pourWater.x = (app.screen.width * 3) / 4 - 150;
  pourWater.y = app.screen.height - 160;
  pourWater.alpha = 0;
  app.stage.addChild(pourWater);
  pourWaterButton.interactive = true;
  pourWaterButton.buttonMode = true;
  pourWater.addChild(pourWaterButton);
  pourWater.addChild(pourWaterButton);
  pourWaterButton.on("click", () => {
    pourWaterF();
  });
  const pourWaterText = new Text("Pour water", h2S);
  pourWater.addChild(pourWaterText);
  pourWaterText.anchor.set(1, 0.5);
  pourWaterText.x = 280;
  pourWaterText.y = 40;
  const cupOfWater = new Sprite(Texture("/assets/games/kitchen/waterpour.svg"));
  pourWater.addChild(cupOfWater);
  cupOfWater.anchor.set(0, 0.5);
  cupOfWater.x = 20;
  cupOfWater.y = 40;
  cupOfWater.scale.set(0.3, 0.3);
  showSprite(pourWater);
    cantrigger = false;
  settimeout(() => {
    cantrigger = true;
  }, 50);;
}

function turnOffStoveF() {
  state = "turnOffStove";
  hideSprite(whatToDoText);
  hideSprite(turnOffStove);
  hideSprite(pourWater);
  turnOffStoveButton.interactive = false;
  pourWaterButton.interactive = false;
  app.ticker.add((delta) => move(mattPanic, kitchen.x - 100, mattPanic.y, 1000, delta));
}

function turnOffStove2F() {
  hideSprite(firepan);
}

const stoveWhatToDoText = new Text("What's next?", h1S);
const bringOutside = new PIXI.Container();
const bringOutsideButton = new Button();
const useSalt = new PIXI.Container();
const useSaltButton = new Button();
function stoveWhatToDoF() {
  hideSprite(onFireText);
  setText(stoveWhatToDoText);
  app.stage.addChild(stoveWhatToDoText);
  showSprite(stoveWhatToDoText);

  bringOutside.x = app.screen.width / 4 - 150;
  bringOutside.y = app.screen.height - 160;
  bringOutside.alpha = 0;
  app.stage.addChild(bringOutside);
  bringOutsideButton.interactive = true;
  bringOutsideButton.buttonMode = true;
  bringOutside.addChild(bringOutsideButton);
  bringOutsideButton.on("click", () => {
    bringOutsideF();
  });
  const bringOutsideText = new Text("Bring it outside", h2S);
  bringOutside.addChild(bringOutsideText);
  bringOutsideText.anchor.set(1, 0.5);
  bringOutsideText.x = 280;
  bringOutsideText.y = 40;
  const stove = new Sprite(Texture("/assets/games/kitchen/pan.svg"));
  bringOutside.addChild(stove);
  stove.anchor.set(0, 0.5);
  stove.x = 20;
  stove.y = 40;
  stove.scale.set(0.3, 0.3);
  showSprite(bringOutside);

  useSalt.x = (app.screen.width * 3) / 4 - 150;
  useSalt.y = app.screen.height - 160;
  useSalt.alpha = 0;
  app.stage.addChild(useSalt);
  useSaltButton.interactive = true;
  useSaltButton.buttonMode = true;
  useSalt.addChild(useSaltButton);
  useSalt.addChild(useSaltButton);
  useSaltButton.on("click", () => {
    useSaltF();
  });
  const useSaltText = new Text("Use salt", h2S);
  useSalt.addChild(useSaltText);
  useSaltText.anchor.set(1, 0.5);
  useSaltText.x = 280;
  useSaltText.y = 40;
  const cupOfWater = new Sprite(Texture("/assets/games/kitchen/saltpot.svg"));
  useSalt.addChild(cupOfWater);
  cupOfWater.anchor.set(0, 0.5);
  cupOfWater.x = 20;
  cupOfWater.y = 40;
  cupOfWater.scale.set(0.3, 0.3);
  showSprite(useSalt);
    cantrigger = false;
  settimeout(() => {
    cantrigger = true;
  }, 50);;
}

const mattPanic3 = new Sprite(Texture("/assets/peeps/matthew/panic.svg"));
const panFire2 = new Sprite(Texture("/assets/games/kitchen/fire1.svg"));
const pan2 = new Sprite(Texture("/assets/games/kitchen/pan.svg"));
const grass = new Sprite(Texture("/assets/games/kitchen/grass.svg"));
function bringOutsideF() {
  state = "bringOutside";
  hideSprite(stoveWhatToDoText);
  hideSprite(bringOutside);
  hideSprite(useSalt);
  hideSprite(mattPanic);
  hideSprite(panFire);
  hideSprite(smoke1);
  hideSprite(pan);
  bringOutsideButton.interactive = false;
  useSaltButton.interactive = false;
  mattPanic3.anchor.set(0.5);
  panFire2.anchor.set(0.5);
  pan2.anchor.set(0.5);
  mattPanic3.x = app.screen.width / 3;
  mattPanic3.y = app.screen.height / 2;
  pan2.x = mattPanic3.x + 80;
  pan2.y = mattPanic3.y;
  panFire2.x = pan2.x + 15;
  panFire2.y = pan2.y - 40;
  mattPanic3.alpha = 0;
  pan2.alpha = 0;
  mattPanic3.alpha = 0;
  grass.alpha = 0;
  mattPanic3.scale.set(0.75, 0.75);
  pan2.scale.set(-0.75, 0.75);
  panFire2.scale.set(-0.4, 0.4);
  app.stage.addChild(grass);
  app.stage.addChild(mattPanic3);
  app.stage.addChild(pan2);
  app.stage.addChild(panFire2);
  showSprite(mattPanic3);
  showSprite(pan2);
  showSprite(panFire2);
  app.ticker.add((delta) => move(kitchen, -app.screen.width / 2, kitchen.y, 10000, delta));
  canTrigger = false;
  setTimeout(() => {
    canTrigger = true;
  }, 10);
}

const mattTrip = new Sprite(Texture("/assets/peeps/matthew/trip.svg"));
function outsideF() {
  grass.anchor.set(0.5);
  mattTrip.anchor.set(0.5);
  grass.x = app.screen.width * 2;
  grass.y = kitchen.y + 200;
  mattTrip.x = mattPanic3.x;
  mattTrip.y = mattPanic3.y;
  grass.alpha = 0;
  mattTrip.alpha = 0;
  mattTrip.scale.set(0.75, 0.75);
  app.stage.addChild(mattTrip);
  showSprite(grass);
  app.ticker.add((delta) => move(grass, app.screen.width / 2, kitchen.y + 100, 10000, delta));
  setTimeout(() => {
    hideSprite(mattPanic3);
    showSprite(mattTrip);
    app.ticker.add((delta) => move(pan2, (app.screen.width * 2) / 3, grass.y, 10000, delta));
    app.ticker.add((delta) => move(panFire2, (app.screen.width * 2) / 3 + 15, grass.y - 40, 10000, delta));
  }, 100);
}

const fireGrass1 = new Sprite(Texture("/assets/games/kitchen/fire1.svg"));
const fireGrass2 = new Sprite(Texture("/assets/games/kitchen/fire2.svg"));
function outsideBurnF() {
  fireGrass1.anchor.set(0.5);
  fireGrass2.anchor.set(0.5);
  fireGrass1.x = (app.screen.width * 2) / 3 + 15 + 125;
  fireGrass1.y = grass.y;
  fireGrass2.x = (app.screen.width * 2) / 3 + 15 - 100;
  fireGrass2.y = grass.y;
  fireGrass1.alpha = 0;
  fireGrass2.alpha = 0;
  fireGrass1.scale.set(0.75, 0.75);
  fireGrass2.scale.set(0.75, 0.75);
  app.stage.addChild(fireGrass1);
  app.stage.addChild(fireGrass2);
  showSprite(fireGrass1);
  showSprite(fireGrass2);
}

const kitchenText = new Text("The Kitchen:", h1S);
const burnedText = new Text("The Kitchen:\nBurned", h1S);
function endingBurnF() {
  setText(kitchenText);
  setText(burnedText);
  app.stage.addChild(kitchenText);
  app.stage.addChild(burnedText);
  showSprite(kitchenText);
  setTimeout(() => {
    showSprite(burnedText);
  }, 1000);
}

const saltPot = new Sprite(Texture("/assets/games/kitchen/saltpotupsidedown.svg"));
const saltPile = new Sprite(Texture("/assets/games/kitchen/saltpile.svg"));
function useSaltF() {
  state = "useSalt";
  hideSprite(stoveWhatToDoText);
  hideSprite(bringOutside);
  hideSprite(useSalt);
  hideSprite(panFire);
  hideSprite(smoke1);
  bringOutsideButton.interactive = false;
  useSaltButton.interactive = false;
  saltPile.anchor.set(0.5);
  saltPot.anchor.set(0.5);
  saltPile.x = panFire.x;
  saltPile.y = panFire.y + 20;
  saltPot.x = panFire.x;
  saltPot.y = panFire.y - 50;
  saltPile.alpha = 0;
  saltPot.alpha = 0;
  saltPile.scale.set(0.4, 0.4);
  saltPot.scale.set(0.4, 0.4);
  app.stage.addChild(saltPile);
  app.stage.addChild(saltPot);
  showSprite(saltPile);
  showSprite(saltPot);
    cantrigger = false;
  settimeout(() => {
    cantrigger = true;
  }, 50);;
}

const useSaltText = new Text("Salt doesn't burn, and lower the temperature of the fire.", h1FairyS);
const vtl = new Sprite(Texture("/assets/people/vtl.svg"));
const saltPile2 = new Sprite(Texture("/assets/games/kitchen/saltpile.svg"));
const fireSalt = new Sprite(Texture("/assets/games/kitchen/fire2.svg"));
function useSaltExplainF() {
  app.stage.removeChild(blackLayer);
  app.stage.addChild(blackLayer);
  showSprite(blackLayer);
  setText(useSaltText);
  vtl.anchor.set(0.5);
  saltPile2.anchor.set(0.5);
  fireSalt.anchor.set(0.5);
  vtl.x = app.screen.width / 4;
  vtl.y = app.screen.height / 2;
  saltPile2.x = (app.screen.width * 3) / 4;
  saltPile2.y = app.screen.height / 2;
  fireSalt.x = (app.screen.width * 3) / 4;
  fireSalt.y = app.screen.height / 2;
  vtl.alpha = 0;
  saltPile2.alpha = 0;
  fireSalt.alpha = 0;
  fireSalt.scale.set(0.7);
  app.stage.addChild(useSaltText);
  app.stage.addChild(vtl);
  app.stage.addChild(saltPile2);
  app.stage.addChild(fireSalt);
  showSprite(useSaltText);
  showSprite(vtl);
  setTimeout(() => {
    showSprite(saltPile2);
  }, 1000);
  showSprite(fireSalt);
  setTimeout(() => {
    hideSprite(fireSalt);
  }, 2000);
}

const matt2 = new Sprite(Texture("/assets/peeps/matthew/default.svg"));
const extinguisedText = new Text("The fire went out!", h1S);
function extinguisedF() {
  hideSprite(blackLayer);
  hideSprite(useSaltText);
  hideSprite(vtl);
  hideSprite(saltPile2);
  hideSprite(fireSalt);
  hideSprite(mattPanic);
  hideSprite(saltPot);
  setText(extinguisedText);
  app.stage.addChild(extinguisedText);
  matt2.anchor.set(0.5);
  matt2.x = mattPanic.x;
  matt2.y = mattPanic.y;
  matt2.scale.set(-0.75, 0.75);
  matt2.alpha = 0;
  app.stage.addChild(matt2);
  showSprite(matt2);
  showSprite(extinguisedText);
}

const extinguised2Text = new Text("The Kitchen:\nExtinguised", h1S);
function endingExtinguisedF() {
  setText(kitchenText);
  setText(extinguised2Text);
  app.stage.addChild(kitchenText);
  app.stage.addChild(extinguised2Text);
  showSprite(kitchenText);
  setTimeout(() => {
    showSprite(extinguised2Text);
  }, 1000);
}

function pourWaterF() {
  state = "pourWater";
  hideSprite(whatToDoText);
  hideSprite(turnOffStove);
  hideSprite(pourWater);
  turnOffStoveButton.interactive = false;
  pourWaterButton.interactive = false;
  app.ticker.add((delta) => move(mattPanic, kitchen.x - 50, mattPanic.y, 1000, delta));
}

const cupOfWaterPour = new Sprite(Texture("/assets/games/kitchen/waterpour.svg"));
function pourWater2F() {
  cupOfWaterPour.anchor.set(0.5, 0.5);
  cupOfWaterPour.alpha = 0;
  cupOfWaterPour.x = pan.x + 15;
  cupOfWaterPour.y = pan.y - 20;
  cupOfWaterPour.scale.set(0.3, 0.3);
  app.stage.addChild(cupOfWaterPour);
  showSprite(cupOfWaterPour);
}

const overflowText = new Text("The oil overflows!", h1S);
const oilWaterPatch = new Sprite(Texture("/assets/games/kitchen/oilwaterpatch.svg"));
const oilFire = new Sprite(Texture("/assets/games/kitchen/fire2.svg"));
function oilOverflow2F() {
  hideSprite(cupOfWaterPour);
  setText(overflowText);
  oilWaterPatch.anchor.set(0.3, 0.3);
  oilFire.anchor.set(0.5, 0.5);
  oilWaterPatch.alpha = 0;
  oilFire.alpha = 0;
  oilWaterPatch.x = pan.x - 85;
  oilWaterPatch.y = pan.y + 20;
  oilFire.x = pan.x - 55;
  oilFire.y = pan.y;
  oilWaterPatch.scale.set(0.3, 0.3);
  oilFire.scale.set(0.4, 0.4);
  app.stage.addChild(overflowText);
  app.stage.addChild(oilWaterPatch);
  app.stage.addChild(oilFire);
  showSprite(overflowText);
  showSprite(oilWaterPatch);
  showSprite(oilFire);
}

const oilFloatText = new Text("Oil floats on water due to its density.", h1FairyS);
const fairy = new Sprite(Texture("/assets/people/fairy.svg"));
const oilWaterGlass = new Sprite(Texture("/assets/games/kitchen/oilwater.svg"));
function oilExplainF() {
  app.stage.removeChild(blackLayer);
  app.stage.addChild(blackLayer);
  showSprite(blackLayer);
  setText(oilFloatText);
  fairy.anchor.set(0.5);
  oilWaterGlass.anchor.set(0.5);
  fairy.x = app.screen.width / 4;
  fairy.y = app.screen.height / 2;
  oilWaterGlass.x = (app.screen.width * 3) / 4;
  oilWaterGlass.y = app.screen.height / 2;
  fairy.alpha = 0;
  oilWaterGlass.alpha = 0;
  app.stage.addChild(oilFloatText);
  app.stage.addChild(fairy);
  app.stage.addChild(oilWaterGlass);
  showSprite(oilFloatText);
  showSprite(fairy);
  showSprite(oilWaterGlass);
}

const waterOnOilText = new Text("When adding water to burning oil, the oil stays afloat, and the fire is not extinguised.", h1FairyS);
const waterPatch = new Sprite(Texture("/assets/games/kitchen/waterpatch.svg"));
const oilPatch = new Sprite(Texture("/assets/games/kitchen/oilpatch.svg"));
const fireOilWater = new Sprite(Texture("/assets/games/kitchen/fire1.svg"));
function oilExplain2F() {
  hideSprite(oilFloatText);
  hideSprite(oilWaterGlass);
  setText(waterOnOilText);
  fireOilWater.anchor.set(0.5);
  waterPatch.anchor.set(0.5);
  oilPatch.anchor.set(0.5);
  fireOilWater.x = (app.screen.width * 3) / 4;
  fireOilWater.y = app.screen.height / 2 - 30;
  waterPatch.x = (app.screen.width * 3) / 4;
  waterPatch.y = app.screen.height / 2;
  oilPatch.x = (app.screen.width * 3) / 4;
  oilPatch.y = app.screen.height / 2;
  waterOnOilText.alpha = 0;
  fireOilWater.alpha = 0;
  waterPatch.alpha = 0;
  oilPatch.alpha = 0;
  fireOilWater.scale.set(0.5, 0.5);
  waterPatch.scale.set(2, 2);
  app.stage.addChild(waterOnOilText);
  app.stage.addChild(waterPatch);
  app.stage.addChild(oilPatch);
  app.stage.addChild(fireOilWater);
  showSprite(waterOnOilText);
  setTimeout(() => {
    showSprite(waterPatch);
  }, 500);
  showSprite(oilPatch);
  showSprite(fireOilWater);
}

const whoToCallText = new Text("Who should he call?", h1S);
const callFirefighter = new PIXI.Container();
const callFirefighterButton = new Button();
const callMom = new PIXI.Container();
const callMomButton = new Button();
function callWhoF() {
  hideSprite(waterOnOilText);
  hideSprite(waterPatch);
  hideSprite(oilPatch);
  hideSprite(fireOilWater);
  hideSprite(fairy);
  hideSprite(blackLayer);
  hideSprite(overflowText);
  setText(whoToCallText);
  app.stage.addChild(whoToCallText);
  showSprite(whoToCallText);

  callFirefighter.x = app.screen.width / 4 - 150;
  callFirefighter.y = app.screen.height - 160;
  callFirefighter.alpha = 0;
  app.stage.addChild(callFirefighter);
  callFirefighterButton.interactive = true;
  callFirefighterButton.buttonMode = true;
  callFirefighter.addChild(callFirefighterButton);
  callFirefighterButton.on("click", () => {
    callFirefighterF();
  });
  const callFirefighterText = new Text("Call fightfighters", h2S);
  callFirefighter.addChild(callFirefighterText);
  callFirefighterText.anchor.set(1, 0.5);
  callFirefighterText.x = 280;
  callFirefighterText.y = 40;
  const firefighter = new Sprite(Texture("/assets/peeps/firefighter/firefighter.svg"));
  callFirefighter.addChild(firefighter);
  firefighter.anchor.set(0, 0.5);
  firefighter.x = 20;
  firefighter.y = 40;
  firefighter.scale.set(0.3, 0.3);
  showSprite(callFirefighter);

  callMom.x = (app.screen.width * 3) / 4 - 150;
  callMom.y = app.screen.height - 160;
  callMom.alpha = 0;
  app.stage.addChild(callMom);
  callMomButton.interactive = true;
  callMomButton.buttonMode = true;
  callMom.addChild(callMomButton);
  callMomButton.on("click", () => {
    callMomF();
  });
  const callMomText = new Text("Call mom", h2S);
  callMom.addChild(callMomText);
  callMomText.anchor.set(1, 0.5);
  callMomText.x = 280;
  callMomText.y = 40;
  const Mom = new Sprite(Texture("/assets/peeps/sarah.svg"));
  callMom.addChild(Mom);
  Mom.anchor.set(0, 0.5);
  Mom.x = 20;
  Mom.y = 40;
  Mom.scale.set(0.3, 0.3);
  showSprite(callMom);
    cantrigger = false;
  settimeout(() => {
    cantrigger = true;
  }, 50);;
}

const mattCallPanic = new Sprite(Texture("/assets/peeps/matthew/phonepanic.svg"));
function mattCallPanicF() {
  hideSprite(mattPanic);
  mattCallPanic.anchor.set(0.5);
  mattCallPanic.x = mattPanic.x;
  mattCallPanic.y = mattPanic.y;
  mattCallPanic.alpha = 0;
  mattCallPanic.scale.set(-0.75, 0.75);
  app.stage.addChild(mattCallPanic);
  showSprite(mattCallPanic);

  hideSprite(callFirefighter);
  hideSprite(callMom);
  callFirefighterButton.interactive = false;
  callMomButton.interactive = false;
}

const momPhone = new Sprite(Texture("/assets/games/misc/phonesarah.svg"));
function callMomF() {
  state = "callMom";
  mattCallPanicF();
  hideSprite(whoToCallText);
  momPhone.anchor.set(0.5);
  momPhone.x = app.screen.width / 2;
  momPhone.y = app.screen.height * 2;
  momPhone.alpha = 0;
  app.stage.removeChild(blackLayer);
  app.stage.addChild(blackLayer);
  app.stage.addChild(momPhone);
  showSprite(blackLayer);
  showSprite(momPhone);
  app.ticker.add((delta) => move(momPhone, momPhone.x, app.screen.height / 2, 1000, delta));
}

const momText = new Text("You stupid. Call the firefighters", h1FairyS);
function callMom2F() {
  setText(momText);
  app.stage.addChild(momText);
  showSprite(momText);
}

function callMom3F() {
  app.ticker.add((delta) => move(momPhone, momPhone.x, app.screen.height * 2, 1000, delta));
  setTimeout(() => {
    hideSprite(blackLayer);
    hideSprite(momPhone);
    hideSprite(momText);
    callWhoF();
  }, 1000);
}

const firefighterPhone = new Sprite(Texture("/assets/games/misc/phonefirefighter.svg"));
function callFirefighterF() {
  state = "callFirefighter";
  mattCallPanicF();
  hideSprite(whoToCallText);
  firefighterPhone.anchor.set(0.5);
  firefighterPhone.x = app.screen.width / 2;
  firefighterPhone.y = app.screen.height * 2;
  firefighterPhone.alpha = 0;
  app.stage.removeChild(blackLayer);
  app.stage.addChild(blackLayer);
  app.stage.addChild(firefighterPhone);
  showSprite(blackLayer);
  showSprite(firefighterPhone);
  app.ticker.add((delta) => move(firefighterPhone, firefighterPhone.x, app.screen.height / 2, 1000, delta));
}

const firefighterText = new Text("We'll be there!", h1FireS);
function callFirefighter2F() {
  setText(firefighterText);
  app.stage.addChild(firefighterText);
  showSprite(firefighterText);
}

function traverseDisplayObject(displayObject) {
  hideSprite(displayObject);
  if (displayObject.children && displayObject.children.length > 0) {
    displayObject.children.forEach(traverseDisplayObject);
  }
}

const firefighter = new Sprite(Texture("/assets/peeps/firefighter/extinguish.svg"));
const house = new Sprite(Texture("/assets/games/misc/house.svg"));
const fireHouse = new Sprite(Texture("/assets/games/kitchen/fire1.svg"));
const mattPanic2 = new Sprite(Texture("/assets/peeps/matthew/panic.svg"));
function endingRescuedF() {
  app.ticker.add((delta) => move(firefighterPhone, firefighterPhone.x, app.screen.height * 2, 1000, delta));
  setTimeout(() => {
    hideSprite(kitchen);
    hideSprite(pan);
    hideSprite(firepan);
    hideSprite(oilWaterPatch);
    hideSprite(waterPatch);
    hideSprite(oilFire);
    hideSprite(firefighterPhone);
    hideSprite(blackLayer);
    hideSprite(panFire);
    hideSprite(smoke1);
    hideSprite(mattCallPanic);
    hideSprite(firefighterText);
    firefighter.anchor.set(0.5);
    house.anchor.set(0.5);
    fireHouse.anchor.set(0.5);
    mattPanic2.anchor.set(0.5);
    mattPanic2.x = (app.screen.width * 3) / 4;
    mattPanic2.y = app.screen.height / 2;
    firefighter.x = app.screen.width / 2;
    firefighter.y = app.screen.height / 2;
    house.x = app.screen.width / 5;
    house.y = app.screen.height / 2;
    fireHouse.x = app.screen.width / 5;
    fireHouse.y = app.screen.height / 2 - house.height / 2;
    firefighter.scale.set(-0.75, 0.75);
    mattPanic2.scale.set(-0.75, 0.75);
    firefighter.alpha = 0;
    mattPanic2.alpha = 0;
    house.alpha = 0;
    fireHouse.alpha = 0;
    app.stage.addChild(firefighter);
    app.stage.addChild(house);
    app.stage.addChild(fireHouse);
    app.stage.addChild(mattPanic2);
    showSprite(mattPanic2);
    showSprite(firefighter);
    showSprite(house);
    showSprite(fireHouse);
  }, 1000);
}

const rescuedText = new Text("The Kitchen:\nRescued", h1S);
function endingRescued2F() {
  setText(kitchenText);
  setText(rescuedText);
  app.stage.addChild(kitchenText);
  app.stage.addChild(rescuedText);
  showSprite(kitchenText);
  setTimeout(() => {
    showSprite(rescuedText);
  }, 1000);
}

const retry = new PIXI.Container();
const retryButton = new Button();
const home = new PIXI.Container();
const homeButton = new Button();
const share = new PIXI.Container();
const shareButton = new Button();
function endingF() {
  app.stage.removeChild(blackLayer);
  app.stage.addChild(blackLayer);
  showSprite(blackLayer);
  retry.x = app.screen.width / 4 - 150;
  retry.y = app.screen.height / 2;
  retry.alpha = 0;
  app.stage.addChild(retry);
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
  app.stage.addChild(home);
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
  app.stage.addChild(share);
  shareButton.interactive = true;
  shareButton.buttonMode = true;
  share.addChild(shareButton);
  shareButton.on("click", () => {
    navigator.clipboard.writeText(`The kitchen: ${ending}\n${window.location.href}`);
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
