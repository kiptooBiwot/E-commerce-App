const multer = require("multer");
const createError = require("http-errors");
const path = require("path");

const multerConfig = {
  storage: multer.diskStorage({
    destination: function (req, file, next) {
      next(null, './public/images')
    },
    filename: function (req, file, next) {
      next(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  }),
  fileFilter: function (req, file, next) {
    if (file == undefined) {
      return next(createError("Please add an image"));
    }

    //Allowed extensions
    const filetypes = /jpeg|jpg|png|gif/;
    // check extension
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    // check Mimetype
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return next(null, true);
    } else {
      // console.log(err)
      next(createError("Error: Upload image files ONLY!"));
    }
  }
};

module.exports = multerConfig