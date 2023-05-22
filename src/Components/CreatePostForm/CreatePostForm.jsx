import React, { useState } from 'react';
import './CreatePostForm.css'


const AddFormEntry = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: post
        };
        props.addNewPost(newPost);
    }

    return ( 
        <form className='form-horizontal' onSubmit={handleSubmit}>
            <div className='form-group'>
                <label class="control-label col-sm-2" for="nameid">Name</label>
                <div class="col-sm-10">
                    <input type='text' value={name} id="nameid" onChange={(event) => setName(event.target.value)}/>
                </div>
            </div>
            <div className='form-group'>
                <label>Post</label>
                <input type='text' value={post} onChange={(event) => setPost(event.target.value)}/>
                <button type='submit'>Create</button>
            </div>
        </form>
     );
}
 
export default AddFormEntry;