import classes from './Header.module.css'

function Header () {
    return (
    <div className={classes.header}>
        <img className={classes.react} src="./images\react-image.png" alt="react logo" height="50px" width="50px"></img>
        <h1 className={classes.heading}>Flashcard Library</h1>
        <h3 className={classes.subheading}>Subheading</h3>
    </div>
    )
}

export default Header;