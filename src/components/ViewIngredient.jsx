
import React, { useState } from "react";
import { useParams } from "react-router-dom";
// const ViewIngredient = () => {
//     const [post, SetPost] = useState({});
//     return <h1>Single Post</h1>
// }
function ViewIngredient({ inventory }) {
    const { extra } = useParams();
    if (inventory[extra] == undefined) {
        return null
    }
    console.log(inventory);
    let ord = extra;

    if (inventory[extra].vegan) {
        ord += ", är veganskt"
    }
    if (inventory[extra].gluten) {
        ord += ", är gluten"
    }
    if (inventory[extra].lactose) {
        ord += ", är laktos"
    }
    // ord += ", fanny är en jävla vegan"
    return (
        <div>
            {/* <h1> {extra}  </h1> */}
            <h1> {ord}  </h1>

        </div>
    )
}








export default ViewIngredient;