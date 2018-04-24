import React from 'react';
import ToDoItems from './ToDoItems'
import ClearAllItems from './Clearallitems';
//import ToDoItems from './ToDoItems';

export default class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    addListItem(e) {
        e.preventDefault();

        const newItem = {text: this.refs.inputElement.value, checked: false};
        if (this.refs.inputElement.value.trim() === "") {
            return alert("Ops...nu skrev du bara whitespaces eller ingenting alls. Ajabaja, det får man inte.");
        }else {
            const newState = this.state.items.concat(newItem);
            this.setState({
                items: newState
            });
        }
        this.refs.inputElement.value = "";
    }

    checkCheckBox(i) {
        const newState = this.state.items.map((item, index) => i === index ? {...item, checked: !item.checked } : item);
        this.setState({items: newState});
    }

    removeItems(index) {
        const newState = this.state.items.filter((item, i) => index !== i );
        this.setState({items: newState});
    }

    removeDoneItems() {
        const doneItems = this.state.items.filter((item) => {
            if (!item.checked) {
                return item;
            }
        });
        this.setState({
            items: doneItems
        });
    }

    render() {
        return (
            <div className="main">
                <h2>Min Att-Göra-Lista</h2>
                <form onSubmit={(e) => this.addListItem(e)}>
                    <input type="text" ref="inputElement" />
                    <button className="send">Klicka på mig</button>
                </form>
                <ToDoItems entries={this.state.items}
                           onToggle={(i) => this.checkCheckBox(i)}
                           remove={(index) => this.removeItems(index)}/>
                <ClearAllItems removeDone={(item) => this.removeDoneItems(item)}/>
            </div>
        )
    }
}



