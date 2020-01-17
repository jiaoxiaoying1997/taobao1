
		/* 倒计时的实现*/
		   
		 seckkill(2020,01,17,20,20,00);
		 function seckkill(year,month,day,hour,minute,second){
		 	//alert("nihai");
		 	timer = null;
		  	//剩余时间：设定的时间-当前的时间
		  		var lefttime = (new Date(year, month - 1, day, hour, minute, second)) - (new Date());
		  		//console.log(lefttime);
		  		//parseInt（）函数返回一个整数，得出剩余的时分秒
		  		var hours = parseInt(lefttime / 1000 / 60 /60 % 24,10);
		  		var minutes = parseInt(lefttime / 1000 / 60  % 60,10);
		  		var seconds = parseInt(lefttime / 1000  % 60,10);
		  		//
		  		//结束时
		  		if(second<0)
		  		{
		  			alert("秒杀即将结束！！！");
		  			clearTimeout(timer);
		  		}
		  		else{
		  			//格式的转化
		  			hours = fix(hours,2);
		  			minutes = fix(minutes,2);
		  			seconds = fix(seconds,2);
		  			//递归调用  要比当前时间大
		  			timer = setTimeout("seckkill(2020,01,17,20,20,00)",1000);//设置开始的时间
		  			document.getElementById("h").innerHTML = hours;
		  			document.getElementById("m").innerHTML =minutes;
		  			document.getElementById("s").innerHTML = seconds;
		  			//console.log(d,h,m);
		  		}
		  	} 
		  	
		  	// 位数不足两位补全0
		  	function fix(num,length){
		  		//console.log(num);
		  		return num.toString().length<length?'0'+num:num;
		  	}
		
		  /*JS实现轮番图 
		  	
		  	//初始化变量
		/*  var $transform = $('#transform');
		  	var $transform_ul = $('.trans');
		  	var $btn = $('transform-btn');
		  	var btn_a = $btn.find('a');
		  	var v_width = $transform.width();
		  //	var  page = 1;
		  	var timer = null;
		  	//var btnclass = null;
		  	
		  	//根据图片数量生成分页
		  	var page_count = $transform_ul.find('li').length;//这个值就是小圆点的个数值
		  	var transform_cir = "<li class='selected' href='#'><a></a></li>";
		  	for(var i=0;i<page_count;i++)
		  	{
		  		transform_cir += "<li class='selected' href='#'><a></a></li>";
		  	}
		   $('.transform-circle').append(transform_cir);
		  	
		  	//点击移动切换图片
		  	$('.transform-circle li').live('click',function(){
		  		var index  = $('.transform-circle li').index(this);
		  		$transform_ul.animate({
		  			left:-v_width * index
		  		},
		  	  'slow');
		  	  page  = index + 1;
		  	  cirMove();
		  	});*/
		  	
		  	$(function(){
			  	var timer = null;//声明一个全局定时器
			  	var index = 0;
			  	$(".next").click(function(){//下一张
			  		next();
			  	});
			  	$("prev").click(function(){//上一张
			  		prev();
			  	});
			  	function next(){
			  		index++;
			  		if(index>3){//当图片到最后一张时跳回第一张
			  			$(".trans").animate({left:-(index)});
			  			index = 0;
			  			$(".trans").animate({left:0},0);
			  		}
			  		$(".trans").animate({left:-index * 750},280);
			  		iconHover(index);
			  	}
			  	function prev(){
			  		index--;
			  		if(index<0){
			  			index=3;
			  			$(".trans").animate({left:-(index+1)});
			  		}
			  		$(".trans").animate({left:-index*750},280);
			  		iconHover(index);
			  	}
			  	//设置自动播放
			  	function auto(){
			  		
			  			timer = setInterval(function(){
			  			next();
			  			iconHover(index);
			  		},2000)
			  	}
			  	auto();
			  	//当鼠标移入的时候，定时器取消
		  		$("#transform").mouseover(function(){
		  			clearInterval(timer);
		  			$('.btn').css("opacity",0.5)
		  		})
		  		//当鼠标移出的时候，定时器开启
		  		$("#transform").mouseleave(function(){
		  			auto();
		  			$('.btn').css("opacity",0)
		  		})
		  		//鼠标接触圆点时实现左右轮番
		  		$(".transform-circle li").mouseover(function(){
		  			var index = $(this).index();
		  			$(".trans").animate({left:-index*750},280);
		  			iconHover(index);
		  		})
		  		//实现被选图片对应圆点图标索引更新
		  		function iconHover(index){
		  			$(".transform-circle li").addClass("active")
		  		}
       })
