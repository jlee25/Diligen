import React from 'react';
import { Link } from 'react-router-dom';
import './ParagraphList.scss';


const ParagraphList = (props) => {
  return props.data.documents.map((paragraph, index) => {
    return (
      <li key={index + 1} className="listImages">
        <Link to={`/documents/${index + 1}`} className="header">
          <img src={require(`../../assets/${index + 1}.jpg`)} alt="Pictures of crests" />
          <p>Paragraph {index + 1}</p>
        </Link>
      </li>
    )
  })
}

export default ParagraphList