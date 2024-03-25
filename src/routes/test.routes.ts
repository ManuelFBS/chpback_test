import { Router } from 'express';
import { testController } from '../controllers/test/test.controller';

const router: Router = Router();

router.get('/', testController);

export default router;
