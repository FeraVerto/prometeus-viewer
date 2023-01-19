import { IConvertedDataItem } from '../types';
import { shuffle } from './shuffle';
import { colors } from './../constants/constants';

const descriptions = {} as any;

export const convertData = (data: string) => {
  const dataSplit = data.trim().split('#');

  let mainResult = dataSplit.reduce((acc, element, index) => {
    if (index === 0) {
      return [];
    }
    const item = element.trim();

    let shuffledColors = shuffle(colors);
    let lable;
    lable = item.match(/[^{\}]+(?=})/g)?.map((item, index) => {
      return (
        <span
          key={index}
          style={{
            //здесь баг
            color: shuffledColors[index],
          }}
        >
          {index !== 0 ? <br /> : <></>}

          {item.split(',').map((item) => (
            <span>
              {index !== 0 ? <br /> : <></>} {item}
            </span>
          ))}
        </span>
      );
    });

    //const histogramType = ['_bucket', '_count', '_sum'];

    //достаем из строки name
    let lastIndexDataName = 0;
    for (let i = 5; i < item.length; i++) {
      if (item[i] !== ' ') {
        lastIndexDataName = i;
      } else {
        break;
      }
    }
    const name = item.substring(5, lastIndexDataName + 1).trim();

    const description = item.includes('HELP')
      ? item.split(' ').slice(4).join(' ')
      : '';

    const descriptionKey = (index + 1).toString();

    if (description) {
      descriptions[descriptionKey as string] = description;
    }

    const typeList = ['counter', 'gauge', 'histogram', 'summary'];
    const type = typeList.find((type) => item.includes(type) && type) ?? '';

    const value = (/\d+/.exec(item) ?? [])[0] ?? '';

    return item.includes('HELP') || !lable
      ? [...acc]
      : [
          ...acc,
          {
            key: index.toString(),
            name: name,
            type: type,
            lable: lable,
            description: descriptions[index],
            value: value,
          },
        ];
  }, [] as IConvertedDataItem[]);

  return mainResult;
};
