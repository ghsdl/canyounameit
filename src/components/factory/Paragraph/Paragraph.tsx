import './Paragraph.scss';

interface IParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph = ({ children, className }: IParagraphProps) => {
  return <p className={`paragraph ${className} `}>{children}</p>;
};

export default Paragraph;
