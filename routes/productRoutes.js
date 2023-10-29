import express from 'express'
import { isAdmin, requireSingnIn } from '../Middlewares/authMiddleware.js'

import ExpressFormidable from 'express-formidable'
import { brainTreePaymentController, createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, realtedProductController, searchProductController, updateProductController } from '../controllers/productController.js'
import { braintreeTokenController } from './../controllers/productController.js';



const router = express.Router()

router.post('/create-product', requireSingnIn, isAdmin,ExpressFormidable(), createProductController)
router.put("/update-product/:pid", requireSingnIn, isAdmin,ExpressFormidable(), updateProductController)
router.get('/get-product',getProductController)
router.get('/get-product/:slug', getSingleProductController)
router.get('/product-photo/:pid',productPhotoController)
router.delete('/delete-product/:pid', deleteProductController)
router.post('/product-filters', productFiltersController)
router.get('/product-count', productCountController)
router.get("/product-list/:page", productListController);
router.get("/search/:keyword", searchProductController);
router.get("/related-product/:pid/:cid", realtedProductController);
router.get("/product-category/:slug", productCategoryController);
//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSingnIn, brainTreePaymentController);
export default router