import mongoose from 'mongoose';

const ImagesSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Images', ImagesSchema);
