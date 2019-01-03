import React, { Component } from 'react'
import ParagraphList from '../ParagraphList/ParagraphList';
import './FrontPage.scss';

let data = require("../../data.json");

class FrontPage extends Component {
  state = {
    paragraphs: data
  }

  renderList() {
    if (this.props.authenticated === true) {
      return (
      <ParagraphList data={data} />
      )
    } else {
      return (
      <h2>Please login to view the paragraphs!</h2>
      )
    }
  }


  render() {
    return (
      <div className="wrapper">
        <h1>WELCOME TO THE HARRY POTTER FAN WEBSITE OF FOUR RANDOM PARAGRAPHS!</h1>
        <div className="list">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

export default FrontPage;
