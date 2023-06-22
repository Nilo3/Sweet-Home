import Category from "../../models/schemas/category.js";

export default async (req, res) => {
    const { name } = req.body;

    const allowedCategories = [
        "Furniture",
        "Lighting",
        "Curtains and Blinds",
        "Rugs and Carpets",
        "Bedding",
        "Cushions and Pillows",
        "Home Decor",
        "Organization",
        "Bathroom Accessories",
        "Wall Art",
        "Garden and Outdoor",
      ];
      

    try {
        if (allowedCategories.includes(name)) {
            const category = await Category.create({ name });
            res.status(200).send(category);
        } else {
            return res.status(404).send({
                message: "The category is not valid.",
            });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};