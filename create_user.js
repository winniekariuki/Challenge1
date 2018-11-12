document.getElementById('Register').addEventListener('submit',addUser)
function addUser(e) {
    e.preventDefault()
    let message = document.getElementById('message');
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let role = document.getElementById('role').value;
   
    console.log(role)
        fetch('https://mystoremanagerapp.herokuapp.com/api/v2/auth/signup', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
            
                username: username,
                email: email,
                password:password,
                role: role
                
                
            })
        })
        .then(res => res.json())
            .then((data) => {
                console.log(data)
                message.innerHTML = data.Message ||data.message
                if (message = 'registered successfully') {
                    
                   
                }

            });

            
}