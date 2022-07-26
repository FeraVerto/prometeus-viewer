import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { convertData } from '../../utils/converter';
import { converterActions } from '../../store/converterSlice';
import { Button, Input } from 'antd';
import s from '../TransformData/TransformData.module.css';

export const TransformData = () => {
  const { TextArea } = Input;
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState<string>('');
  console.log('inputText', inputText);

  const onChangeData = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(evt.target.value);
  };

  const convertText = () => {
    const data = convertData(inputText);
    console.log('data', data);
    dispatch(converterActions.saveData(data));
  };

  return (
    <Input.Group compact>
      <TextArea rows={4} onChange={onChangeData} />
      <Button className={s.convert_btn} type="primary" onClick={convertText}>
        Показать
      </Button>
    </Input.Group>
  );
};
