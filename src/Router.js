import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Archiv} from './Components/Icon/Archiv'
import { Arrow } from './Components/Icon/Arrow'
import { Building } from './Components/Icon/Building'
import { Business } from './Components/Icon/Business'
import { Call } from './Components/Icon/Call'
import { Car } from './Components/Icon/Car'
import { Computer } from './Components/Icon/Computer'
import { Content_edit } from './Components/Icon/Content_edit'
import { Delivery } from './Components/Icon/Delivery'
import { Design } from './Components/Icon/Design'
import { Email_msg } from './Components/Icon/Email_msg'
import { Essential } from './Components/Icon/Essential'
import { Files } from './Components/Icon/Files'
import { Grid } from './Components/Icon/Grid'
import { Location } from './Components/Icon/Location'
import { Money } from './Components/Icon/Money'
import { Notification } from './Components/Icon/Notification'
import { Programing } from './Components/Icon/Programing'
import { School } from './Components/Icon/School'
import { Search } from './Components/Icon/Search'
import { Security } from './Components/Icon/Security'
import { Setting } from './Components/Icon/Setting'
import { Shop } from './Components/Icon/Shop'
import { Social_media } from './Components/Icon/Social_media'
import { Support_like } from './Components/Icon/Support_like'
import { Time } from './Components/Icon/Time'
import { Type_para } from './Components/Icon/Type_para'
import { User } from './Components/Icon/User'
import { Video_audio } from './Components/Icon/Video_audio'
import { Weather } from './Components/Icon/Weather'
import { Landing_page } from './Components/Homepage/Landing_page'
import { Layout } from './Layout'





export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          {/* <Route path="/" element={<Landing_page/>}/>  */}
          <Route path="money" element={<Money/>}/>
          <Route path="archiv" element={<Archiv/>}/> 
          <Route path="arrow" element={<Arrow/>}/>  
          <Route path="building" element={<Building/>}/>
          <Route path="business" element={<Business/>}/> 
          <Route path="call" element={<Call/>}/> 
          <Route path="car" element={<Car/>}/>
          <Route path="computer" element={<Computer/>}/>
          <Route path="content_edit" element={<Content_edit/>}/> 
          <Route path="delivery" element={<Delivery/>}/> 
          <Route path="design" element={<Design/>}/> 
          <Route path="video_audio" element={<Video_audio/>}/> 
          <Route path="email_msg" element={<Email_msg/>}/> 
          <Route path="type_para" element={<Type_para/>}/>
          <Route path="essential" element={<Essential/>}/>
          <Route path="weather" element={<Weather/>}/>
          <Route path="files" element={<Files/>}/>
          <Route path="user" element={<User/>}/>
          <Route path="location" element={<Location/>}/>
          <Route path="school" element={<School/>}/>
          <Route path="grid" element={<Grid/>}/>
          <Route path="shop" element={<Shop/>}/>
          <Route path="programing" element={<Programing/>}/>
          <Route path="support_like" element={<Support_like/>}/>
          <Route path="security" element={<Security/>}/>
          <Route path="setting" element={<Setting/>}/>
          <Route path="notification" element={<Notification/>}/>
          <Route path="search" element={<Search/>}/>
          <Route path="time" element={<Time/>}/>
          <Route path="social_media" element={<Social_media/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}