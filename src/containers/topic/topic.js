import React, { PropTypes } from 'react'

import { Col, Row, Table } from 'react-bootstrap'

import { Link } from 'react-router'

import { addIndex, find, map, propEq } from 'ramda'

import { connect } from 'react-redux'

const indexedMap = addIndex(map)

const mapPropsToState = (state) => {
  return {
    cards: state.reducer.cards,
    topics: state.reducer.topics
  }
}

const renderRows = (cards) => indexedMap((card, idx) => {
  const path = `/topic/${card.topicId}/card/${card.id}`

  return <tr key={idx}>
    <td><Link to={path}>{card.word}</Link></td>
  </tr>
}, cards)

const Topic = ({ cards, topics, params, dispatch }) => {
  const finder = find(propEq('id', parseInt(params.topicId, 10)))

  return <Row>
    <Col xs={12}>
      <h1>{finder(topics).title}</h1>

      <Table striped bordered condensed hover>
        <tbody>{renderRows(cards)}</tbody>
      </Table>
    </Col>
  </Row>
}

Topic.propTypes = {
  cards: PropTypes.array.isRequired,
  topics: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

const TopicContainer = connect(mapPropsToState)(Topic)

export default TopicContainer
