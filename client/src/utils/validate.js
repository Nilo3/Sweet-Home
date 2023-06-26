export const validate = (name, value) => {
    let error = "";

    switch (name) {
        case "name":
            if (!value.trim()) {
                error = "";
            }
            break;
        default:
            break;
    }

    return error;
};