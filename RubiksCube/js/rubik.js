//Made by Yannis Perrin
//last changes : 13 jan 2017

var script = document.createElement('script');
script.src = './js/jquery-3.1.1.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

class Face {
    constructor(x, y, tailleCarre, nbFaceX, nbFaceY, faceName) {
        this.faceName = faceName;
        this.X = x;
        this.Y = y;
        this.sizeX = nbFaceX * tailleCarre;
        this.sizeY = nbFaceY * tailleCarre;
        this.face = new Array(nbFaceX);
        for (var i = 0; i < this.face.length; i++) {
            this.face[i] = new Array(nbFaceY);
        }
    }

    fill(value) {
        for (var x = 0; x < this.face.length; x++) {
            for (var y = 0; y < this.face[x].length; y++) {
                this.face[x][y] = value;
            }
        }
    }
}

class Cube {
    constructor(tailleCarre, offset, x = 0, y = 0) {
        this.faceLeft = new Face(offset, 2 * offset + 3 * tailleCarre, tailleCarre, 3, 3, "Left");
        this.faceLeft.fill(0);
        this.faceFront = new Face(2 * offset + 3 * tailleCarre, 2 * offset + 3 * tailleCarre, tailleCarre, 3, 3, "Front");
        this.faceFront.fill(1);
        this.faceRight = new Face(3 * offset + 6 * tailleCarre, 2 * offset + 3 * tailleCarre, tailleCarre, 3, 3, "Right");
        this.faceRight.fill(2);
        this.faceBack = new Face(4 * offset + 9 * tailleCarre, 2 * offset + 3 * tailleCarre, tailleCarre, 3, 3, "Back");
        this.faceBack.fill(3);
        this.faceUp = new Face(2 * offset + 3 * tailleCarre, 1 * offset, tailleCarre, 3, 3, "Up");
        this.faceUp.fill(4);
        this.faceDown = new Face(2 * offset + 3 * tailleCarre, 3 * offset + 6 * tailleCarre, tailleCarre, 3, 3, "Down");
        this.faceDown.fill(5);
    }

