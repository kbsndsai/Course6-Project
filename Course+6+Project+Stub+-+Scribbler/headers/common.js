
var modal = document.getElementById("myModal");
var btn = document.getElementById("signup");
var span = document.getElementsByClassName("close")[0];

var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("signin");
var span2 = document.getElementsByClassName("close2")[0];


function onSignUp() {      
    modal.style.display = "block";
    span.onclick = closeModal;
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
}

function closeModal() {
    modal.style.display = "none";
}

function onSignIn() {      
    modal2.style.display = "block";
    span2.onclick = closeModal2;
    window.onclick = function(event) {
        if (event.target == modal2) {
          modal2.style.display = "none";
        }
      }
}

function closeModal2() {
    modal2.style.display = "none";
}



function formSignUp() {
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;

    var nameErr = usernameErr = passwordErr = confirmpasswordErr = true;

    if(name == "") {
        printError("nameErr", "Enter your name");
        nameErr = false;
    }
   

    if(username == "") {
        printError("usernameErr", "Enter your username");
        usernameErr = false;
    }
    

    if(password == "") {
        printError("passwordErr", "Enter your password");
        passwordErr = false;
    }
    

    if(confirmpassword == "") {
        printError("confirmpasswordErr", "Re-enter your password");
        confirmpasswordErr = false;
    }    

    if((nameErr || usernameErr || passwordErr || confirmpasswordErr) == true) {
        return false;
     } 
}

