import React, { Component } from "react";

console.log(this);

class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
        this.createTasksName = this.createTasksName.bind(this);
        this.createTasksEmail = this.createTasksEmail.bind(this);
    }

    delete(key){
        this.props.delete(key)
    }

    createTasks(item) {
        return <li onClick={() => this.delete(item.key)} ///*Удаление!!!*/
                   key={item.key}>{item.name}</li>
    }
    createTasksName(item) {
        return <li onClick={() => this.delete(item.key)} ///*Удаление!!!*/
                   key={item.key}>{item.email}</li>
    }
    createTasksEmail(item) {
        return <li onClick={() => this.delete(item.key)} ///*Удаление!!!*/
                   key={item.key}>{item.text}</li>
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
        var listItemsName = todoEntries.map(this.createTasksName);
        var listItemsEmail = todoEntries.map(this.createTasksEmail);

        return (

            <ul className="theList">
                <div className="containerAllExit">
                <div className="containerExit">
                    <div className="theAllList">
                    {listItems }
                        </div>
                    <div className="theAllList">
                    {listItemsName}
                    </div>

                    <div className="theAllList">
                    {listItemsEmail}
                    </div>
                </div>
                </div>
            </ul>
        );
    }
}

export default TodoItems;
