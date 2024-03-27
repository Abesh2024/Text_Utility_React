import React, { useState } from 'react';

const Utility = () => {
    const [text, setText] = useState("");
    const [isUppercase, setIsUppercase] = useState(false);

    const onChangeHandler = (e) => {
        setText(e.target.value);
    }

    const toggleCase = () => {
        if (isUppercase) {
            setText(text.toLowerCase());
        } else {
            setText(text.toUpperCase());
        }
        setIsUppercase(!isUppercase);
    }

    const clearText = ()=> {
        setText(""); // Clear the text by setting it to an empty string
        setIsUppercase(false); // Reset the case to lowercase
    }

    return (
        <>
            <h2>TextUtils - Word Counter, Character Counter, Remove Extra Space</h2>
            <textarea name="" id="" cols="80" rows="12" value={text} onChange={onChangeHandler}
            style={{padding:'1rem', }}
            ></textarea>
            <div>
            <button onClick={toggleCase}>Uppercase/LowerCase</button>
            <button onClick={clearText}>Clear Text</button>
            </div>

        </>
    );
}

export default Utility;
