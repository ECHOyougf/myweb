$(document).ready(function(){
		//微信二维码拉出收回效果
		$("#wechat").mouseenter(function(){
			$("#wechat").animate({"right":"-15px"},1000,"swing");
		});
		$("#wechat").mouseleave(function(){
			$("#wechat").animate({"right":"-215px"},1000,"swing");
		});
	//打开视频
	$('#myModal').on('shown.bs.modal', function () {
	})
});