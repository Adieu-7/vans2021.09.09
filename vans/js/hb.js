window.onload=function(){
	var box = document.querySelector('.djlb');
	var ul = document.querySelector('.dl1');
	var li = document.querySelectorAll('.dlj');
	
	
	var span  = document.querySelectorAll('.u2>li');
	var leftBtn  = document.querySelector('.left');
	var rightBtn  = document.querySelector('.right');
	
	var index = 0;
	var timer = null;
	
	// ul.style.width = li.length*box.clientWidth + 'px';
	     run();
	
	
	
	
	
	    //点击向左按钮
	    leftBtn.onclick=function(){
	
	       //清除定时器
	       if(timer) clearInterval(timer);
	
	       index--;
	
	       if(index<0){
	         index = li.length-2;
	       }
	
	       //同步数据
	       data();
	
	       //调用动画函数
	       run();
	    }
	
	 //点击向右按钮
	    rightBtn.onclick=function(){
	
	       //清除定时器
	       if(timer) clearInterval(timer);
	
	       index++;
	
	       if(index>=li.length-1){
	         index = 0;
	       }
	
	       //同步数据
	       data();
	
	       //调用动画函数
	       run();
	    }
	
	
	//点击小圆点按钮
	
	    for(var m=0;m<span.length-1;m++){
	      span[m].id = m;
	      span[m].onclick=function(){
	
	
	        //清除定时器
	         if(timer) clearInterval(timer);
	
	        //获取小圆点的索引值，赋值给index
	          index = this.id;
	
	        //更新布局
	        data()
	
	       //调用动画函数
	        run();
	      }
	    }
	
	
	
	
	
	
	
	
	
	  //封装动画函数
	  function run(){
	      //动画显示
	    timer = setInterval(function(){
	     
	        index++;
	     
	       if(index==li.length-1){
	
	          setTimeout(function(){
	               //将第一个【小圆点】变成【选中状态】
	                span[0].className = "active";
	          },50);
	           
	
	       
	       } else if(index>li.length-1){
	
	         //当走到最后一张图片时
	          index=0;
	
	          ul.style.transition = 'all 0s ease';
	          //将UL重新定位到最开始的位置
	          ul.style.left = '0px'; 
	
	        setTimeout(function(){
	          ul.style.transition = 'all 1s ease'; 
	          ul.style.left = -box.clientWidth + 'px';
	
	           span[0].className = "";
	           span[1].className = "active";
	
	           index=1;
	
	        },50);     
	
	       } 
	       //更新布局
	       data();
	         
	
	    },1500);
	
	  }
	
	  //更新布局
	  function data(){
	  	 //小圆点布局
		        for(var i=0;i<li.length-1;i++){
		            span[i].className = "";
		        }
	
		        span[index].className = "active";
	        //图片滑动
		        ul.style.left = - index*box.clientWidth + 'px';
	  }
	}