    turnCube(nameFace, clockwise = true) {
        switch (nameFace) {
            case "Front":
                if (clockwise) {
                    var tempFace = JSON.parse(JSON.stringify(this.faceFront.face));

                    this.faceFront.face[0][0] = tempFace[2][0];
                    this.faceFront.face[1][0] = tempFace[2][1];
                    this.faceFront.face[2][0] = tempFace[2][2];
                    this.faceFront.face[2][1] = tempFace[1][2];
                    this.faceFront.face[2][2] = tempFace[0][2];
                    this.faceFront.face[1][2] = tempFace[0][1];
                    this.faceFront.face[0][2] = tempFace[0][0];
                    this.faceFront.face[0][1] = tempFace[1][0];

                    var tempFace = JSON.parse(JSON.stringify(this.faceBack.face));

                    this.faceBack.face[0][0] = tempFace[0][2];
                    this.faceBack.face[1][0] = tempFace[0][1];
                    this.faceBack.face[2][0] = tempFace[0][0];
                    this.faceBack.face[2][1] = tempFace[1][0];
                    this.faceBack.face[2][2] = tempFace[2][0];
                    this.faceBack.face[1][2] = tempFace[2][1];
                    this.faceBack.face[0][2] = tempFace[2][2];
                    this.faceBack.face[0][1] = tempFace[1][2];

                    var tempFace = JSON.parse(JSON.stringify(this.faceUp.face));

                    this.faceUp.face[0][0] = this.faceRight.face[2][0];
                    this.faceUp.face[0][1] = this.faceRight.face[1][0];
                    this.faceUp.face[0][2] = this.faceRight.face[0][0];
                    this.faceUp.face[1][0] = this.faceRight.face[2][1];
                    this.faceUp.face[1][1] = this.faceRight.face[1][1];
                    this.faceUp.face[1][2] = this.faceRight.face[0][1];
                    this.faceUp.face[2][0] = this.faceRight.face[2][2];
                    this.faceUp.face[2][1] = this.faceRight.face[1][2];
                    this.faceUp.face[2][2] = this.faceRight.face[0][2];

                    this.faceRight.face[0][0] = this.faceDown.face[2][0];
                    this.faceRight.face[0][1] = this.faceDown.face[1][0];
                    this.faceRight.face[0][2] = this.faceDown.face[0][0];
                    this.faceRight.face[1][0] = this.faceDown.face[2][1];
                    this.faceRight.face[1][1] = this.faceDown.face[1][1];
                    this.faceRight.face[1][2] = this.faceDown.face[0][1];
                    this.faceRight.face[2][0] = this.faceDown.face[2][2];
                    this.faceRight.face[2][1] = this.faceDown.face[1][2];
                    this.faceRight.face[2][2] = this.faceDown.face[0][2];

                    this.faceDown.face[0][0] = this.faceLeft.face[2][0];
                    this.faceDown.face[0][1] = this.faceLeft.face[1][0];
                    this.faceDown.face[0][2] = this.faceLeft.face[0][0];
                    this.faceDown.face[1][0] = this.faceLeft.face[2][1];
                    this.faceDown.face[1][1] = this.faceLeft.face[1][1];
                    this.faceDown.face[1][2] = this.faceLeft.face[0][1];
                    this.faceDown.face[2][0] = this.faceLeft.face[2][2];
                    this.faceDown.face[2][1] = this.faceLeft.face[1][2];
                    this.faceDown.face[2][2] = this.faceLeft.face[0][2];

                    this.faceLeft.face[0][0] = tempFace[2][0];
                    this.faceLeft.face[0][1] = tempFace[1][0];
                    this.faceLeft.face[0][2] = tempFace[0][0];
                    this.faceLeft.face[1][0] = tempFace[2][1];
                    this.faceLeft.face[1][1] = tempFace[1][1];
                    this.faceLeft.face[1][2] = tempFace[0][1];
                    this.faceLeft.face[2][0] = tempFace[2][2];
                    this.faceLeft.face[2][1] = tempFace[1][2];
                    this.faceLeft.face[2][2] = tempFace[0][2];
                } else {
                    this.turnCube("Front");
                    this.turnCube("Front");
                    this.turnCube("Front");
                }
                break;
            case "Up":
                if (clockwise) {
                    var tempFace = JSON.parse(JSON.stringify(this.faceUp.face));

                    this.faceUp.face[0][0] = tempFace[0][2];
                    this.faceUp.face[1][0] = tempFace[0][1];
                    this.faceUp.face[2][0] = tempFace[0][0];
                    this.faceUp.face[2][1] = tempFace[1][0];
                    this.faceUp.face[2][2] = tempFace[2][0];
                    this.faceUp.face[1][2] = tempFace[2][1];
                    this.faceUp.face[0][2] = tempFace[2][2];
                    this.faceUp.face[0][1] = tempFace[1][2];

                    var tempFace = JSON.parse(JSON.stringify(this.faceDown.face));

                    this.faceDown.face[0][0] = tempFace[2][0];
                    this.faceDown.face[1][0] = tempFace[2][1];
                    this.faceDown.face[2][0] = tempFace[2][2];
                    this.faceDown.face[2][1] = tempFace[1][2];
                    this.faceDown.face[2][2] = tempFace[0][2];
                    this.faceDown.face[1][2] = tempFace[0][1];
                    this.faceDown.face[0][2] = tempFace[0][0];
                    this.faceDown.face[0][1] = tempFace[1][0];

                    var tempFace = JSON.parse(JSON.stringify(this.faceFront.face));

                    this.faceFront.face[0][0] = this.faceRight.face[0][0];
                    this.faceFront.face[0][1] = this.faceRight.face[0][1];
                    this.faceFront.face[0][2] = this.faceRight.face[0][2];
                    this.faceFront.face[1][0] = this.faceRight.face[1][0];
                    this.faceFront.face[1][1] = this.faceRight.face[1][1];
                    this.faceFront.face[1][2] = this.faceRight.face[1][2];
                    this.faceFront.face[2][0] = this.faceRight.face[2][0];
                    this.faceFront.face[2][1] = this.faceRight.face[2][1];
                    this.faceFront.face[2][2] = this.faceRight.face[2][2];

                    this.faceRight.face[0][0] = this.faceBack.face[0][0];
                    this.faceRight.face[0][1] = this.faceBack.face[0][1];
                    this.faceRight.face[0][2] = this.faceBack.face[0][2];
                    this.faceRight.face[1][0] = this.faceBack.face[1][0];
                    this.faceRight.face[1][1] = this.faceBack.face[1][1];
                    this.faceRight.face[1][2] = this.faceBack.face[1][2];
                    this.faceRight.face[2][0] = this.faceBack.face[2][0];
                    this.faceRight.face[2][1] = this.faceBack.face[2][1];
                    this.faceRight.face[2][2] = this.faceBack.face[2][2];

                    this.faceBack.face[0][0] = this.faceLeft.face[0][0];
                    this.faceBack.face[0][1] = this.faceLeft.face[0][1];
                    this.faceBack.face[0][2] = this.faceLeft.face[0][2];
                    this.faceBack.face[1][0] = this.faceLeft.face[1][0];
                    this.faceBack.face[1][1] = this.faceLeft.face[1][1];
                    this.faceBack.face[1][2] = this.faceLeft.face[1][2];
                    this.faceBack.face[2][0] = this.faceLeft.face[2][0];
                    this.faceBack.face[2][1] = this.faceLeft.face[2][1];
                    this.faceBack.face[2][2] = this.faceLeft.face[2][2];

                    this.faceLeft.face[0][0] = tempFace[0][0];
                    this.faceLeft.face[0][1] = tempFace[0][1];
                    this.faceLeft.face[0][2] = tempFace[0][2];
                    this.faceLeft.face[1][0] = tempFace[1][0];
                    this.faceLeft.face[1][1] = tempFace[1][1];
                    this.faceLeft.face[1][2] = tempFace[1][2];
                    this.faceLeft.face[2][0] = tempFace[2][0];
                    this.faceLeft.face[2][1] = tempFace[2][1];
                    this.faceLeft.face[2][2] = tempFace[2][2];
                } else {
                    this.turnCube("Up");
                    this.turnCube("Up");
                    this.turnCube("Up");
                }
                break;
    }
    }

