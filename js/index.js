$(document).ready(function() {


	// 获得标题ul
	var titleUl = document.getElementById('qyer-focus-category-ul');
	// 获得内容div
	var contentDiv = document.getElementById('qyer-focus-category-content')
	//所有标题对象 
	var titles = titleUl.getElementsByTagName('li');
	//所有内容对象
	var contents = contentDiv.getElementsByClassName('qyer-focus-category-content01');

	// alert(contents.length);
	
	// 滚动条事件
	$(window).scroll(function(event) {
		
		// 获得滚动卷曲大小
		var sTop = $(window).scrollTop();

		// 超过200，显示回到顶部div
		if (sTop >= 200) {
			$('.backtop').fadeIn(500);
		} else {
			$('.backtop').fadeOut(500);
		}
	});



	// 单击回到顶部按钮，回到顶部
	$('#backTop').click(function(event) {
		$('html,body').animate({scrollTop:0},1000);
	});




	// 标题和内容的个数必须相等
	if (titles.length != contents.length)
		return;

	for (var i = 0;i < titles.length;i ++) {
			
		// 用闭包记录当时的下标 
		(function(index) {

			// 标题鼠标移上事件
			titles[i].onmouseover = function() {					

				// 所有标题失去高亮，所有内容都隐藏
				for (var j = 0;j < titles.length;j ++) {
					titles[j].className = 'qyer-focus-category-list';
					contents[j].style.display = 'none';
				}

				// 当前标题高亮
				// this.className += 'selected';
				// this.className = 'qyer-focus-category-list';
				// className += 'selected';	
				// 对应的内容显示
				contents[index].style.display = 'block';
				$(this).addClass('bgWhite');
			}

			titles[i].onmouseleave = function (){
				contents[index].style.display = 'none';
				$(this).removeClass('bgWhite');
			}

			contents[i].onmouseleave = function (){
				contents[index].style.display = 'none';
			}

		})(i);
	}


});