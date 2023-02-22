import React, { useState, useEffect, useRef } from 'react'
import moment from 'moment'
import parse from 'html-react-parser'

const Comments = ({ slug }) => {

  const [comments, setComments] = useState([])

  useEffect(() => {
    // getComments(slug)
  }, [])
  

  return (
    <h1>Comments</h1>
  )
}

export default Comments