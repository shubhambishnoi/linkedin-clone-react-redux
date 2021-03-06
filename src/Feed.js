import React, { useState, useEffect } from 'react'
import "./Feed.css"
import CreateIcon from "@material-ui/icons/Create";
import InputOption from './InputOption'
import Post from './Post'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import {db} from './firebase'
import firebase from 'firebase';


function Feed() {
    const [input,setInput] = useState('')
    const [posts,setPosts] = useState([])

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
            )
    }, []);

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: 'Shubham bishnoi',
            description: 'testing',
            msg: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput("")
    }

    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)}type="text"/>
                        <button  onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="green"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#E7A33E"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="pink"/>
                </div>
            </div>
            <div className="feed_post">

                {posts.map(({id,data:{name,description,msg,photoUrl}}) => (
                    <Post 
                    key={id}
                    name={name}
                    description={description}
                    msg={msg}
                    photoUrl={photoUrl}
                    />
                ))}
            </div>
        </div>
    )
}

export default Feed
