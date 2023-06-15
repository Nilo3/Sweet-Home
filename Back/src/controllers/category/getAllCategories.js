import { getAllCategories } from "./categoryController.js";

export default async (req, res) => {
    try {
        const categories = await getAllCategories()
        return res.status(200).json(categories)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
};