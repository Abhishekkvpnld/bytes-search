import { Product } from "../models/productModel.js";

export const searchProduct = async (req, res) => {
  try {
    const {
      query,
      category,
      minPrice,
      maxPrice,
      page = 1,
      limit = 10,
    } = req.query;

    const pageNumber = parseInt(page, 10) || 1;
    const pageSize = parseInt(limit, 10) || 10;
    const skip = (pageNumber - 1) * pageSize;

    let filter = {};

    if (query) {
      filter.$or = [
        { title: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ];
    }

    if (category) {
      filter.category = category;
    }

    if (minPrice && !isNaN(parseFloat(minPrice))) {
      filter.price = { ...filter.price, $gte: parseFloat(minPrice) };
    }

    if (maxPrice && !isNaN(parseFloat(maxPrice))) {
      filter.price = { ...filter.price, $lte: parseFloat(maxPrice) };
    }

    const products = await Product.find(filter)
      .sort({ order: 1 })
      .skip(skip)
      .limit(pageSize);

    const totalProducts = await Product.countDocuments(filter);

    res.status(200).json({
      success: true,
      totalProducts,
      totalPages: Math.ceil(totalProducts / pageSize),
      currentPage: pageNumber,
      products,
    });
  } catch (error) {
    console.error("Error searching products:", error);

    if (error instanceof mongoose.Error.CastError) {
      return res.status(400).json({
        success: false,
        message: "Invalid query parameter format",
      });
    }

    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
