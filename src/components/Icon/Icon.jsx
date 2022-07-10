import React from 'react';
import './Icon.scss';
import { TbZoomCheck } from 'react-icons/tb';

const Icon = ({ icon, onClick, className }) => {
  return (
    <div className={`icon ${className}`} onClick={onClick}>
      {icon === 'CHECK' ? <TbZoomCheck /> : null}
    </div>
  );
};

export default Icon;
