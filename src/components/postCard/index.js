import React,{ useEffect, useState }  from 'react';
import './postCard.scss'
import CommentIcon from '@material-ui/icons/Comment';
import AddIcon from '@material-ui/icons/Add';
import CommentCard from '../commentCard';
import { getPostsData, addPost, addComment} from '../../store/apiActions'

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
    console.log('This is the Post in the props : ',props.post)
    // const [posts, setPosts] = useState([]);
    // useEffect(async () => {   
    
    //     let posts = await getPostsData()
    //     console.log('posts>>???????>>>>>>>>>>??????????>>',posts);
    //     setPosts(posts.data.results);
    // }, []);

    return(
        <>
        <div className="newPostContainer" style={{border:"1px solid gray",marginTop:"40px"}}>
        <div className="postHeader" style={{display:"flex",marginLeft:"15px"}}>
        <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="Avatar" style={{width:"30px",borderRadius:"50%",padding:"5px 0px"}}/>
        <p style={{fontSize:"75%",fontWeight:"bold",marginLeft:"3px"}}>Ahmad Shela</p>
        </div>
        <div className="postContent">
            <h3 className="postTitle">this is just a title</h3>
            <p className="postText">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
            <hr/>
        <div className="commentsCountContainer">
            <p>0 comments</p>
            <button className="btnPostControle" style={{position:"relative"}} onClick={(e)=>{toggleControlePanel(e)}}><CommentIcon/></button>
        </div>
        <hr/>
        <div className="postInputContainer">
            <input placeholder="Add a comment..."></input>
            <button className="btnPostControle" style={{position:"relative"}} onClick={(e)=>{toggleControlePanel(e)}}><AddIcon/></button>
        </div>
        <hr/>
        <div className="commentsContainer">
        <CommentCard/>
        </div>
        </div>
        </>
    )


}
export default PostCard;
