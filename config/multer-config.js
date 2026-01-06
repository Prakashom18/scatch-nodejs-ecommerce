const multer = require("multer");

// MEMORY STORAGE
const storage = multer.memoryStorage();
const upload = multer({storage:storage});


module.exports = upload;