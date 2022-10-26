import { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Header } from './pages/Header/Header';
import { TableData } from './pages/Table/Table';
import { TransformData } from './pages/TransformData/TransformData';
import { Container } from './components/Container/Container';
import { converterDataSelector } from './store/converterSlice';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { PopupData } from './components/Modal/PopupData';
import { IConvertedDataItem } from './types';

function App() {
  const data = useSelector(converterDataSelector);
  const [isVisiblePopup, setIsVisiblePopup] = useState(false);

  const showModal = () => {
    setIsVisiblePopup(true);
  };

  const addData = (data: IConvertedDataItem[]) => {
    console.log('data', data);
  };

  if (data.converter.length !== 0) {
    return (
      <div className="App">
        <Container>
          <Header />
          {/* <TransformData /> */}
          <TableData />
        </Container>
      </div>
    );
  } else {
    return (
      <>
        <div className="logo">
          <Header />
        </div>
        <div className="add_data_button">
          <Button
            type="primary"
            shape="circle"
            onClick={showModal}
            icon={<PlusOutlined />}
          ></Button>
        </div>
        {isVisiblePopup && (
          <PopupData setIsVisiblePopup={setIsVisiblePopup} onSubmit={addData} />
        )}
      </>
    );
  }
}

export default App;
