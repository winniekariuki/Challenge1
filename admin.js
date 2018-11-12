window.onload = getAllproducts()
function getAllproducts(){
    let token = localStorage.getItem('token');
    let allproducts = document.getElementById('attendantproducts')
    fetch('https://mystoremanagerapp.herokuapp.com/api/v2/products', {
        headers: {
            'access_token': token
        }
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        if (data.message == 'Invalid Token!'){
            alert('Please login first');
            window.location.replace('index.html')
        }
        if (data.Message == 'No products available'){
            alert('No products available ');
            window.location.replace('index.html')
        }
        let result = '';
        data.Myproduce.forEach(product => {
            result += `
            <table>
              
                <tr>
                    
                    <td><img src="https://i.pinimg.com/564x/ba/40/9a/ba409ae8d54c8fffefe1746d0023325b.jpg"height="150" width="150">
                    <button id="delete" onclick="deleteProduct('${product.id}')">delete</button>
                    <a href="Modify.html"><button id="modify" >modify</button></a>

                    


                    <div><button id="price">ksh.${product.price}</button>
                    <button id="name">${product.name}</button></div>
                    
                    </td>
                
                </tr>
            </table>

            `
            
            allproducts.innerHTML = result;
        });
        localStorage.setItem('products', JSON.stringify(data.products));
    })
    .catch((error) => console.log(error))
}
function deleteProduct(product_id){
    let token = localStorage.getItem('token');
    message = 'Do you still want to delete the product?'
    con = confirm(message)
    if (con) {
        fetch('http://127.0.0.1:5000/api/v2/products/' + product_id, {
        method: 'DELETE',
        mode: 'cors',
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            alert("deleted successfully")
            window.location.reload()
        });
                
    }
}
