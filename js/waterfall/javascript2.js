window.onload=function(){
	waterfall("main","box");
	var imgs={//��json��ʽģ������ݿ��̨��ȡ����ͼƬ����
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
			//�����ݿ���Ⱦ����ǰҳ���β��
			for(var i=0;i<imgs.data.length;i++){
				//����class=box��divԪ��
				var oBox=document.createElement("div");
				oBox.className="box";
				oparent.appendChild(oBox);
				//����class=pic��divԪ��
				var oPic=document.createElement("div");
				oPic.className="pic";
				oBox.appendChild(oPic);
				//����ͼƬimg
				var oImg=document.createElement("img");
				oImg.src="images/"+imgs.data[i].src;
				oPic.appendChild(oImg);
			}
			//�����ص�ͼƬ�����ٲ�������
				waterfall("main","box");
		}
	}
}
//�ٲ���ԭ�������ҳ���ܹ��ж����У��ӵڶ����𣬽�ͼƬ���η����ܸ߶���С����һ������
function waterfall(parent,box){
	//1 ��ȡ����װ��ͼƬ��box
	var oparent=document.getElementById(parent);
	var oBoxs=getElementByClass(oparent,box);//���븸Ԫ�غ�����
	//2 ��ȡҳ����
	var docWidth=document.documentElement.clientWidth;
	//3 ��ȡbox���
	var boxWidth=oBoxs[0].offsetWidth;
	//4 ���������
	var cols=Math.floor(docWidth/boxWidth);
	//5 ����ҳ���ȡ�������ʾ
	oparent.style.cssText="width:"+cols*boxWidth+"px;margin:0px auto;";
	//6 �ٲ�������
	var hArr=[];//���ÿһ�еĸ߶�
	for(var i=0;i<oBoxs.length;i++){
		//6.1 ���õ�һ����ʽ
		if(i<cols){
			hArr.push(oBoxs[i].offsetHeight); //�����һ�е�ͼƬ�߶�
		}else{ //6.2 ���ôӵڶ��������ʽ
			//�ҳ��߶���С����һ��ͼƬ���ǵڼ���:index
			var minH=Math.min.apply(null,hArr);
			var index=getIndex(hArr,minH);
			//����һ��ͼƬ�þ��Զ�λ���ã������ڸ߶���С��ͼƬ���棬�������ʱ���и�
			oBoxs[i].style.position="absolute";
			oBoxs[i].style.top=minH+"px";
			oBoxs[i].style.left=oBoxs[index].offsetLeft+"px";
			hArr[index]+=oBoxs[i].offsetHeight;
		}
	}
}
function getElementByClass(oparent,clsname){
	var oElements=oparent.getElementsByTagName("*");//��ȡoparent�µ�������Ԫ��
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
//����Ƿ�߱��˹����������ݿ������
function checheScrollSlide(){
	var oparent=document.getElementById("main");
	var oBoxs=getElementByClass(oparent,"box");
	//���һ��Box�����еĸ߶�+���һ��box�߶ȵ�һ��
	var lastBoxH=oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight);
	//�������϶��ľ��루ע�����ģʽdocument.body.scrollTop�ͱ�׼ģʽdocument.documentElement.scrollTop��
	var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
	//��������Ӵ��ڵĸ߶ȣ�ע�����ģʽ�ͱ�׼ģʽ��
	var height=document.body.clientHeight || document.documentElement.clientHeight;
	return(lastBoxH<scrollTop+height)?true:false;//��������������ͼƬ��ʱ��
	
}