const Product = require("../models/product");

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 }); // sort by the latest product
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const addNewProduct = async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const product = await newProduct.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            product.name = req.body.name || product.name;
            product.description = req.body.description || product.description;
            product.price = req.body.price || product.price;
            product.category = req.body.category || product.category;
            product.images = req.body.images || product.images;
            product.brand = req.body.brand || product.brand;
            product.quantity = req.body.quantity || product.quantity;
            product.variants = req.body.variants || product.variants;
            product.availability = req.body.availability || product.availability;
            product.specialOffers = req.body.specialOffers || product.specialOffers;
            product.specifications = req.body.specifications || product.specifications;
            product.additionalInformation = req.body.additionalInformation || product.additionalInformation;
            product.sku = req.body.sku || product.sku;

            const updatedProduct = await product.save();
            res.status(200).json(updatedProduct);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            await product.remove();
            res.status(200).json({ message: 'Product deleted successfully' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    addNewProduct,
    updateProduct,
    deleteProduct,
}
