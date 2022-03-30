import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './routes/home/home.component';
import About from './routes/about/about.component';
import Navigation from './routes/navigation/navigation.componet';
import SignIn from './routes/sign-in/sign-in.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
