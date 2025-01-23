import { useState } from 'react';
import classes from './Flashcard.module.css';

//Question / answer from State array is the prop for each flashcard

//Create flashcard React component
function Flashcard({ flashcard }) {
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
            <div className={`${classes.flashcard} ${isFlipped ? classes.flipped : classes.unFlipped}`} onClick={handleClick}>
                {isFlipped ? flashcard.answer : flashcard.question}
            </div>
        </>
    )
};

export default Flashcard


// Children of each flashcard:
// - Question or answer <p>