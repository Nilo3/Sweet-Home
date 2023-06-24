export const validate = (name, value) => {
    let error = "";

    switch (name) {
        case "name":
            if (!value.trim()) {
                error = "El nombre de la raza es obligatorio";
            }
            break;
        default:
            break;
    }

    return error;
};