import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'antd';
import Popup from '../Popup/Popup';
import { TransformData } from '../../pages/TransformData/TransformData';
import s from './../Modal/PopupData.module.css';
import { IConvertedDataItem } from '../../types';
import { Button, Input } from 'antd';
import { convertData } from '../../utils/converter';
import { converterActions } from '../../store/converterSlice';

export const PopupData = ({
  setIsVisiblePopup,
  onSubmit,
  isLoading,
}: {
  setIsVisiblePopup: (isVisiblePopup: boolean) => void;
  onSubmit: (data: IConvertedDataItem[]) => void;
  isLoading?: boolean;
}) => {
  const { TextArea } = Input;
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState<string>('');

  const onChangeData = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(evt.target.value);
  };
  const convertText = () => {
    const data = convertData(inputText);
    if (data.length === 0) {
      //здесь предупреждение что в окно вставлено что-то не то
    }
    dispatch(converterActions.saveData(data));
  };
  return (
    <Popup className={s.modal_block} onClose={() => setIsVisiblePopup(false)}>
      {/* <TransformData /> */}
      <Input.Group compact>
        <TextArea rows={20} onChange={onChangeData} />
        <Button type="primary" shape="round" onClick={convertText}>
          Показать
        </Button>
      </Input.Group>
    </Popup>
  );
};
