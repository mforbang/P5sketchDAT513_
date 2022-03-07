let data2016, data2020, button, selecteddata2016, selecteddata2020;
let dataHasBeenSelected = false;
let data2016Len = 297;
let data2020Len = 297;
let LeftTextX, RightTextX, boxY;
let barLength = 500;
let color2016, color2020;  


function preload(){

//to mkae sure I know what data I would be using when coding in the future, so 
// I know the difference in the future. 

data2016 = loadJSON('data/2016data.json');
console.log(data2016)

data2020 = loadJSON('data/2020data.json');
console.log(data2020);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    button = createButton('This project is based on the comparison of Anime based in 2016 and 2020. Press this to randomise the data.');
    button.size(200,150);
    button.position(1245,50);
    button.mousePressed(randomButton);

    LeftTextX = width*0.05;
    RightTextX = width*0.8; 
    boxY = height*0.28;

    color2020 = color(252,186,3);
    color2016 = color(0,0,255);

  }


function draw() {

  background(255);
  textFont('Georgia', 45);
  text('Popular Anime from 2016 VS 2020',450,50);




// make sure to adjust the titles later



  if (dataHasBeenSelected){

       DrawText();
      noStroke();
      fill(color2016);

  //how the 'Math.min' value works is that if the minimal value is equal to the
  //value I've inserted then it won't go beyond the screen but would be limited to 
  //value that I've inserted into the screen. 

  let membersVal16 = selecteddata2016['members'];
  membersVal16 = Math.min(membersVal16,850000)/850000;
  rect(550, boxY, 50, membersVal16*barLength);

  fill(color2020);  
  let membersVal20 = selecteddata2020['Members'];
  membersVal20 = Math.min(membersVal20,850000)/850000;
  rect(500, boxY, 50, membersVal20*barLength);

  fill(color2016);
  let ratingsVal16 = selecteddata2016['rating']/10;
  ratingsVal16 = Math.min(ratingsVal16,10)/10;
  rect(780, boxY, 50, ratingsVal16*barLength);

  fill(color2020);  
  let ratingsVal20 = selecteddata2020['Ratings']/10;
  ratingsVal20 = Math.min(ratingsVal20,10)/10;
  rect(830, boxY, 50, ratingsVal20*barLength);

  fill(color2016);
  let episodesVal16 = selecteddata2016['episodes']/500;
  rect(1000, boxY, 50, episodesVal16*barLength);

  fill(color2020);  
  let episodesVal20 = selecteddata2020['Episodes']/500;
  rect(1050, boxY, 50, episodesVal20*barLength);

  } 

fill(252,186,3);
  textSize(28);
  text('Members', 500, 150);
  textSize(25);
  text('Ratings', 790, 150);
  textSize(25);
  text('Episodes', 1005, 150 );
  textSize(23);

}



function randomButton(){
let indexdata2016 = random(data2016Len);
indexdata2016 = Math.floor(indexdata2016);
selecteddata2016 = data2016[indexdata2016];

let indexdata2020 = random(data2020Len);
indexdata2020 = Math.floor(indexdata2020);
selecteddata2020 = data2020[indexdata2020];

dataHasBeenSelected = true;

}



function DrawText(){
  textFont('georgia', 22);
 
  
  //the rectangles that are adjusted here change the background is 
  //where the texts based on the information on aime.
  rect(50, 225, LeftTextX+250,375);
  fill(color2016);

  rect(RightTextX-35, 225, width - RightTextX+10 ,375);
  fill(color2020);

//this fill is used so that the wording is in black. If 
//I do not do this then it will fill based on the colour 
//of the data in 2016.

  fill(0);

// these are the titles that would be randomly genreated 
// when comparing the data from both 2016 and 2020.

//For text, the text is inserted within a rectangle and 
//so the second two text would be the perameters of where
//the text would go within the rectangle.  

  let animeTitle = 'Title: ' + selecteddata2016['name'];
  text(animeTitle,LeftTextX,275,250);

  let animeGenre = 'Genre: ' + selecteddata2016['genre'];
  text(animeGenre,LeftTextX,400,250);

  let animeType = 'Type: ' + selecteddata2016['type'];
  text(animeType,LeftTextX,525,190);

  let animeTitle2 = 'Title: ' + selecteddata2020['Name'];
  text(animeTitle2,RightTextX,275,300);

  let animeGenre2 = 'Genre: ' + selecteddata2020['Genres'];
  text(animeGenre2,RightTextX, 400,300);

  let animeType2 = 'Type: ' + selecteddata2020['Type'];
  text(animeType2,RightTextX, 525,300);


}