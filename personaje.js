let canvas =document.querySelector("#myCanvas");
let ctx= canvas.getContext("2d")
class Personaje{
    constructor(x,y,angle,r){
        this.x=x
        this.y=y
        this.angle=angle
        this.r=r
    }
    dibujarse(){
ctx.translate(this.x,this.y);
ctx.rotate(this.angle*Math.PI/180)
ctx.beginPath();
ctx.arc(0,0,this.r,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(0,0,this.r/2,0.25*Math.PI,0.75*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(-15,-11,this.r/6,0.25*Math.PI,2.25*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(15,-11,this.r/6,0.25*Math.PI,2.25*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(-15,-11,this.r/15,0.25*Math.PI,2.25*Math.PI);
ctx.stroke();
ctx.fill();
ctx.beginPath();
ctx.arc(15,-11,this.r/15,0.25*Math.PI,2.25*Math.PI);
ctx.stroke();
ctx.fill();
ctx.strokeStyle="black"
ctx.beginPath()
ctx.moveTo(-6,0)
ctx.lineTo(7,6)
ctx.lineTo(-6,10)
ctx.stroke()
ctx.strokeStyle="black"
ctx.beginPath()
ctx.moveTo(-18,0)
ctx.lineTo(-18,1)
ctx.stroke()
ctx.strokeStyle="black"
ctx.beginPath()
ctx.moveTo(18,0)
ctx.lineTo(18,1)
ctx.stroke()
ctx.rotate(-this.angle*Math.PI/180)
ctx.translate(-this.x,-this.y)
    }
}
let Jeoirginha = new Personaje(200,100,0,50)
Jeoirginha.dibujarse();
let Josu = new Personaje(200,300,90,50)
Josu.dibujarse();

let contenedor =  document.querySelector("#contenedor")
contenedor.innerHTML = "puedes dar click en los personajes y deaparecerán";

canvas.addEventListener("click", function (e){
    console.log("Se hizo click")
    let XM=e.offsetX
    let YM=e.offsetY
    console.log(XM,YM)
if((XM-Jeoirginha.x)**2+(YM-Jeoirginha.y)**2<=(Jeoirginha.r)**2){
ctx.fillStyle="White"
ctx.beginPath()
ctx.rect(140,45,120,120)
ctx.fill()
}
if((XM-Josu.x)**2+(YM-Josu.y)**2<=Josu.r**2){
    ctx.fillStyle="White"
    
    ctx.beginPath()
    ctx.rect(140,248,120,120)
    ctx.fill()
    }
})
