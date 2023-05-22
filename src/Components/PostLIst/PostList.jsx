const PostList = (props) => {
    return ( 
        props.entries.map((entry) => {
            return(
                <div>
                    <h2>{entry.name}</h2>
                    <p>{entry.post}</p>
                </div>
            );
        })
     );
}
 
export default PostList;