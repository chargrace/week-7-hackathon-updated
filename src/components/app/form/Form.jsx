import classes from './Form.module.css';

function Form() {
    return (
        <div className={classes.form}>
            <input name="Question" />
            <input name="Answer" />
        </div>
    )
}

export default Form;