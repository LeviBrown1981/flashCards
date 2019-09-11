import React from "react";
import { Button, Table, } from "semantic-ui-react";


const FlashCard = (props, { questions, answers, remove, }) => (
  <Table.Row>
    <Table.Row key={ id } remove={remove} > 
      <Table.HeaderCell>Question</Table.HeaderCell>
      <Table.Cell>{ props.flashcard.Question }</Table.Cell>
      <Table.HeaderCell>Answers</Table.HeaderCell>
      <Table.Cell>{ props.flashcard.Answer }</Table.Cell>
        <Table.Cell>
        <Button color ="blue">
          Delete
        </Button>
      </Table.Cell>
    </Table.Row>  
);

export default FlashCard;