// function sendEmail(){
//     sendEmail.send({
//         secureToken: "8d39fa8f-8b14-4153-afdb-27936cd99713",
//         To : "challyb54@gmail.com",
//         From : document.getElementById("email").ariaValueMax,
//         Subject : "New Contact From Enquiry",
//         Body : "Name:" +  document.getElementById("Full Name").value
//             +  "<br> Phone no : " +  document .getElementById("Mobile number").value
//             +  "<br> Email : " +  document .getElementById("Email Address").value
//             +  "<br> Email subject : " +  document .getElementById("Email Subject").value
//             +  "<br> Message : " +  document .getElementById("Your Message").value
//     }).then(
//         message => alert("Message Sent Successfully")
//     )
// }


function emailSend(){

	var userName = document.getElementById('contact-name').value;
	var phone = document.getElementById('mobile-number').value;
	var email = document.getElementById('email-address').value;
    var message = document.getElementById('sent-message').value;
   

	var messageBody = "fullName" + userName +
	"<br/> MobileNumber " + phone +
	"<br/>emailAddress " + email +
    "<br/> yourMessage " + message;

	Email.send({
        // SecureToken:"8d39fa8f-8b14-4153-afdb-27936cd99713",
        Host : "smtp.elasticemail.com",
        Username : "challytechfast@gmail.com",
        Password : "F9E8399104639F9029E8DC084259AAD0B355",
        To : "njengacharles07@gmail.com",
        From : document.getElementById("email").ariaValueMax,
        Subject : "New Contact From Enquiry",
        Body : messageBody


    // Host : "smtp.elasticemail.com",
    // Username : "host@gmail.com",
    // Password : "Password",
    // To : 'reviever@gmail.com',
    // From : "website@gmail.com",
    // Subject : "This is the subject",
  
}).then(
  message => {
  	if(message=='OK'){
  		swal("successful", "You clicked the button!", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	}
  }
);
}