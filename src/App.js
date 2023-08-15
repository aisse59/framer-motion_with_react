
import './App.scss';
import {FaBehance,FaDribble} from 'react-icons/fa';
import {IoMailOutline, IoChevronForwardCircle, IoStar} from 'react-icons/ios';
import {IconContext} from "react-icons";

function App() {
  return (
   <>
      <header>
        <div className='logo_wrapper'>dev<span>amit</span></div>
        <div className='menu_container'>
          <span>
            <IconContext.Provider value={{color:"#000", size:"18px", className:"icons_container"}}>
              <div className='icon'><FaBehance/></div>
              <div className='icon'><FaDribble/></div>
            </IconContext.Provider>
          </span>
          <span>
            <IconContext.Provider value={{color:"#000", size:"18px"}}>
                <div className='icon'><IoMailOutline/></div>
                hello@example.co
              </IconContext.Provider>
          </span>
          <span className='menu'>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </header>

      <div className='content_wrapper'>
        <div className='left_content_wrapper'>
          <h2>
            <span>Design focused</span>
            <span>startup, for startups.</span>
          </h2>
          <p>When, while lovely valley teems with vapor around meand <br/>  meridian sun strikes the upper impenetrable.</p>
          <div className='btn_group'>
            <div className='btn btn_primary'>Hire Me
              <IconContext.Provider value={{color:"#14da8f", size:"25px"}}>
                <IoChevronForwardCircle/>
          </IconContext.Provider>
            </div>
            <div className='btn'>Live Chat</div>
          </div>
        </div>
        <div className='right_content_wrapper'></div>
        
      </div>
   </>
    
  );
}

export default App;
