import React from "react";
import { Table, } from "semantic-ui-react"
import FlashCard from "./FlashCard";



const FlashCards = ({FlashCards, remove }) => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        FlashCards.map( card => (
          <FlashCard flashcard={card}/>
          ))
        }
    </Table.Body>
  </Table>
);

export default FlashCards;