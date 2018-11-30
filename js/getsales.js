window.onload = getsales()
function getsales(){
    let token = localStorage.getItem('token');
    let allsales = document.getElementById('attendant_sale_records')
    fetch('http://127.0.0.1:5000/api/v2/sales', {
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
            alert('No products are available at the the moment');
            window.location.replace('index.html')
        }
        let result = `
        <tr>
			<th id="title">Product id</th>
			<th id="title">name</th>
            <th id="title">Price</th>
            <th id="title">quantity</th>
            <th id="title">total_price</th>
            <th id="title">User_id</th>

			
		</tr>
		`;
        data.MySaleRecords.forEach(sale => {
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
        });
        localStorage.setItem('sales', JSON.stringify(data.sales));
    })
    .catch((error) => console.log(error))
}
