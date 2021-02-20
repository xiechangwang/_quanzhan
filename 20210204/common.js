function loadImgs(json,fn){
				let res={};
				let complete=0;
				let total=0;
				for(let name in json){
					total++;
					
					let oImg=new Image();
					
					res[name]=oImg;
					
					oImg.onload=function(){
						complete++
						if(complete==total){
							fn(res);
						}
					}
					
					oImg.onerror=function(){
						alert('图片加载失败'+oImg.src);
					}
					
					oImg.src=json[name];
				}
			};
			//角度换算成弧度
			function d2a(num){
				return num*Math.PI/180;
			}
			
			function a2b(num){
				return num*180/Math.PI;
			}