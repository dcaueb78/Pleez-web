import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true,
  },
  restaurant_id: {
    type: Number,
    required: true,
  },
  status: {
    type: Number,
    required: true,
    default: 0,
  },
  total_price: {
    type: Number,
    required: true,
  },
  is_available: {
    type: Boolean,
    required: true,
    default: true,
  },
  comment: {
    type: String,
    required: true,
  },
  dish: {
    type: [Number],
    required: true,
  }
}, {
  timestamps: true,
});

export default mongoose.model('Order', OrderSchema);
