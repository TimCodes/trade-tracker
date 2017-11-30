'use strict';

const globalHooks = require('../../../hooks');
const path = require('path')
console.log(path.join(__dirname, '../../utils/imageService'))
const hooks = require('feathers-hooks');
const ImageService = require('../../../utils/imageService')
const Jimp = require("jimp")
const dauria = require('dauria')
exports.before = {
  all: [],
  find: [],
  get: [],
  create: (hook) => {
    //console.log(hook.data)
    let imageURI = hook.data.chartData
    let uriObj = {
      uri : imageURI
    }
    let dUri = dauria.parseDataURI(imageURI)
    return Jimp.read(dUri.buffer)
    .then( image => { 
      console.log(Object.keys(image))
      return image.resize(500, 250)
    })
    .then(rImage => {
        let bufferPromise = new Promise( (resolve, reject)  => {
          rImage.getBuffer(Jimp.MIME_PNG, (err, res)=>{
            if(err) reject(err);
            resolve(res);
          })
      });
      return bufferPromise
    })
    .then( b =>{
      return dauria.getBase64DataURI(b, Jimp.MIME_PNG)
    })
    .then(duri =>{
      //console.log('.... d uri ...', duri)
      uriObj.uri = duri
      hook.data.chartUri = duri
      return hook;
    })
    .catch(console.log) 
   
  },
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: (hook) => { 
    console.log('... after ....', hook.data)
  } ,
  update: [],
  patch: [],
  remove: []
};
