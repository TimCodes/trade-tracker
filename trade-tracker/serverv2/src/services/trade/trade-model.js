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
  strategy: { type: String, required: true },
  quantity: { type: Number, required: true }, 
  status: { type: String, 'default': "stalking" },
  type: { type: String },
  screenShot: { type: String },
  notes: { type: String},
  openPrice: { type: Number, required: true }, 
  closePrice: { type: Number, required: true }, 
  stopLoss: { type: Number, required: true }, 
  takeProfit: { type: Number, required: true }, 
  pnl: { type: Number, required: true }, 
  duration: { type: String},
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
  closedAt: { type: Date }
  
});

const tradeModel = mongoose.model('trade', tradeSchema);

module.exports = tradeModel;