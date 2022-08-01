import { 
  BrowserRouter as Router, 
  Route,
  Routes
} from 'react-router-dom';
import DefaultLayout from '~/layouts/DefaultLayout';
import { publicRoutes } from './routes';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => {
          let Layout = route.Layout || DefaultLayout
          const Page = route.component
          return (<Route key={index} path={route.path} 
                          element={<Layout><Page /></Layout>}/>)})}
      </Routes>
    </div>
    </Router>
  );
}

export default App;

