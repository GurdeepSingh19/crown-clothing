import { Routes, Route } from 'react-router-dom';
import Navigtion from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.components';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigtion /> }> 
        <Route index element={<Home />} /> 
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
      
      
    </Routes>
  );
};

export default App;