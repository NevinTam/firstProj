import React, { useState } from 'react';

function EventForm({ onAddEvent, selectedDate}){
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!selectedDate){
            alert("Please select a date first")
            return;
        }

        onAddEvent({date: selectedDate, name, description});
        setName("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                VALUE={name}
                placeHolder="Enter Event Name"
                onChange = {(e) => setName(e.target.value)}
                required
            >

            </input>

            <input 
                type="text"
                VALUE={description}
                placeHolder="Enter Event Description"
                onChange = {(e) => setDescription(e.target.value)}
                required
            ></input>
            <button type = "submit">Add Event</button>
        </form>
    );
}

export default EventForm;