'use strict';

// trade-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tradeSchema = new Schema({

  symbol: { type: String, required: true },
  timeFrame: { type: String, required: true },
  strategy: { type: String },
  quantity: { type: Number}, 
  status: { type: String, 'default': "Tracking" },
  setup: { type: String },
  side: { type: String }, 
  timeOfDay: { type: String },
  DateTime: { type : Date},
  rr: { type: String },
  screenShot: { type: String },
  notes: { type: String},
  openPrice: { type: Number}, 
  closePrice: { type: Number }, 
  stopLoss: { type: Number }, 
  takeProfit: { type: Number }, 
  pnl: { type: Number }, 
  result: {type:String},
  tags: {type:Array},
  duration: { type: String},
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
  closedAt: { type: Date },
  chartUri: { type: String},

  
});

const tradeModel = mongoose.model('trade', tradeSchema);

module.exports = tradeModel;