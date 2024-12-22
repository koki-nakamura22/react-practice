import React from "react";
import { useSearchParams } from "react-router-dom";

const List: React.FC = () => {
    const [params] = useSearchParams();
    const q1 = params.get('q1');
    const q2 = params.get('q2');
    const q3 = params.get('q3');
    return (
        <>
            <div>q1: {q1}</div>
            <div>q2: {q2}</div>
            <div>q3: {q3}</div>
        </>
    )
}

export default List;
