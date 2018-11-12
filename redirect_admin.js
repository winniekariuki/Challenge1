window.onload = attendant()
function attendant(){
    let user = JSON.parse(localStorage.getItem('user_data')).user_data
    if (!user){
        window.location.replace('index.html')
    }
    if (user.role != 'Admin'){
        window.location.replace('Attendant.html')
    }
}
    