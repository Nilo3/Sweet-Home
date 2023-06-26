export const detailAVG = (product) => {
  const reviews = product.review;
  if (!reviews || reviews.length === 0) {
    return 0; 
  }

  const totalRatings = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = totalRatings / reviews.length;

  return averageRating;
}