'use strict';
const blobService = require('feathers-blob');
const fs = require('fs-blob-store');
const path = require("path")

const uPath = path.join(__dirname, "/../uploads/images")

console.log('.... u path .....', uPath)

const blobStorage = fs(uPath);
const imageBlobService = blobService({Model: blobStorage})

module.exports = imageBlobService;
