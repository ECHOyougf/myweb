var oBoxs=document.getElementById("boxs").children;
function randomColor(){
	var rgb=Math.floor(Math.random()*1000)%255;
	return rgb;
}
var t=null;
function changeColor(){
	clearInterval(t);
	for(var i=0;i<oBoxs.length;i++){
		var r=randomColor();
		var g=randomColor();
		var b=randomColor();
		oBoxs[i].style.backgroundColor="rgb("+r+","+g+","+b+")";
	}
	t=setInterval("changeColor()",1000);
}
changeColor();