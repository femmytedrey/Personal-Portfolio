import React from 'react'
import { Col } from 'react-bootstrap'

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className='proj-imgbx'>
        <img src={imgUrl} alt='project'/>
        <div className='proj-txtx'>
          <h4>{title}</h4>
          <span>{description}</span>
          <p>Click <a href={url} target="_blank" rel="noopener noreferrer">here</a> to preview</p>
        </div>
      </div>
    </Col>
  )
}
