import React from 'react';

function PostImage(props){
    return(
        <>
        <div style={{display:"flex"}}>
            {props.images.map((img,idx)=>{
               return <img key={idx} src={`${img}`} style={{width:"30%",margin:"2px"}}/>
            })}
        </div>
        </>
    )


}
export default PostImage;
