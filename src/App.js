import CustomGrid from './components/CustomGrid'
import './App.css';
import employeeNames from './data/employeeNames.json'
import productNames from './data/productNames.json'

function App() {

  const customHeader = 'Products and associated employees'

  return (
    <div className="app">
      <CustomGrid
        employeeNames={employeeNames}
        header={customHeader}
        productNames={productNames}
      />
    </div>
  );
}

export default App;
