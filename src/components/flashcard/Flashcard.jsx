import { useState } from 'react';
import classes from './Flashcard.module.css';

//Question / answer from State array is the prop for each flashcard

//Create flashcard React component
function Flashcard(onClick) {
    //add state for flip and init as unflipped. Unflipped = false, displays question.
    const [isFlipped, setIsFlipped] = useState(false)
    // //create a handleClick function
    //onClick, the card's class changes from question to answer and the text / style changes
    //returns isFlipped and either question or answer
    function handleClick() {
        setIsFlipped(!isFlipped);

    }

    //return each flashcard as a div for now
    return (
        <>
            <div className={classes.flashcard}>
                <button onClick={handleClick}>{isFlipped ? "answer" : "question"}</button>
            </div>
        </>
    )
};

export default Flashcard


// Children of each flashcard:
// - Question or answer <p>