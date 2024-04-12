import Getting from './components/Getting';
import Listing from './components/Listing';
import Creating from './components/Creating';
import Updating from './components/Updating';
import Deleting from './components/Deleting';

import './App.css';

// useState ajuda a manipular estados de dados.
// useEffect manipula dados externos.

function App() {
  return (
    <div className="App">
      <Listing/>
      <Getting/>
      <Creating/>
      <Updating/>
      <Deleting/>
    </div>
  );
}

export default App;