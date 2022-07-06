import React from 'react';
import Avatar  from '@material-ui/core/Avatar';
import './VideoCard.css';

function VideoCard({image, titile, channel,Views, timestamp, channelImage  }) {
  return (
    <div className='videoCard'>
        <img className='videoCard__thumbnail' src={image} alt="" />
        <div className="videoCard__info">
            <Avatar className='videoCard__avatar' alt={channel} src={channelImage}/>
            <div className="videoCard__text">
                <h4>{titile}</h4>
                <p>{channel}</p>
                <p>{Views} . {timestamp}</p>
            </div>
        </div>
    </div>
  )
}
   
export default VideoCard;