import React from 'react'
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
import imageChannel from "../images/download.jpeg";
import imageTubm from "../images/utube.webp";

function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
    <div className="recommendedVideos__videos">
       <VideoCard
        titile = "Web Developer in 45 minutes | 2022"
        views = "2.1M Views"
        timestamp= "7 days ago"
        channelImage= {imageChannel}
        channel = "Programming with Dinesh"
        image = {imageTubm}
       />

       <VideoCard
        titile = "Web Developer in 45 minutes | 2022"
        views = "2.1M Views"
        timestamp= "7 days ago"
        channelImage= {imageChannel}
        channel = "Programming with Dinesh"
        image = {imageTubm}
       />

       <VideoCard
        titile = "Web Developer in 45 minutes | 2022"
        views = "2.1M Views"
        timestamp= "7 days ago"
        channelImage= {imageChannel}
        channel = "Programming with Dinesh"
        image = {imageTubm}
       />

       <VideoCard
        titile = "Web Developer in 45 minutes | 2022"
        views = "2.1M Views"
        timestamp= "7 days ago"
        channelImage= {imageChannel}
        channel = "Programming with Dinesh"
        image = {imageTubm}
       />

       <VideoCard
        titile = "Web Developer in 45 minutes | 2022"
        views = "2.1M Views"
        timestamp= "7 days ago"
        channelImage= {imageChannel}
        channel = "Programming with Dinesh"
        image = {imageTubm}
       />
      <VideoCard
        titile = "Web Developer in 45 minutes | 2022"
        views = "2.1M Views"
        timestamp= "7 days ago"
        channelImage= {imageChannel}
        channel = "Programming with Dinesh"
        image = {imageTubm}
       />
       </div>
    </div>
  )
}

export default RecommendedVideos