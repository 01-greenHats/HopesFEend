import React from 'react';
import './commentCard.scss'

function CommentCard(props){
    return(
        <>
        <div className="commentCard" style={{display:"flex",marginLeft:"15px",padding:"5px"}}>
        <img src={`${props.comment.imgURL}`} alt="Avatar" style={{width:"30px",borderRadius:"50%",padding:"7px 0px"}}/>
        <div>
    <p style={{fontSize:"75%",fontWeight:"bold",marginLeft:"3px"}}>{props.comment.name}</p>
        <div style={{border:"1px solid black"}} className="commentText">
            <p style={{margin:"10px"}}>{props.comment.content}</p>
            </div>
        </div>
        </div>
        </>
    )


}
export default CommentCard;
