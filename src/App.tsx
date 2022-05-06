import './App.css';
import { Header } from './components/Header/Header';
import { TableData } from './components/Table/Table';
import { TransformData } from './components/TransformData/TransformData';

function App() {
  return (
    <div className="App">
      <Header />
      <TransformData />
      <TableData />
    </div>
  );
}

export default App;
