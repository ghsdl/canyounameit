import './Icon.scss';
import { IIconProps } from '../../interfaces';
import { TbZoomCheck } from 'react-icons/tb';
import { RiTwitterLine, RiGithubLine, RiLinkedinBoxLine } from 'react-icons/ri';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { BiSearchAlt } from 'react-icons/bi';
import { GiMoonBats } from 'react-icons/gi';
import { WiDayLightWind } from 'react-icons/wi';

const Icon = ({ icon, onClick, className }: IIconProps) => {
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
      ) : icon === 'MOON' ? (
        <GiMoonBats />
      ) : icon === 'SUN' ? (
        <WiDayLightWind />
      ) : null}
    </div>
  );
};

export default Icon;
