import React from 'react';
import './newPostPanel.scss'
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import PostAddIcon from '@material-ui/icons/PostAdd';
import CancelIcon from '@material-ui/icons/Cancel';

function toggleControlePanel(e) {
    if(document.getElementById('ControlPanel').style.display == 'none'){
        document.getElementById('ControlPanel').style.display = 'block';
        e.target.style.height = '50px';
    }else{
        console.log('HHHHH');
        document.getElementById('ControlPanel').style.display = 'none';
        e.target.style.height = '30px';

    }
}
function NewPostPanel(props){

    return(
        <>
        <div className="newPostContainer" style={{border:"1px solid gray"}}>
        <div className="newPostPanelContainer">
        <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="Avatar" style={{width:"60px",borderRadius:"50%",padding:"10px"}}/>
            <div className="postInputContainer">
            <textarea  placeholder="Help others" className="postInput" onClick={(e)=>{toggleControlePanel(e)}} name="Text1" cols="40" rows="5"></textarea>
                {/* <input placeholder="Help others" className="postInput" onClick={()=>{toggleControlePanel()}}/> */}
            </div>
        </div>
        <div id="ControlPanel" className="newPostControlPanel" style={{display:"none",position:"relative"}}>
            <hr/>
            <button className="btnPostControle" style={{position:"relative"}}><CameraAltIcon/></button>
            <button className="btnPostControle" style={{position:"relative",left:"55%"}}><CancelIcon/></button>
            <button className="btnPostControle" style={{position:"relative",left:"55%"}}><PostAddIcon/></button>
        </div>
        </div>
        </>
    )


}
export default NewPostPanel;
