var n='samsung galaxy s20'

const searchb=document.getElementById("sbutton");
const search=document.getElementById("input");
function getsearch(){

    console.log(search.value);

}
searchb.addEventListener("click",function(event){
    console.log("clicked");
    console.log(search.value);
    amazon(search.value);
    // flipkart(search.value);
    
});


function amazon(n){
    const options = {
        method: 'GET',
        url: 'https://amazon24.p.rapidapi.com/api/product',
        params: {categoryID: 'aps', keyword:n, country:'IN', page: '1'},
        headers: {
          'X-RapidAPI-Key': 'ddebee49d8msh98dccf4a95f1566p129aadjsna67441fcc16c',
          'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
        }
      };
      displayamazone(options);
}

function ali(n){
    const optionss = {
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
      displayali(optionss)

}

function flipkart(n){
  let fetchRes = fetch(
      `https://flipkart.dvishal485.workers.dev/search/${n}`);
      
  fetchRes.then(data =>
                  data.json()).then(d => {
                      console.log(d.result)
                      display_flipkart(d.result)
                      console.log(d.result)
                  })
              }


async function displayamazone(options){
    let am= await getdetailsamazone(options);
   }  

async function displayali(optionss){
    let am= await getdetailsali(optionss);
   }  



function getdetailsamazone(options){
    axios.request(options).then(function(response){
      console.log(response.data);
      display_products_amazone(response.data);
    }).catch(function(error){
      console.error(error);
    });
  }

function getdetailsali(optionss){
    axios.request(optionss).then(function(response){
      console.log(response.data);
      display_products_ali(response.data);
    }).catch(function(error){
      console.error(error);
    });
  }

  function display_products_amazone(d){
    ad=d.docs;
    console.log(ad);
    placeholder = document.getElementById("amazon");
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
          <p class="marketplace">Amazon<p>
</div>
              `;
        
          //     <div class="producttile">
          //     <div class="productimage">
          //         <img src='${product.product_main_image_url}'>
          //     </div>
          //     <div class="productdetails">
          //     <p class="producttitle"><a href="${product.product_detail_url}" >${product.product_title}</a></p>
          //     <p class="productprice">${product.app_sale_price}</p>
          //      <div class="saveproduct">
          //     <h2> <a class="save_to_later_button"  href="">Save To List</a></h2>
          //     </div>
          //     <p class="marketplace">AMAZON<p>
          //  </div>
          // </div> 



    });
    placeholder.innerHTML=out;
  }

function display_products_ali(d){
    ad=d.docs;
    console.log(ad);
    placeholder = document.getElementById("amazon");
    let out="";
    ad.map((product)=>{
    var iurl=product.product_main_image_url
    nurl = iurl.replace('https:', '');
    out+=`
        // <div class="producttile">
        //     <div class="productimage">
        //         <img src='${nurl}'>
        //     </div>
        //     <div class="productdetails">

        //     <p class="producttitle"><a href="${product.product_detail_url}" >${product.product_title}</a></p>
        //     <p class="productprice">${product.app_sale_price}</p>
        //      <div class="saveproduct">
        //     <h2> <a class="save_to_later_button"  href="">Save To List</a></h2>
        //     </div>
        //     <h2>AliExpress</h2>
        //  </div>
        // </div> 

        <div class="singletile">
        <div class="image">
            <img src='${nurl}'>
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
        <p class="marketplace">aliexpress<p>
</div>

   
            `;
    console.log(nurl);
    });
    placeholder.innerHTML=out;
   
  }
 
  function display_flipkart(ad){
      placeholder = document.getElementById("flipkart");
      let out="";
      ad.map((product)=>{
      out+=
    `
      <div class="singletilef">
      <div class="image">
          <img src='${product.thumbnail}'>
      </div>
      <div class="productnamef">
      <h2><a href="${product.link}" >${product.name}</a></h2>
       </div>
      <div class="product_price">
          <h2>${product.current_price}</h2>
      </div>
      <div class="productsave">
          <a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow" href="/canvas/shop/?add-to-cart=70">Save for later</a>
      </div>
      <p class="marketplace">Flikart<p>
</div>
  
        `;


    //     <div class="producttile">
    //     <div class="productimage">
    //         <img src='${product.thumbnail}'>
    //     </div>
    //     <div class="productdetails">

    //     <p class="producttitle"><a href="${product.link}" >${product.name}</a></p>
    //     <p class="productprice">${product.current_price}</p>
    //      <div class="saveproduct">
    //     <h2> <a class="save_to_later_button"  href="">Save To List</a></h2>
    //     </div>
    //     <p class="marketplace">Flikart<p>
    //  </div>
    // </div> 



      });
      placeholder.innerHTML=out;
    }