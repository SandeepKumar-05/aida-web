

function Food(){

    const food1 = "Pizza";
    const food2 = "Burger";
    const list = ["Pizza", "Burger", "Fries"];

    return(
        <>
            <ul>
                <li>Apple</li>
                <li>{food1}</li>
                <li>{food2}</li>
                {list.map((food, index) => (
                    <li key={index}>{food}</li>
                ))}
            </ul>
        </>
    )
}


export default Food;