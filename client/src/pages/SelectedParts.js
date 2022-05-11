import React from "react";
import SelectedParts from '../components/SelectedParts';
import { useQuery } from "@apollo/client";
import { ADD_ORDER } from "../utils/mutations";

const SelectedParts = () => {
    const {loading, data} = useQuery(ADD_ORDER)

    const parts = data?.products || [];
    const theCategory = data?.categories || [];

    return (
        <main className="container-2">
            <SelectedParts
            parts={parts}
            category={theCategory}></SelectedParts>
        </main>
    )
}

export default SelectedParts