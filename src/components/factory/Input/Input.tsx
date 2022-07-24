import './Input.scss';
import IconSearch from '../../factory/Icon/IconSearch/IconSearch';

interface IInputProps {
  type: 'search';
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = ({
  type,
  value,
  placeholder,
  onChange,
  className
}: IInputProps) => {
  return (
    <div className={`input ${className}`}>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="input__input"
      />
      <IconSearch className="input__icon" />
    </div>
  );
};

export default Input;
