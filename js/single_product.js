let modal = document.getElementsByClassName("modal")[0];
let myModal = document.getElementById('myModal');

// document.getElementById("info").addEventListener('click',getsingleproduct())
// let singleproduct = document.getElementById('singleproduct')


// alert()
let token = localStorage.getItem('token');
function getsingleproduct(product_id) {
    console.log(product_id)

    
    fetch('http://127.0.0.1:5000/api/v2/products/' + product_id)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        document.getElementById("mod").innerHTML = `
        <h3>description</h3>
        <P>1.5 inch,hd dislay,300px</P>
                    <button id="qty">Qty.${data.Myproducts.quantity}</button>
                    <button id="low">Min.${data.Myproducts.lower_inventory}</button>
                    `;
          
        });
        
        myModal.style.display="block"
    window.onclick = function (event) {
        if (event.target === myModal || event.target === close) {
            myModal.style.display = "none";
            
        }
    
    }
}

