
const options = {
  method: 'GET',
  url: 'https://magic-aliexpress1.p.rapidapi.com/api/products/search',
  params: {
    name: 'Playstation',
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

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});