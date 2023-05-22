const PostList = (props) => {
    return ( 
        props.entries.map((entry) => {
            return(
                <div className="container-fluid">
                    <div className="border-box">
                        <div className="post-content">
                            <h4><strong>{entry.name}</strong></h4>
                            <p>{entry.post}</p>
                        </div>
                    </div>
                </div>
            );
        })
     );
}
 
export default PostList;