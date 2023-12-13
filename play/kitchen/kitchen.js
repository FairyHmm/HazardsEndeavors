// Aliases
const Application = PIXI.Application,
  Sprite = PIXI.Sprite,
  Texture = PIXI.Texture.from,
  TextS = PIXI.TextStyle,
  Text = PIXI.Text;
// Create app
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const scaleFactor = 1920 / screenWidth;
const app = new Application({
  background: "#252627",
  width: screenWidth * scaleFactor,
  height: screenHeight * scaleFactor,
  resolution: window.devicePixelRatio,
  antialias: true,
});

document.body.appendChild(app.view);
app.renderer.view.style.objectFit = 'contain';
app.renderer.view.style.width = '100vw';
app.renderer.view.style.height = '100vh';

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
    strokeThickness: 5,
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
  let startTime = null;
  requestAnimationFrame(animate);
  function animate(currentTime) {
    if (!startTime) {
      startTime = currentTime;
    }
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const newX = object.position.x + (targetX - object.position.x) * progress;
    const newY = object.position.y + (targetY - object.position.y) * progress;
    object.position.set(newX, newY);
    if (elapsed < duration) {
      requestAnimationFrame(animate);
    }
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

function timeout() {
  canTrigger = false;
  setTimeout(() => {
    canTrigger = true;
  }, 10);
}

const welcomeText = new Text("Matthew, living in his home, is cooking breakfast.", h1S());
function welcomeF() {
  setText(welcomeText, 1, 1);
}

const kitchen = new Sprite(Texture("/assets/games/kitchen/kitchen.svg"));
const pan = new Sprite(Texture("/assets/games/kitchen/pan.svg"));
const firepan = new Sprite(Texture("/assets/games/kitchen/firepan.svg"));
const phoneSide = new Sprite(Texture("/assets/games/phone/phoneside.svg"));
const matt = new Sprite(Texture("/assets/peeps/matthew/matt.svg"));
function kitchenF() {
  setObject(kitchen, 1, 1);
  setObject(matt, 1, 1);
  setObject(pan, 1, 1);
  setObject(firepan, 1, 1);
  setObject(phoneSide, 1, 1);
  kitchen.x = app.screen.width / 2;
  kitchen.y = app.screen.height / 2 - 20;
  matt.x = kitchen.x - 140;
  matt.y = kitchen.y + 20;
  pan.x = kitchen.x - 195;
  pan.y = kitchen.y + 23;
  firepan.x = pan.x - 13;
  firepan.y = pan.y + 10;
  phoneSide.x = kitchen.x + 185;
  phoneSide.y = kitchen.y + 65;
  matt.scale.x = -1;
}

const phoneCallText = new Text("Suddenly, his phone rings.", h1S());
function phoneCallF() {
  hideSprite(welcomeText);
  setText(phoneCallText, 1, 1);
}

function phoneRingsF() {
  toggleShake(phoneSide);
}

function mattTurnsF() {
  hideSprite(matt);
  matt.scale.x = 1;
  matt.x = kitchen.x - 120;
  setTimeout(() => {
    showSprite(matt);
  }, 200);
}

const goText = new Text("He goes to get it.", h1S());
function mattGoesF() {
  hideSprite(phoneCallText);
  setText(goText, 1, 1);
  move(matt, kitchen.x + 155, matt.y, 1000);
}

const anniePhone = new Sprite(Texture("/assets/games/misc/phoneannie.svg"));
const blackLayer = new PIXI.Graphics();
function phoneAnnieF() {
  hideSprite(goText);
  toggleShake(phoneSide);
  blackLayer.beginFill(0x000000, 0.75);
  blackLayer.drawRect(0, 0, app.screen.width, app.screen.height);
  blackLayer.alpha = 0;
  anniePhone.x = app.screen.width / 2;
  anniePhone.y = app.screen.height * 2;
  main.addChild(blackLayer);
  showSprite(blackLayer);
  move(anniePhone, anniePhone.x, app.screen.height / 2, 1000);
  setObject(anniePhone, 1, 1);
}

const mattCall = new Sprite(Texture("/assets/peeps/matthew/phone.svg"));
const annieCallText = new Text("They're chatting!", h1S());
function phoneAnnieAcceptF() {
  hideSprite(phoneCallText);
  hideSprite(blackLayer);
  hideSprite(matt);
  hideSprite(phoneSide);
  move(anniePhone, anniePhone.x, app.screen.height * 2, 1000);
  setTimeout(() => {
    hideSprite(anniePhone);
  }, 1000);
  setText(annieCallText, 1, 1);
  setObject(mattCall, 1, 1);
  mattCall.x = matt.x;
  mattCall.y = matt.y;
  mattCall.scale.x = -1;
}

const panFire = new Sprite(Texture("/assets/games/fire/fire1.svg"));
const smoke1 = new Sprite(Texture("/assets/games/fire/smoke1.svg"));
const fireStartText = new Text("Oh no! He forgot to turn off the stove.", h1S());
function panFireF() {
  hideSprite(annieCallText);
  setText(fireStartText, 1, 1);
  setObject(panFire, 1, 1);
  setObject(smoke1, 1, 1);
  panFire.x = pan.x - 15;
  panFire.y = pan.y - 40;
  smoke1.x = pan.x - 10;
  smoke1.y = pan.y - 85;
}

const mattPanic = new Sprite(Texture("/assets/peeps/matthew/panic.svg"));
const onFireText = new Text("The pan is on fire!", h1S());
function mattPanicF() {
  hideSprite(mattCall);
  hideSprite(fireStartText);
  setText(onFireText, 1, 1);
  setObject(mattPanic, 1, 1);
  mattPanic.x = mattCall.x;
  mattPanic.y = mattCall.y;
  mattPanic.scale.x = -1;
}

const whatToDoText = new Text("What should he do?", h1S());
const turnOffStove = new PIXI.Container();
const turnOffStoveButton = new Button();
const pourWater = new PIXI.Container();
const pourWaterButton = new Button();
function whatToDoF() {
  timeout();
  hideSprite(onFireText);
  setText(whatToDoText, 1, 1);

  turnOffStove.x = app.screen.width / 4 - 150;
  turnOffStove.y = app.screen.height - 160;
  turnOffStove.alpha = 0;
  main.addChild(turnOffStove);
  turnOffStoveButton.interactive = true;
  turnOffStoveButton.buttonMode = true;
  turnOffStove.addChild(turnOffStoveButton);
  turnOffStoveButton.on("click", () => {
    timeout();
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
  showSprite(turnOffStove);

  pourWater.x = (app.screen.width * 3) / 4 - 150;
  pourWater.y = app.screen.height - 160;
  pourWater.alpha = 0;
  main.addChild(pourWater);
  pourWaterButton.interactive = true;
  pourWaterButton.buttonMode = true;
  pourWater.addChild(pourWaterButton);
  pourWaterButton.on("click", () => {
    timeout();
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
  showSprite(pourWater);
}

function turnOffStoveF() {
  state = "turnOffStove";
  timeout();
  hideSprite(whatToDoText);
  hideSprite(turnOffStove);
  hideSprite(pourWater);
  turnOffStoveButton.interactive = false;
  pourWaterButton.interactive = false;
  move(mattPanic, kitchen.x - 100, mattPanic.y, 1000);
}

function turnOffStove2F() {
  timeout();
  hideSprite(firepan);
}

const stoveWhatToDoText = new Text("What's next?", h1S());
const bringOutside = new PIXI.Container();
const bringOutsideButton = new Button();
const useSalt = new PIXI.Container();
const useSaltButton = new Button();
function stoveWhatToDoF() {
  timeout();
  hideSprite(onFireText);
  setText(stoveWhatToDoText, 1, 1);

  bringOutside.x = app.screen.width / 4 - 150;
  bringOutside.y = app.screen.height - 160;
  bringOutside.alpha = 0;
  main.addChild(bringOutside);
  bringOutsideButton.interactive = true;
  bringOutsideButton.buttonMode = true;
  bringOutside.addChild(bringOutsideButton);
  bringOutsideButton.on("click", () => {
    timeout();
    bringOutsideF();
  });
  const bringOutsideText = new Text("Bring it outside", h2S);
  bringOutside.addChild(bringOutsideText);
  bringOutsideText.anchor.set(1, 0.5);
  bringOutsideText.x = 280;
  bringOutsideText.y = 40;
  const pan = new Sprite(Texture("/assets/games/kitchen/pan.svg"));
  bringOutside.addChild(pan);
  pan.anchor.set(0, 0.5);
  pan.x = 20;
  pan.y = 40;
  pan.scale.set(0.8, 0.8);
  showSprite(bringOutside);

  useSalt.x = (app.screen.width * 3) / 4 - 150;
  useSalt.y = app.screen.height - 160;
  useSalt.alpha = 0;
  main.addChild(useSalt);
  useSaltButton.interactive = true;
  useSaltButton.buttonMode = true;
  useSalt.addChild(useSaltButton);
  useSalt.addChild(useSaltButton);
  useSaltButton.on("click", () => {
    timeout();
    useSaltF();
  });
  const useSaltText = new Text("Use salt", h2S);
  useSalt.addChild(useSaltText);
  useSaltText.anchor.set(1, 0.5);
  useSaltText.x = 280;
  useSaltText.y = 40;
  const saltPot = new Sprite(Texture("/assets/games/kitchen/saltpot.svg"));
  useSalt.addChild(saltPot);
  saltPot.anchor.set(0, 0.5);
  saltPot.x = 20;
  saltPot.y = 40;
  showSprite(useSalt);
}

const mattPanic3 = new Sprite(Texture("/assets/peeps/matthew/panic.svg"));
const panFire2 = new Sprite(Texture("/assets/games/fire/fire1.svg"));
const pan2 = new Sprite(Texture("/assets/games/kitchen/pan.svg"));
const grass = new Sprite(Texture("/assets/games/kitchen/grass.svg"));
function bringOutsideF() {
  state = "bringOutside";
  timeout();
  hideSprite(stoveWhatToDoText);
  hideSprite(bringOutside);
  hideSprite(useSalt);
  hideSprite(mattPanic);
  hideSprite(panFire);
  hideSprite(smoke1);
  hideSprite(pan);
  bringOutsideButton.interactive = false;
  useSaltButton.interactive = false;
  setObject(grass, 1);
  setObject(mattPanic3, 1, 1);
  setObject(pan2, 1, 1);
  setObject(panFire2, 1, 1);
  mattPanic3.x = app.screen.width / 3;
  mattPanic3.y = app.screen.height / 2;
  pan2.x = mattPanic3.x + 80;
  pan2.y = mattPanic3.y;
  panFire2.x = pan2.x + 15;
  panFire2.y = pan2.y - 40;
  pan2.scale.x = -1;
  panFire2.scale.x = -1;
  move(kitchen, -app.screen.width / 2, kitchen.y, 10000);
}

const mattTrip = new Sprite(Texture("/assets/peeps/matthew/trip.svg"));
function outsideF() {
  timeout();
  setObject(mattTrip, 1)
  grass.x = app.screen.width * 2;
  grass.y = kitchen.y + 200;
  mattTrip.x = mattPanic3.x;
  mattTrip.y = mattPanic3.y;
  main.addChild(mattTrip);
  showSprite(grass);
  move(grass, app.screen.width / 2, kitchen.y + 100, 10000);
  setTimeout(() => {
    timeout();
    hideSprite(mattPanic3);
    showSprite(mattTrip);
    move(pan2, (app.screen.width * 2) / 3, grass.y, 10000);
    move(panFire2, (app.screen.width * 2) / 3 + 15, grass.y - 40, 10000);
  }, 1000);
}

const fireGrass1 = new Sprite(Texture("/assets/games/fire/fire1.svg"));
const fireGrass2 = new Sprite(Texture("/assets/games/fire/fire2.svg"));
function outsideBurnF() {
  setObject(fireGrass1, 1, 1);
  setObject(fireGrass2, 1, 1);
  fireGrass2.anchor.set(0.5);
  fireGrass1.x = (app.screen.width * 2) / 3 + 15 + 125;
  fireGrass1.y = grass.y;
  fireGrass2.x = (app.screen.width * 2) / 3 + 15 - 100;
  fireGrass2.y = grass.y;
}

const kitchenText = new Text("The Kitchen:", h1S());
const burnedText = new Text("The Kitchen:\nBurned", h1S());
function endingBurnF() {
  setText(kitchenText, 1, 1);
  setText(burnedText, 1);
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
  setObject(saltPile, 1, 1);
  setObject(saltPot, 1, 1);
  saltPile.x = panFire.x;
  saltPile.y = panFire.y + 20;
  saltPot.x = panFire.x;
  saltPot.y = panFire.y - 50;
  saltPile.scale.set(0.4, 0.4);
  saltPot.scale.set(0.4, 0.4);
  timeout();
}

const useSaltText = new Text("Salt doesn't burn, and lowers the temperature of the fire.", h1S("#cba6f7"));
const vtl = new Sprite(Texture("/assets/people/vtl.svg"));
const saltPile2 = new Sprite(Texture("/assets/games/kitchen/saltpile.svg"));
const fireSalt = new Sprite(Texture("/assets/games/fire/fire2.svg"));
function useSaltExplainF() {
  main.removeChild(blackLayer);
  main.addChild(blackLayer);
  showSprite(blackLayer);
  setText(useSaltText, 1, 1);
  setObject(vtl, 1, 1);
  setObject(saltPile2, 1);
  setObject(fireSalt, 1, 1);
  vtl.x = app.screen.width / 4;
  vtl.y = app.screen.height / 2;
  saltPile2.x = (app.screen.width * 3) / 4;
  saltPile2.y = app.screen.height / 2;
  fireSalt.x = (app.screen.width * 3) / 4;
  fireSalt.y = app.screen.height / 2;
  fireSalt.scale.set(0.7);
  setTimeout(() => {
    showSprite(saltPile2);
  }, 250);
  setTimeout(() => {
    hideSprite(fireSalt);
  }, 1000);
}

const matt2 = new Sprite(Texture("/assets/peeps/matthew/matt.svg"));
const extinguisedText = new Text("The fire went out!", h1S());
function extinguisedF() {
  hideSprite(blackLayer);
  hideSprite(useSaltText);
  hideSprite(vtl);
  hideSprite(saltPile2);
  hideSprite(fireSalt);
  hideSprite(mattPanic);
  hideSprite(saltPot);
  setText(extinguisedText, 1, 1);
  setObject(matt2, 1, 1);
  matt2.x = mattPanic.x;
  matt2.y = mattPanic.y;
  matt2.scale.x = -1;
}

const extinguised2Text = new Text("The Kitchen:\nExtinguised", h1S());
function endingExtinguisedF() {
  setText(kitchenText, 1, 1);
  setText(extinguised2Text, 1);
  hideSprite(extinguisedText);
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
  move(mattPanic, kitchen.x - 50, mattPanic.y, 1000);
}

const cupOfWaterPour = new Sprite(Texture("/assets/games/kitchen/waterpour.svg"));
function pourWater2F() {
  setObject(cupOfWaterPour, 1, 1);
  cupOfWaterPour.x = pan.x + 15;
  cupOfWaterPour.y = pan.y - 20;
}

const overflowText = new Text("The oil overflows!", h1S());
const oilWaterPatch = new Sprite(Texture("/assets/games/kitchen/oilwaterpatch.svg"));
const oilFire = new Sprite(Texture("/assets/games/fire/fire2.svg"));
function oilOverflow2F() {
  hideSprite(cupOfWaterPour);
  setText(overflowText, 1, 1);
  setObject(oilWaterPatch, 1, 1);
  setObject(oilFire, 1, 1);
  oilWaterPatch.x = pan.x - 85;
  oilWaterPatch.y = pan.y + 20;
  oilFire.x = pan.x - 55;
  oilFire.y = pan.y;
  oilWaterPatch.scale.set(0.3, 0.3);
  oilFire.scale.set(0.4, 0.4);
}

const oilFloatText = new Text("Oil floats on water due to its density.", h1S("#cba6f7"));
const fairy = new Sprite(Texture("/assets/people/fairy.svg"));
const oilWaterGlass = new Sprite(Texture("/assets/games/kitchen/oilwater.svg"));
function oilExplainF() {
  main.removeChild(blackLayer);
  main.addChild(blackLayer);
  showSprite(blackLayer);
  setText(oilFloatText, 1, 1);
  setObject(fairy, 1, 1);
  setObject(oilWaterGlass, 1, 1);
  fairy.x = app.screen.width / 4;
  fairy.y = app.screen.height / 2;
  oilWaterGlass.x = (app.screen.width * 3) / 4;
  oilWaterGlass.y = app.screen.height / 2;
}

const waterOnOilText = new Text("When adding water to burning oil, the oil stays afloat, and the fire is not extinguised.", h1S("#cba6f7"));
const waterPatch = new Sprite(Texture("/assets/games/kitchen/waterpatch.svg"));
const oilPatch = new Sprite(Texture("/assets/games/kitchen/oilpatch.svg"));
const fireOilWater = new Sprite(Texture("/assets/games/fire/fire1.svg"));
function oilExplain2F() {
  hideSprite(oilFloatText);
  hideSprite(oilWaterGlass);
  setText(waterOnOilText, 1, 1);
  setObject(waterPatch, 1);
  setObject(oilPatch, 1, 1);
  setObject(fireOilWater, 1, 1);
  fireOilWater.x = (app.screen.width * 3) / 4;
  fireOilWater.y = app.screen.height / 2 - 30;
  waterPatch.x = (app.screen.width * 3) / 4;
  waterPatch.y = app.screen.height / 2;
  oilPatch.x = (app.screen.width * 3) / 4;
  oilPatch.y = app.screen.height / 2;
  waterPatch.scale.set(2, 2);
  canTrigger = false;
  setTimeout(() => {
    timeout();
    showSprite(waterPatch);
  }, 600);
}

const whoToCallText = new Text("Who should he call?", h1S());
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
  setText(whoToCallText, 1, 1);

  callFirefighter.x = app.screen.width / 4 - 150;
  callFirefighter.y = app.screen.height - 160;
  callFirefighter.alpha = 0;
  main.addChild(callFirefighter);
  callFirefighterButton.interactive = true;
  callFirefighterButton.buttonMode = true;
  callFirefighter.addChild(callFirefighterButton);
  callFirefighterButton.on("click", () => {
    timeout();
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
  main.addChild(callMom);
  callMomButton.interactive = true;
  callMomButton.buttonMode = true;
  callMom.addChild(callMomButton);
  callMomButton.on("click", () => {
    timeout();
    callMomF();
  });
  const callMomText = new Text("Call mom", h2S);
  callMom.addChild(callMomText);
  callMomText.anchor.set(1, 0.5);
  callMomText.x = 280;
  callMomText.y = 40;
  const mom = new Sprite(Texture("/assets/peeps/sarah.svg"));
  callMom.addChild(mom);
  mom.anchor.set(0, 0.5);
  mom.x = 20;
  mom.y = 40;
  mom.scale.set(0.3, 0.3);
  showSprite(callMom);
  timeout();
}

const mattCallPanic = new Sprite(Texture("/assets/peeps/matthew/phonepanic.svg"));
function mattCallPanicF() {
  hideSprite(mattPanic);
  setObject(mattCallPanic, 1, 1)
  mattCallPanic.x = mattPanic.x;
  mattCallPanic.y = mattPanic.y;
  mattCallPanic.scale.x = -1;

  hideSprite(callFirefighter);
  hideSprite(callMom);
  callFirefighterButton.interactive = false;
  callMomButton.interactive = false;
}

const momPhone = new Sprite(Texture("/assets/games/misc/phonesarah.svg"));
function callMomF() {
  state = "callMom";
  mattCallPanicF();
  main.removeChild(blackLayer);
  main.addChild(blackLayer);
  hideSprite(whoToCallText);
  setObject(momPhone, 1, 1);
  momPhone.x = app.screen.width / 2;
  momPhone.y = app.screen.height * 2;
  showSprite(blackLayer);
  move(momPhone, momPhone.x, app.screen.height / 2, 1000);
}

const momText = new Text("You stupid. Call the firefighters", h1S("#cba6f7"));
function callMom2F() {
  setText(momText, 1, 1);
}

function callMom3F() {
  move(momPhone, momPhone.x, app.screen.height * 2, 1000);
  hideSprite(blackLayer);
  hideSprite(momPhone);
  hideSprite(momText);
  callWhoF();
}

const firefighterPhone = new Sprite(Texture("/assets/games/misc/phonefirefighter.svg"));
function callFirefighterF() {
  state = "callFirefighter";
  mattCallPanicF();
  main.removeChild(blackLayer);
  main.addChild(blackLayer);
  showSprite(blackLayer);
  hideSprite(whoToCallText);
  setObject(firefighterPhone, 1, 1)
  firefighterPhone.x = app.screen.width / 2;
  firefighterPhone.y = app.screen.height * 2;
  move(firefighterPhone, firefighterPhone.x, app.screen.height / 2, 1000);
}

const firefighterText = new Text("We'll be there!", h1S("#ff4444"));
function callFirefighter2F() {
  setText(firefighterText, 1, 1);
}

const firefighter = new Sprite(Texture("/assets/peeps/firefighter/extinguish.svg"));
const house = new Sprite(Texture("/assets/games/misc/house.svg"));
const fireHouse = new Sprite(Texture("/assets/games/fire/fire1.svg"));
const mattPanic2 = new Sprite(Texture("/assets/peeps/matthew/panic.svg"));
function endingRescuedF() {
  move(firefighterPhone, firefighterPhone.x, app.screen.height * 2, 1000);
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
  setObject(firefighter, 1, 1);
  setObject(house, 1, 1);
  setObject(fireHouse, 1, 1);
  setObject(mattPanic2, 1, 1);
  mattPanic2.x = (app.screen.width * 3) / 4;
  mattPanic2.y = app.screen.height / 2;
  firefighter.x = app.screen.width / 2;
  firefighter.y = app.screen.height / 2;
  house.x = app.screen.width / 5;
  house.y = app.screen.height / 2;
  fireHouse.x = app.screen.width / 5;
  fireHouse.y = app.screen.height / 2 - house.height / 2;
  firefighter.scale.x = -1;
  mattPanic2.scale.x = -1;
  fireHouse.scale.set(2, 2);
}

const rescuedText = new Text("The Kitchen:\nRescued", h1S());
function endingRescued2F() {
  setText(kitchenText, 1, 1);
  setText(rescuedText, 1);
  setTimeout(() => {
    showSprite(rescuedText);
  }, 500);
}

const copiedText = new Text("Copied!", h1S());
const retry = new PIXI.Container();
const retryButton = new Button();
const home = new PIXI.Container();
const homeButton = new Button();
const share = new PIXI.Container();
const shareButton = new Button();
function endingF() {
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
    navigator.clipboard.writeText(`The kitchen: ${ending}\n${window.location.href}`);
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
