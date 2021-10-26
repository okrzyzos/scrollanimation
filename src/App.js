import './App.css';
import Travel_1 from './assets/travel1.jpg'
import Travel_2 from './assets/travel2.jpg'
import Travel_3 from './assets/travel3.jpg'
import Travel_4 from './assets/travel4.jpg'
import Hero from './components/Hero';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Slide from 'react-reveal/Slide'



const navbarLinks = [
  
  {url:"home",title:"Home"},
  {url:"trips",title:"Trips"},
  {url:"rewards",title:"Rewards"}
]

function App() {

  return (
    <div className="App">
    <Navbar navbarLinks={navbarLinks} />
     <Hero imageSrc={Travel_1}  />
     <Slider imageSrc={Travel_2} 
       title={'be an explorer'}
       subtitle={"our plateform offers a wide variety of unique travel"}
     /> 
      <Slider imageSrc={Travel_3} 
       title={'Memories for a liftime'}
       subtitle={"your dream vacation is only a few cliks"}
       flipped={true}
     />
      <Slider imageSrc={Travel_4} 
       title={'Memories for a liftime'}
       subtitle={"your dream vacation is only a few cliks"}
     />
     <Footer />

    </div>
  );
}

export default App;
