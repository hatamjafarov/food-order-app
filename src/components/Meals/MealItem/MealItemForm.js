import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    return (
        <form className={classes.form}>
            <Input
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
        </form>
    );
};

export default MealItemForm;
