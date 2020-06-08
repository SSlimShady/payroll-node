const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Employee Schema
const EmpSchema = new Schema({
    name: {
      type: String,
      required: true  
    },
    rate: {
      type: Number,
      required: true,
      default: 0
    },
    Jan:{
        hours:{
          type: Number,
          default: 0
        },
        variation:{
          type: Number,
          default: 0
        }
    },
    Feb:{
        hours:{
          type: Number,
          default: 0
        },
        variation:{
          type: Number,
          default: 0
        }
    },
    Mar:{
        hours:{
          type: Number,
          default: 0
        },
        variation:{
          type: Number,
          default: 0
        }
    }
});

module.exports = Employee = mongoose.model('employee',EmpSchema);