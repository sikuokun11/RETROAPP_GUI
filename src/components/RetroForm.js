import React, {useState} from 'react';

function RetroForm() {
    const [input, setInput] = useState('');
    return (
        <div>
            <form className="todo-form">
                <input type="text" placeholder="Add a todo" value={input} name="text" className='todo-input' onChange ={()=>setInput(0)}/>
                <button className='todo-button'>ADD</button>
            </form>
        </div>
    )
}
export default RetroForm
