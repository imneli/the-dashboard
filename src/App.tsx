import SideBar from './components/SideBar';
import Layout from './Layout';
import { HashRouter as Router } from 'react-router-dom';

function App() {
    return (
      <>
        <Router>
            <SideBar/>
            <Layout/>
        </Router>
      </>
    );
}

export default App;