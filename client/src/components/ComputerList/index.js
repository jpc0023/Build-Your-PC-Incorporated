import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
import Auth from "../../utils/auth";

const PartsList = () => {

    const _id = Auth.getProfile().data

    const test = [
        {
            name: "Montech X3 Mesh 6pcs, 3 x 140mm& 3 x 120mm Fixed RGB Lighting Fans ATX Mid-Tower PC Gaming Case",
            description: "a desktop case that is from Montech",
            price: 152.61,
            category: "Case"
        },
        {
            name: "LIAN LI PC-O11 Dynamic White Tempered Glass on the Front and Left Sides, Chassis Body SECC ATX Mid Tower Gaming Computer Case",
            description: "a desktop case that is from Lian",
            price: 242.97,
            category: "Case"
        },
        {
            name: "GameMax ATX Mid Tower Black / Grey Computer Case",
            description: "a desktop case that is from Gamemax",
            price: 214.63,
            category: "Case"
        }
    ]

    return (
        <div class='dropdown card mb-3 container-1'>
            <span>
                <>Computer Name</> <>Amount</>
            </span>
            <div className="dropdown-content card">
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