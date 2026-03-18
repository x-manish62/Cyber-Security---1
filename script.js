function login(){
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user != "" && pass != ""){
        window.location="dashboard.html";
    }
    else{
        alert("Enter Username and Password"); 
    }
}

function logout(){
    window.location="index.html";
}