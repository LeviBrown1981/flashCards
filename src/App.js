import React, { Component } from 'react';
import {Container, Header, Button, Icon, Segment, } from "semantic-ui-react";
import FlashCards from "./FlashCards";
import FlashCardForm from "./FlashCardForm";
import './App.css';

class App extends Component {
  state={
    FlashCards: [
      { id:1, Question: "Batman or Superman?", Answer: "Batman, obviously..."}, 
      { id:2, Question: "Pizza or Burrito?", Answer: "Both are amazing"},
      { id:3, Question: "Dpl or no Dpl?", Answer: "Dpl, duh!"},
    ],
    showForm: true,
  };
  toggleForm = () => this.setState({ showForm: !this.state.showForm, });

  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };
  
  addFlashCard = (FlashCardData) => {
    let FlashCard = { id: this.getId(), ...FlashCardData, };
    this.setState({ FlashCards: [FlashCard, ...this.state.FlashCards], });
  };
  
  removeFlashCard = (id) => {
    const FlashCards = this.state.FlashCards.filter( FlashCard => {
      if (FlashCard.id !== id)
        return FlashCard
    });
    this.setState({ FlashCards: [...FlashCards], });
  };

  render() {
    const { showForm, } = this.state;
    return (
      <Container style={{ paddingTop: "25px" }}>
        <Header as="h1">Flash Cards</Header>
        <br />
        <Segment basic>
          <Button icon color="blue" onClick={this.toggleForm}>
            <Icon name={this.state.showForm ? 'angle double up' : 'angle double down'} />
          </Button>
          { showForm ? <FlashCardForm add={this.addFlashCard} /> : null }
        </Segment>
        <br />
        <FlashCards FlashCards={this.state.FlashCards} remove={this.removeFlashCard} />
      </Container>
    );
  }
}

export default App;
