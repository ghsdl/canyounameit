import './Paragraph.scss';
import { IParagraphProps } from '../../interfaces';

const Paragraph = ({ label, className }: IParagraphProps) => {
  return <p className={`paragraph ${className} `}>{label}</p>;
};

export default Paragraph;
