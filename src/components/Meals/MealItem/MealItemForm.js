import { useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    const [amountValid, setAmountValid] = useState(true);

    const amountInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = + enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setAmountValid(false)
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Miqdar"
                input={{
                    id: "amout",
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1",
                }}
            />
            <button>Əlavə et</button>
            {!amountValid && <p>Zəhmət olmasa miqdarı daxil edin (1 - 5).</p>}
        </form>
    );
};

export default MealItemForm;
