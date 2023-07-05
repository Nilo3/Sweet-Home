import User from "../../models/schemas/user.js";

export default async (req, res) => {
  try {
    const { userUid } = req.params;

    const user = await User.findOne({ uid: userUid }).populate("favorites");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const favorites = user.favorites;

    return res.status(200).json(favorites);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
