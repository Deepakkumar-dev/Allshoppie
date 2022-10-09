const axios = require("axios");
const options = {
  method: 'GET',
  url: 'https://amazon24.p.rapidapi.com/api/product',
  params: {categoryID: 'aps', keyword: 'iphone', country: 'US', page: '1'},
  headers: {
    'X-RapidAPI-Key': 'ad0a1fe89cmshc3bc850123e53e1p1c042ejsn6322aab7cfcc',
    'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});