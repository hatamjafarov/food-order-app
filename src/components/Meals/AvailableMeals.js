import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
        id: "m1",
        name: "Tikə-kabab",
        description: "Toyuq və mal əti",
        price: 5.99,
    },
    {
        id: "m2",
        name: "Üç bacı dolması",
        description: "Pomidor, bibər və badımcan",
        price: 9.5,
    },
    {
        id: "m3",
        name: "Dovğa",
        description: "Azərbaycanın milli yeməyi",
        price: 3.99,
    },
    {
        id: "m4",
        name: "Göyərti küküsü",
        description: "Sağlam və yaşıl qidalanma",
        price: 4.5,
    },
    {
        id: "m5",
        name: "Piti",
        description: "Azərbaycan və Türkiyənin milli yeməyi",
        price: 9.9,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
