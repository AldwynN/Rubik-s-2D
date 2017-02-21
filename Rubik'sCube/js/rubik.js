//Made by Yannis Perrin
//last changes : 13 jan 2017

class Face {
    constructor(nbFaceX, nbFaceY){
        this.face = new Array(nbFaceX);
        for (var x = 0; x < this.face.length; x++){
            this.face[x] = new Array(nbFaceY);
        }
    }
    
    fill(value){
        for (var x = 0; x < this.face.length; x++){
            for (var y = 0; y < this.face[x].length; y++) {
                this.face[x][y] = value;
            }
        }
    }
    debug(){
        var str = "";
        for (var x = 0; x < this.face.length; x++){
            for (var y = 0; y < this.face[x].length; y++) {
                str += this.face[x][y];
            }
        }
        return str;
    }
}

class Cube {
    constructor(){
        this.faceLeft = new Face(3,3);
        this.faceLeft.fill(0);
        this.faceFront = new Face(3,3);
        this.faceFront.fill(1);
        this.faceRight = new Face(3,3);
        this.faceRight.fill(2);
        this.faceBack = new Face(3,3);
        this.faceBack.fill(3);
        this.faceUp = new Face(3,3);
        this.faceUp.fill(4);
        this.faceDown = new Face(3,3);
        this.faceDown.fill(5);
    }
    
    turnFace(nameFace, clockwise = true){
        switch (nameFace){
            case "Left":
                if (clockwise) {
                    
                }
                break;
            case "Front":
                if (clockwise) {
                    var temp = new Array(3);
                    temp[0] = this.faceRight.face[0][0];
                    temp[1] = this.faceRight.face[0][1];
                    temp[2] = this.faceRight.face[0][2];
                    
                    this.faceRight.face[0][0] = this.faceUp.face[0][2];
                    this.faceRight.face[0][1] = this.faceUp.face[1][2];
                    this.faceRight.face[0][2] = this.faceUp.face[2][2];
                    
                    this.faceUp.face[0][2] = this.faceLeft.face[2][0];
                    this.faceUp.face[1][2] = this.faceLeft.face[2][1];
                    this.faceUp.face[2][2] = this.faceLeft.face[2][2];
                    
                    this.faceLeft.face[2][0] = this.faceDown.face[0][0];
                    this.faceLeft.face[2][1] = this.faceDown.face[0][1];
                    this.faceLeft.face[2][2] = this.faceDown.face[0][2];
                    
                    this.faceDown.face[0][0] = temp[0];
                    this.faceDown.face[0][1] = temp[1];
                    this.faceDown.face[0][2] = temp[2];
                }
                else{
                    turnFace("Front");
                    turnFace("Front");
                    turnFace("Front");
                }
                break;
            case "Right":
                if (clockwise) {
                    
                }
                break;
            case "Back":
                if (clockwise) {
                    
                }
                break;
            case "Up":
                if (clockwise) {
                    
                }
                break;
            case "Down":
                if (clockwise) {
                    
                }
                break;             
        }
    }
}


var canvas = document.getElementById('rubiks2D'),
        canvasLeft = canvas.offsetLeft,
        canvasTop = canvas.offsetTop,
        context = canvas.getContext('2d');

var debug = document.getElementById('debug');

if (!canvas)
{
    alert("Impossible de récupérer le canvas");
}

if (!context)
{
    alert("Impossible de récupérer le context du canvas");
}

var tailleCarre = 20;
var cube = new Cube();
var nbCarreX = 3;
var nbCarreY = 3;
var offset = 30;
context.strokeStyle = "black";
context.lineWidth = 1;
var drawTimer = setInterval(DrawRubik, 100);


function DrawRubik() {
    //GridLeft (Blue)
    MakeGrid(1 * offset, 2 * offset + 3 * tailleCarre, tailleCarre, nbCarreX, nbCarreY);
    DrawFace(1 * offset, 2 * offset + 3 * tailleCarre, cube.faceLeft.face);
    //GridFront (White)
    MakeGrid(2 * offset + 3 * tailleCarre, 2 * offset + 3 * tailleCarre, tailleCarre, nbCarreX, nbCarreY);
    DrawFace(2 * offset + 3 * tailleCarre, 2 * offset + 3 * tailleCarre, cube.faceFront.face);
    //GridRight (Green)
    MakeGrid(3 * offset + 6 * tailleCarre, 2 * offset + 3 * tailleCarre, tailleCarre, nbCarreX, nbCarreY);
    DrawFace(3 * offset + 6 * tailleCarre, 2 * offset + 3 * tailleCarre, cube.faceRight.face);
    //GridBack (Yellow)
    MakeGrid(3 * offset + 6 * tailleCarre, 3 * offset + 6 * tailleCarre, tailleCarre, nbCarreX, nbCarreY);
    DrawFace(3 * offset + 6 * tailleCarre, 3 * offset + 6 * tailleCarre, cube.faceBack.face);
    //GridTop (Red)
    MakeGrid(2 * offset + 3 * tailleCarre, 1 * offset, tailleCarre, nbCarreX, nbCarreY);
    DrawFace(2 * offset + 3 * tailleCarre, 1 * offset, cube.faceUp.face);
    //GridDown (Orange)
    MakeGrid(2 * offset + 3 * tailleCarre, 3 * offset + 6 * tailleCarre, tailleCarre, nbCarreX, nbCarreY);
    DrawFace(2 * offset + 3 * tailleCarre, 3 * offset + 6 * tailleCarre, cube.faceDown.face);
}

function MakeGrid(offsetX, offsetY, tailleCarre, nbCarreX, nbCarreY) {
    offsetX += 0.5;
    offsetY += 0.5;
    context.beginPath();
    for (var i = 0; i <= nbCarreX; i++) {
        context.moveTo(offsetX + tailleCarre * i, offsetY);
        context.lineTo(offsetX + tailleCarre * i, offsetY + tailleCarre * nbCarreY);
    }
    for (var i = 0; i <= nbCarreY; i++) {
        context.moveTo(offsetX, offsetY + tailleCarre * i);
        context.lineTo(offsetX + tailleCarre * nbCarreX, offsetY + tailleCarre * i);
    }
    context.closePath();
    context.stroke();
}

function DrawFace(offsetX, offsetY, face){
    for (var x = 0; x < face.length; x++) {
        for (var y = 0; y < face[x].length; y++){
            switch(face[x][y]){
                case 0:
                    context.fillStyle = "#3d9eff";
                    break;
                case 1:
                    context.fillStyle = "#FFFFFF";
                    break;
                case 2:
                    context.fillStyle = "#3dff40";
                    break;
                case 3:
                    context.fillStyle = "#fbff3d";
                    break;
                case 4:
                    context.fillStyle = "#ff3d3d";
                    break;
                case 5:
                    context.fillStyle = "#ff8a3d";
                    break;
            }
            
            context.fillRect(offsetX + tailleCarre * x +0.5, offsetY + tailleCarre * y +0.5, tailleCarre -0.5, tailleCarre -0.5);
            context.fill();
        }
    }
}