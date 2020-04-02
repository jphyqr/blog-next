import React from 'react'


//statis = hard coding an array at the top of your file


const Video = (props) => {
    console.log({props})
    const {url} = props || {}
    console.log({url})
    const {query} = url || {}
    console.log({query})
    return (
        <div>
            
            <video src={`/${query.video}.mp4`}></video>
        </div>
    )
}

export default Video
