import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './fire';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import ToolBar from './components/header/ToolBar';
import styled from 'styled-components';
import theme from './theme';
import QuoteList from './components/quotes/QuoteList'

const Wrapper = styled.div`
  display: grid;
  
  grid-template-areas:
                "header  header header"
                "content content content";
  grid-gap: 10px;
  
`;

const Content = styled.div `
  grid-area: content;
  padding: 20px;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.addMessage = this.addMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = { 
      quotes: [],
      text: ''
    };
  }
  componentWillMount(){
      /* Create reference to messages in Firebase Database */
      let messagesRef = fire.database().ref('quotes').orderByKey().limitToLast(100);
      messagesRef.on('child_added', snapshot => {
        /* Update React state when message is added at Firebase Database */
        let quotes = { text: snapshot.val(), id: snapshot.key };
        this.setState({ quotes: [quotes].concat(this.state.quotes) });
      })
    }
  addMessage(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    fire.database().ref('quotes').push( this.state.text );
    //this.inputEl.value = ''; // <- clear the input
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }


  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Wrapper>
          <ToolBar />
          <Content>
            <TextField id="quote-input" type="text" onChange={this.handleChange} value={this.state.text}/>
            <Button raised color="primary" onClick={this.addMessage}>Send</Button>
            
            <QuoteList quotes={this.state.quotes}/>
              
            
          </Content>
        </Wrapper>
      </MuiThemeProvider>
    ); 
  }
}

export default App;
