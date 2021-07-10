import axios from "axios";

const API_URL = 'https://5fd96f0e7e05f000170d385e.mockapi.io/api/v1/';

 const getProduct = ()=>{
     
     return axios.get(`${API_URL}products`).then(res => {
         if (res.status === 200){
             return res.data
         }
     })

    //TODO: mock data
    // let json = '[{"product_name":"product_name 1","price":91,"quantity":99,"id":"1"},{"product_name":"product_name 2","price":0,"quantity":4,"id":"2"},{"product_name":"product_name 3","price":61,"quantity":56,"id":"3"},{"product_name":"product_name 4","price":20,"quantity":56,"id":"4"},{"product_name":"product_name 5","price":39,"quantity":7,"id":"5"},{"product_name":"product_name 6","price":5,"quantity":22,"id":"6"},{"product_name":"product_name 7","price":67,"quantity":43,"id":"7"},{"product_name":"product_name 8","price":19,"quantity":100,"id":"8"},{"product_name":"product_name 9","price":73,"quantity":19,"id":"9"},{"product_name":"product_name 10","price":43,"quantity":34,"id":"10"},{"product_name":"product_name 11","price":59,"quantity":8,"id":"11"},{"product_name":"product_name 12","price":62,"quantity":1,"id":"12"},{"product_name":"product_name 13","price":89,"quantity":17,"id":"13"},{"product_name":"product_name 14","price":26,"quantity":49,"id":"14"},{"product_name":"product_name 15","price":100,"quantity":8,"id":"15"},{"product_name":"product_name 16","price":1,"quantity":60,"id":"16"},{"product_name":"product_name 17","price":78,"quantity":68,"id":"17"},{"product_name":"product_name 18","price":56,"quantity":72,"id":"18"},{"product_name":"product_name 19","price":57,"quantity":18,"id":"19"},{"product_name":"product_name 20","price":54,"quantity":75,"id":"20"}]';
    
    // return JSON.parse(json);
}

 export default {
     getProduct
 }