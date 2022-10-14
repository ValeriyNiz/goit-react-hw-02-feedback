import React from 'react';
import PropTypes from 'prop-types';

const Section = props => {
  return (
    <section>
      <h2 className="statistics">{props.title}</h2>
      {props.children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
