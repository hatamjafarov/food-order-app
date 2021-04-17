import React, { Fragment } from "react";

import mealsIMage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsIMage} alt="ReactMeals" />
            </div>
        </Fragment>
    );
};

export default Header;
