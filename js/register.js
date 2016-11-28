// 注册页面js文件
$(document).ready(function(){

	// 产生随机验证码
	var code = new Array();
	function random(){
		var str = '';
		for(var i = 0; i <=3; i ++){
			code[i] = parseInt((90 - 48 + 1) * Math.random() + 48);
			if(code[i] >= 58 && code[i] <= 64){
				code[i] -= 7;
			}
			code[i] = String.fromCharCode(code[i]);
			
		}

		var randomCode = code.join(" ");

		$("#random-letter div span").text(randomCode);
	}
	random();
	
	$("#random-letter a").click(function(event) {
		random();
	});
	
	// 登录名输入框失去焦点时，检测输入是否合法
	$("#register-name").blur(function(event) {
		var username = $(this).val();
		var usernameReg = /^\w+@((qq|126|163|sina|hotmail|gmail|sohu|139)\.com|sina\.cn|yeah\.net)$/;
		if(username){
			if(!usernameReg.test(username)){
				$(this).parent().after('<p class="usernameMsg msg">请输入格式正确的常用邮箱</p>');
			}else{
				$(".usernameMsg").remove();
			}
		}else{
			$(this).parent().after('<p class="usernameMsg msg">邮箱不能为空</p>');
		}
	});

	// 登录名输入框获得焦点时，提示信息消失
	$("#register-name").focus(function(event) {
		$(".usernameMsg").remove();
	});

	// 密码输入框失去焦点时，检测密码位数是否在6-16之间
	$("#register-pwd").blur(function(event) {
		var password = $(this).val();
		var passwordReg = /^.{6,16}$/;
		if(password){
			if(!passwordReg.test(password)){
				$(this).parent().after('<p class="passwordMsg msg">请输入6-16位的密码</p>');
			}else{
				$(".passwordMsg").remove();
			}
		}else{
			$(this).parent().after('<p class="passwordMsg msg">密码不能为空</p>');
		}
	});

	// 密码输入框获得焦点时，提示信息消失
	$("#register-pwd").focus(function(event) {
		$(".passwordMsg").remove();
	});

	// 验证码输入框失去焦点时，检测输入是否与验证码相同
	$("#random-letter-input").blur(function(event) {

		var randomInput = $(this).val();
		var randomLetter = code.join('');
		if(randomInput){
			// 忽略大小写
			if(randomInput.toUpperCase() != randomLetter){
				$("#random-letter").parent().after('<p class="randomMsg msg">验证码错误</p>');
			}else{
				$(".randomReg").remove();
			}
		}else{
			$("#random-letter").parent().after('<p class="randomMsg msg">验证码不能为空</p>');
		}

	});

	// 验证码输入框获得焦点时，提示信息消失
	$("#random-letter-input").focus(function(event) {
		$(".randomMsg").remove();
	});

	$(".user-name input").click(function(event) {
		$(".userIdMsg").remove();
	});
	$("#protocal input").click(function(event) {
		if($("#protocal input").prop("checked") == false)
			$("#protocal").after('<p class="protocalMsg msg">请接受用户使用协议</p>');
		else
			$(".protocalMsg").remove();
	});
	

	// 点击注册，验证表单
	// 如果某项为空，提示输入，如果提示信息已经存在，return
	// 用$(".userIdMsg").length != 0判断
	$("#submit-register").click(function(event) {

		var userName = $('#register-name');
		var username = $("#register-name").val();
		if(!username){
			if($(".usernameMsg").length != 0)
				return;
			$("#register-name").parent().after('<p class="usernameMsg msg">请输入邮箱账号</p>');
				return;
		}
		
		var password = $("#register-pwd").val();
		if(!password){
			if($(".passwordMsg").length != 0)
				return;
			$("#register-pwd").parent().after('<p class="passwordMsg msg">请输入密码</p>');
				return;
		}

		if(!$("#random-letter-input").val()){
			if($(".randomMsg").length != 0)
				return;
			$("#random-letter").parent().after('<p class="randomMsg msg">请输入验证码</p>');
				return;
		}

		// 创建用户类，参数是用户名和用户密码
		function User(userName,userPwd){
			this.userName = userName;
			this.userPwd = userPwd;
		};
		// 每次注册创建一个用户对象实例
		var u = new User(username,password);

		// 所有输入都合法，注册成功，将账号、密码存入本地
		if($(".msg").length == 0){
			localStorage.setItem(username,JSON.stringify(u));
			if(localStorage.getItem(username)){
				alert("注册成功！");
				location.href = "login.html";
			} 
		}
		
	});
});
