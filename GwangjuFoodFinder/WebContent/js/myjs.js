let cnt1=0;
let cnt2=0;
let cnt3=0;

var click = true;

function btnclick(id){
	
	var btn = document.getElementById(id);
	if(click){
	btn.addEventListener('click', function (event) {
		console.log('클릭 실행');
		alert(btn.innerText+'에 투표하셨습니다');
		if(id == 'btn1')
			cnt1++;
		else if(id == 'btn2')
			cnt2++;
		else if(id == 'btn3')
			cnt3++;
		
		
		console.log(cnt1+'cnt1');
		console.log(cnt2+'cnt2');
		console.log(cnt3+'cnt3');
	});	
		click =! click;
			
		setTimeout(function(){
			click = true;
		},10000);
	}
	
	
	var poll_cnt1=document.getElementById("cnt1");
	var poll_cnt2=document.getElementById("cnt2");
	var poll_cnt3=document.getElementById("cnt3");
	
	var st1 = '';
	var st2 = '';
	var st3 = '';
	
	for(var i=0; i<cnt1; i++){
		st1 += `<img src="img/별.jpg" alt="My Image">`;
	}
	
	for(var i=0; i<cnt2; i++){
		st2 += `<img src="img/별.jpg" alt="My Image">`;
	}
	
	for(var i=0; i<cnt3; i++){
		st3 +=`<img src="img/별.jpg" alt="My Image">`;
	}
	
	document.getElementById("cnt1").innerHTML = st1;
	document.getElementById("cnt2").innerHTML = st2;
	document.getElementById("cnt3").innerHTML = st3;
}


function alertEX() {
	alert("None");
}

function alertthis() {
	alert("None");
}

var imgArray=new Array();
imgArray[0]="img/duck1.jpg"; 
imgArray[1]="img/duck2.jpg"; 
imgArray[2]="img/duck3.jpg"; 


function showImage(i)
{ 
	var imgNum=i; 
	var objImg=document.getElementById("duck");
	objImg.src=imgArray[imgNum];
	i++;
	if(i>=3){
		i=0; 
	}
	setTimeout(showImage,1700,i);
	
}

