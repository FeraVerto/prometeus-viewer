import './App.css';
import { Header } from './components/Header/Header';
import { TableData } from './components/Table/Table';
import { TransformData } from './components/TransformData/TransformData';
import { Container } from './components/Container/Container';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <TransformData />
        <TableData />
      </Container>
    </div>
  );
}

export default App;
