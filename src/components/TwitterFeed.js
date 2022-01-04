import React from 'react';
import Tweet from './Tweet';

const TwitterFeed = (props) => {

  const tweetsArr = props.data.map((tweetData)=>{
    return <Tweet tweetData={tweetData} key={tweetData.id_str}/>
  })

  return(
    <ul>
      {tweetsArr}
    </ul>
  )
};

export default TwitterFeed;
