import {Routes, Route} from 'react-router-dom'
import Navigation from './components/NavigationComponent/navigation';
import LandingPage from './components/LandingPage/landingPage';
import About from './components/About/about';
import Footer from './components/Footer/footer';
import Services1 from './components/Services/services1';
import Contact from './components/Contact/contact';
import PaintingServices from './components/Services/PaintingServices/paintingServices';
import JanitorialService from './components/Services/JanitorialService/janitorialServices';
import Fumigation from './components/Services/FumingationServices/fumigation';
import ScrollToTop from './scroll';
import { Fragment } from 'react';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Fragment>
      <ScrollToTop>
      <Toaster/>
        <Routes>
          <Route path='/' element={<Navigation/>}>
            <Route index element={<LandingPage/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/services' element={<Services1/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/paintServices' element={<PaintingServices/>}/>
            <Route path='/janitorialServices' element={<JanitorialService/>}/>
            <Route path='/fumigationServices' element={<Fumigation/>}/>
          </Route>
        </Routes>
        <Footer/>
      </ScrollToTop>
    </Fragment>
  );
}

export default App;
