import { ReactNode } from 'react';

export type TPropsWithClassName<T = unknown> = T & { className?: string };

export type TPropsWithChildren<T = unknown> = T & { children?: ReactNode };

export type TPropsWithBasic<T = unknown> = T & TPropsWithClassName<T> & TPropsWithChildren<T>;
