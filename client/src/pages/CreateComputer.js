import React from "react";
import DisplayParts from "../components/DisplayParts";
import { useQuery } from "@apollo/client";
import { QUERY_USER_AND_PRODUCTS } from "../utils/queries";

const CreateComputer = () => {
    const {loading, data} = useQuery(QUERY_USER_AND_PRODUCTS)

    const parts = data?.products || [];
    const theCategory = data?.categories || [];

    return (
        <main className="container-2">
            <DisplayParts
            parts={parts}
            category={theCategory}></DisplayParts>
        </main>
    )
}

export default CreateComputer