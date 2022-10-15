var n={value:'samsung galaxy s20'};
const options = {
  method: 'GET',
  url: 'https://amazon24.p.rapidapi.com/api/product',
  params: {categoryID: 'aps', keyword:n.value, country:'IN', page: '1'},
  headers: {
    'X-RapidAPI-Key': 'ad0a1fe89cmshc3bc850123e53e1p1c042ejsn6322aab7cfcc',
    'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
  }
};

function getdetails(){
  axios.request(options).then(function(response){
    console.log(response.data);
    display_products(response.data);
  }).catch(function(error){
    console.error(error);
  });
}

 
async function display(){
  let aa= await getdetails();
 }
 
display();

function display_products(d){
  ad=d.docs;
  console.log(ad);
  placeholder = document.getElementById("products");
  let out="";
  ad.map((product)=>{
  out+=
  
  `
     <div class="singletile">
                <div class="image">
                    <img src='${product.product_main_image_url}'>
                </div>
                <div class="productname">
                <h2><a href="${product.product_detail_url}" >${product.product_title}</a></h2>

                 </div>
                <div class="product_price">
                    <h2>${product.app_sale_price}</h2>
                </div>
                <div class="productsave">
                    <a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow" href="/canvas/shop/?add-to-cart=70">Save for later</a>
                </div>
    </div>
    `;
  });
  placeholder.innerHTML=out;
}




// isBestSeller:false
// product_title:"Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) with No Cost EMI & Additional Exchange Offers"
// product_main_image_url:"https://m.media-amazon.com/images/I/81vDZyJQ-4L._AC_UY218_.jpg"
// app_sale_price:"29,990"
// app_sale_price_currency:"₹"
// isPrime:true
// product_detail_url:"https://www.amazon.in/dp/B08VB57558"
// product_id:"B08VB57558"
// evaluate_rate:"4.3 out of 5 stars"
// original_price:"₹74,999"