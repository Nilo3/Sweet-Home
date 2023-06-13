const express = require("express");
const router = express.Router();
const fs = require("fs");

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
  return fileName.split(".").shift();
};

fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtension(file);
  if (name !== "index") {
    console.log(`Cargando ruta: ${name}`);
    const middleware = require(`./${file}`);
    if (typeof middleware === "function") {
      router.use(`/${name}`, middleware);
    } else {
      console.log(`Error: ${file} no es un módulo de middleware válido.`);
    }
  }
});

module.exports = router;
