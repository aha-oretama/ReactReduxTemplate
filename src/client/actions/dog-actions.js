/**
 * @author aha-oretama
 * @Date 2016/11/13.
 */
export const MAKE_BARK = 'MAKE_BARK';

export const makeBark = () => ({
    type: MAKE_BARK,
    payload: true,
});
