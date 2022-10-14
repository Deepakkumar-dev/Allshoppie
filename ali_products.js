var n='samsung galaxy s20'
const options = {
  method: 'GET',
  url: 'https://magic-aliexpress1.p.rapidapi.com/api/products/search',
  params: {
    name: n,
    minSalePrice: '5',
    shipToCountry: 'IN',
    sort: 'NEWEST_DESC',
    page: '1',
    targetCurrency: 'INR',
    fastDelivery: 'true',
    lg: 'en',
    getShopInformation: 'false'
  },
  headers: {
    'X-RapidAPI-Key': 'ad0a1fe89cmshc3bc850123e53e1p1c042ejsn6322aab7cfcc',
    'X-RapidAPI-Host': 'magic-aliexpress1.p.rapidapi.com'
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
  
    
function display_products(d){
    ad=d.docs;
    console.log(ad);
    placeholder = document.getElementById("products");
    let out="";
    ad.map((product)=>{
    var iurl=product.product_main_image_url
    nurl = iurl.replace('https:', '');
    out+=`
    <tr>
    <td><img src='${nurl}'></img></td>
    <td>${product.product_title}</td>
    <td>${product.app_sale_price}</td>
    <td>${product.product_id}</td>
    </tr> 
    `;
    console.log(nurl);
    });
    placeholder.innerHTML=out;
   
  }
   
  async function display(){
    let aa= await getdetails();
   }
   
  display();

// app_sale_price:72678.56
// app_sale_price_currency:"INR"
// discount_rate:20
// evaluate_rate:4.9
// product_id:"3256803968501272"
// product_main_image_url:"https:https://ae04.alicdn.com/kf/S6847baabf0ce4eaba3042afcf9ae269dY.jpg"
// product_title:"Sony PlayStation 5 PS5 Console Video Game Console CFI-1118A Japan Version Edition PS4 PS 5 4 Games Ultra High Speed PlayStation5"
// lastest_volume:"2026"
// metadata:
// product_detail_url:"//www.aliexpress.com/item/3256803968501272.html"
// keywords:"Playstation"
  