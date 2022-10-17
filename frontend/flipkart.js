 a='samsung s22'

//  const search=sessionStorage.getItem('name');
const but=document.getElementById("sbutton");
const search=document.getElementById("input");
function getsearch(){

    console.log(search.value);

}
but.addEventListener("click",function(event){
    console.log("clicked");
    console.log(search.value);
    flipkart(search.value);
    
});

function flipkart(n){
let fetchRes = fetch(
    `https://flipkart.dvishal485.workers.dev/search/${n}`);
    
fetchRes.then(data =>
                data.json()).then(d => {
                    console.log(d.result)
                    display(d.result)
                    console.log(d.result)
                })
            }

function display(ad){
    placeholder = document.getElementById("amazon");
    let out="";
    ad.map((product)=>{
    out+=
    `
      <div class="producttile">
                  <div class="productimage">
                      <img src='${product.thumbnail}'>
                  </div>
                  <div class="productdetails">
      
                  <p class="producttitle"><a href="${product.link}" >${product.name}</a></p>
                  <p class="productprice">${product.current_price}</p>
                   <div class="saveproduct">
                  <h2> <a class="save_to_later_button"  href="">Save To List</a></h2>
                  </div>
                  <p class="marketplace">Flikart<p>
               </div>
              </div> 
      `;
    });
    placeholder.innerHTML=out;
  }

