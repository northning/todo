import React, { Component } from 'react';
import HeaderComponent from './components/HeaderComponent';
import FormSubmit from './components/FormSubmit';
import List from './components/List';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        todoes: [
            {    id: 1, name: "shopping", complete: false    },
            {    id: 2, name: "swimming", complete: false    }
        ],
        message: ""
    };

    this.onChangeMessage=this.onChangeMessage.bind(this);
    this.onSubmitMessage=this.onSubmitMessage.bind(this);
  }

  onChangeMessage(e) {
    this.setState({message: e.target.value});
  }
  onSubmitMessage(e) {
    //ป้องกันการเปลี่ยนหร้า
    e.preventDefault();
    let oldTodoes = this.state.todoes;
    let todoLengthID = this.state.todoes.length;
    let lastID = this.state.todoes[todoLengthID - 1].id;
    let newMessage = {id: lastID + 1, name: this.state.message, complete: false };
    oldTodoes.push(newMessage);
    this.setState({todoes:oldTodoes})
  }

  render() {
    return (
      <div
      style={{
        borderColor: "#e12c6a",
        borderWidth: 2,
        borderStyle: "solid",
        borderRadius: 4,
        width: 1024,
        margin: "auto",
        marginTop: 20
      }}
    >
      <HeaderComponent/>

      <List todoes={this.state.todoes}/>

      <FormSubmit onChangeMessage={this.onChangeMessage} onSubmitMessage={this.onSubmitMessage}/>

    </div>
    );
  }
}

export default App;
