

// Sign Up Button on Login Page
function signupButtonFunc() {
    window.location.href = '/signUp';
}

// Login Button on Sign Up Page
function loginButtonFunc() {
    window.location.href = '/login';
}

function reportsPageFunc() {
    window.location.href = '/reports';
}

function requestsPageFunc() {
    window.location.href = '/requests';
}


// Function to show password on mouse down and hide on mouse up
function togglePasswordVisibility(event) {
    const passwordInput = document.getElementById('userPassword');
    const eyeIcon = document.querySelector('.toggle-password');
  
    if (event.type === 'mousedown') {
      passwordInput.type = 'text';
      eyeIcon.classList.add('active');
    } else if (event.type === 'mouseup') {
      passwordInput.type = 'password';
      eyeIcon.classList.remove('active');
    }
}


/*function showPopup() {
    const popup = document.getElementById('popup-comment');
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none'; 
    }, 2000); 
}*/ 

function requestbuttonFunc() {
    var request = document.getElementById("request");
    request.value = "";
    var popup = document.getElementById("popup-comment");
    popup.style.display = "block";
    setTimeout(function() {
        popup.style.display = "none";
      }, 2000);
}

