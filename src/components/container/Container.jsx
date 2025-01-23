import Flashcard from "../flashcard/Flashcard.jsx";
import { useState } from "react";

function Container () {
    return (
        <div>
            <Flashcard />
            <Flashcard />
        </div>
    )
}

export default Container;