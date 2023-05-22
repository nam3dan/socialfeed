import React from "react";
import './PostList.css';

const PostList = (props) => {

    return ( 
        props.entries.map((entry) => {
            return(
                <div className="container-fluids">
                    <div className="border-boxy">
                        <div className="post-content">
                            <h4><strong>{entry.name}</strong></h4>
                            <p></p>
                            <p>{entry.post}</p>
                        </div>
                    </div>
                </div>
            );
        })
     );
}
 
export default PostList;