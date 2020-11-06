import React,{ useEffect, useState }  from 'react';
import './postCard.scss'
import CommentIcon from '@material-ui/icons/Comment';
import AddIcon from '@material-ui/icons/Add';
import CommentCard from '../commentCard';
// import { getPostsData, addPost, addComment} from '../../store/apiActions'

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

function handleAddComment(e) {
    
}


function PostCard(props){
    console.log('This is the Post in the props : ',props.post)
    let img = props.post.author.img || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";
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
        <img src={`${img}`} alt="Avatar" style={{width:"30px",borderRadius:"50%",padding:"5px 0px"}}/>
        <p style={{fontSize:"75%",fontWeight:"bold",marginLeft:"3px"}}>{props.post.author.name}</p>
        <p style={{fontSize:"75%",fontWeight:"bold",marginLeft:"3px",color:"gray"}}>{props.post.createdTime}</p>
        </div>
        <div className="postContent">
            {/* <h3 className="postTitle">this is just a title</h3> */}
            <p className="postText">{props.post.content}</p>
        </div>
            <hr/>
        <div className="commentsCountContainer">
            <p>{props.post.comments.length} comments</p>
            <button className="btnPostControle" style={{position:"relative"}} onClick={(e)=>{toggleControlePanel(e)}}><CommentIcon/></button>
        </div>
        <hr/>
        <div className="postInputContainer">
            <input placeholder="Add a comment..."></input>
            <button className="btnPostControle" style={{position:"relative"}} onClick={(e)=>{handleAddComment(e)}}><AddIcon/></button>
        </div>
        <hr/>
        <div className="commentsContainer">
            {
                props.post.comments.map((comment,idx)=>{
                    return <CommentCard key={idx} comment={comment}/>
                })
            }
        </div>
        </div>
        </>
    )


}
export default PostCard;
