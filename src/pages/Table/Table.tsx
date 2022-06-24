import { Table } from 'antd';
import { useSelector } from 'react-redux';
import { converterDataSelector } from '../../store/converterSlice';
import { columns } from '../../menuConstant';
import s from './Table.module.css';

export const TableData = () => {
  const convertData = useSelector(converterDataSelector);

  return (
    <Table
      columns={columns}
      dataSource={convertData.converter}
      //bordered={true}
    />
  );
};
