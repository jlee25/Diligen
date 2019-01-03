import React, { Component } from 'react'
import './Paragraph.scss';
import Highlighter from 'react-highlight-words';

let data = require("../../data.json");

class Paragraph extends Component {
  state = {
    searchText: "",
    textToHighlight: `${data.documents[this.props.match.params.id - 1]}`
  };

  
  renderParagraph() {
    const { searchText, textToHighlight } = this.state;
    const searchWords = searchText.split(/\s/).filter(word => word);
    if (data.documents[this.props.match.params.id - 1] === undefined) {
      return <div className="error">404 NOT FOUND!</div>;
    } else {
      return (
        <div className="paragraph">
          <Highlighter
            searchWords={searchWords}
            textToHighlight={textToHighlight}
            />
          <input
            name="searchTerms"
            placeholder="Search Words"
            onChange={event =>
              this.setState({
                searchText: event.target.value
              })
            }
            />
          <div className="buttons">
            {this.props.match.params.id !== "1" ? 
              <button onClick={this.handlePrev}>
              Previous
            </button> : null }
            {this.props.match.params.id !== "4" ?
              <button onClick={this.handleNext}>
                Next
              </button> : null }
          </div>
        </div>
      );
    }
  }
  
  handlePrev = () => {
    this.setState({
      textToHighlight: `${data.documents[this.props.match.params.id - 2]}`
    }, () => {
      this.props.history.push(`/documents/${this.props.match.params.id - 1}`)
    })
  }

  handleNext = () => {
    this.setState({
        textToHighlight: `${data.documents[this.props.match.params.id]}`
      }, () => {
        this.props.history.push(`/documents/${+this.props.match.params.id + 1}`);
      });
  }

  render() {
    return <div className="container">{this.renderParagraph()}</div>;
  }
}

export default Paragraph