import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import classes from './Flashcard.module.css';

function FlashcardAnimated({ flashcard, handleFlashcardDeletion}) {
    const [isFlipped, setIsFlipped] = useState(false);



    function handleClick() {
        setIsFlipped(!isFlipped);
    }

    function handleDeletion () {
        handleFlashcardDeletion(flashcard.id)
    }

    return (
        <ReactCardFlip
            isFlipped={isFlipped}
            flipDirection="horizontal" // You can change this to "vertical" if you want a different flip direction
        // containerClassName={classes.cardContainer} // Optionally apply a wrapper class for styles
        >
            <div
                className={classes.unFlipped}
                onClick={handleClick}
            >
                <button className={classes.buttonUnFlipped} onClick={handleDeletion}>❌</button>
                <img src='images/unflipped-emoji.png' alt="Thinking emoji" />
                {flashcard.question}
            </div>

            <div
                className={classes.flipped}
                onClick={handleClick}
            >

            <button className={classes.buttonFlipped} onClick={handleDeletion}>❌</button>
            <img src='images/flipped-emoji.png' alt="Mind-blown emoji" />
                {flashcard.answer}
            </div>
        </ReactCardFlip>
    );
}

export default FlashcardAnimated;
