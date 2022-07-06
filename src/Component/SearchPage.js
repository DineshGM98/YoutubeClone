import React from 'react';
import './SearchPage.css';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from './ChannelRow';
import ChannelImg from '../images/download.jpeg';
import imageTubm from '../images/download.jpeg';

function SearchPage() {
  return (
    <div className='seacrhPage'>
         <div className="searchPage__filter">
            <TuneOutlinedIcon/>
            <h2>FILTER</h2>
         </div>
         <hr />

         <ChannelRow
            image = {ChannelImg}
            channel = "Programming with Dinesh"
            verified
            subs = "1M"
            noOfVideos = {580}
            description = "Programing with code "
         />
         <hr />

         <VideoRow
                  
                   views = "2.1M Views"
                   subs= "564k"
                   description= "free programming"
                   timestamp= "7 days ago"
                   channel = "Programming with Dinesh"
                   title="progrmaing"
                   image = {imageTubm} 
         />
    </div>
  )
}

export default SearchPage;