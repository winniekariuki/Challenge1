document.getElementById('create').addEventListener('submit',addProduct)
function addProduct(e) {
    e.preventDefault()
    let message = document.getElementById('message');
    let name = document.getElementById('name').value;
    let category = document.getElementById('category').value;
    let price = document.getElementById('price').value;
    let quantity = document.getElementById('quantity').value;
    let lower_inventory = document.getElementById('lower_inventory').value;
    console.log(lower_inventory)
        fetch('https://mystoremanagerapp.herokuapp.com/api/v2/products', {
            method: 'POST',
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
                message.innerHTML = data.message ||data.Message
                if (message = 'created successfully') {
                    
              
                }

            });

            
}