import React from "react"

const Tweet = props => {
    //debugger

    props.tweetData

    // entities: {}
    // favorite_count: 34
    // id_str: "725090047557558272"
    // liked: false
    // retweet_count: 14
    // retweeted: false
    // text: "When people say setState() is an anti-pattern, they mean 500-line components with a complex setState() soup scattered across event handlers."
    // timestamp_ms: "1461709913000"

    // user:
    //     name: "Dan Abramov"
    //     profile_image_url: "https://s3.amazonaws.com/horizon-production/images/twitter-feed-dan-abramov.jpeg"
    //     screen_name: "dan_abramov"
// props.tweetData.user.profile_image_url
    let likedClass = "fas fa-heart"
    if(props.tweetData.liked){
        likedClass += " red-color"
    }

    let retweetClass = "fas fa-retweet"
    if(props.tweetData.retweeted){
        retweetClass += " green-color"
    }

    const ClickReply = () =>{
        alert("Reply")
    }
    const ClickRetweet = () =>{
        alert("Retweet")
    }
    const ClickLike = () =>{
        alert("Like")
    }
    const ClickMore = () =>{
        alert("More")
    }

    return  <li>
                <img src={props.tweetData.user.profile_image_url} alt="Some Guy"></img>
                <p>{props.tweetData.user.name}</p>
                <p>{props.tweetData.user.screen_name}</p>
                <p>{props.tweetData.text}</p>

                <i className="fas fa-reply" onClick={ClickReply}></i>
                <i className={retweetClass} onClick={ClickRetweet}></i>
                <>{props.tweetData.retweet_count}</>
                <i className={likedClass} onClick={ClickLike}></i>
                <>{props.tweetData.favorite_count}</>
                <i className="fas fa-ellipsis-h" onClick={ClickMore}></i>

                {/* <p>{props.tweetData.user.screen_name}</p> */}
            </li>
};
export default Tweet;