    turnFace(nameFace, clockwise = true) {
        switch (nameFace) {
            case "Left":
                if (clockwise) {
                    var tempFace = JSON.parse(JSON.stringify(this.faceLeft.face));

                    this.faceLeft.face[0][0] = tempFace[0][2];
                    this.faceLeft.face[1][0] = tempFace[0][1];
                    this.faceLeft.face[2][0] = tempFace[0][0];
                    this.faceLeft.face[2][1] = tempFace[1][0];
                    this.faceLeft.face[2][2] = tempFace[2][0];
                    this.faceLeft.face[1][2] = tempFace[2][1];
                    this.faceLeft.face[0][2] = tempFace[2][2];
                    this.faceLeft.face[0][1] = tempFace[1][2];

                    var temp = new Array(3);
                    temp[0] = this.faceFront.face[0][0];
                    temp[1] = this.faceFront.face[0][1];
                    temp[2] = this.faceFront.face[0][2];

                    this.faceFront.face[0][0] = this.faceUp.face[0][0];
                    this.faceFront.face[0][1] = this.faceUp.face[0][1];
                    this.faceFront.face[0][2] = this.faceUp.face[0][2];

                    this.faceUp.face[0][0] = this.faceBack.face[2][2];
                    this.faceUp.face[0][1] = this.faceBack.face[2][1];
                    this.faceUp.face[0][2] = this.faceBack.face[2][0];

                    this.faceBack.face[2][0] = this.faceDown.face[0][2];
                    this.faceBack.face[2][1] = this.faceDown.face[0][1];
                    this.faceBack.face[2][2] = this.faceDown.face[0][0];

                    this.faceDown.face[0][0] = temp[0];
                    this.faceDown.face[0][1] = temp[1];
                    this.faceDown.face[0][2] = temp[2];
                } else {
                    this.turnFace("Left");
                    this.turnFace("Left");
                    this.turnFace("Left");
                }
                break;
            case "Front":
                if (clockwise) {
                    var tempFace = JSON.parse(JSON.stringify(this.faceFront.face));

                    this.faceFront.face[0][0] = tempFace[0][2];
                    this.faceFront.face[1][0] = tempFace[0][1];
                    this.faceFront.face[2][0] = tempFace[0][0];
                    this.faceFront.face[2][1] = tempFace[1][0];
                    this.faceFront.face[2][2] = tempFace[2][0];
                    this.faceFront.face[1][2] = tempFace[2][1];
                    this.faceFront.face[0][2] = tempFace[2][2];
                    this.faceFront.face[0][1] = tempFace[1][2];

                    var temp = new Array(3);
                    temp[0] = this.faceRight.face[0][0];
                    temp[1] = this.faceRight.face[0][1];
                    temp[2] = this.faceRight.face[0][2];

                    this.faceRight.face[0][0] = this.faceUp.face[0][2];
                    this.faceRight.face[0][1] = this.faceUp.face[1][2];
                    this.faceRight.face[0][2] = this.faceUp.face[2][2];

                    this.faceUp.face[0][2] = this.faceLeft.face[2][2];
                    this.faceUp.face[1][2] = this.faceLeft.face[2][1];
                    this.faceUp.face[2][2] = this.faceLeft.face[2][0];

                    this.faceLeft.face[2][0] = this.faceDown.face[0][0];
                    this.faceLeft.face[2][1] = this.faceDown.face[1][0];
                    this.faceLeft.face[2][2] = this.faceDown.face[2][0];

                    this.faceDown.face[0][0] = temp[2];
                    this.faceDown.face[1][0] = temp[1];
                    this.faceDown.face[2][0] = temp[0];
                } else {
                    this.turnFace("Front");
                    this.turnFace("Front");
                    this.turnFace("Front");
                }
                break;
            case "Right":
                if (clockwise) {
                    var tempFace = JSON.parse(JSON.stringify(this.faceRight.face));

                    this.faceRight.face[0][0] = tempFace[0][2];
                    this.faceRight.face[1][0] = tempFace[0][1];
                    this.faceRight.face[2][0] = tempFace[0][0];
                    this.faceRight.face[2][1] = tempFace[1][0];
                    this.faceRight.face[2][2] = tempFace[2][0];
                    this.faceRight.face[1][2] = tempFace[2][1];
                    this.faceRight.face[0][2] = tempFace[2][2];
                    this.faceRight.face[0][1] = tempFace[1][2];

                    var temp = new Array(3);
                    temp[0] = this.faceBack.face[0][0];
                    temp[1] = this.faceBack.face[0][1];
                    temp[2] = this.faceBack.face[0][2];

                    this.faceBack.face[0][0] = this.faceUp.face[2][2];
                    this.faceBack.face[0][1] = this.faceUp.face[2][1];
                    this.faceBack.face[0][2] = this.faceUp.face[2][0];

                    this.faceUp.face[2][0] = this.faceFront.face[2][0];
                    this.faceUp.face[2][1] = this.faceFront.face[2][1];
                    this.faceUp.face[2][2] = this.faceFront.face[2][2];

                    this.faceFront.face[2][0] = this.faceDown.face[2][0];
                    this.faceFront.face[2][1] = this.faceDown.face[2][1];
                    this.faceFront.face[2][2] = this.faceDown.face[2][2];

                    this.faceDown.face[2][0] = temp[2];
                    this.faceDown.face[2][1] = temp[1];
                    this.faceDown.face[2][2] = temp[0];
                } else {
                    this.turnFace("Right");
                    this.turnFace("Right");
                    this.turnFace("Right");
                }
                break;
            case "Back":
                if (clockwise) {
                    var tempFace = JSON.parse(JSON.stringify(this.faceBack.face));

                    this.faceBack.face[0][0] = tempFace[0][2];
                    this.faceBack.face[1][0] = tempFace[0][1];
                    this.faceBack.face[2][0] = tempFace[0][0];
                    this.faceBack.face[2][1] = tempFace[1][0];
                    this.faceBack.face[2][2] = tempFace[2][0];
                    this.faceBack.face[1][2] = tempFace[2][1];
                    this.faceBack.face[0][2] = tempFace[2][2];
                    this.faceBack.face[0][1] = tempFace[1][2];

                    var temp = new Array(3);
                    temp[0] = this.faceRight.face[2][0];
                    temp[1] = this.faceRight.face[2][1];
                    temp[2] = this.faceRight.face[2][2];

                    this.faceRight.face[2][0] = this.faceDown.face[2][2];
                    this.faceRight.face[2][1] = this.faceDown.face[1][2];
                    this.faceRight.face[2][2] = this.faceDown.face[0][2];

                    this.faceDown.face[0][2] = this.faceLeft.face[0][0];
                    this.faceDown.face[1][2] = this.faceLeft.face[0][1];
                    this.faceDown.face[2][2] = this.faceLeft.face[0][2];

                    this.faceLeft.face[0][0] = this.faceUp.face[2][0];
                    this.faceLeft.face[0][1] = this.faceUp.face[1][0];
                    this.faceLeft.face[0][2] = this.faceUp.face[0][0];

                    this.faceUp.face[0][0] = temp[0];
                    this.faceUp.face[1][0] = temp[1];
                    this.faceUp.face[2][0] = temp[2];
                } else {
                    this.turnFace("Back");
                    this.turnFace("Back");
                    this.turnFace("Back");
                }
                break;
            case "Up":
                if (clockwise) {
                    var tempFace = JSON.parse(JSON.stringify(this.faceUp.face));

                    this.faceUp.face[0][0] = tempFace[0][2];
                    this.faceUp.face[1][0] = tempFace[0][1];
                    this.faceUp.face[2][0] = tempFace[0][0];
                    this.faceUp.face[2][1] = tempFace[1][0];
                    this.faceUp.face[2][2] = tempFace[2][0];
                    this.faceUp.face[1][2] = tempFace[2][1];
                    this.faceUp.face[0][2] = tempFace[2][2];
                    this.faceUp.face[0][1] = tempFace[1][2];

                    var temp = new Array(3);
                    temp[0] = this.faceLeft.face[0][0];
                    temp[1] = this.faceLeft.face[1][0];
                    temp[2] = this.faceLeft.face[2][0];

                    this.faceLeft.face[0][0] = this.faceFront.face[0][0];
                    this.faceLeft.face[1][0] = this.faceFront.face[1][0];
                    this.faceLeft.face[2][0] = this.faceFront.face[2][0];

                    this.faceFront.face[0][0] = this.faceRight.face[0][0];
                    this.faceFront.face[1][0] = this.faceRight.face[1][0];
                    this.faceFront.face[2][0] = this.faceRight.face[2][0];

                    this.faceRight.face[0][0] = this.faceBack.face[0][0];
                    this.faceRight.face[1][0] = this.faceBack.face[1][0];
                    this.faceRight.face[2][0] = this.faceBack.face[2][0];

                    this.faceBack.face[0][0] = temp[0];
                    this.faceBack.face[1][0] = temp[1];
                    this.faceBack.face[2][0] = temp[2];
                } else {
                    this.turnFace("Up");
                    this.turnFace("Up");
                    this.turnFace("Up");
                }
                break;
            case "Down":
                if (clockwise) {
                    var tempFace = JSON.parse(JSON.stringify(this.faceDown.face));

                    this.faceDown.face[0][0] = tempFace[0][2];
                    this.faceDown.face[1][0] = tempFace[0][1];
                    this.faceDown.face[2][0] = tempFace[0][0];
                    this.faceDown.face[2][1] = tempFace[1][0];
                    this.faceDown.face[2][2] = tempFace[2][0];
                    this.faceDown.face[1][2] = tempFace[2][1];
                    this.faceDown.face[0][2] = tempFace[2][2];
                    this.faceDown.face[0][1] = tempFace[1][2];

                    var temp = new Array(3);
                    temp[0] = this.faceLeft.face[0][2];
                    temp[1] = this.faceLeft.face[1][2];
                    temp[2] = this.faceLeft.face[2][2];

                    this.faceLeft.face[0][2] = this.faceBack.face[0][2];
                    this.faceLeft.face[1][2] = this.faceBack.face[1][2];
                    this.faceLeft.face[2][2] = this.faceBack.face[2][2];

                    this.faceBack.face[0][2] = this.faceRight.face[0][2];
                    this.faceBack.face[1][2] = this.faceRight.face[1][2];
                    this.faceBack.face[2][2] = this.faceRight.face[2][2];

                    this.faceRight.face[0][2] = this.faceFront.face[0][2];
                    this.faceRight.face[1][2] = this.faceFront.face[1][2];
                    this.faceRight.face[2][2] = this.faceFront.face[2][2];

                    this.faceFront.face[0][2] = temp[0];
                    this.faceFront.face[1][2] = temp[1];
                    this.faceFront.face[2][2] = temp[2];
                } else {
                    this.turnFace("Down");
                    this.turnFace("Down");
                    this.turnFace("Down");
                }
                break;
    }
    }
}


