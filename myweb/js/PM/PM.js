			if(localStorage.tasks)
				document.getElementById("list").innerHTML=localStorage.tasks;
			
			function addTask(){
				var taskcontent=document.getElementById("taskcontent").value;
				var taskbox=document.createElement("div");
				taskbox.className="task";
				document.getElementById("list").appendChild(taskbox);
				var inputtext=document.createElement("label");
				inputtext.innerHTML=taskcontent;
				taskbox.appendChild(inputtext);
				
				var inputcheckbox=document.createElement("input");
				inputcheckbox.type="checkbox";
				taskbox.appendChild(inputcheckbox);
				
				//将添加的任务存储到localStorage
				serve();
				window.location.href=window.location;
			}

			function clearAll(){
				if(confirm("确定删除所有任务？")){
					localStorage.tasks="";
					window.location.href=window.location;//这句话是瞎写的但是起作用了，回头查查js的刷新当前页面的方法
				}
			}

			//当光标在#taskcontent之中时，点击回车键执行添加任务
			document.getElementById("taskcontent").onfocus=function(){
				this.onkeydown=function(e){
					 e = e||event;
					 if(e.keyCode==13){
					 	addTask();
					 	document.getElementById("taskcontent").value="";
					 	}
				}
			}

			//获取所有的任务内容label，当点击某一个时，将其值赋给一个input，当失去焦点时，将input重新设置为label，并将新值赋给label
			var oTask=document.getElementsByTagName("label");
			for(var i=0;i<oTask.length;i++){
				oTask[i].onclick=function(){
					var oContent=this;
					var content=oContent.innerHTML;
					document.getElementById("div-changeTask").style.display="inline-block";
					document.getElementById("changeTask").focus();//让输入框获取焦点事件
					document.getElementById("changeTask").value=content;
					document.getElementById("changeTask").onblur=function(){
						oContent.innerHTML=document.getElementById("changeTask").value; //document.getElementById("changeTask").value;
						document.getElementById("div-changeTask").style.display="none";
						serve();
						window.location.href=window.location;
					}
				}
			}

			function serve(){
				if (window.localStorage) {
				    localStorage.setItem("tasks",document.getElementById("list").innerHTML);
						} else {
    						Cookie.write("tasks", document.getElementById("list").innerHTML);	
						}
				}