//권태주(5646307)
//Rock Paper Scissors
//CS099
//Spring 2020



let Player1 = {
  key: null,
  isKeyPressed: false
}

let Player2 = {
  key: null,
  isKeyPressed: false
}

let game_end = false;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER)
  textSize(20)
}

function draw() {
  background(220);
  push()
  noStroke()
  fill(255, 182, 193)
  rect(0, 0, width / 2, height)
  fill(0, 191, 255)
  rect(width / 2, 0, width / 2, height)
  pop()

  text("Player1", width / 4, 50);
  text("Player2", 3 * width / 4, 50);

  text("Rock = 'A'", width / 4, 300);
  text("Paper = 'S'", width / 4, 320);
  text("Scissors = 'D'", width / 4, 340);

  text("Rock = 'H'", 3 * width / 4, 300);
  text("Paper = 'J'", 3 * width / 4, 320);
  text("Scissors = 'K'", 3 * width / 4, 340);


  print_letters(game_end)
  if (game_end == true) {
    Result(Compare(Player1, Player2))
  }
  if (Player1.isKeyPressed == true && Player2.isKeyPressed == true) {
    game_end = true;
  }
}

function keyPressed() {
  modify_json()
  if (game_end == true) {
    Player1.key = null;
    Player1.isKeyPressed = false;
    Player2.key = null;
    Player2.isKeyPressed = false;
    game_end = false;
  }
}
//Takes in a JSON object and modifies it.
function modify_json() {
  if (game_end == false) {
    if (Player1.isKeyPressed == false) {
      if (key == 'a') {
        Player1.key = 'Rock';
        Player1.isKeyPressed = true;
      } else if (key == 's') {
        Player1.key = 'Paper';
        Player1.isKeyPressed = true;
      } else if (key == 'd') {
        Player1.key = 'Scissors';
        Player1.isKeyPressed = true;
      }
    }
    if (Player2.isKeyPressed == false) {
      if (key == 'h') {
        Player2.key = 'Rock';
        Player2.isKeyPressed = true;
      } else if (key == 'j') {
        Player2.key = 'Paper';
        Player2.isKeyPressed = true;
      } else if (key == 'k') {
        Player2.key = 'Scissors';
        Player2.isKeyPressed = true;
      }
    }
  }
}
//Takes input and does a task
function Result(value) {
  if (value == 1) {
    text('Player1 is WIN !', 200, 200);
  } else if (value == 2) {
    text('Player2 is WIN !', 200, 200);
  } else if (value == 3) {
    text('SAME', 200, 200);
  }
}
//Takes input and does a task
function print_letters(status) {
  if (status == false) {
    push()
    text("Press the keyboard button.", width / 2, 100)
    pop()
    //text() Player1은 뭐뭐뭐
    //text() Player2는 뭐뭐뭐
  } else {

  }
}
//Takes input and return
function Compare(object1, object2) {
  if (object1.key == object2.key) {
    return 3;
  } else if (object1.key == 'Rock' && object2.key == 'Scissors') {
    push()
    fill(250, 235, 215)
    ellipse(100, 200, 100, 70);
    ellipse(60, 180, 20, 50);
    ellipse(80, 180, 20, 50);
    ellipse(100, 180, 20, 50);
    ellipse(120, 180, 20, 50);
    ellipse(140, 200, 50, 20); //rock

    rectMode(CENTER)
    rect(300, 200, 80, 80, 20);
    rect(270, 140, 20, 80, 20);
    rect(290, 120, 20, 100, 20)
    rect(310, 180, 20, 60, 20);
    rect(330, 180, 20, 50, 20);
    rect(260, 200, 20, 50, 20); //scissors
    pop()
    return 1

  } else if (object1.key == 'Rock' && object2.key == 'Paper') {
    push()
    fill(250, 235, 215)
    ellipse(100, 200, 100, 70);
    ellipse(60, 180, 20, 50);
    ellipse(80, 180, 20, 50);
    ellipse(100, 180, 20, 50);
    ellipse(120, 180, 20, 50);
    ellipse(140, 200, 50, 20); //rock

    rect(270, 200, 80, 80, 20);
    rect(270, 140, 20, 80, 20);
    rect(290, 120, 20, 100, 20)
    rect(310, 140, 20, 80, 20);
    rect(330, 150, 20, 70, 20);
    rect(250, 200, 20, 50, 20);
    pop()

    return 2
  } else if (object1.key == 'Paper' && object2.key == 'Rock') {
    push()
    fill(250, 235, 215)
    rect(80, 200, 80, 80, 20);
    rect(80, 140, 20, 80, 20);
    rect(100, 120, 20, 100, 20)
    rect(120, 140, 20, 80, 20);
    rect(140, 150, 20, 70, 20);
    rect(60, 220, 20, 50, 20);

    ellipse(300, 200, 100, 70);
    ellipse(260, 180, 20, 50);
    ellipse(280, 180, 20, 50);
    ellipse(300, 180, 20, 50);
    ellipse(320, 180, 20, 50);
    ellipse(340, 200, 50, 20);
    pop()
    return 1
  } else if (object1.key == 'Paper' && object2.key == 'Scissors') {
    push()
    fill(250, 235, 215)
    rectMode(CENTER)
    rect(100, 200, 80, 80, 20);
    rect(70, 140, 20, 80, 20);
    rect(90, 130, 20, 100, 20)
    rect(110, 140, 20, 80, 20);
    rect(130, 150, 20, 70, 20);
    rect(50, 210, 20, 50, 20);

    
    rect(300, 200, 80, 80, 20);
    rect(270, 140, 20, 80, 20);
    rect(290, 120, 20, 100, 20)
    rect(310, 180, 20, 60, 20);
    rect(330, 180, 20, 50, 20);
    rect(260, 200, 20, 50, 20); //scissors
    pop()
    return 2
  } else if (object1.key == 'Scissors' && object2.key == 'Paper') {
    push()
    fill(250, 235, 215)
    rectMode(CENTER)
    rect(100, 200, 80, 80, 20);
    rect(70, 140, 20, 80, 20);
    rect(90, 120, 20, 100, 20)
    rect(110, 180, 20, 60, 20);
    rect(130, 180, 20, 50, 20);
    rect(60, 200, 20, 50, 20);

    rect(300, 200, 80, 80, 20);
    rect(270, 140, 20, 80, 20);
    rect(290, 120, 20, 100, 20)
    rect(310, 140, 20, 80, 20);
    rect(330, 150, 20, 70, 20);
    rect(250, 200, 20, 50, 20);
    pop()
    return 1
  } else if (object1.key == 'Scissors' && object2.key == 'Rock') {
    push()
    fill(250, 235, 215)
    rectMode(CENTER)
    rect(100, 200, 80, 80, 20);
    rect(70, 140, 20, 80, 20);
    rect(90, 120, 20, 100, 20)
    rect(110, 180, 20, 60, 20);
    rect(130, 180, 20, 50, 20);
    rect(60, 200, 20, 50, 20);

    ellipse(300, 200, 100, 70);
    ellipse(260, 180, 20, 50);
    ellipse(280, 180, 20, 50);
    ellipse(300, 180, 20, 50);
    ellipse(320, 180, 20, 50);
    ellipse(340, 200, 50, 20);
    pop()
    return 2
  }
}
//Takes input and return