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
function changeImg(src){
      var img1=document.getElementById('duck4');
      img1.src=src;
    }
    
    function changeImg2(src){
      var img1=document.getElementById('gogi4');
      img1.src=src;
    }
window.onload = function() {
	
	document.querySelector('#img-1').onclick = function() {
		var info = document.querySelector('.information');
		
		var galbi = `
		<div id="duck">
			<iframe width="560" height="315" src="https://www.youtube.com/embed/ILHnfFO5E7o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

	       	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.708859380674!2d126.79266591553727!3d35.13893828032423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357188650517e9dd%3A0x4a4dc28589eae20e!2z7Iah7KCV65ah6rCI67mEIDHtmLjsoJA!5e0!3m2!1sko!2skr!4v1614769798336!5m2!1sko!2skr" width="560" height="315" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
			
	       	<h5 style="padding-top:35px;">Gallery</h5>
 					
	 <img src="img/gogi4.jpg" width="500" height="500" id="gogi4">
  <div style="cursor: pointer">
    <img src="img/gogi4.jpg" width="200" height="200" onclick="changeImg2(this.src)">
       <img src="img/gogi5.jpg" width="200" height="200"onclick="changeImg2(this.src)">
          <img src="img/gogi6.jpg" width="200" height="200"onclick="changeImg2(this.src)">
             <img src="img/gogi3.jpg" width="200" height="200"onclick="changeImg2(this.src)">
	       	<div class="demo-02">
	  			주소: 광주광역시 광산구 송정동 광산로29번길 1<br>
	  			월요일	오전 9:00~오후 10:00<br>
				화요일	오전 9:00~오후 10:00<br>
				수요일	오전 9:00~오후 10:00<br>
				목요일	오전 9:00~오후 10:00<br>
				금요일	오전 9:00~오후 10:00<br>
				토요일	오전 9:00~오후 10:00<br>
				일요일	휴무일<br>
						
				 연락처: 062-944-1439<br>
	  		</div>		
	  	</div>
	       	<br>
	    `;
		
		info.innerHTML=galbi;
	}
	
	document.querySelector('#img-2').onclick = function() {
		var info = document.querySelector('.information');
		
		var yeongmi = `
		 	<iframe width="400" height="315" src="https://www.youtube.com/embed/l1t9XkT3DPo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.808800828415!2d126.90336691553803!3d35.16138888031878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35718c66cc7ecb85%3A0x7523596fda534a0c!2z7JiB66-47Jik66as7YOV!5e0!3m2!1sko!2skr!4v1614770844395!5m2!1sko!2skr" width="400" height="315" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

		    <body style="clear:both;">
		 		<img src="img/duck1.jpg" border="0" style=" width:400px; height:315px"> 
		   	</body>
		<h5 style="padding-top:35px;">Gallery</h5>
	 <img src="img/duck4.jpg" width="500" height="500" id="duck4">
  <div style="cursor: pointer">
    <img src="img/duck4.jpg" width="200" height="200" onclick="changeImg(this.src)">
       <img src="img/duck5.jpg" width="200" height="200"onclick="changeImg(this.src)">
          <img src="img/duck6.jpg" width="200" height="200"onclick="changeImg(this.src)">
             <img src="img/duck7.jpg" width="200" height="200"onclick="changeImg(this.src)">
  </div>
		   	<div class="demo-02">
		   		주소: 광주광역시 북구 중앙동 경양로 126<br>
		   		월요일	오전 11:30~오전 1:00<br>
		 		화요일	오전 11:30~오전 1:00<br>
		 		수요일	오전 11:30~오전 1:00 <br>
		 		목요일	오전 11:30~오전 1:00 <br>
		 		금요일	오전 11:30~오전 1:00<br>
		 		토요일	오전 11:30~오전 1:00<br>
		 		일요일	오전 11:30~오전 1:00<br>
		 					
		 		연락처: 062-527-0249<br>
		   	</div>
		    <br>
		 `;
		
		info.innerHTML= yeongmi;
	}
	
	document.querySelector('#img-3').onclick = function() {
		var info = document.querySelector('.information');
		
		var always = `
		 	<iframe width="560" height="315" src="https://www.youtube.com/embed/Jp5CbrIk1Xo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.407109238099!2d126.91544051553693!3d35.121512880328545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35718b0cb91bb7e5%3A0x5d3a2fe8101a2ade!2z7Jis7Juo7J207KaI7Zed6re466asKEFMV0FZU0hVTkdSWSk!5e0!3m2!1sko!2skr!4v1614769821545!5m2!1sko!2skr" width="560" height="315" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

	       	<div class="demo-02">
	  			주소: 광주광역시 광산구 송정동 광산로29번길 1<br>
	  					 월요일	오전 9:00~오후 10:00<br>
						 화요일	오전 9:00~오후 10:00<br>	
				 		 수요일	오전 9:00~오후 10:00<br>
						 목요일	오전 9:00~오후 10:00<br>
						 금요일	오전 9:00~오후 10:00<br>
						 토요일	오전 9:00~오후 10:00<br>
						 일요일	휴무일<br>
						 
				
				 연락처: 062-944-1439<br>
	  		</div>		
	       	<br>
		 `;
		
		info.innerHTML= always;
	}
}

