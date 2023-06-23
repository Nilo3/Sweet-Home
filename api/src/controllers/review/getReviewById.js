import Review from "../../models/schemas/reviews.js";

export default async (req, res) => {
    const { reviewId } = req.params;
    try {
        let review;
        review = await Review.findOne({ _id: reviewId }, {
            rating: 1,
            createdBy: 1,
            product: 1,
        })
            .populate("createdBy", "_id")
            .populate("product");

        if (!review) {
            return res.status(404).json({ message: "Review not found" });
        }

        return res.status(200).json(review);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
