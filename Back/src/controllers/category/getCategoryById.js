import { getCategoryId } from "./categoryController.js";

export default async (req, res) => {
  const { categoryId } = req.params;
  try {
    const category = await getCategoryId(categoryId);
    category ? res.status(200).send(category) : res.sendStatus(404);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};