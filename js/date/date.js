			var oMonth=document.getElementById("month");
			var input=document.getElementById("date");
			var date=[];
			var oCalenda=document.getElementById("calenda");
			var table=document.createElement("table");
			var day=[];//存储日期的日的数组
			//获取当前日期
			var today=new Date();
			var y=today.getFullYear();
			var m=today.getMonth()+1;
			var d=today.getDate();
			input.value=y+"年"+m+"月"+d+"日";

			//选择日期
			function change(){
				oCalenda.appendChild(table);
				var month=oMonth.value;//获取选择的月份
				day.length=0;
				date[0]=month;

					if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
						for(var i=1;i<32;i++){
							day.push(i);
						}
					}else if(month==4 || month==6 || month==9 || month==11){
						for(var i=1;i<31;i++){
							day.push(i);
						}
					}else if(month==2){
						for(var i=1;i<29;i++){
							day.push(i);
						}
					}else{
						day.length=0;
					}

					table.innerHTML="";
					for(var i=0;i<6;i++){
						var tr=document.createElement("tr");
						table.appendChild(tr);
						for(var j=1;j<8;j++){
							var td=document.createElement("td");
							tr.appendChild(td);
							if(typeof(day[i*7+j-1])=='undefined')
								day[i*7+j-1]=="";
							else
							td.innerHTML=day[i*7+j-1];
						}
					}

					var otd=document.getElementsByTagName("td");
					for(var i=0;i<otd.length;i++){
						if(otd[i].addEventListener)
	    					otd[i].addEventListener("click",chooseday,false);
						if(otd[i].attachEvent)
   							otd[i].attachEvent("onclick",chooseday); 
   						}
   					function chooseday(){
   						date[1]=this.innerHTML;
   						if(date[1]!=""){
		   					input.value="2016年"+date[0]+"月"+date[1]+"日";
		   					table.innerHTML="";
		   					}
   					}

			}