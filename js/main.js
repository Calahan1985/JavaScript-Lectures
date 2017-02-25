var arrayOfUsers = [];

$(".addUserButton").on("click", function (arrayOfUsers) {
	if ($(".inputUserName").val() === "") {
		alert("User name is invalid!");
		return false;
	};
	if ($(".inputUserEmail").val() === "") {
		alert("User email is invalid!");
		return false;
	};
	
	var nameOfUser = $(".inputUserName").val();
	var emailOfUser = $(".inputUserEmail").val();
	
	//console.log($(".inputUserName").val());
	
	//checking an email in 
	var user = {
		name: nameOfUser,
		email: emailOfUser
	};
	
	arrayOfUsers.push(user);
	
	console.log(arrayOfUsers);
});

