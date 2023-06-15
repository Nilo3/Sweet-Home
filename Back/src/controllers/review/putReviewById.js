import Review from "../../models/schemas/reviews.js";
import User from "../../models/schemas/user.js";

export default async (req, res) => {
    try {
        const { reviewId } = req.params;
        const { userId } = req.headers;
        const { rating } = req.body;

        if (!rating || !reviewId) {
            return res.status(400).json({ message: "Missing data" });
        }

        const reviewToModify = await Review.findById(reviewId).populate("createdBy");

        if (!reviewToModify) {
            return res.status(400).json({ message: "That review doesn't exist" });
        }

        // const verify = await User.findById(userId);
        // if (verify._id.toString() !== reviewToModify.createdBy._id.toString()) {

        //     return res.status(400).json({ message: "You can't modify this review" });
        // }

        const updatedReview = await Review.updateOne(
            { _id: reviewId },
            { $set: { rating } },
            { new: true }
        );

        return res.status(200).json(updatedReview);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
