	// 현재 마우스커서의 위치를 담는 변수
	var mouseX = 0;
	var mouseY = 0; 

	function getMousePosition(e){
		var eObj = window.event? window.event : e; // IE 대응
		mouseX = eObj.clientX;
		mouseY = eObj.clientY + document.documentElement.scrollTop; // 화면을 스크롤 했을때를 위한 처리 스크롤 양 만큼 마우스 Y좌표에+
	}

	function moveImg(){
		// 이미지 위치 파악하기
		var m_x = parseInt(document.getElementById('cursorimg').style.left.replace('px', ''));
		var m_y = parseInt(document.getElementById('cursorimg').style.top.replace('px', ''));

		// 이미지 움직이기
		document.getElementById('cursorimg').style.left = Math.round(m_x + ((mouseX - m_x) / 5)) + 'px';
		document.getElementById('cursorimg').style.top = Math.round(m_y + ((mouseY - m_y) / 5)) + 'px';

	}
    
	document.onmousemove = getMousePosition; // 마우스가 움직이면 getMousePosition 함수 실행
	setInterval("moveImg()", 50); // moveImg 함수 반복 실행하여 이미지 움직이기