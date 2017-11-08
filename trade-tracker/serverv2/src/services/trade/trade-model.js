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
  status: { type: String, 'default': "stalking" },
  setup: { type: String },
  timeOfDay: { type: String },
  rr: { type: String },
  screenShot: { type: String },
  notes: { type: String},
  openPrice: { type: Number}, 
  closePrice: { type: Number }, 
  stopLoss: { type: Number }, 
  takeProfit: { type: Number }, 
  pnl: { type: Number }, 
  duration: { type: String},
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
  closedAt: { type: Date },
  any: Schema.Types.Mixed 
  
});

const tradeModel = mongoose.model('trade', tradeSchema);

module.exports = tradeModel;