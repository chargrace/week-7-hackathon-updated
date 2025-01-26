
import FlashcardAnimated from "../flashcard/FlashcardAnimated.jsx";
import { useState } from "react";
import classes from "./Container.module.css";
import Form from "../form/Form.jsx";

function Container() {
    const [values, setValues] = useState([
        { question: "Gato", answer: "Cat", id: 1 },
        { question: "Caballo", answer: "Horse", id: 2 },
        { question: "Perro", answer: "Dog", id: 3 }
    ]);

    //mvp 3 plan
    //create flashcard functionality
    //updater function
    function submitFormToAddFlashcard(input) {
        console.log("hello");
        let newFlashcard = {
            question: input.Question,
            answer: input.Answer,
            id: values.length + 1
        };
        //adds user input into array objects
        const updatedArray = [...values, newFlashcard];
        console.log(updatedArray);
        setValues(updatedArray);
    }

    //mvp 4 plan delete flashcard button
    //delete function
    //pass down function as a prop to flashcards
    //on click button on flashcard calls function

    // const [deleteFlashcard, setDeleteFlashcard] = useState("");

    function handleFlashcardDeletion (id) {
        const newArrayWithoutDeleted = values.filter((flashcard) => flashcard.id !== id)
        console.log(newArrayWithoutDeleted);
        setValues(newArrayWithoutDeleted);

    }



    return (
        <>
            <div className={classes.container}>
                {values.map((flashcard) => (
                    <FlashcardAnimated key={flashcard.id} flashcard={flashcard} handleFlashcardDeletion={handleFlashcardDeletion} />
                ))}
                <Form submitFormToAddFlashcard={submitFormToAddFlashcard}/>
            </div>
        </>
    )
}

export default Container;

