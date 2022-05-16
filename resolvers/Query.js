const { reviews } = require("../db");

exports.Query = {
  products: (parent, { filter }, {db }) => {
    let filterProducts = db.products;
    if (filter) {
       const {onSale,avgRating}=filter
      if (onSale) {
        filterProducts = filterProducts.filter(product => {
          return product.onSale;
        })
      }
      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filterProducts = filterProducts.filter((product) => {
          let sumRating = 0;
          let numberfReviews = 0;
          db.reviews.forEach(review => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              numberfReviews++;
            }
          });
          const avgProductRating = sumRating / numberfReviews;
          return avgProductRating >= avgRating;
       })
      }
    }
    return filterProducts;
    },
    product: (parent, {id}, {db}) => {
      return db.products.find(product => product.id === id);
    },
    categories: (parent, args, {db}) => db.categories,
    category: (parent, {id}, {db}) => {
      return db.categories.find((category) => category.id === id);
    }
  }