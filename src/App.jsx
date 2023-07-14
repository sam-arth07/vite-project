//HOC
import DefaultHOC from "./HOC/Default.HOC";

//Pages
import HomePage from './pages/Home.page';

//Layout
import DefaultLayout from "./layouts/Default.layout";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
    {/* <DefaultLayout path="/">
      {<Temp />} 
    </DefaultLayout> */}
    <DefaultHOC path="/" element = {<DefaultLayout element = {<HomePage/>}/>} />
    </>
  );
};

export default App;
