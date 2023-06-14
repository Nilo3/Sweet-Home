import Category from "../../models/schemas/category.js";

export const getAllCategories = async () => {
    const categories = Category.find({});
    return categories;
}

export const getCategoryId = async (id) => {
    try {
        let categoriesById = await Category.findById(id);
        return categoriesById;
    } catch (error) {
        console.log(error);
    }
}

