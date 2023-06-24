const {
    getAllProducts,
    addNewProduct,
    updateProduct,
    deleteProduct
} = require('../../controllers/products');

const {
    getAllCategories,
    addNewCategory,
    updateCategory,
    deleteCategory
} = require('../../controllers/categories');

const {
    getAllRatingsAndReviews,
    addNewRatingAndReview,
    getRatingAndReviewById,
    getRatingAndReviewByProductId
} = require('../../controllers/ratingsAndReviews');

module.exports = (router) => {
    // GET: list of all the products
    router.get('/products', getAllProducts)

    // POST: a new product
    router.post('/products/new', addNewProduct)

    // PUT: update a product by id
    router.put('/products/:id', updateProduct)

    // DELETE: delete a product by id
    router.delete('/products/:id', deleteProduct)

    // GET: list of all the categories
    router.get('/products/categories', getAllCategories)

    // POST: a new category
    router.post('/products/categories/new', addNewCategory)

    // PUT: update a category by id
    router.put('/products/categories/:id', updateCategory)

    // DELETE: delete a category by id
    router.delete('/products/categories/:id', deleteCategory)

    // GET: list of all the ratings and reviews
    router.get('/products/ratingsAndReviews', getAllRatingsAndReviews)

    // POST: a new rating and review
    router.post('/products/ratingsAndReviews/new', addNewRatingAndReview)

    // GET: a rating and review by id
    router.get('/ratingsAndReviews/:id', getRatingAndReviewById)

    // GET: a rating and review by product id
    router.get('/ratingsAndReviews/product/:id', getRatingAndReviewByProductId)
}