import Review from "../../models/schemas/reviews.js";

export const getReviewById = async (id) => {
    try {
        const reviews = await Review.findById(id)
        return reviews
    } catch (error) {
        console.log(error);
    }
}

export const getAllReviews = async () => {
    try {
        const reviews = await Review.find()
        return reviews
    } catch (error) {
        console.log(error);
    }
}

export const getReviewsPerProduct = async (productId) => {
    try {
        const reviewList = await Review.find({ product: productId })
        return reviewList
    } catch (error) {
        console.log(error);
    }
}

export const deleteReview = async (id) => {
    try {
        const review = await Review.deleteOne({ _id: id})
    } catch (error) {
        console.log(error);
    }
}