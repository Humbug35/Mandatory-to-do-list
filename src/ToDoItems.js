import React from 'react';

class ToDoItems extends React.Component {
    render() {
        let toDoEntries = this.props.entries;
        let listItems = toDoEntries.map(((item, index) => (
            <li key={item.key}>
                <input type="checkbox" checked={item.checked} onClick={() => this.props.onToggle(index)}/>
                <span className={item.checked ? 'doneTask' : 'notDoneTask'}>{item.text}</span>
                <button className="deleteOneItem" onClick={() => this.props.remove(index)}>Ta bort</button>
            </li>
        )));
        return (
            <ul className="myList">
                {listItems}
            </ul>
        )
    }
}

export default ToDoItems;

