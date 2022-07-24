import './Paragraph.scss';
import { IParagraphProps } from '../../interfaces';

const Paragraph = ({ children, className }: IParagraphProps) => {
  return <p className={`paragraph ${className} `}>{children}</p>;
};

export default Paragraph;
