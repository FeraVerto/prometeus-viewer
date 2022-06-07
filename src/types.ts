import { ReactNode } from 'react';

export interface IConvertedDataItem {
  key: string;
  name: string;
  type: string;
  lable: ReactNode;
  description: string;
  value: number | string;
}
