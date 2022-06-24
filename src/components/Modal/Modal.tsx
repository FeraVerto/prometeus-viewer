import { Modal } from 'antd';
import { TransformData } from '../../pages/TransformData/TransformData';
import s from './../Modal/Modal.module.css';

export const ModalData = ({ visible }: { visible: boolean }) => {
  return (
    <Modal
      centered={true}
      className={s.modal_block}
      title={'Введите данные'}
      visible
      width="40%"
    >
      <TransformData />
    </Modal>
  );
};
