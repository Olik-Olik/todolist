import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";
let maxId = 1;

class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items:[],
            name:[],
            email:[],
        };

    this.addItem =this.addItem.bind(this);
    this.deleteItem =this.deleteItem.bind(this);

    }
    addItem(e) {
        if    (this._inputElement.value !== ""
            && this._inputElementEmail.value !== ""
            && this._inputElementName.value !== "") {
            let newItem = {
                name: `Name ${this._inputElementName.value}`,
                email: `Email ${this._inputElementEmail.value}`,
                text: `Task ${this._inputElement.value}`,
                key: maxId++
            };
            console.log(newItem.name);
            console.log(newItem.text);
            console.log(newItem.email);
            this.setState((old) => {
                return {
                    items: old.items.concat(newItem),
                    name: old.items.concat(newItem.name),
                    email: old.items.concat(newItem.email)
                };
            })

            this._inputElement.value = "";
            this._inputElementEmail.value = "";
            this._inputElementName.value = "";
        }
        e.preventDefault();
    }

    deleteItem(key){
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems

        });
        console.log( this.setState.items);
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header" >
                    <form onSubmit={this.addItem}>
                        <input ref={(aName) => this._inputElementName = aName} placeholder="enter name" >
                        </input>
                        <input ref={(aEmail) => this._inputElementEmail = aEmail} placeholder="enter email">
                        </input>
                        <input ref={(aTask) => this._inputElement = aTask} placeholder="enter task">
                        </input>
                        <button type="submit">Добавить</button>
                    </form>
                </div>

                <TodoItems entries={this.state.items}
                           delete={this.deleteItem}/>

            </div>

        );
    }
}

export default TodoList;

