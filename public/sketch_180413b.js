var tweetline;
let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(14);
}

function preload() {
 var url =
   'https://hackaton3-misaelcabreraar.c9users.io:8081/info';
   tweetline = loadJSON(url);
   /*
   var request = require('request');
    request(url,function(error,response,body){
        if(!error && response.statusCode == 200){
            var data=JSON.parse(body)
            console.log(data);
        }
    })
   */
}

function mouseClicked(){
    //let numberB = random(1, 10);
    let numberB = 1;
    for (let i = 0; i < numberB; i++){
    let r = random(0, 60);
    let x = random(0, windowWidth);
    let y = random(0, windowHeight);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function generateSound(typeSignal, frequency) {
    var oscillator = context.createOscillator(); // instantiate an oscillator

    oscillator.type = typeSignal; // this is the default - also square, sawtooth, triangle
    oscillator.frequency.value = frequency; // Hz

    oscillator.connect(context.destination); // connect it to the destination
    //gainNode.connect(context.destination);

    oscillator.start(); //start the oscillator
    oscillator.stop(context.currentTime + 0.05); // stop 2 seconds after the current time

    // gainNode.gain.setValueAtTime(0,0);
    // gainNode.gain.linearRampToValueAtTime(0.5, 2.5);
    //
    // gainNode.gain.linearRampToValueAtTime(0.01, 5);
    //
    // // Connect graph
    // oscillator.connect(gainNode);
    // gainNode.connect(context.destination);
    //
    // // Schedule start and stop
    // oscillator.start();
    // oscillator.stop(context.currentTime + 5);
    //
    // gainNode.gain.setValueAtTime(0,0);
}



function draw() {
  background(120);
  for (let i = 0; i < bubbles.length; i++){
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles[i].changeColor(255);
      textSize(14);
      fill(255, 255, 255);
      text('#hashtag',bubbles[i].x,bubbles[i].y)
    } else {
      bubbles[i].changeColor(0);
    }
    bubbles[i].move();
    bubbles[i].show();
  }

  if  (bubbles.length > 100){
    bubbles.splice(0, 1);
  }
}

class Bubble {
  constructor(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  changeColor(bright){
    this.brightness = bright;
  }

  contains(px, py){
    let d = dist(px, py, this.x, this.y);
    if (d < this.r){
      return true;
    } else{
      return false;
    }
  }
  move (){
    this.r = this.r + random(-0.7, 0.7);
  }

  show(){
    stroke(255);
    strokeWeight(1);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r*2);
  }
}

function agregarSentimiento(text){
  console.log("agregando sentimiento");
    let pagina = "https://api.meaningcloud.com/sentiment-2.1?key=143d556c90b3089eabca85de2b60591f&of=json&txt=" + text +"&lang=en";
    var request = require('request');
    request(pagina,function(error,response,body){
        if(!error && response.statusCode == 200){
            var data=JSON.parse(body)
            console.log(data.score_tag);
        }
    })
}