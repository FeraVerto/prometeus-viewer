import { IConvertedDataItem } from '../types';

export const convertData = (data: string) => {
  //const dataSplit = data.split('#').map((m) => m.trim().split(' '));
  const dataSplit = data.trim().split('#');

  let mainResult = dataSplit.reduce((acc, element, index) => {
    const item = element.trim();

    //Выводим всё, что в фигурных скобках
    const lable = item.match(/[^{\}]+(?=})/g)?.join(' ') ?? '';

    //const histogramType = ['_bucket', '_count', '_sum'];

    //достаем из строки name
    let lastIndexDataName = 0;
    for (let i = 7; i < item.length; i++) {
      if (item[i] !== ' ') {
        lastIndexDataName = i;
      } else {
        break;
      }
    }
    const name = item.substring(6, lastIndexDataName + 1).trim();

    const description = item.includes('HELP')
      ? item.split(' ').slice(4).join(' ')
      : '';

    const typeList = ['counter', 'gauge', 'histogram'];
    const type = typeList.find((type) => item.includes(type) && type) ?? '';

    const value = (/\d+/.exec(item) ?? [])[0] ?? '';

    return [
      ...acc,
      {
        key: index.toString(),
        name: name,
        type: type,
        lable: lable,
        description: description,
        value: value,
      },
    ];
  }, [] as IConvertedDataItem[]);
  return mainResult;
};
