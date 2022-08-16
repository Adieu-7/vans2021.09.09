window.onload=function(){
	var box = document.querySelector('.u1');
	var span=document.querySelectorAll('.u2>li');
	
	var index=0;
	var nIndex=1;
	
	var state=false;
	var ls=false;
	
	var pI=cr(box,0);
	pI.style.left='0px';
	var nI=cr(box,1);
	
	var arr=[];
	arr.push(pI);
	arr.push(nI);
	
	var timer=null;
	
	an();
	
	for(var m=0;m<span.length;m++){
		span[m].id=m;
		span[m].onclick=function(){
			if(timer)clearInterval(timer);
			index=Number(this.id);
			if(index==1){
				nIndex=0;
			}else if(index>1){
				index=0;
				nIndex=1;
			}else{
				nIndex=index+1;
			}
			box.innerHTML='';
			
			
			arr[0]=cr(box,index);
			arr[0].style.left='0px';
			arr[1]=cr(box,nIndex);
			
			state=false;
			
			an();
			
			poin(index);
		}
	}
	
	
	
	function an(){
		timer=setInterval(function(){
			if(state){
				index++;
				
				if(index==1){
					nIndex=0;
				}else if(index>1){
					index=0;
					nIndex=1;
				}else{
					nIndex=index+1;
				}
				
				box.removeChild(arr[0]);
				var nI=cr(box,nIndex);
				arr.shift();
				arr.push(nI);
				
			}
			
			state=true;
			ls=true;
			
			arr[0].style.left=-box.clientWidth+'px';
			arr[1].style.left='0px';
			
			poin(index);
			
			
		},3000)
	}
	
	
	function poin(index){
		for (var i=0;i<span.length;i++) {
			span[i].className='';
		}
		span[index].className='active';
	}
	
	
	function cr(pr,index){
		var img = document.createElement('img');
		img.src='img/'+index+'.jpg';
		img.style.left=box.clientWidth+'px';
		pr.appendChild(img);
		return img;
	}	
					
	var vba=document.querySelector('.vba');
	var vbt=document.querySelector('.vbt');
	
	var th=vbt.offsetHeight;
	var ah=vba.offsetHeight;
	var tp;
	
	document.onscroll=function(){
		tp=document.documentElement.scrollTop;
		if (tp>=th) {
			vba.style.display='block'
		}else{
			vba.style.display='none'
		}
	}
		
	var lb1=document.querySelectorAll('.lb>ul>div');
	var lb=document.querySelectorAll('.llb1');
	for (var q=0;q<lb.length;q++) {
		lb[q].onmouseover=function(){
			this.style.color='#FF0000';
		}
		lb[q].onmouseout=function(){
			this.style.color='#666';
		}
		
	}
	
	
	
	
}