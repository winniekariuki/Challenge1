document.getElementById('login').addEventListener('submit', login)

let Message = document.getElementById('Message');
function login(e) {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    fetch('http://127.0.0.1:5000/api/v2/auth/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })

    })
        .then(res => res.json())
        .then((data) => {
            Message.innerHTML = data.message;
            if (data.message == 'You are successfully logged in') {
                localStorage.setItem('token', data.token);
                getusers(email)
            }
        })
        .catch((err) => console.log(err))
}
function getusers(email) {
    fetch('http://127.0.0.1:5000/api/v2/users', {
        mode: 'cors'
    })
        .then((res) => res.json())
        .then((data) => {
            users = data.Users
            users.forEach(user => {
                if (user.email == email) {
                    localStorage.setItem('user_data', JSON.stringify({
                        user_data: user
                    }))
                    if (user.role == 'Admin') {

                        window.location.replace('Admin.html')
                    }
                    else {
                        window.location.replace('Attendant.html')

                    }
                }
            });
        });
}