var canvas = document.getElementById('rubiks2D');
var context = canvas.getContext('2d');
var tailleCarre = 20;
var offset = 2;
var cube = new Cube(tailleCarre, offset);
var nbCarreX = 3;
var nbCarreY = 3;

var elements = [cube.faceLeft, cube.faceUp, cube.faceFront, cube.faceDown, cube.faceRight, cube.faceBack];
var ongoingTouches = [];
if (!canvas)
{
    alert("Impossible de récupérer le canvas");
}

if (!context)
{
    alert("Impossible de récupérer le context du canvas");
}

context.strokeStyle = "black";
context.lineWidth = 1;
var drawTimer = setInterval(DrawRubik, 100);


function setEvent() {
    $("#rubiks2D").off("click").click(function (event) {
        var x = event.pageX - $("#rubiks2D").offset().left;
        var y = event.pageY - $("#rubiks2D").offset().top;

        clickControl(x, y, 0);
    });
    $("#rubiks2D").bind("contextmenu", function (event) {
        var x = event.pageX - $("#rubiks2D").offset().left;
        var y = event.pageY - $("#rubiks2D").offset().top;

        clickControl(x, y, 2);
        //cancel contextMenu
        return false;
    });
    var el = document.getElementById("rubiks2D");
    el.addEventListener("touchstart", handleStart, false);
    el.addEventListener("touchend", handleEnd, false);
    el.addEventListener("touchcancel", handleCancel, false);
}

