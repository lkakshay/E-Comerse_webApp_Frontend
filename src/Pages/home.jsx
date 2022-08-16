import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../App';
import { useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import { Trending } from '../Components/trending';
import { Topten } from '../Components/topten';

const slideImages = [
  {
    url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Laptops/Gigabyte/Auros/Hero/D54166461_IN_PC_Laptops_Gigabyte_GW_BAU_3000x1200._CB629785027_.jpg",
    caption: 'Slide 1'
  },
  {
    url: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/AugART/GW/BD_3000x1200-PC._CB629746879_.jpg",
    caption: 'Slide 1'
  },
  {
    url: "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/U599/MAY22/APAY/MA_3000._CB637495559_.jpg",
    caption: 'Slide 1'
  },
  {
    url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/GW/Unrec/Heros/under_1999_Tallhero_3000x1200._CB634376407_.jpg",
    caption: 'Slide 1'
  },
  {
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/kitchen/GW/June22/Kitchen_3000x1200_V1._CB634449566_.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/MI/Under1499_Tallhero_3000x1200._CB634138928_.jpg',
    caption: 'Slide 3'
  },
];

export const Home= () => {
  const screenSize=useSelector((state)=>state.MediaqueryReducer.screenSize)
  const [dimension,setdimension]=useState({sliderH:""})
  useEffect(()=>{
    if(screenSize==="lg")
    setdimension({...dimension,sliderH:"300px"})
    else if(screenSize==="sm")
    setdimension({...dimension,sliderH:"160px"})
    else if(screenSize==="sx")
    setdimension({...dimension,sliderH:"80px"})

  },[screenSize])
    return (
    <React.Fragment>
      <div className="slide-container">
        <Slide duration={3600} transitionDuration={1800} autoplay={true}
        arrows={false} infinite={true} >
         {slideImages.map((slideImage, index)=> (
            <div style={{height:dimension?.sliderH}} className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      <Topten/>
      <img style={{width:"100%",margin:'10px'}} src='https://cdn.shopify.com/s/files/1/0064/4435/1539/files/banner-custom-middle-1_ea59337b-c31d-4433-83d7-f0f2764ca227_1920x.jpg?v=1618802630'/>
       <Trending/>
       <img style={{width:"100%",margin:'10px'}} src='https://cdn.shopify.com/s/files/1/0064/4435/1539/files/banner-custom-home-2_1920x.png?v=1620189483'/>
      
    </React.Fragment>   
    )
}

const imgs=[,
"https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/April-22/DesktopTallhero_3000x1200_2._CB623843558_.jpg",
"https://images-eu.ssl-images-amazon.com/images/G/31/img21/MI/Under1499_Tallhero_3000x1200._CB634138928_.jpg"]
