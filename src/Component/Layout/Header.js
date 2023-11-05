import React,{Fragment} from "react";
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
    return(
        <Fragment>
        <header className={classes.header}>
            <h1> Cafe World!</h1>
            <HeaderCartButton/>
        </header>
        
    </Fragment>
    )

}
export default Header;