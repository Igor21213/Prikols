	var photo = document.getElementById("sca");

	var scrimers = document.getElementById("music");

	var final = document.getElementById("welcome");

function strax(){

		scrimers.play();
		photo.style.display = "block";
		final.style.display = "none";

		

}


function regis(){

	var userName = document.getElementById("Nick").value;

	var userPassword = document.getElementById("Pass").value;

	var Errors = document.getElementById("error");

	var Info = document.getElementById("reg");

	


	if(userName == "" || userPassword == ""){
		Errors.innerHTML = "Заполните все поля!";
		Errors.style.fontSize = "30px";
		Errors.style.color = "red";
		Errors.style.marginLeft = "500px";
		Errors.style.position = "absolute";
		Errors.style.top = "550px";
		}

	else{
		Errors.style.display = "none";
		Info.style.display = "none";
		final.style.display = "block";
		setTimeout(strax, 3800);
	}

}




