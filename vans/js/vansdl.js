window.onload=function(){
	var vba1=document.querySelector('.vba1');
	var vbt=document.querySelector('.vbt');
	
	var th=vbt.offsetHeight;
	var ah=vba1.offsetHeight;
	var tp;
	
	document.onscroll=function(){
		tp=document.documentElement.scrollTop;
		if (tp>=th) {
			vba1.style.display='block'
		}else{
			vba1.style.display='none'
		}
	}
	
	var li=document.querySelectorAll('.vdf>h2');
	var div=document.querySelectorAll('.vsh>div');
	
	for (var i=0;i<li.length;i++) {
		li[i].index = i;
		li[i].setAttribute('index',i);
		li[i].onmouseup=function(){
			
			
			for (var j=0;j<li.length;j++) {
				li[j].style.borderBottom='1px solid #DDDFE6';
				li[j].style.color='#666';
				div[j].style.display='none';
				
			}
			li[this.index].style.borderBottom='2px solid #C9192E';
			div[this.index].style.display='block';
			li[this.index].style.color='#C9192E';
		}
		
	}
	
	var yzm=document.querySelector('.yzm');
	var gh=document.querySelector('.kbq');
	var sqt=document.querySelector('.sqt');
	var vdyh=document.querySelector('.vdyh');
	var vdsj=document.querySelector('.vdsj');
	gh.onmousedown=function(){
		
		for (var i=0;i<10;i++) {
			var sj=Math.round(Math.random()*10);
		}
		yzm.src='img/yzm'+sj+'.gif';
		return false;
	}
	
	
	
	
	
}