import express from 'express'
import { registerController,forgotPasswordController, getAllOrdersController, orderStatusController} from '../controllers/authControllers.js'
import { loginController,testController } from '../controllers/authControllers.js'
import { isAdmin, requireSingnIn } from '../Middlewares/authMiddleware.js'
import { updateProfileController } from './../controllers/authControllers.js';



const router = express.Router()

router.post('/register', registerController)
router.post('/Login', loginController)
router.post("/forgot-password", forgotPasswordController);
router.get('/test',requireSingnIn, isAdmin, testController)
router.get('/user-auth', requireSingnIn, (req,res)=>{
    res.status(200).send({ok:true})
})
router.get('/admin-auth', requireSingnIn,isAdmin, (req,res)=>{
    res.status(200).send({ok:true})
})

router.put("/profile", requireSingnIn, updateProfileController);

router.get("/orders", requireSingnIn, getAllOrdersController);
router.get("/all-orders", requireSingnIn, isAdmin, getAllOrdersController);
router.put( "/order-status/:orderId",requireSingnIn,isAdmin,orderStatusController);
export default router