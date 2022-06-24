import { Modal } from 'antd';
import { TransformData } from '../../pages/TransformData/TransformData';

export const ModalData = ({ visible }: { visible: boolean }) => {
  return (
    <Modal title={'Введите данные'} visible>
      <TransformData />
    </Modal>
  );
};
