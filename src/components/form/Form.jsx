import classes from './Form.module.css';

//two input boxes and 1 button

function Form() {
    //onclick button it submits query to create new flashcard


    return (
        <div className={classes.form}>
            <input className={classes.input} name="Question" placeholder="Add a New Question" />
            <input className={classes.input} name="Answer" placeholder="Add the New Answer" />
            <button className={classes.button}>Submit</button>
        </div>
    )
}

export default Form;