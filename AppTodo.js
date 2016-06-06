/**
 * This is the entry point for your experience that you will run on Exponent.
 *
 * Start by looking at the render() method of the component called
 * FirstExperience. This is where the text and example components are.
 */
'use strict';

let React = require('react-native');
const {
    Component,
    AppRegistry,
    Navigator
} = React;

import TaskList from './TaskList';
import TaskFrom from './TaskFrom';
import store from './todoStore';
class TodoApp extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = store.getState();
        store.subscribe(()=> {
            return this.setState(store.getState());
        })
    }

    onCancel() {
        console.log("on cancelled");
        this.nav.pop();
    }

    onDone(todo) {
        console.log("todo done", todo.task);
        store.dispatch({
            type: 'DONE_TODO',
            todo: todo
        });
    }

    onAdd(task) {
        console.log('a task is added', task);
        // this.state.todos.push({task});
        // this.setState({todos: this.state.todos});
        store.dispatch(
            {
                type: 'ADD_TODO',
                task
            }
        );
        this.nav.pop();
    }

    onToggle() {
        store.dispatch({
            type: 'TOGGLE_STATE'
        });
    }

    renderScene(route, nav) {
        switch (route.name) {
            case 'taskform':
                return (
                    <TaskFrom onCancel={this.onCancel.bind(this)}
                              onAdd={this.onAdd.bind(this)}/>
                );
            default:
                return (
                    <TaskList
                        onToggle={this.onToggle.bind(this)}
                        filter={this.state.filter}
                        onDone={this.onDone.bind(this)}
                        onAddStarted={this.onAddStarted.bind(this)}
                        filteredTodos={this.state.filteredTodos}/>
                );
        }
    }

    onAddStarted() {
        this.nav.push({
            name: 'taskform'
        })
    }

    configureScene() {
        return Navigator.SceneConfigs.FloatFromBottom;
    }

    render() {
        return (
            <Navigator
                configureScene={this.configureScene}
                initialRoute={{name:"tasklist",index:0}}
                ref={((nav)=>{
                        this.nav=nav;
                        })}
                renderScene={this.renderScene.bind(this)}
            />
        );
    }

}

export default TodoApp;
