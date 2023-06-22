export const productAVG = (reviews) => {
  const ratingTotals = {};
  const ratingCounts = {};
  const productAVGArray = [];

  reviews.forEach((review) => {
    const productId = review.product?._id;
    const rating = review.rating;

    if (productId !== undefined && rating !== undefined) {
      if (!ratingTotals[productId]) {
        ratingTotals[productId] = 0;
        ratingCounts[productId] = 0;
      }

      ratingTotals[productId] += rating;
      ratingCounts[productId] += 1;
    }
  });

  for (const productId in ratingTotals) {
    const ratingTotal = ratingTotals[productId];
    const ratingCount = ratingCounts[productId];
    const ratingAvg = ratingTotal / ratingCount;

    const product = reviews.find((review) => review.product?._id === productId)?.product;
    if (product) {
      const { name, price, image } = product;

      productAVGArray.push({
        product: productId,
        name: name,
        price: price,
        image: image,
        ratingAvg: ratingAvg,
      });
    }
  }

  productAVGArray.sort((a, b) => b.ratingAvg - a.ratingAvg);

  return productAVGArray;
};

  
//  const reviews = [{"_id":"648d015806921c24d54793b2","rating":5,"createdBy":{"accessToken":"","_id":"648a2c3a59056bfa074393e9","name":"nilo","email":"admin@example.com","password":"123456","isAdmin":false,"cart":[],"bought":[],"favorites":[],"userReviews":[],"userOrders":[],"__v":0},"product":{"_id":"648c07ea49938d2aef4e5292","name":"Sweet® Cozy Throw Blanket","price":29.99,"image":"https://m.media-amazon.com/images/I/71xZfQ8o7cL._AC_UF894,1000_QL80_.jpg","description":"Wrap yourself in luxury with the Sweet® Cozy Throw Blanket. Made from ultra-soft and plush fabric, this blanket provides exceptional warmth and comfort on chilly evenings. Its elegant design and high-quality craftsmanship make it a stylish addition to any living space. Whether you use it to snuggle up on the couch or drape it over your bed, the Sweet® Cozy Throw Blanket is a must-have for cozy nights and relaxing moments.","stock":50,"category":["648a160cd9329527f0df015f"],"review":[],"createdAt":"2023-06-16T06:57:46.519Z","__v":0},"__v":0},{"_id":"648d019f06921c24d54793b9","rating":5,"createdBy":{"accessToken":"","_id":"648a33d7c87102e8b9b681e6","name":"tito","email":"tito@example.com","password":"123456","isAdmin":false,"cart":[],"bought":[],"favorites":[],"userReviews":[],"userOrders":[],"__v":0},"product":{"_id":"648c07ea49938d2aef4e5292","name":"Sweet® Cozy Throw Blanket","price":29.99,"image":"https://m.media-amazon.com/images/I/71xZfQ8o7cL._AC_UF894,1000_QL80_.jpg","description":"Wrap yourself in luxury with the Sweet® Cozy Throw Blanket. Made from ultra-soft and plush fabric, this blanket provides exceptional warmth and comfort on chilly evenings. Its elegant design and high-quality craftsmanship make it a stylish addition to any living space. Whether you use it to snuggle up on the couch or drape it over your bed, the Sweet® Cozy Throw Blanket is a must-have for cozy nights and relaxing moments.","stock":50,"category":["648a160cd9329527f0df015f"],"review":[],"createdAt":"2023-06-16T06:57:46.519Z","__v":0},"__v":0}]
  
// console.log(productAVG(reviews))
  
  