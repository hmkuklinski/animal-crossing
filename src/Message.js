import {React, useState} from "react";
import MessageBoard from "./MessageBoard";

export default function Message(){
    const [messages, setMessages]= useState([]);
    const [formData, setFormData]= useState(
        {
            name: "",
            message: ""
        }
    );
    function updateData(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        } );
    }

    function finalizeMessage(e){
        e.preventDefault();
        
        if (!formData.name || !formData.message) {
            alert("Please fill in both fields.");
            return;
        }

        setMessages([...messages, { name: formData.name, message: formData.message }]);
        setFormData({
            name: "",
            message: ""
        });
        console.log(messages);
        document.getElementById('form-div').style.display="none";
        document.querySelector('.btn-add-msg').style.display='block';
        document.querySelector('.message-board-container').style.display= 'block';
        document.querySelector('.message-container').querySelector('.title').innerHTML = `<h1>Message Board</h1>` ;
    }
    function showMessageForm(){
        document.getElementById('form-div').style.display= 'block';
        document.querySelector('.btn-add-msg').style.display='none';
        document.querySelector('.message-board-container').style.display= 'none';
        document.querySelector('.message-container').querySelector('.title').innerHTML = `<h1>Add a Message</h1>`;
    }
    const addButton= (
        <div className="add-message">
            <div><button className="btn-add-msg" onClick={showMessageForm}>Add Message</button></div>
        </div>
    );
    return (
        <div className="message-container">
            <div className="title"><h1>Message Board</h1></div>
            <MessageBoard messages={messages} button={addButton}/>
            <div id="form-div">
                <form className="message-form" onSubmit={finalizeMessage}>
                    <label htmlFor="name" aria-placeholder="Enter your name">Name</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={updateData}></input>

                    <label htmlFor="message" placeholder="Enter your message">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={updateData} maxLength={40}></textarea>

                    <button type="submit" >Send Message</button>
                </form>
            </div>
            
            
        </div>
    );
}