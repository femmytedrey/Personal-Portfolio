import React from 'react'
import { Col } from 'react-bootstrap'

export const ProjectCard = ({ title, description, imageUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className='proj-imgbx'>
        <img src={imageUrl} alt='project'/>
        <div className='proj-txtx'>
          <h4>{title}</h4>
          <span>{description}</span><br></br>
          <a href={url} target="_blank" rel="noopener noreferrer">Preview</a>
        </div>
      </div>
    </Col>
  )
}
