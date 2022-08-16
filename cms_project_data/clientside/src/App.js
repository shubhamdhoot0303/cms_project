import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';
import About from './component/About';
import LoginUserData from './component/Login_user';
import { BrowserRouter,Routes,Route }from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route  path='/home' element={< Home />}></Route>
        <Route  path='/' element={< Login />}></Route>
        <Route  path='/loginuser' element={< LoginUserData />}></Route>
        <Route  path='/register' element={ <Register /> } > </Route>
        <Route  path='/about' element={ <About /> } > </Route>
        
     </Routes>
     </BrowserRouter>
 

    </>
  );
}

export default App;
