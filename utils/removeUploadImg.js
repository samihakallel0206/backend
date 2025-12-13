const fs = require("fs");

const removeUploadImg = (file) => {
  if (!file || !filePath) return;
  fs.unlink(file.path, (err) => {
    if (err && err.code !== "ENOENT") {
      console.log("Failed To remove uploadFile", err.message);
    }
  });
};

module.exports = removeUploadImg