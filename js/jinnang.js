$(document).ready(function() {
	// <li>
	// 	<div class="pic">
	// 		<a href="#">
	// 			<img src="images/jsonImg/json01.jpg" alt="">
	// 		</a>
	// 	</div>
	// 	<div class="mask"></div>
	// 	<div class="tit">大吉岭</div>
	// 	<div class="shijian">2016-11-11更新</div>
	// </li>


	// ajax读取json数据，动态添加
	$.getJSON("json/jinnang.json",function(data) {
		for(var i = 0; i < data.length; i ++){
			var str = "<li>";
				str+= "	 	<div class='pic'>";
				str+= "			<a href='#'>"
				str+= "				<img src=" + data[i].img + ">";
				str+= "			</a>";
				str+= "	 	</div>";
				str+= "	 	<div class='mask'></div>";
				str+= "		<div class='tit'>" + data[i].title + "</div>";
				str+= "		<div class='shijian'>" + data[i].time + "</div>";
				str+= "</li>";
			$('#contentList').append(str);	
		}
	})
	.error(function() {
		alert('请求数据失败！');
	});

});	