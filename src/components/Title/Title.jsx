import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

const Title = ({ title }) => {
  return <h2 className="Section__title">{title}</h2>;
};

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
