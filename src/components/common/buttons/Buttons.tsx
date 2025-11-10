import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonProps } from './types';
import { Link } from 'react-router-dom';

export const Button = ({
  text,
  link,
  onClick,
  type = 'button',
  icon,
  className,
  children,
  ...rest
}: ButtonProps) => {
  const content = (
    <>
      {icon && <FontAwesomeIcon icon={icon} className='me-2' />}
      {text}
      {children}
    </>
  );

  return link ? (
    <Link to={link} className={className} {...rest}>
      {content}
    </Link>
  ) : (
    <button className={className} type={type} onClick={onClick} {...rest}>
      {content}
    </button>
  );
};

export const ButtonSubmit = ({ text = 'Submit' }: { text?: string }) => {
  return <Button text={text} type='submit' />;
};
