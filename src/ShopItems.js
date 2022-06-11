const shopItems = [
  {
      "id": 1,
      "title": "Full Sleeve Solid Men Quilted Jacket",
      "price": 985,
      "description": "",
      "category": "Clothing And Accessories",
      "for": "Men",
      "brand": "Fort Collins",
      "size": ["S"],
      "image": "https://images.unsplash.com/photo-1614031679232-0dae776a72ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      "rating": {
          "rate": 2.9,
          "count": 20
      },
      "discount":15
  },
  {
      "id": 2,
      "title": "Solid Cap With Neck Warmer Cap  (Pack of 2)",
      "price": 765,
      "description": "",
      "category": "Clothing And Accessories",
      "for": "Men",
      "brand": "AmorMente",
      "size": ["S"],
      "image": "https://images.unsplash.com/photo-1513105737059-ff0cf0580ae6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
      "rating": {
          "rate": 4,
          "count": 120
      },
      "discount":20
  },
  {
      "id": 3,
      "title": "Watch for men",
      "price": 572,
      "description": "",
      "category": "Clothing And Accessories",
      "for": "Men & Women",
      "brand": "Cartyshop",
      "size": ["6","7.5"],
      "image": "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      "rating": {
          "rate": 3.9,
          "count": 10
      },
      "discount":28
  },
  {
      "id": 4,
      "title": "Men tshirt",
      "price": 324,
      "description": "",
      "category": "Clothing And Accessories",
      "for": "Men",
      "brand": "NOBEY",
      "size": ["M", "L"],
      "image": "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
      "rating": {
          "rate": 3.6,
          "count": 220
      },
      "discount":33
  },
  {
      "id": 5,
      "title": "Half Sleeve Solid Men tshirt",
      "price": 690,
      "description": "",
      "category": "Clothing And Accessories",
      "for": "Men",
      "brand": "FLEXIMAA",
      "size": ["M"],
      "image": "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      "rating": {
          "rate": 3.3,
          "count": 94
      },
      "discount":16
  },
  {
      "id": 6,
      "title": "Men Jacket leather",
      "price": 210,
      "description": "",
      "category": "Clothing And Accessories",
      "for": "Men & Women",
      "brand": "AmorMente",
      "size": ["S","XL"],
      "image": "https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      "rating": {
          "rate": 3.6,
          "count": 120
      },
      "discount":18
  },
  {
      "id": 7,
      "title": "Men Jacket",
      "price": 799,
      "description": "",
      "category": "Clothing And Accessories",
      "for": "Men",
      "brand": "AmorMente",
      "size": ["S","XL"],
      "image": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
      "rating": {
          "rate": 3.7,
          "count": 130
      },
      "discount":22
  },
  {
      "id": 8,
      "title": "Women Sweatshirt",
      "price": 299,
      "description": "",
      "category": "Clothing And Accessories",
      "for": "Women",
      "brand": "AmorMente",
      "size": ["S","XL"],
      "image": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80",
      "rating": {
          "rate": 3.9,
          "count": 120
      },
      "discount":14
  },
  {
      "id": 9,
      "title": "Women tshirt Green",
      "price": 365,
      "description": "",
      "category": "Clothing And Accessories",
      "for": "Women",
      "brand": "AmorMente",
      "size": ["S","XL"],
      "image": "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "rating": {
          "rate": 3.9,
          "count": 120
      },
      "discount":66
  },
  {
      "id": 10,
      "title": "Women tshirt  (Pack of 2)",
      "price": 260,
      "description": "",
      "category": "Clothing And Accessories",
      "for": "Women",
      "brand": "AmorMente",
      "size": ["S","XL"],
      "image": "https://images.unsplash.com/photo-1537274942065-eda9d00a6293?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "rating": {
          "rate": 3.9,
          "count": 120
      },
      "discount":5
  },
  {
      "id": 11,
      "title": "Men jeans",
      "price": 899,
      "description": "",
      "category": "Clothing And Accessories",
      "for": "Men",
      "brand": "AmorMente",
      "size": ["28","30"],
      "image": "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      "rating": {
          "rate": 3.9,
          "count": 120
      },
      "discount":35
  },
  {
      "id": 12,
      "title": "Belt for men leather",
      "price": 410,
      "description": "",
      "category": "Clothing And Accessories",
      "for": "Men",
      "brand": "AmorMente",
      "size": ["28","30"],
      "image": "https://images.unsplash.com/photo-1624222247344-550fb60583dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "rating": {
          "rate": 3.9,
          "count": 120
      },
      "discount":18
  },
  {
      "id": 13,
      "title": "Belt for men",
      "price": 399,
      "description": "",
      "category": "Clothing And Accessories",
      "for": "Men",
      "brand": "AmorMente",
      "size": ["28","30"],
      "image": "https://images.unsplash.com/photo-1585856331452-87ea5a04c21c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "rating": {
          "rate": 3.9,
          "count": 120
      },
      "discount":28
  },
  {
      "id": 14,
      "title": "Shoes for men leather",
      "price": 925,
      "description": "",
      "category": "Clothing And Accessories",
      "for": "Men",
      "brand": "AmorMente",
      "size": ["6","7"],
      "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
      "rating": {
          "rate": 3.9,
          "count": 120
      },
      "discount":5
  },
  {
      "id": 15,
      "title": "Shoes for men red",
      "price": 810,
      "description": "",
      "category": "Clothing And Accessories",
      "for": "Men",
      "brand": "AmorMente",
      "size": ["8","10"],
      "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "rating": {
          "rate": 3.9,
          "count": 120
      },
      "discount":18
  }
];

export default shopItems;
