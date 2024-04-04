'use client';

import dayjs from 'dayjs';
import { DATE_FORMAT } from '@/constants';

export default function Copyright() {
  return (
    <span className="text-sm">
      © {process.env.NEXT_PUBLIC_AUTHOR} {dayjs().format(DATE_FORMAT.YEAR)}. All Rights Reserved.
    </span>
  );
}
