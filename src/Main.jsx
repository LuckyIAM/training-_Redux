import React from "react";
import { useSelector} from "react-redux";
import Form from "./componens/wordForm";

export default () => {
    const data = useSelector((state) => state.wordReducer);

    return <>
    <h3>{data}</h3>
    <Form w={data}/>
    </>
}