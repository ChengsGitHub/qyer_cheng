$(document).ready(function() {
	$(document).ready(function(){
			
			// 动态控制登陆面板大小
			var w = $(window).width();
			$("#login").width(w);

			$(window).resize(function(event) {
				var w = $(window).width();
				$("#login").width(w);
			});
			
			
			// 勾选记住我选项，提示安全信息
			$("#rememberMe input").click(function(event) {
				if($(this).prop("checked")){
					$(".remeber_msg").fadeIn("slow");
					setTimeout(function(){
						$(".remeber_msg").fadeOut("slow");
					},2000);
					// 如果登录时选中记住我，则记录此次登录的用户名
					localStorage.setItem("remember",$("#login-name").val());
					
				}else{
					// 取消记住我选项，删除localstorage中的remember
					localStorage.removeItem("remember");
				}
			});
			
			// 如果localstorage中存在remember，则自动显示用户名和密码，记住我仍为选中状态
			if(localStorage.getItem("remember")){

				$("#rememberMe input").attr("checked",true);

				// 取出remember中存储的用户名
				$("#login-name").val(localStorage.getItem("remember"));

				// 取出对应用户名的密码
				$("#login-pwd").val(JSON.parse(localStorage.getItem(localStorage.getItem("remember"))).userPwd);
			}

			// 点击登录按钮，验证用户名和密码
			$("#submit-login").click(function(event){
				var username = $("#login-name").val();
				var password = $("#login-pwd").val();
				if(!localStorage.getItem(username)){
					alert("请输入正确的用户名和密码！");
					return;
				}else{
					if(password == JSON.parse(localStorage.getItem(username)).userPwd){
						alert("登录成功");
						location.href = "index.html";
					}
					else{
						alert("用户名或密码不正确");
					}
				}
					
				
			});
			
		});
});