			//localStorage.tasks=""; //清楚列表
			if(localStorage.tasks)
				document.getElementById("list").innerHTML=localStorage.tasks;
			
			function addtask(){
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
				if (window.localStorage) {
				    localStorage.setItem("tasks",document.getElementById("list").innerHTML);
					} else {
    				Cookie.write("tasks", document.getElementById("list").innerHTML);	
					}
			}