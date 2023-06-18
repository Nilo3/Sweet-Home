export const productAVG = (reviews) => {
    const ratingTotals = {};
    const ratingCounts = {};
    const productAVGArray = [];
  
    reviews.forEach((review) => {
      const productId = review.product;
      const rating = review.rating;
  
      if (!ratingTotals[productId]) {
        ratingTotals[productId] = 0;
        ratingCounts[productId] = 0;
      }
  
      ratingTotals[productId] += rating;
      ratingCounts[productId] += 1;
    });
  
    for (const productId in ratingTotals) {
      const ratingTotal = ratingTotals[productId];
      const ratingCount = ratingCounts[productId];
      const ratingAvg = ratingTotal / ratingCount;
  
      productAVGArray.push({
        product: productId,
        ratingAvg: ratingAvg
      });
    }
  
    productAVGArray.sort((a, b) => b.ratingAvg - a.ratingAvg);
  
    return productAVGArray;
  };
  
  // ...
  
  
  