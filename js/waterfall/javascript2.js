window.onload=function(){
	waterfall("main","box");
	var imgs={//用json格式模拟从数据库后台抽取出的图片数组
		"data":
		[
		{"src":"0.jpg"},
		{"src":"1.jpg"},
		{"src":"2.jpg"},
		{"src":"3.jpg"},
		{"src":"4.jpg"},
		{"src":"5.jpg"},
		{"src":"6.jpg"},
		{"src":"7.jpg"},
		{"src":"8.jpg"},
		{"src":"9.jpg"},
		{"src":"10.jpg"},
		{"src":"11.jpg"},
		{"src":"12.jpg"},
		{"src":"13.jpg"}
		]
		}
	window.onscroll=function(){
		if(checheScrollSlide){
			var oparent=document.getElementById("main");
			//将数据块渲染到当前页面的尾部
			for(var i=0;i<imgs.data.length;i++){
				//创建class=box的div元素
				var oBox=document.createElement("div");
				oBox.className="box";
				oparent.appendChild(oBox);
				//创建class=pic的div元素
				var oPic=document.createElement("div");
				oPic.className="pic";
				oBox.appendChild(oPic);
				//创建图片img
				var oImg=document.createElement("img");
				oImg.src="images/"+imgs.data[i].src;
				oPic.appendChild(oImg);
			}
			//将加载的图片进行瀑布流排列
				waterfall("main","box");
		}
	}
}
//瀑布流原理：计算出页面总共有多少列，从第二列起，将图片依次放在总高度最小的那一列下面
function waterfall(parent,box){
	//1 获取所有装载图片的box
	var oparent=document.getElementById(parent);
	var oBoxs=getElementByClass(oparent,box);//传入父元素和类名
	//2 获取页面宽度
	var docWidth=document.documentElement.clientWidth;
	//3 获取box宽度
	var boxWidth=oBoxs[0].offsetWidth;
	//4 计算出列数
	var cols=Math.floor(docWidth/boxWidth);
	//5 设置页面宽度、居中显示
	oparent.style.cssText="width:"+cols*boxWidth+"px;margin:0px auto;";
	//6 瀑布流排列
	var hArr=[];//存放每一列的高度
	for(var i=0;i<oBoxs.length;i++){
		//6.1 设置第一列样式
		if(i<cols){
			hArr.push(oBoxs[i].offsetHeight); //保存第一列的图片高度
		}else{ //6.2 设置从第二列起的样式
			//找出高度最小的那一张图片的是第几张:index
			var minH=Math.min.apply(null,hArr);
			var index=getIndex(hArr,minH);
			//将下一张图片用绝对定位设置，排列在高度最小的图片下面，并计算此时的列高
			oBoxs[i].style.position="absolute";
			oBoxs[i].style.top=minH+"px";
			oBoxs[i].style.left=oBoxs[index].offsetLeft+"px";
			hArr[index]+=oBoxs[i].offsetHeight;
		}
	}
}
function getElementByClass(oparent,clsname){
	var oElements=oparent.getElementsByTagName("*");//获取oparent下的所有子元素
	var oBoxs=[];
	for(var i=0;i<oElements.length;i++){
		if(oElements[i].className==clsname)
			oBoxs.push(oElements[i]);
	}
	return oBoxs;
}
function getIndex(arr,val){
	for(var i=0;i<arr.length;i++)
		if(arr[i]==val)
			return i;
}
//检测是否具备了滚动加载数据块的条件
function checheScrollSlide(){
	var oparent=document.getElementById("main");
	var oBoxs=getElementByClass(oparent,"box");
	//最后一个Box所在列的高度+最后一个box高度的一半
	var lastBoxH=oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight);
	//滚动条拖动的距离（注意混杂模式document.body.scrollTop和标准模式document.documentElement.scrollTop）
	var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
	//浏览器可视窗口的高度（注意混杂模式和标准模式）
	var height=document.body.clientHeight || document.documentElement.clientHeight;
	return(lastBoxH<scrollTop+height)?true:false;//当滚动条下拉到图片的时候
	
}