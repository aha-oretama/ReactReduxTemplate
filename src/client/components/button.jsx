// @flow

/**
 * @author aha-oretama
 * @Date 2016/11/13.
 */
import React, {PropTypes} from 'react';

const Button = ({action, actionLabel}: {action: Function, actionLabel: string}) =>
  <button onClick={action}>{actionLabel}</button>;

Button.propTypes = {
  action: PropTypes.func.isRequired,
  actionLabel: PropTypes.string.isRequired,
};

export default Button;
