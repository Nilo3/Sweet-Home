import User from "../../models/schemas/user.js";



export default async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email })
    console.log(user);
    
    if (!user) {
      return res.status(404).json({ message: "User with this email not found" });
    }

    res.status(200).json(user);
  } catch (error) {
   
    return res.status(500).json({ message: error.message });
  }
};
