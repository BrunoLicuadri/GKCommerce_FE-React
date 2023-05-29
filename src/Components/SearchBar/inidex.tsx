import { useState } from 'react';
import './styles.css';

type Props={
    onSearch: Function
}

export default function SearchBar({onSearch}: Props) {

    const [text, setText] = useState("");

    function handleSubmit (event:any){
        event.preventDefault();
        onSearch(text);
    }

    function handleChange(event:any){
        setText(event.target.value);
    }

    function handleResetClick(){
        setText("");
        onSearch(text);
    }

    return (
        <form onSubmit={handleSubmit} className="gkc-search-bar">
            <button type="submit">🔎︎</button>
            <input
            value= {text} 
            type="text" 
            placeholder="Nome do Produto"
            onChange={handleChange} />
            <button onClick={handleResetClick}>🗙</button>
        </form>
    );
}
