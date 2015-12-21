$(function (){

var Card = function(x,y){
  this.x = x;
  this.y = y;
  this.width=70;
}

var cards = [];

var num_columns = 5;
var num_rows = 4;
for (var i = 0; i < num_columns; i++) {
    for (var j = 0; j < num_rows; j++) {
      cards.push(new Card(i*78+10, j*78+40));
    }
}

Card.prototype.drawFaceDown = function() {
  strokeWeight(2);
  rect(this.x,this.y,this.width,this.width,10);
  image(getImage("cards/chucknorris.jpg"),this.x,this.y,this.width,this.width);
};

for ( var i = 0; i < cards.length; i++) {
  cards[i].drawFaceDown();
}

var front = [
  getImage("cards/ace.png"),
  getImage("cards/king.png"),
  getImage("cards/queen.png"),
  getImage("cards/jack.png"),
  getImage("cards/ten.png"),
  getImage("cards/nine.png"),
];

var selected = [];
for (var i=0;i<10;i++) {
  var randomInd = floor(random(front.length));
  var front2 = front[randomInd];
  selected.push(front2);
  selected.push(front2);
  front.splice(randomInd,1);
}


selected.sort(function() {
  return 0.5-random();
});


for (var i=0; i<nums_columns; i++) {
  for (var j=0; j<num_rows; j++) {
    cards.push(new Card(i*78+10,j*78+40,selected.pop()));
  }
}

Card.prototype.drawFaceUp = function(){

    strokeWeight(2);
    rect(this.x,this.y,this.width,this.width,10);
    image(this.face,this.x,this.y,this.width,this.width);
  };

  for (var i=0;i<cards.length;i++){
    cards[i].drawFaceUp();
  }



});
