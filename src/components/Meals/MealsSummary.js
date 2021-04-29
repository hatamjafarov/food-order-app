
import classes from './MealsSummary.module.css'

const MealSummary = () => {
    
    return(
        <section className={classes.summary}>
            <h2>Əsl ləzzətin ünvanı</h2>
            <p>
                Aşağıdakı siyahıdan istədiyiniz məhsulu seçin və ləzzətdən zövq alın. 
            </p>
            <p>Bütün məhsullar yüksək keyfiyyətlə hazırlanıb.</p>
        </section>
    )
}

export default MealSummary