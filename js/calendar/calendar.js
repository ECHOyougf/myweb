//获得所有的月份
//var oMonth=document.getElementById("months").children;
var current=1;//设置当前的月份为1
document.getElementById("page"+current).style.cssText="transform:rotateX(0deg);transform-origin:100% 100%;transition:1s all;opacity:1;";
//下个月翻页
function next(){
	if(current==12)
		return;
	document.getElementById("page"+current).style.cssText="transform:rotateX(-90deg);transform-origin:100% 100%;transition:1s all;opacity:0;";
	current++;
	document.getElementById("page"+current).style.cssText="transform:rotateX(0deg);transform-origin:100% 100%;transition:1s all;opacity:1;";
}
//上个月翻页
function prev(){
	if(current==1)
		return;
	document.getElementById("page"+current).style.cssText="transform:rotateX(90deg);transform-origin:100% 100%;transition:1s all;opacity:0;";
	current--;
	document.getElementById("page"+current).style.cssText="transform:rotateX(0deg);transform-origin:100% 100%;transition:1s all;opacity:1;";
}