import { Router } from 'express';
import { createLink } from './linkController'

const router: Router = Router();

router.post('/', createLink);

export default router;
