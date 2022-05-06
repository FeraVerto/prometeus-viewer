import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { convertData } from './../../utils/converter';
import { converterActions } from '../../store/converterSlice';

export const TransformData = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState<string>('');

  const onChangeData = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(evt.target.value);
  };

  const convertText = () => {
    const data = convertData(inputText);
    dispatch(converterActions.saveData(data));
  };

  return (
    <div>
      <input type="text" onChange={onChangeData} />
      <button onClick={convertText}>Конвертировать</button>
    </div>
  );
};
