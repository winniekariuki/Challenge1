window.onload = admin()
function admin(){
    let user = JSON.parse(localStorage.getItem('user_data')).user_data
    if (!user){
        window.location.replace('index.html')
    }
    if (user.role != 'storeattendant'){
        window.location.replace('Admin.html')
    }
}
    