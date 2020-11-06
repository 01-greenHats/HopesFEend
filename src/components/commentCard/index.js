import React from 'react';
import './commentCard.scss'

function CommentCard(props){
    return(
        <>
        <div className="commentCard" style={{display:"flex",marginLeft:"15px",padding:"5px"}}>
        <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="Avatar" style={{width:"30px",borderRadius:"50%",padding:"7px 0px"}}/>
        <div>
        <p style={{fontSize:"75%",fontWeight:"bold",marginLeft:"3px"}}>Ahmad Shela</p>
        <div style={{border:"1px solid black"}} className="commentText">
            <p style={{margin:"10px"}}>this is my comment here please like it</p>
            </div>
        </div>
        </div>
        </>
    )


}
export default CommentCard;
