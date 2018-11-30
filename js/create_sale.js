document.getElementById('Record').addEventListener('submit',addSale)
function addSale(e) {
    e.preventDefault()
    let token = localStorage.getItem('token');
    let message = document.getElementById('message4');
    let name1 = document.getElementById('name1').value;
    let quantity1 = document.getElementById('quantity1').value;
    console.log(quantity1)
   
   
  
        fetch('http://127.0.0.1:5000/api/v2/sales', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'access_token': token,
                'content-type': 'application/json'
                
            },
            body: JSON.stringify({
            
                name:name1,
                quantity:quantity1
                
                
                
            })
        })
        .then(res => res.json())
            .then((data) => {
                console.log(data)
                message.innerHTML = data.Message ||data.message
                if (message = 'created successfully') {
                    alert('salecreated')
                    
                }

            });

            
}