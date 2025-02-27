import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  merchantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Merchant",
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: [
    {
      url: { type: String, required: true },
      order: { type: Number, required: true },
    },
  ],
  discount: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

export const Product = mongoose.model("Product", productSchema);


