import React, { useState } from 'react';
import './CreatePostForm.css'


const AddFormEntry = (props) => {

    var loadDate = new Date()

    const [name, setName] = useState('');
    const [post, setPost] = useState('');
    const [date,setDate] = useState(loadDate.toLocaleDateString("en-US"));

    function handleSubmit(event) {
        event.preventDefault();
        var now = new Date()
        setDate(now.toLocaleDateString("en-US"))
        let newPost = {
            name: name,
            post: post,
            date: date,
        };
        props.addNewPost(newPost);
    }

    return ( 
        <div className='container-fluid'>
            <form class="border-box" onSubmit={handleSubmit}>
                <div>
                    <div className='offset-lg-3'>
                        <label for="nameid">Name</label>
                        <input type='text' value={name} id="nameid" style={{'margin-left': '1em','border-radius':'25px'}} size={40} onChange={(event) => setName(event.target.value)}/>
                    </div>
                    <div className='offset-lg-3'>
                        <label for="postid">Post</label>
                        <input type='text' value={post} id="postid" style={{'margin-left': '1.65em','border-radius':'25px', 'line-height':'5em'}} size={40} onChange={(event) => setPost(event.target.value)}/>
                        <button className="btn btn-primary" type='submit' style={{'margin-left': '1em','boarder-radius': '25px'}}>Create</button>
                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default AddFormEntry;