/* eslint-disable react/prop-types */

/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import './App.css'
import {MovingComponent} from 'react-moving-text';


function App() {
  

  let Letters = [" ","h ","i,","","w  ","e ","l ","c ","o ","m ","e "," ","t ","o "," ","m ","y "," ","p ","a ","g ","e "," "]
  
  return (
    <>
      <div className='main'>
        <div className='header'>
          <div className='header-text'>
            {Letters.map((letter, index) =>
            <MovingComponent
              kye = {index}
              type="swing"
              duration="1500ms"
              delay= {(index * 100).toString() + "ms"}
              direction="reverse"
              timing="ease"
              iteration="1"
              fillMode="none"
                style={{
                  color: "#FE5F55", textAlign: "center", width: "3.5%"}}
              >
              {letter}
              
            </MovingComponent>)
            }
          </div>
          <div className="header-arrows">
            <div className='arrow'><p>|</p><p>v</p></div>
            <p className='project-text'>check out my projects down there</p>
            <div className='arrow'><p>|</p><p>v</p></div>
          </div>
        </div>
        <div className='instagram' >
          <a href='https://www.instagram.com/p/Cq57ojpsNQP/' className='Instagram-picture1'><img src="/src/assets/instagrampics/1.png" id="inspic" ></img></a>
          <a href='https://www.instagram.com/p/Cqp6QKrs2dJ/' className='Instagram-picture2'><img src="/src/assets/instagrampics/2.png"  id="inspic" ></img></a>
          <a href='https://www.instagram.com/p/CqTmmfcDdBB/' className='Instagram-picture3'><img src="/src/assets/instagrampics/3.png"  id="inspic" ></img></a>
          <a href='https://www.instagram.com/p/ClBRx06Dxuw/' className='Instagram-picture4'><img src="/src/assets/instagrampics/4.png"  id="inspic" ></img></a>
          <a href='https://www.instagram.com/p/Ckp1FbpDsne/' className='Instagram-picture5'><img src="/src/assets/instagrampics/5.png"  id="inspic" ></img></a>
          <a href='https://www.instagram.com/p/Cji4Bu8D4sS/' className='Instagram-picture6'><img src="/src/assets/instagrampics/6.png"  id="inspic"></img></a>
          <a href='https://www.instagram.com/p/ChkOzuEDX5k/' className='Instagram-picture7'><img src="/src/assets/instagrampics/7.png"  id="inspic"></img></a>
          <a href='https://www.instagram.com/p/CiIvKe4DgsP/' className='Instagram-picture8'><img src="/src/assets/instagrampics/8.png"  id="inspic"></img></a>
        </div>
      </div>

    </>
  )
}

export default App
