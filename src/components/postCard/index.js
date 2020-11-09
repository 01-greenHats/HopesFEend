import React,{ useEffect, useState }  from 'react';
import { connect } from 'react-redux';
import { Redirect,useHistory  } from "react-router-dom";
import './postCard.scss'
import CommentIcon from '@material-ui/icons/Comment';
import AddIcon from '@material-ui/icons/Add';
import CommentCard from '../commentCard';
import { addComment } from '../../apiActions/posts';
import PostImage from '../postImage';
import { checkIsLogedIn } from '../../store/auth'
// import { getPostsData, addPost, addComment} from '../../store/apiActions'

function toggleControlePanel(e,id) {
    if(document.getElementById(id).style.display == 'none'){
        document.getElementById(id).style.display = 'block';
        // document.getElementById('inputPost').style.height = '50px';
    }else{
        // console.log('HHHHH');
        document.getElementById(id).style.display = 'none';
        // document.getElementById('inputPost').style.height = '30px';
    }
}



function PostCard(props){
    const [comments ,setComments] = useState(props.post.comments)
    const history = useHistory()

    // useEffect(async () => {
    //     props.checkIsLogedIn()
    // }, []);

    async function handleAddComment(e,postId) {
        e.preventDefault();
        if(!props.loggedIn){
            // props.checkIsLogedIn()
            history.push("/loginUser");
            return;
        }
        let comment = e.target.commentContent.value
        console.log(`postID : ${postId} // content : ${comment} // token : ${props.token}`)
        let add_commetn = await addComment(postId,comment, props.token);
        console.log('add_commetn ==> : ',add_commetn);
        setComments(add_commetn.data.comments);
        e.target.commentContent.value = "";
    }
    
    // console.log('This is the Post in the props : ',props.post)
    let img = props.post.author.img || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";
    console.log('PostCard : :::::::: ',props.post)
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
            <PostImage images={props.post.imageUrl}/>
        </div>
            <hr/>
        <div className="commentsCountContainer">
            <p>{props.post.comments.length} comments</p>
            <button className="btnPostControle" style={{position:"relative"}} onClick={(e)=>{toggleControlePanel(e,props.post._id)}}><CommentIcon/></button>
        </div>
        <hr/>
        <div className="postInputContainer">
            <form onSubmit={(e)=>{handleAddComment(e,props.post._id)}}>
            <input name="commentContent" placeholder="Add a comment..."></input>
            <button type="submit" className="btnPostControle" style={{position:"relative"}}><AddIcon/></button>
            </form>
        </div>
        <hr/>
        <div id={props.post._id} style={{display:"none"}} className="commentsContainer">
            {
                comments.map((comment,idx)=>{
                    return <CommentCard key={idx} comment={comment}/>
                })
            }
        </div>
        </div>
        </>
    )


}

const mapStateToProps = state => (
    {
        token: state.auth.token,
        loggedIn: state.auth.loggedIn
    }
);
const mapDispatchToProps = {checkIsLogedIn};
export default connect(mapStateToProps, mapDispatchToProps)(PostCard);
// export default connect(mapStateToProps)(PostCard);

// export default PostCard;
