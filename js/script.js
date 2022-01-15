"use-stict"

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const body = document.querySelector("body");

const transX = canvas.width * 0.5,
transY = canvas.height * 0.5;
ctx.translate(transX, transY);

const lineWidth = 2;
const color = "black"

if (color == "white") {
    body.style.backgroundColor = color
    
} else if (color == "black") {
    canvas.style.backgroundColor = "white";
    
}





drawGrid(ctx, canvas, color, lineWidth);

for (let i = -canvas.width ; i <= canvas.width; i+= 100) {
    circle(ctx, i, 0, 1, 4, color);
}

for (let i = -canvas.height ; i <= canvas.height; i+= 100) {
    circle(ctx, 0, i, 1, 4, color);
}





function drawGrid(ctx, canvas, color, lineWidth) {
    drawLine(ctx, [-canvas.width, 0], [canvas.width,0 ], color, lineWidth);
    drawLine(ctx, [0, canvas.height], [0,-canvas.height ], color, lineWidth);
}


function circle (ctx,x,y,radius, lineWidth, color) {
    
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.stroke();
}

function drawLine(ctx, begin, end, stroke = 'black', width = 1) {
    if (stroke) {
        ctx.strokeStyle = stroke;
    }

    if (width) {
        ctx.lineWidth = width;
    }

    ctx.beginPath();
    ctx.moveTo(...begin);
    ctx.lineTo(...end);
    ctx.stroke();
}
 
const n = 1/2;
drawMathFunctionsLine("red", ctx);






function drawMathFunctionsLine( color, ctx) {

    let posAnterior = [-canvas.width, -canvas.height];

    for(let x = 0-canvas.width/2; x <= canvas.width; x+= n) {
        for (let y = 0-canvas.height/2; y <= canvas.height; y+=n) {
            if (y == -(10*Math.pow(x, 2) - 50*x + 60)) {
                ctx.fillStyle = color;
                ctx.fillRect(x,y,1,1);
                if(x == 1) {
                   
                } else {
                    drawLine(ctx, [x, y], posAnterior, lineWidth, color);
                }
                
                posAnterior = [x, y]; 
            }
        }
    }
}

