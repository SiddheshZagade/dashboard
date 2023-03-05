import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  end_year: {
    type: Number,
    default: null
  },
  intensity: {
    type: Number,
    
  },
  sector: {
    type: String,
    
  },
  topic: {
    type: String,
    
  },
  insight: {
    type: String,
    
  },
  url: {
    type: String,
    
  },
  region: {
    type: String,
    default: null
  },
  start_year: {
    type: Number,
    default: null
  },
  impact: {
    type: String,
    default: null
  },
  added: {
    type: Date,
   
    default: Date.now
  },
  published: {
    type: Date,
    
    default: Date.now
  },
  country: {
    type: String,
    default: null
  },
  relevance: {
    type: Number,
   
    default: 0
  },
  pestle: {
    type: String,
    
  },
  source: {
    type: String,
    
  },
  title: {
    type: String,
    
  },
  likelihood: {
    type: Number,
    
  }
});

const User = mongoose.model("User", UserSchema);
export default User;
