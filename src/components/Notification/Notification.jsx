import React from 'react';
import PropTypes from 'prop-types';
import css from './Notification.module.css';

const Notification = ({ message }) => (
  <span className={css.value}>{message}</span>
);

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
