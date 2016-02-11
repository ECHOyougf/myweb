document.getElementById("box").children[0].className="show";
var prebtn=document.getElementById("pre");
var nextbtn=document.getElementById("next");

function gotopre(){
	var oBoxs=document.getElementById("box").children;
	if(oBoxs[0].className=="show"){//如果是第一张图片要往回切，切到最后一张吧
		oBoxs[0].className="boximg";
		oBoxs[oBoxs.length-1].className="show";
	}else{
		for(var i=1;i<oBoxs.length;i++){
			if(oBoxs[i].className=="show"){	//获取显示的图片序号i
					oBoxs[i-1].className="show";//显示前一张
					oBoxs[i].className="boximg"; //将第i张隐藏
					}
				}
		}
	}

function gotonext(){
	var oBoxs=document.getElementById("box").children;
	if(oBoxs[oBoxs.length-1].className=="show"){//如果是第一张图片要往回切，切到最后一张吧
		oBoxs[oBoxs.length-1].className="boximg";
		oBoxs[0].className="show";
	}else{
		for(var i=oBoxs.length-2;i>=0;i--){
			if(oBoxs[i].className=="show"){	//获取显示的图片序号i
					oBoxs[i+1].className="show";//显示后一张
					oBoxs[i].className="boximg"; //将第i张隐藏
				}
		}
	}
}

/*多图切换，可随意增加图片数量（目前reg的表达式允许图片名称0~999.jpg，若图片名称改变只需修改reg即可）,第一张向前切换时，显示倒数4张，最后一张向后切换时，显示前四张*/
var arr=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg"];//存储所有图片的数组

document.getElementById("box2").children[0].className="show2";
document.getElementById("box2").children[1].className="show2";
document.getElementById("box2").children[2].className="show2";
document.getElementById("box2").children[3].className="show2";

function gotopre2(){
	var oParent=document.getElementById("box2");
	var oBox2=oParent.children;
	var imgsrc=[];//存储显示的图片src
	var index=[];//存储显示的图片的序号
	var reg=/[^//]\d{0,3}.jpg$/;//正则表达式用于截取图片名称，存储在imgsrc中用来与arr中的数组作比较
	for(var i=0;i<oBox2.length;i++){
		imgsrc.push(oBox2[i].src.match(reg));
	}

	for(var i=0;i<arr.length;i++){
		for(var j=0;j<imgsrc.length;j++){
			if(arr[i]==imgsrc[j]){
				index.push(i);
				}
			}
		}

	for(var i=oBox2.length-1;i>=0;i--){//遍历显示的图片
		if(index[i]>0){//如果没显示到第一张
			oBox2[i].src="carouselimgs/"+arr[index[i]-1];//显示的图片就继续往前切
			}else{//否则就从最后一张显示
				for(var j=0;j<oBox2.length;j++){
					oBox2[oBox2.length-j-1].src="carouselimgs/"+arr[arr.length-j-1];
				}		
			}
		}
}

function gotonext2(){
	var oParent=document.getElementById("box2");
	var oBox2=oParent.children;
	var imgsrc=[];//存储显示的图片src
	var index=[];//存储显示的图片的序号
	var reg=/[^//]\d{0,3}.jpg$/;
	for(var i=0;i<oBox2.length;i++){
		imgsrc.push(oBox2[i].src.match(reg));
	}

	for(var i=0;i<arr.length;i++){
		for(var j=0;j<imgsrc.length;j++){
			if(arr[i]==imgsrc[j]){
				index.push(i);
				}
			}
		}

	for(var i=0;i<oBox2.length;i++){//遍历显示的图片
		if(index[i]<arr.length-1){//如果没显示到最后一张
			oBox2[i].src="carouselimgs/"+arr[index[i]+1];//显示的图片就继续往后切
			}else{//否则就重新从头显示
				for(var j=0;j<oBox2.length;j++){
					oBox2[j].src="carouselimgs/"+arr[j];
				}		
			}
		}
}