$(document).ready(function() {

	// 回到顶部
	$('#topcontrol').click(function(event) {
		$('html,body').animate({scrollTop:0},1000);
	});

	// 获得顶部导航到网页原点的距离  && 获得顶部导航的高度
	var navWrapper = $('.nav-wrapper').offset().top;
	var navWrapperHeight = $('.nav-wrapper').outerHeight();

	// 滚动监听
	$(window).scroll(function(event) {

		// 滚动条大于100px时显示图标
		var sTop = $(window).scrollTop();

		if(sTop > 100){
			$('#topcontrol').fadeIn('slow');
		}else {
			$('#topcontrol').fadeOut('slow');
		}

		// 滚动条超过导航条时导航条在顶部锁定
		if(sTop >= navWrapper){
			if(!$('.nav-wrapper').hasClass('fixed')){
				$('.nav-wrapper').addClass('fixed');
				$('.banner').css('margin-bottom',navWrapperHeight);
			}
		}else{
			if($('.nav-wrapper').hasClass('fixed')){
				$('.nav-wrapper').removeClass('fixed');
				$('.banner').css('margin-bottom','0px');
			}
		}

		// 滚动监听导航高亮
		var nav1 = {
			start:$('#nav1-wrapper').offset().top,
			end:$('#nav1-wrapper').outerHeight()
		}
		var nav2 = {
			start:$('#nav2-wrapper').offset().top,
			end:$('#nav2-wrapper').outerHeight()
		}
		var nav3 = {
			start:$('#nav3-wrapper').offset().top,
			end:$('#nav3-wrapper').outerHeight()
		}

		if(sTop + navWrapperHeight >= nav1.start && sTop + navWrapperHeight <= nav1.start + nav1.end){
			if(!$('.nav1').hasClass('hover'))
				$('.nav1').addClass('hover');
		}else{
			$('.nav1').removeClass('hover');
		}

		if(sTop + navWrapperHeight >= nav2.start && sTop + navWrapperHeight <= nav2.start + nav2.end){
			if(!$('.nav2').hasClass('hover'))
				$('.nav2').addClass('hover');
		}else{
			$('.nav2').removeClass('hover');
		}

		if(sTop + navWrapperHeight >= nav3.start && sTop + navWrapperHeight <= nav3.start + nav3.end){
			if(!$('.nav3').hasClass('hover'))
				$('.nav3').addClass('hover');
		}else{
			$('.nav3').removeClass('hover');
		}
		
	});
	
	// 锚点过渡链接
	$('.nav-wrapper a').click(function(event) {
		// console.log($(this.hash));
		var offsetTop = $(this.hash).offset().top - navWrapperHeight + 7; 
		$('html,body').animate({scrollTop:offsetTop}, 700);
		return false;
	});

});