var result_name = false;
var result_surname = false;
var result_email = false;
var result_gender=false;
var result_agreement = false;
var result_DOB=false;

function validateName(){
	
	var spanElement = document.getElementById("spanName");
	var name = document.getElementById("firstName").value; 
	document.querySelector("#firstName").style.border="red 1px solid";
	
	if(name.length<5){
		spanElement.innerHTML="*Name has to be more than 5 letters";
		result_name=false;
	}else{
		spanElement.innerHTML="";
		document.querySelector("#firstName").style.border="none";
		result_name=true;		
	}
}

function validateSurname(){
	var spanElement = document.getElementById("spanSurname");
	var surname= document.getElementById("surname").value;
	
	if(surname.length<8){
		spanSurname.innerHTML="*Surname has to be more than 8 letters"
		document.querySelector("#surname").style.border="red 1px solid";
		result_surname=false;
	}else{
		spanElement.innerHTML="";
		document.querySelector("#surname").style.border="none";

		result_surname=true;		
	}
}

function validateEmail(){
	var spanElement= document.getElementById("spanEmail");
	var email = document.getElementById("email").value;
	var format = new RegExp("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$");
	
	if(format.test(email)!=true){
 		spanElement.innerHTML = "Please check the email format";
		document.querySelector("#email").style.border="red 1px solid";
		result_email=false;
		
	}else{
		spanElement.innerHTML="";
		document.querySelector("#email").style.border="none";
		result_email=true;
	}
}

function validateDOB(){
	if(document.querySelector("#dateOfBirth").value==""){
		result_DOB=false;
		document.querySelector("#spanDOB").innerHTML="Please provide your date of birth";
		document.querySelector("#dateOfBirth").style.border="red 1px solid";

	}else{
		result_DOB=true;
		document.querySelector("#spanDOB").innerHTML="";
		document.querySelector("#dateOfBirth").style.border="none";
	}
	
}



function validateGender(){
	if(document.querySelector("#male").checked==false&&document.querySelector("#female").checked==false){
		document.querySelector("#spanGender").innerHTML="Please choose the gender";
		
		result_gender=false;
	}
	else{
		document.querySelector("#spanGender").innerHTML="";

		result_gender=true;
		
	}
	

}

	
function validateAgreement(){
	var spanElement = document.getElementById("spanAgreement");

	if(document.querySelector("#agreement").checked){
		spanElement.innerHTML="";
		result_agreement = true;

	}else{
		spanElement.innerHTML="*You have to agree with the agreement to sign up";
		result_agreement = false;
	}	
}	


 
function validateForm(theForm){
	var email = document.getElementById("email").value;
	var surname= document.getElementById("surname").value;
	var name = document.getElementById("firstName").value; 
	
	validateName();
	validateSurname();
	validateEmail();
	validateAgreement();
	validateGender();
	validateDOB();
	
if(result_name==false||result_surname==false||result_email==false||result_gender==false||result_DOB==false||result_agreement==false){
		alert("Please correct your input according to warning");
		return false;
	}
	else{
		alert("Thanks for joining us!");
		return true;
	}

}