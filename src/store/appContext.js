import React from 'react';
import { render } from '@testing-library/react';

export const Context = React.createContext(null);

export class ContextWrapper extends React.Component {
    constructor() {
        super();
        this.state = {
            store: {
                todos: ["Make the bed", "Take out the trash"],
                name: 'Javier',
                people: {},
            },
            actions: {
                addTask: title => {
                    this.setState({
                        store: Object.assign(
                            this.state.store,
                            { todos: this.state.store.todos.concat(title) }
                        )
                    })
                },
                setName: e => {
                    this.setState({
                        store: Object.assign(
                            this.state.store,
                            { name: e.target.value }
                        )
                    });
                },
                getPeople: url => {
                    fetch(url)
                    .then(resp => resp.json())
                    .then(data =>{ 
                        console.log(data);
                        this.setState({
                            store: Object.assign(
                                this.state.store,
                                { people: data }
                            )
                        });
                    });
                }
            }
        };
    }
    componentDidMount(){
        this.state.actions.getPeople("https://swapi.co/api/people/");
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}