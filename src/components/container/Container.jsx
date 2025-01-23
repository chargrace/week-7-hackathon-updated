import Flashcard from "../flashcard/Flashcard.jsx";
import { useState } from "react";

function Container () {
    const [values, setValues]= useState(Array(3)).fill([
     {question: "Gato", answer: "Cat", id: 1 },
     {question: "Caballo", answer: "Horse", id: 2 },
     {question: "Perro", answer: "Dog", id: 3 }
    ]);



    return (
        <div>
            {values.map((flashcard, index) => (
                <Flashcard key={flashcard.id} flashcard={flashcard} />
            ))}
        </div>
    )
}

export default Container;

{/* <Flashcard value={values[0]}/>
<Flashcard value={values[1]}/>
<Flashcard value={values[2]}/> */}