import { useState } from 'react';

//Question / answer from State array is the prop for each flashcard

//Create flashcard React component
function Flashcard(onClick) {
    //add state for flip and init as unflipped. Unflipped = false, displays question.
    const [isFlipped, setIsFlipped] = useState(false)
    let currentText = "";
    // //create a handleClick function
    function handleClick() {
        setIsFlipped(true);
        currentText = isFlipped ? "answer" : "question";

        // if (isFlipped === false) {
        //     currentText = "question";
        //     setIsFlipped(!isFlipped);
        // } else {
        //     setIsFlipped(!isFlipped);
        //     return currentText = "answer";
        // }
        // alert('clicked');
        if (currentText === "clicked") { return currentText = "notClicked" }
        else { return currentText = "notClicked" }
    }
    //onClick, the card's class changes from question to answer and the text / style changes
    //returns isFlipped and either question or answer

    //return each flashcard as a div for now
    return (
        <>
            <button onClick={handleClick}>{handleClick()}</button>
        </>
    )
};

export default Flashcard


// Children of each flashcard:
// - Question or answer <p>