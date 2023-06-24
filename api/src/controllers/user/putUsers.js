import User from "../../models/schemas/user.js"

const putUsers = async (req, res) => {
    const { usersId } = req.params;
    const { name, lastName, email, password, isAdmin } = req.body;

    console.log(usersId);
    try {
        const users = await User.findByIdAndUpdate({ _id: usersId },
            {
                $set: {
                    name,
                    lastName,
                    email,
                    password,
                    isAdmin
                }
                //en profile tengo name, lastname, email, password  y foto
                
            }, { new: true });
        res.status(200).json(users)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}

export default putUsers