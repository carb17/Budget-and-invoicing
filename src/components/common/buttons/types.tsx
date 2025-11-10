import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ReactNode } from 'react';

export interface ButtonProps {
  text?: string;
  link?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  icon?: IconProp;
  className?: string;
  children?: ReactNode;
}
