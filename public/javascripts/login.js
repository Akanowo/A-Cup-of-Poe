

function makeRequest(url, method) {
    var jwtToken = localStorage.getItem('token');
    var headers = {};

    if(jwtToken) {
        console.log(jwtToken);
        headers['Authorization'] = 'Bearer ' + jwtToken;
    }

    const result =  fetch(url, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',
        headers: headers
    });
    console.log(result);
    return result;
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('inputEmailAddress');
    const password = document.getElementById('inputPassword');
    $.ajax({
        url: '/accounts/login',
        method: 'POST',
        data: { email: email.value, password: password.value },
        success: (response) => {
            if(response === 'invalid credentials') {
                alert(response);
            }

            if(response && response.authMessage) {
                alert('Login Successful')
                window.location.href = '/admin/create-post';
                return true;
            }
            
            if(!response) {
                alert('Invalid login details');
            }
        },
        error: (e) => {
            if(e.responseText === 'Unauthorized') {
                alert('Invalid username or password');
            }

            if(e.status === 400) {
                alert('One or more fields empty');
            }
        }
    });
  });
});