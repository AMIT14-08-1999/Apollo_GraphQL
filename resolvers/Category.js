

exports.Category = {
    products: ({id:categoryId}, {filter}, {db}) => { 
    const categoryProducts = db.products.filter((product) => product.categoryId === categoryId);
    let filterCategoryProducts = categoryProducts;
    if (filter) {
      if (filter.onSale === true) {
        filterCategoryProducts = filterCategoryProducts.filter(product => {
          return product.onSale;
        })
      }
    }
    return filterCategoryProducts;
    
    }
  }