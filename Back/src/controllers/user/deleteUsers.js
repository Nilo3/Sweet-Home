import User from "../../models/schemas/user.js";
import Review from "../../models/schemas/reviews.js";

export default async (req, res) => {
  try {
    const { id } = req.params;
    const { userid } = req.headers;
    const user = await User.findById(id);
    const userAux = await User.findById(userid);
    if (!user)
      return res.status(400).json({ message: "El usuario que quieres eliminar no existe" });
    if (user.email !== userAux.email)
      return res.status(400).json({ message: "No puedes eliminar otro usuario!" });

    try {
      await Review.deleteMany({ createdBy: id });

      // Elimino el usuario
      await User.findByIdAndDelete(id);

      res.json({ message: "Usuario eliminado con éxito." });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
