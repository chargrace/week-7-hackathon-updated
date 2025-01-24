import classes from './Form.module.css';

function Form() {
    return (
        <div className={classes.form}>
            <input className={classes.input} name="Question" defaultValue="Add a New Question" />
            <input className={classes.input} name="Answer" defaultValue="Add the New Answer" />
        </div>
    )
}

export default Form;