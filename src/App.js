import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addpost from './components/Addpost';
import Searchpost from './components/Searchpost';

function App() {
  return (
    <div>
<Addpost/>
<Searchpost/>

    </div>
  );
}

export default App;
