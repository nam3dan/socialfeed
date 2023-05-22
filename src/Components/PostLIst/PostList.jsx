import React, { useState } from 'react';
import './PostList.css';

const PostList = (props) => {

    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);
 
    const [activeBtn, setActiveBtn] = useState("none");

    const handleLikeClick = () => {
        if (activeBtn === "none") {
          setLikeCount(likeCount + 1);
          setActiveBtn("like");
          return;
        }
     
        if (activeBtn === 'like'){
          setLikeCount(likeCount - 1);
          setActiveBtn("none");
          return;
        }
     
        if (activeBtn === "dislike") {
          setLikeCount(likeCount + 1);
          setDislikeCount(dislikeCount - 1);
          setActiveBtn("like");
        }
      };

      const handleDisikeClick = () => {
        if (activeBtn === "none") {
          setDislikeCount(dislikeCount + 1);
          setActiveBtn("dislike");
          return;
        }
       
        if (activeBtn === 'dislike'){
          setDislikeCount(dislikeCount - 1);
          setActiveBtn("none");
          return;
        }
     
        if (activeBtn === "like") {
          setDislikeCount(dislikeCount + 1);
          setLikeCount(likeCount - 1);
          setActiveBtn("dislike");
        }
      };

    return ( 
        props.entries.map((entry) => {
            return(
                <div className="container-fluids">
                    <div className="border-boxy">
                        <div className="post-content">
                            <h4><strong>{entry.name}</strong></h4>
                            <p></p>
                            <p>{entry.post}</p>
                            <div className="btn-container">
                                <button
                                className={`btn ${activeBtn === "like" ? "like-active" : ""}`}
                                onClick={handleLikeClick}
                                >
                                <span className="material-symbols-rounded"></span>
                                Like {likeCount}
                                </button>
                            
                                <button
                                className={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`}
                                onClick={handleDisikeClick}
                                >
                                <span className="material-symbols-rounded"></span>
                                Dislike {dislikeCount}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
     );
}
 
export default PostList;