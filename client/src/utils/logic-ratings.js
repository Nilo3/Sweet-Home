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
        _id: productId,
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

