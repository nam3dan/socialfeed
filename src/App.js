import './App.css';
import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import PostList from './Components/PostLIst/PostList';
import NavBar from './Components/NavBar/NavBar';

function App() {

  const [posts, setPosts] = useState([{name:"Every Cool DevCode Instructor",post:"Wow, this Project looks great. I think this should get an A!"}])

  function addNewPost(post){
    let tempPosts = [post, ...posts];
    setPosts(tempPosts);
  }
  return (
  <body>
    <div className="App">
      <div>
        <NavBar/>
      </div>
      <div>
        <CreatePostForm addNewPost={addNewPost}/>
      </div>
      <div>
        <PostList entries={posts}/>
      </div>
      
      
    </div>
  </body>
  );
}

export default App;
