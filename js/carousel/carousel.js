var current=0;
document.getElementById("box").children[0].className="show";
var prebtn=document.getElementById("pre");
var nextbtn=document.getElementById("next");

function gotopre(){
	var oBoxs=document.getElementById("box").children;
	for(var i=1;i<oBoxs.length;i++){
		if(oBoxs[i].className=="show"){	//获取显示的图片序号i
				oBoxs[i-1].className="show";//显示前一张
				oBoxs[i].className="boximg"; //将第i张隐藏
				}
			}
	}

function gotonext(){
	var oBoxs=document.getElementById("box").children;
	for(var i=oBoxs.length-2;i>=0;i--){
		if(oBoxs[i].className=="show"){	//获取显示的图片序号i
				oBoxs[i+1].className="show";//显示后一张
				oBoxs[i].className="boximg"; //将第i张隐藏
			}
	}
}