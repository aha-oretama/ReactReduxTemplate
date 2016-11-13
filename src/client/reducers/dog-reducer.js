/**
 * @author aha-oretama
 * @Date 2016/11/13.
 */
import { MAKE_BARK } from '../actions/dog-actions';

const initialState = Immutable.Map({
    hasBarked: false,
});

const dogReducer = (state = initialState, action) => {
    switch (action.type) {
        case MAKE_BARK:
            return state.set('hasBarked', action.payload);
        default:
            return state;
    }
};

export default dogReducer;