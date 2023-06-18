

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

//   const reviews = [{"_id":"648d015806921c24d54793b2","rating":5,"createdBy":"648a2c3a59056bfa074393e9","product":"648c07ea49938d2aef4e5292"},{"_id":"648d019f06921c24d54793b9","rating":5,"createdBy":"648a33d7c87102e8b9b681e6","product":"648c07ea49938d2aef4e5292"},{"_id":"648d021906921c24d54793c1","rating":5,"createdBy":"648a4a4c2c0b29a89b108270","product":"648c07ea49938d2aef4e5298"},{"_id":"648d024d06921c24d54793cb","rating":2,"createdBy":"648a4a4c2c0b29a89b108270","product":"648c07ea49938d2aef4e52b7"},{"_id":"648d026f06921c24d54793cf","rating":2,"createdBy":"648a4a4c2c0b29a89b108270","product":"648c07ea49938d2aef4e52b5"},{"_id":"648d02a006921c24d54793d4","rating":2,"createdBy":"648a4b598162867c59eef5c8","product":"648c07ea49938d2aef4e5293"},{"_id":"648d02c606921c24d54793d9","rating":1,"createdBy":"648a4b598162867c59eef5c8","product":"648c07ea49938d2aef4e5297"},{"_id":"648e2079c4f09f6b209dcec2","rating":1,"createdBy":"648a4b598162867c59eef5c8","product":"648c07ea49938d2aef4e52b7"},{"_id":"648e2091c4f09f6b209dcec8","rating":3,"createdBy":"648a4b598162867c59eef5c8","product":"648c07ea49938d2aef4e52b7"},{"_id":"648e2128c4f09f6b209dcecd","rating":2,"createdBy":"648a4b598162867c59eef5c8","product":"648c07ea49938d2aef4e5298"},{"_id":"648e219bc4f09f6b209dced2","rating":3,"createdBy":"648a4b598162867c59eef5c8","product":"648c07ea49938d2aef4e52b5"},{"_id":"648e21b6c4f09f6b209dced7","rating":4,"createdBy":"648a4b598162867c59eef5c8","product":"648c07ea49938d2aef4e5293"},{"_id":"648e21bfc4f09f6b209dcedb","rating":4,"createdBy":"648a4b598162867c59eef5c8","product":"648c07ea49938d2aef4e5297"}]
  
// console.log(productAVG(reviews))
  
  