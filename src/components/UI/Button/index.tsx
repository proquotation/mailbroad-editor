import { classnames } from '@/utils/classnames';
import React from 'react';
import './index.scss';

export interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  title?: string;
  noBorder?: boolean;
  onClick?: React.DOMAttributes<HTMLButtonElement>['onClick'];
}
export const Button: React.FC<ButtonProps> = props => {
  return (
    <button
      onClick={props.onClick}
      className={classnames(
        'mailbroad-editor-button',
        props.noBorder && 'mailbroad-editor-noBorder',
      )}
      title={props.title}
      disabled={props.disabled}
      type='button'
    >
      <>{props.children}</>
    </button>
  );
};
