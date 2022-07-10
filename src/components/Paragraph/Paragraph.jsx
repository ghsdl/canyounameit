import React from 'react';
import './Paragraph.scss';

const Paragraph = ({ label, className }) => {
  return <p className={`paragraph ${className} `}>{label}</p>;
};

export default Paragraph;
