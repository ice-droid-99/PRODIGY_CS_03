function setPassword() {
    var password = document.getElementById("password").value;
    var lengthPattern = /.{8,}/;
    var uppercasePattern = /[A-Z]/;
    var lowercasePattern = /[a-z]/;
    var numberPattern = /[0-9]/;
    var specialCharPattern = /[\W_]/;

    
    if (password.length < 8) {
        document.getElementById("warning").textContent = "Password must be at least 8 characters long.";
        document.getElementById("strength").textContent = "";
        document.getElementById("readyMessage").textContent = ""; 
        return;
    }

   
    var warnings = [];

    if (!uppercasePattern.test(password)) {
        warnings.push("Password must contain at least one uppercase letter.");
    }
    if (!lowercasePattern.test(password)) {
        warnings.push("Password must contain at least one lowercase letter.");
    }
    if (!numberPattern.test(password)) {
        warnings.push("Password must contain at least one number.");
    }
    if (!specialCharPattern.test(password)) {
        warnings.push("Password must contain at least one special character.");
    }

    
    if (warnings.length > 0) {
        document.getElementById("warning").textContent = warnings.join(" ");
        document.getElementById("strength").textContent = "Current Complexity: " + ((4 - warnings.length) / 4 * 100).toFixed(2) + "%";
        document.getElementById("readyMessage").textContent = ""; // Clear any existing ready message
        return;
    }

   
    document.getElementById("warning").textContent = "";

   
    var strength = ((4 - warnings.length) / 4) * 100;
    document.getElementById("strength").textContent = "Password Strength: " + strength.toFixed(2) + "%" + " Level: Strong !" ;
    

    
}


function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var eyeIcon = document.querySelector(".eye-icon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.textContent = "👁️";
    } else {
        passwordInput.type = "password";
        eyeIcon.textContent = "🔒";
    }
}
