import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
import Auth from "../../utils/auth";

const PartsList = () => {

    const _id = Auth.getProfile().data._id

    const {data} = useQuery(QUERY_USER)

    console.log(data)

    return (
        <div class='dropdown card mb-3 container-1'>
            <span>
                <>Computer</> <>Name Amount</>
            </span>
            <div className="dropdown-content card">
                <div>
                    <h2>Part Name</h2>
                    <p>Description</p>
                    <p>Amount</p>
                </div>

                <div>
                    <h2>Part Name</h2>
                    <p>Description</p>
                    <p>Amount</p>
                </div>

                <div>
                    <h2>Part Name</h2>
                    <p>Description</p>
                    <p>Amount</p>
                </div>

                <div>
                    <h2>Part Name</h2>
                    <p>Description</p>
                    <p>Amount</p>
                </div>
            </div>
        </div>
    )
}

export default PartsList