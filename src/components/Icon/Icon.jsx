import React from 'react';
import './Icon.scss';
import { TbZoomCheck } from 'react-icons/tb';
import { RiTwitterLine, RiGithubLine, RiLinkedinBoxLine } from 'react-icons/ri';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { BiSearchAlt } from 'react-icons/bi';

const Icon = ({ icon, onClick, className }) => {
  return (
    <div className={`icon ${className}`} onClick={onClick}>
      {icon === 'CHECK' ? (
        <TbZoomCheck />
      ) : icon === 'TWITTER' ? (
        <RiTwitterLine />
      ) : icon === 'LINKEDIN' ? (
        <RiLinkedinBoxLine />
      ) : icon === 'GITHUB' ? (
        <RiGithubLine />
      ) : icon === 'ARROW_DOWN' ? (
        <FaAngleDown />
      ) : icon === 'SEARCH' ? (
        <BiSearchAlt />
      ) : icon === 'ARROW_UP' ? (
        <FaAngleUp />
      ) : null}
    </div>
  );
};

export default Icon;