function handleStart(event) {
    event.preventDefault();
    console.log("touchStart");
    var touches = event.changedTouches;

    for (var i = 0; i < touches.length; i++) {
        ongoingTouches.push(copyTouch(touches[i]));
    }
}

function handleEnd(event) {
    event.preventDefault();
    console.log("touchEnd");
    var touches = event.changedTouches;

    for (var i = 0; i < touches.length; i++) {
        var idx = ongoingTouchIndexById(touches[i].identifier);
        if (idx >= 0) {
            var x = event.pageX - $("#rubiks2D").offset().left;
            var y = event.pageY - $("#rubiks2D").offset().top;

            clickControl(x, y, 0);
            ongoingTouches.splice(idx, 1);  // remove it; we're done
        }
    }
}

function handleCancel(event) {
    event.preventDefault();
    console.log("touchCancel");
    var touches = event.changedTouches;

    for (var i = 0; i < touches.length; i++) {
        var idx = ongoingTouchIndexById(touches[i].identifier);
        ongoingTouches.splice(idx, 1);  // remove it; we're done
    }
}

function copyTouch(touch) {
    return {identifier: touch.identifier, pageX: touch.pageX, pageY: touch.pageY};
}

function ongoingTouchIndexById(idToFind) {
    for (var i = 0; i < ongoingTouches.length; i++) {
        if (ongoingTouches[i].identifier === idToFind) {
            return i;
        }
    }
    return -1;    // not found
}

