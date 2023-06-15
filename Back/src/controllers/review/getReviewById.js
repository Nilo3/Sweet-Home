import Review from "../../models/schemas/reviews.js";

export default async (req, res) => {
    const { reviewId } = req.params
    try {
        const reviews = await Review
            .find({ _id : reviewId })
            .populate("createdBy")
            .populate("product")
        if (reviews.length === 0) {
            return res.status(500).json({ message: "There's no reviews for this product" })
        }
        return res.status(200).json(reviews)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}