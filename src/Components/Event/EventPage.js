import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function EventPage() {
  
  const url = "https://sonabyss.herokuapp.com"
  const [Event, setEvent] = useState([])

  axios.get(url).then(Response=>{})
  return (
    <div>
      <h1>This is the EventPage</h1>
    </div>
  )
}

export default EventPage