function clickControl(x, y, click) {
    // Collision detection between clicked offset and element.
    elements.forEach(function (element) {
        if (y > element.Y && y < element.Y + element.sizeY
                && x > element.X && x < element.X + element.sizeX) {
            console.log("clicked cube" + element.faceName);
            if (click === 0) {
                cube.turnFace(element.faceName);
            } else if (click === 2) {
                cube.turnFace(element.faceName, false);
            }
        }
    });
}

function touchControl() {

}

function DrawRubik() {
    //GridLeft (Blue)
    MakeGrid(cube.faceLeft.X, cube.faceLeft.Y, tailleCarre, nbCarreX, nbCarreY);
    DrawFace(cube.faceLeft.X, cube.faceLeft.Y, cube.faceLeft.face);
    //GridFront (White)
    MakeGrid(cube.faceFront.X, cube.faceFront.Y, tailleCarre, nbCarreX, nbCarreY);
    DrawFace(cube.faceFront.X, cube.faceFront.Y, cube.faceFront.face);
    //GridRight (Green)
    MakeGrid(cube.faceRight.X, cube.faceRight.Y, tailleCarre, nbCarreX, nbCarreY);
    DrawFace(cube.faceRight.X, cube.faceRight.Y, cube.faceRight.face);
    //GridBack (Yellow)
    MakeGrid(cube.faceBack.X, cube.faceBack.Y, tailleCarre, nbCarreX, nbCarreY);
    DrawFace(cube.faceBack.X, cube.faceBack.Y, cube.faceBack.face);
    //GridTop (Red)
    MakeGrid(cube.faceUp.X, cube.faceUp.Y, tailleCarre, nbCarreX, nbCarreY);
    DrawFace(cube.faceUp.X, cube.faceUp.Y, cube.faceUp.face);
    //GridDown (Orange)
    MakeGrid(cube.faceDown.X, cube.faceDown.Y, tailleCarre, nbCarreX, nbCarreY);
    DrawFace(cube.faceDown.X, cube.faceDown.Y, cube.faceDown.face);
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

function DrawFace(offsetX, offsetY, face) {
    for (var x = 0; x < face.length; x++) {
        for (var y = 0; y < face[x].length; y++) {
            switch (face[x][y]) {
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

            context.fillRect(offsetX + tailleCarre * x + 0.5, offsetY + tailleCarre * y + 0.5, tailleCarre - 0.5, tailleCarre - 0.5);
            context.fill();
        }
    }
}
window.onload = function () {
    setEvent();
};
window.onresize = function () {
    setEvent();
};