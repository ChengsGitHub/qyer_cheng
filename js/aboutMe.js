$(document).ready(function() {

	// 获得顶部导航到网页原点的距离  && 获得顶部导航的高度

	var navWrapper = $('#navbar-example').offset().top;
	var navWrapperHeight = $('#navbar-example').outerHeight();
	
	
	// 回到顶部
	$('#topcontrol').click(function(event) {
		$('html,body').animate({scrollTop:0},1000)	;
	});

	// 滚动条事件
	$(window).scroll(function(event) {
		var sTop = $(window).scrollTop();
		if(sTop > 100){
			// alert("1111");
			$('#topcontrol').fadeIn('slow');
		}else {
			$('#topcontrol').fadeOut('slow');
		}

		// 滚动条超过导航条时导航条在顶部锁定
		if(sTop >= navWrapper){
			// alert('111');
			if(!$('#navbar-example').hasClass('fixed')){
				$('#navbar-example').addClass('fixed');
			}
		}else{
			if($('#navbar-example').hasClass('fixed')){
				$('#navbar-example').removeClass('fixed');
			}
		}
		// 滚动监听导航高亮
		var education = {
			start:$('#education').offset().top,
			end:$('#education').outerHeight()
		}
		var skills = {
			start:$('#skills').offset().top,
			end:$('#skills').outerHeight()
		}
		var exprience = {
			start:$('#experience').offset().top,
			end:$('#experience').outerHeight()
		}
		var contact = {
			start:$('#contact').offset().top,
			end:$('#contact').outerHeight()
		}

		if(sTop + navWrapperHeight >= 0 && sTop + navWrapperHeight <= education.start){
			if(!$('.home1').hasClass('hover')){
				$('.home1').addClass('hover');
			}		
		}else{
			$('.home1').removeClass('hover');
		}

		if(sTop + navWrapperHeight >= education.start && sTop + navWrapperHeight <= education.start + education.end){
			if(!$('.education1').hasClass('hover')){
				$('.home1').removeClass('hover');
				$('.education1').addClass('hover');
			}		
		}else{
			$('.education1').removeClass('hover');
		}

		if(sTop + navWrapperHeight >= skills.start && sTop + navWrapperHeight <= skills.start + skills.end){
			if(!$('.skills1').hasClass('hover')){
				$('.home1').removeClass('hover');
				$('.skills1').addClass('hover');
			}		
		}else{
			$('.skills1').removeClass('hover');
		}

		if(sTop + navWrapperHeight >= exprience.start && sTop + navWrapperHeight <= exprience.start + exprience.end){
			if(!$('.experience1').hasClass('hover')){
				$('.home1').removeClass('hover');
				$('.experience1').addClass('hover');
			}		
		}else{
			$('.experience1').removeClass('hover');
		}

		if(sTop + navWrapperHeight >= contact.start && sTop + navWrapperHeight <= contact.start + contact.end){
			if(!$('.contact1').hasClass('hover')){
				$('.home1').removeClass('hover');
				$('.contact1').addClass('hover');
			}
		}else{
			$('.contact1').removeClass('hover');
		}

	});

/*百度地图*/

	// 创建地图实例  
	var map = new BMap.Map("bdmap"); 
	// 创建点坐标  
	var point = new BMap.Point(121.5113442053978, 38.860614891153396);
	// 初始化地图，设置中心点坐标和地图级别  
	map.centerAndZoom(point, 15);
	// 设置地图显示的城市 此项是必须设
	map.setCurrentCity("大连");    
	// 添加地图类型控件
	map.addControl(new BMap.MapTypeControl());  
	// 地图平移缩放控件
	map.addControl(new BMap.NavigationControl());  
	// 比例尺控件  
	map.addControl(new BMap.ScaleControl());  
	// 缩略地图控件
	map.addControl(new BMap.OverviewMapControl());
	// 开启鼠标滚轮缩放
	map.enableScrollWheelZoom(true); 
	// var marker = new BMap.Marker(point);
	// map.addOverlay(marker);
});