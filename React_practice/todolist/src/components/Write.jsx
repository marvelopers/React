import React, { useState } from 'react';

const Write = () => {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        console.log(event.target.value);
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <h1>Write</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleChange} />
                <button type="submit"> input </button>
            </form>
        </div>
    )
}

export default Write;