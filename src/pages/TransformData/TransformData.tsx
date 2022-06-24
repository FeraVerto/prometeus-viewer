import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { convertData } from '../../utils/converter';
import { converterActions } from '../../store/converterSlice';
import { Button, Input } from 'antd';

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
    <Input.Group compact>
      <Input
        onChange={onChangeData}
        style={{
          width: 'calc(100% - 400px)',
        }}
        defaultValue="https://ant.design"
      />
      <Button type="primary" onClick={convertText}>
        Submit
      </Button>
    </Input.Group>
  );
};
