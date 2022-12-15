import React, {useState} from "react";
import {useDispatch} from "react-redux";
import { changeWord } from "../store/action/changeWord";

export default (props) => {
    const [word, setWord] = useState(props.w);
    const dispach = useDispatch();
    
    const handler = (e) => {
        e.preventDefault();
        dispach(changeWord(word))
        console.log(word);
        
    }
    return<form onSubmit={handler}>
        <input type="text" value={word} onChange={e => setWord(e.target.value)}/>
        <button type="submit"> Change word</button>
    </form>
}