import React from "react";
import { ADD_ORDER } from "../../utils/mutations";
import { useMutation } from '@apollo/client';

const DisplayParts = ({parts, category}) => {
    
    const computerPartsArray = [];

    const [addOrder, {data}] = useMutation(ADD_ORDER)

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        await addOrder({
            variables: {products: computerPartsArray}
        })

        computerPartsArray.length = 0
    }
    
    const selectPart = (event,id) => {
       if (event.target.textContent === 'Add') {
            event.target.textContent = 'Remove'
            event.target.style.backgroundColor = "red";
            computerPartsArray.push(id)
            console.log(computerPartsArray)
       } else {
        event.target.textContent = 'Add'
        event.target.style.backgroundColor = "green";
        computerPartsArray.pop(id)
        console.log(computerPartsArray)
       }
    }
    
    function capitalize(str) {
        var i, frags = str.split('_');
        for (i=0; i<frags.length; i++) {
          frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
        }
        return frags.join(' ');
      }



    return (
        <form onSubmit={handleFormSubmit}>
            {category.map(category => (
                        <div>
                            <h2 className="parts-h2">{capitalize(category.name)}</h2>
                            <div className="display-flex">
                            {parts.map(parts => {
                                if(parts.category === category.name)
                                
                                return  <div className="container-1">
                                        <h3 className="parts-h3">{parts.name}</h3>
                                        <p className="parts-p">{parts.description} </p>
                                        <p className="parts-p">${parts.price}</p>
                                        <button className="btn-parts" type="button" onClick={function(event){ selectPart(event, parts._id);}}>Add</button>
                                    </div>              
                                }
                            )}
                             </div>
                        </div>
            ))}
            <button className="btn col-12 col-md-3" type="submit">
                Create
            </button>
        </form>
    )
}

export default DisplayParts