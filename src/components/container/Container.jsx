import Flashcard from "../flashcard/Flashcard.jsx";
import FlashcardAnimated from "../flashcard/FlashcardAnimated.jsx";
import { useState } from "react";
import classes from "./Container.module.css";
import Form from "../form/Form.jsx";

function Container() {
    const [values, setValues] = useState(Array(3)).fill([
        { question: "Gato", answer: "Cat", id: 1 },
        { question: "Caballo", answer: "Horse", id: 2 },
        { question: "Perro", answer: "Dog", id: 3 }
    ]);



    return (
        <>
            <div className={classes.container}>
                {values.map((flashcard, index) => (
                    <FlashcardAnimated key={flashcard.id} flashcard={flashcard} />
                ))}
                <Form />
            </div>
        </>
    )
}

export default Container;

{/* <Flashcard value={values[0]}/>
<Flashcard value={values[1]}/>
<Flashcard value={values[2]}/> */}