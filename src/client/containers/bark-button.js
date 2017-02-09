/**
 * @author aha-oretama
 * @Date 2016/11/13.
 */
import { connect } from 'react-redux';
import Button from '../components/button';
import { makeBark } from '../actions/dog-actions';

const mapDispatchToProps = dispatch => ({
  action: () => {
    dispatch(makeBark());
  },
  actionLabel: 'Bark',
});

export default connect(null, mapDispatchToProps)(Button);
