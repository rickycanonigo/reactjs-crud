import Header from "./components/Layouts/Header";
// import UserCreate from './components/User/UserCreate';
import UserDetail from './components/User/UserDetail';
import UsersList from './components/User/UsersList';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
// import Footer from "./components/Layouts/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header/>
          <Routes>
              <Route path='/' element={<UsersList/>}></Route>
              {/* <Route path='/user/create' element={<UserCreate />}></Route> */}
              <Route path='/user/detail/:id' element={<UserDetail />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
