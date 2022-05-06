import { IConvertedDataItem } from '../types';

export const convertData = (data: string) => {
  const result = data.split('#').map((m) => m.trim().split(' '));
  console.log('result', result);
  // let reg = new RegExp('{%X%}');
  // reg.Matches('da_fetch_customer_data_total{source="fdb",outcome="cancel"} ');

  let mainResult = result.reduce((acc, item, index) => {
    return [
      ...acc,
      {
        key: index.toString(),
        name: item[1],
        type: item[2],
        lable: 'lable',
        description: item[0],
        value: 'value',
      },
    ];
  }, [] as IConvertedDataItem[]);
  return mainResult;
};
