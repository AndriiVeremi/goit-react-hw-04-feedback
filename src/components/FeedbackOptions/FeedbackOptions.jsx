import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onFeedback }) => {
  return (
    <ul className={css.list}>
      {options.map(option => {
        return (
          <li key={option} className={css.item}>
            <button
              key={option}
              type="button"
              value={option}
              onClick={() => onFeedback(option)}
              className={css.btn}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: arrayOf(PropTypes.string.isRequired),
  onFeedback: PropTypes.func.isRequired,
};
