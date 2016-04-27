import React, { PropTypes } from 'react'

import { Grid } from 'react-bootstrap'

import Header from './header.jsx'

import axios from 'axios'

axios.get('http://localhost:3004/topics/1/cards/4')
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err))

const App = ({ children }) => <div>
  <Header/>
  <Grid>{children}</Grid>
</div>

App.propTypes = {
  children: PropTypes.node.isRequired
}

export default App
