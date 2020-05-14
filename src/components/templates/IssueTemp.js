import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  padding: 16px;
  margin-top: 128px;

  h1 {
    text-align: center;
  }
`

const IssueTemp = (props) => {
  const values = Object.values(props.data)
  console.log(values)
  return (
    < Container >
      <h1>IssueTemp</h1>
    </Container >
  )
}


IssueTemp.propTypes = {
  data: PropTypes.object
}

export default IssueTemp
