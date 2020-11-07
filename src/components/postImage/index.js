import React from 'react';
import './commentCard.scss';

function PostImage(props){
    return(
        <>
        <div style={{display:"flex"}}>
            {props.images.map((img,idx)=>{
                <img key={idx} src={`${img}`}/>
            })}
        </div>
        </>
    )


}
export default PostImage;
