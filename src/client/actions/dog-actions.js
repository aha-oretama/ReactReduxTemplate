/**
 * @author aha-oretama
 * @Date 2016/11/13.
 */
import { createAction } from  'redux-actions';

export const MAKE_BARK = 'MAKE_BARK';

export const makeBark = createAction(MAKE_BARK, () => true);
