import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postal: true,
    });

    const nameInput = useRef();
    const streetInput = useRef();
    const postalInput = useRef();
    const cityInput = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInput.current.value;
        const enteredStreet = streetInput.current.value;
        const enteredPostal = postalInput.current.value;
        const enteredCity = cityInput.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostlaIsValid = isFiveChars(enteredPostal);

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postal: enteredPostlaIsValid,
        });

        const formIsValid =
            enteredNameIsValid &&
            enteredPostlaIsValid &&
            enteredCityIsValid &&
            enteredStreetIsValid;


        if (!formIsValid) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            city: enteredCity,
            street: enteredStreet,
            postal: enteredPostal
        })
    };

    const nameControl = `${classes.control} ${
        formInputsValidity.name ? "" : classes.invalid
    }`;
    const streetControl = `${classes.control} ${
        formInputsValidity.street ? "" : classes.invalid
    }`;
    const postalControl = `${classes.control} ${
        formInputsValidity.postal ? "" : classes.invalid
    }`;
    const cityControl = `${classes.control} ${
        formInputsValidity.city ? "" : classes.invalid
    }`;

    return (
        <div className={classes.formDiv}>
            <form onSubmit={confirmHandler}>
                <div className={nameControl}>
                    <label htmlFor="name">Adınız</label>
                    <input type="text" id="name" ref={nameInput} />
                    {!formInputsValidity.name && (
                        <p>Adınızı düzgün daxil edin!</p>
                    )}
                </div>
                <div className={streetControl}>
                    <label htmlFor="street">Küçəniz</label>
                    <input type="text" id="street" ref={streetInput} />
                    {!formInputsValidity.street && (
                        <p>Küçəni düzgün daxil edin!</p>
                    )}
                </div>
                <div className={postalControl}>
                    <label htmlFor="postal">Poçt indeksi</label>
                    <input type="text" id="postal" ref={postalInput} />
                    {!formInputsValidity.postal && (
                        <p>Poçt indeksi 5 rəqəmli olmalıdır!</p>
                    )}
                </div>
                <div className={cityControl}>
                    <label htmlFor="city">Şəhər</label>
                    <input type="text" id="city" ref={cityInput} />
                    {!formInputsValidity.city && (
                        <p>Şəhər adını düzgün daxil edin!</p>
                    )}
                </div>
                <div className={classes.actions}>
                    <button type="button" onClick={props.onCancel}>
                        İmtina
                    </button>
                    <button className={classes.submit}>Təsdiqlə</button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
