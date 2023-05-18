import React from 'react';
import PropTypes from 'prop-types';
import {
  FcLike,
  FcLikePlaceholder,
  FcDislike,
  FcAddDatabase,
  FcBullish,
} from 'react-icons/fc';
import Notification from '../Notification/Notification';
import css from './Statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) => {
  return total ? (
    <ul className={css.stat__list}>
      <li className={css.stat__item}>
        <p className={css.stat__name}>
          <FcLike className={css.list__icon} />
          Good: <span className={css.stat__value}>{good}</span>
        </p>
      </li>
      <li className={css.stat__item}>
        <p className={css.stat__name}>
          <FcLikePlaceholder className={css.list__icon} />
          Neutral: <span className={css.stat__value}>{neutral}</span>
        </p>
      </li>
      <li className={css.stat__item}>
        <p className={css.stat__name}>
          <FcDislike className={css.list__icon} />
          Bad: <span className={css.stat__value}>{bad}</span>
        </p>
      </li>
      <li className={css.stat__item}>
        <p className={css.stat__name}>
          <FcAddDatabase className={css.list__icon} />
          Total: <span className={css.stat__value}>{total}</span>
        </p>
      </li>
      <li className={css.stat__item}>
        <p className={css.stat__name}>
          <FcBullish className={css.list__icon} />
          Positive feedback:{' '}
          <span className={css.stat__value}>{positivePercentage || 0}%</span>
        </p>
      </li>
    </ul>
  ) : (
    <Notification
      message="There is no feedback"
      className="Statistics__message"
    />
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
