import Review from "../../models/schemas/reviews.js";

export default async (req, res) => {
    try {
        const reviews = await Review.find({}, { createdBy: 1, product: 1, rating: 1});
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
