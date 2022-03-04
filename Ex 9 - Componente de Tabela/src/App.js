import './App.css';
import Table from './components/Table';

function App() {
  return (
    <>
      <Table
        title="Minha tabela"
        description="Tabela de compra"
        columns={['Event', 'Device Id', 'Comment']}
        data={[
          {
            event: 'valor do evento 1',
            deviceId: 'valor do deviceId 1', 
            comment: 'valor do comment 1'
          },
          {
            event: 'valor do evento 2',
            deviceId: 'valor do deviceId 2', 
            comment: 'valor do comment 2'
          }
        ]}
        />
    </>
  );
}

export default App;
