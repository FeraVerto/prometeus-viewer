import { useRef, useState } from 'react';
import type { InputRef } from 'antd';
import { useSelector } from 'react-redux';
import { Table } from 'antd';
import { converterDataSelector } from '../../store/converterSlice';
import { getColumns } from '../../menuConstant';

export const TableData = () => {
  const convertData = useSelector(converterDataSelector);

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

  return (
    <Table
      columns={getColumns(
        searchText,
        setSearchText,
        searchedColumn,
        setSearchedColumn,
        searchInput
      )}
      dataSource={convertData.converter}
      //bordered={true}
    />
  );
};
