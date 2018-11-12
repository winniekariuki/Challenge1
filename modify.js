
document.getElementById('change').addEventListener('submit',modifyProduct)
function modifyProduct(e) {
    // alert(product_id)
    e.preventDefault()
    let message = document.getElementById('message2');
    let name = document.getElementById('name2').value;
    let category = document.getElementById('category2').value;
    let price = document.getElementById('price2').value;
    let quantity = document.getElementById('quantity2').value;
    let lower_inventory = document.getElementById('lower_inventory2').value;

    let token = localStorage.getItem('token');
    fetch('https://mystoremanagerapp.herokuapp.com/api/v2/products', {
        headers: {
            'access_token': token
        }
    })
    .then((res) => res.json())
    .then((data) => {
        products=data.Myproduce
        products.forEach(product => {
            if (product.name===name) {
                let prod_id=product.id
                updateProduct(prod_id)
            }
        })
    })
}
function updateProduct(prod_id){
    let message = document.getElementById('message2');
    let name = document.getElementById('name2').value;
    let category = document.getElementById('category2').value;
    let price = document.getElementById('price2').value;
    let quantity = document.getElementById('quantity2').value;
    let lower_inventory = document.getElementById('lower_inventory2').value;
        fetch('https://mystoremanagerapp.herokuapp.com/api/v2/products/'+prod_id, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
            
                name: name,
                category: category,
                price:price,
                quantity: quantity,
                lower_inventory: lower_inventory
                
            })
        })
        .then(res => res.json())
            .then((data) => {
                console.log(data)
                alert(data.Message)
                if (Message = 'Updated successfully') {
                    
                    window.location.reload()
                }

            });

            
}