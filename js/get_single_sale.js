window.onload = get_single_sale()
function get_single_sale(){
    let token = localStorage.getItem('token');
    let allsales = document.getElementById('single_sale_record')
    fetch('http://127.0.0.1:5000/api/v2/sales', {
        headers: {
            'access_token': token
        }
    })
    .then((res) => res.json())
    .then((data) => {
        user_data=JSON.parse(localStorage.getItem("user_data"));
        let result = `
        <tr>
                    <th id="title">Product id</th>
                    <th id="title">name</th>
                    <th id="title">Price</th>
                    <th id="title">quantity</th>
                    <th id="title">total_price</th>
                    <th id="title">User_id</th>

                    
                </tr>`
       data.MySaleRecords.forEach(sale => {
           if(sale.user_id == user_data.user_data.user_id){
               console.log(sale) 
                result += `
            
                
                    <tr>
                    <td id="data">${sale.id}</td>
                    <td id="data">${sale.name}</td>
                    <td id="data">${sale.price}</td>
                    <td id="data">${sale.quantity}</td>
                    <td id="data">${sale.total_price}</td>
                    <td id="data">${sale.user_id}</td>

                    
                    </tr>`  
            
                    allsales.innerHTML = result;
                }
    })
    .catch((error) => console.log(error))
})
}
















