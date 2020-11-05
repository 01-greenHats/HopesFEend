import React from 'react';
import './postCard.scss'
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import PostAddIcon from '@material-ui/icons/PostAdd';
import CancelIcon from '@material-ui/icons/Cancel';

function toggleControlePanel(e) {
    if(document.getElementById('ControlPanel').style.display == 'none'){
        document.getElementById('ControlPanel').style.display = 'block';
        document.getElementById('inputPost').style.height = '50px';
    }else{
        console.log('HHHHH');
        document.getElementById('ControlPanel').style.display = 'none';
        document.getElementById('inputPost').style.height = '30px';
    }
}
function PostCard(props){

    return(
        <>
        <div className="newPostContainer" style={{border:"1px solid gray",marginTop:"40px"}}>
        <div className="postHeader">
        <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="Avatar" style={{width:"60px",borderRadius:"50%",padding:"10px"}}/>
        </div>
        <div id="ControlPanel" className="newPostControlPanel" style={{display:"none",position:"relative"}}>
            <hr/>
            <button className="btnPostControle" style={{position:"relative"}}><CameraAltIcon/></button>
            <button className="btnPostControle" style={{position:"relative",left:"55%"}} onClick={(e)=>{toggleControlePanel(e)}}><CancelIcon/></button>
            <button className="btnPostControle" style={{position:"relative",left:"55%"}}><PostAddIcon/></button>
        </div>
        </div>
        </>
    )


}
export default PostCard;
