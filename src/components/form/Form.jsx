import { useState } from 'react';
import classes from './Form.module.css';
// import submitFormToAddFlashcard from '../container/Container.jsx'

//two input boxes and 1 button

function Form({ submitFormToAddFlashcard }) {
    //onclick button it submits query to create new flashcard
    // //pass down create flashcard updater function, create function
    //with onclick that renders new flashcard
    const [userQuestion, setUserQuestion] = useState("");
    const [userAnswer, setUserAnswer] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (userQuestion && userAnswer) {
            submitFormToAddFlashcard({Question: userQuestion, Answer: userAnswer})
            setUserQuestion("");
            setUserAnswer("");
        } else {
            alert("Make sure to fill in both fields")
        }

    }


    return (
        <div>
            <form className={classes.form} onSubmit={handleSubmit}>
            <input className={classes.input} name="Question" placeholder="Add a New Question" value={userQuestion}  onChange={(e) => setUserQuestion(e.target.value)}/>
            <input className={classes.input} name="Answer" placeholder="Add the New Answer" value={userAnswer}  onChange={(e) => setUserAnswer(e.target.value)}/>
            <button className={classes.button} type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;