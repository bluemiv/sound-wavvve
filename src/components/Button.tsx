'use client';

import { TPropsWithBasic } from '@/types';
import classnames from 'classnames';

interface TProps {
  type?: 'solid';
  onClick?: () => void;
}

export default function Button({
  type = 'solid',
  onClick,
  children,
  className,
}: TPropsWithBasic<TProps>) {
  return (
    <button
      onClick={onClick}
      className={classnames(
        className,
        'px-md py-sm rounded',
        type === 'solid'
          ? 'text-white bg-primary hover:bg-primary-hover active:bg-primary-active'
          : '',
      )}
    >
      {children}
    </button>
  );
}
