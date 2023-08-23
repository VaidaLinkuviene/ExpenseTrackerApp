import express from 'express';
import {getAllIncomes, getIncomes, sendIncomes, deleteIncomes, updateIncomes} from '../controller/IncomesController.js';
const router = express.Router();

router.get('/', getAllIncomes);
router.get('/:id', getIncomes);
router.post('/sendData', sendIncomes);
router.delete("/:id", deleteIncomes);
router.put('/:id', updateIncomes)

export default router;
