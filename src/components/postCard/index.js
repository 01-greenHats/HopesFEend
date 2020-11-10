import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, useHistory } from "react-router-dom";
import './postCard.scss'
import CommentIcon from '@material-ui/icons/Comment';
import AddIcon from '@material-ui/icons/Add';
import CommentCard from '../commentCard';
import { addComment } from '../../apiActions/posts';
import PostImage from '../postImage';
import { checkIsLogedIn } from '../../store/auth'
// import { getPostsData, addPost, addComment} from '../../store/apiActions'

function toggleControlePanel(e, id) {
    if (document.getElementById(id).style.display == 'none') {
        document.getElementById(id).style.display = 'block';
        // document.getElementById('inputPost').style.height = '50px';
    } else {
        // console.log('HHHHH');
        document.getElementById(id).style.display = 'none';
        // document.getElementById('inputPost').style.height = '30px';
    }
}



function PostCard(props) {
    const [comments, setComments] = useState(props.post.comments)
    const history = useHistory()

    // useEffect(async () => {
    //     props.checkIsLogedIn()
    // }, []);

    async function handleAddComment(e, postId) {
        e.preventDefault();
        if (!props.loggedIn) {
            // props.checkIsLogedIn()
            history.push("/loginUser");
            return;
        }
        let comment = e.target.commentContent.value
        console.log(`postID : ${postId} // content : ${comment} // token : ${props.token}`)
        let add_commetn = await addComment(postId, comment, props.token);
        console.log('add_commetn ==> : ', add_commetn);
        setComments(add_commetn.data.comments);
        e.target.commentContent.value = "";
    }

    // console.log('This is the Post in the props : ',props.post)
    // ????????? img error check ??
    // let img = props.post.author.img || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";
    let img = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";
    console.log('PostCard : :::::::: ', props.post)
    return (
        <>
            <div class="card gedf-card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="mr-2">
                                <img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt="" />
                            </div>
                            <div class="ml-2">
                                <div class="h5 m-0">{props.post.author.name}</div>
                                <div class="h7 text-muted">@{props.post.author.name}</div>
                            </div>
                        </div>
                        <div>
                            {/* <div class="dropdown">
                                <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-ellipsis-h">X</i>
                                </button> */}
                                {/* <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                                    <div class="h6 dropdown-header">Configuration</div>
                                    <a class="dropdown-item" href="#">Save</a>
                                    <a class="dropdown-item" href="#">Hide</a>
                                    <a class="dropdown-item" href="#">Report</a>
                                </div> */}
                            {/* </div> */}
                        </div>
                    </div>

                </div>
                <div class="card-body">
                    <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>{props.post.createdTime}</div>
                    <a class="card-link" href="#">
                        <h5 class="card-title"> {props.post.title}</h5>
                    </a>

                    <p class="card-text">
                        {props.post.content}
                    </p>

                    <PostImage images={props.post.imageUrl} />
                </div>
                <hr />
                <div className="commentsCountContainer">
                    <p>{props.post.comments.length} comments</p>
                </div>
                <div class="card-footer">


                    <button id="viewCommentBtn" class="card-link" onClick={(e) => { toggleControlePanel(e, props.post._id) }}>View Comments</button>

                </div>

                <hr />

                <hr />

                {/* //// add comment //// */}

                <div class="row-com">

                    <div class="avatar_comment col-md-1">

                        <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar" />

                    </div>

                    <div class="box_comment col-md-11">

                        <form onSubmit={(e) => { handleAddComment(e, props.post._id) }}>

                            <textarea name="commentContent" class="commentar" placeholder="Add a comment..."></textarea>

                            <div class="box_post">

                                <div class="pull-right">

                                    <button type="submit" value="1">Post</button>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* comments */}
                <hr />
                <div id={props.post._id} style={{ display: "none" }} className="commentsContainer">
                    {
                        comments.map((comment, idx) => {
                            return <CommentCard key={idx} comment={comment} />
                        })
                    }
                </div>

            </div >
            <br />
            <br />
            <br />

            {/* comments */}


            <div class="row">

                <ul id="list_comment" class="col-md-12">

                    <li class="box_result row">

                        <div id={props.post._id} class="result_comment col-md-11">

                            {/* <div id={props.post._id} style={{ display: "none" }} className="commentsContainer">
                                {
                                    comments.map((comment, idx) => {
                                        return <CommentCard key={idx} comment={comment} />
                                    })
                                }
                            </div> */}
                        </div>
                    </li>
                </ul>
            </div >
        </>
    )


}

const mapStateToProps = state => (
    {
        token: state.auth.token,
        loggedIn: state.auth.loggedIn
    }
);
const mapDispatchToProps = { checkIsLogedIn };
export default connect(mapStateToProps, mapDispatchToProps)(PostCard);
// export default connect(mapStateToProps)(PostCard);

// export default PostCard;





//  return(
//         <>
//         <div className="newPostContainer" style={{border:"1px solid gray",marginTop:"40px"}}>
//         <div className="postHeader" style={{display:"flex",marginLeft:"15px"}}>
//         <img src={`${img}`} alt="Avatar" style={{width:"30px",borderRadius:"50%",padding:"5px 0px"}}/>
//         <p style={{fontSize:"75%",fontWeight:"bold",marginLeft:"3px"}}>{props.post.author.name}</p>
//         <p style={{fontSize:"75%",fontWeight:"bold",marginLeft:"3px",color:"gray"}}>{props.post.createdTime}</p>
//         </div>
//         <div className="postContent">
//             {/* <h3 className="postTitle">this is just a title</h3> */}
//             <p className="postText">{props.post.content}</p>
//             <PostImage images={props.post.imageUrl}/>
//         </div>
//             <hr/>
//         <div className="commentsCountContainer">
//             <p>{props.post.comments.length} comments</p>
//             <button className="btnPostControle" style={{position:"relative"}} onClick={(e)=>{toggleControlePanel(e,props.post._id)}}><CommentIcon/></button>
//         </div>
//         <hr/>
//         <div className="postInputContainer">
//             <form onSubmit={(e)=>{handleAddComment(e,props.post._id)}}>
//             <input name="commentContent" placeholder="Add a comment..."></input>
//             <button type="submit" className="btnPostControle" style={{position:"relative"}}><AddIcon/></button>
//             </form>
//         </div>
//         <hr/>
//         <div id={props.post._id} style={{display:"none"}} className="commentsContainer">
//             {
//                 comments.map((comment,idx)=>{
//                     return <CommentCard key={idx} comment={comment}/>
//                 })
//             }
//         </div>
//         </div>
//         </>
//     )