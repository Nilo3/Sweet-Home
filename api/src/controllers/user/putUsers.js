import User from "../../models/schemas/user.js"

const putUsers = async (req, res) => {
    const usersId  = req.params;
    const { name, photoURL, email, password, isAdmin, isDelete } = req.body;

    
    try {
        const users = await User.findByIdAndUpdate(usersId.id,
            {
                $set: {
                    name,
                    photoURL,
                    email,
                    password,
                    isAdmin,
                    isDelete
                }
            }, { new: true });
        res.status(200).json(users)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}

export default putUsers