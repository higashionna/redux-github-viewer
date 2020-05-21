import React, { useCallback } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import { colors } from '../../styles/variable'

const statusLabel = {
  0: 'Open',
  1: 'Close'
}

const Container = styled.tr`
  cursor: pointer;

  &:hover {
    background: ${colors.hoverRow};
  }
`

const IssueItem = ({ issue, onClick }) => {
  const { id, title, status, createBy, createdAt, updatedAt } = issue
  const _onClick = useCallback(
    () => {
      onClick(issue)
    },
    [issue, onClick]
  )
  return (
    <Container key={id} onClick={_onClick}>
      <td>
        <input type="checkbox" />
      </td>
      <td className="outline">{title}</td>
      <td>{statusLabel[status]}</td>
      <td>{createBy}</td>
      <td>{dayjs(createdAt).format('MM-DD-YYYY')}</td>
      <td>{dayjs(updatedAt).format('MM-DD-YYYY')}</td>
    </Container>
  )
}

IssueItem.propTypes = {
  issue: PropTypes.object,
  onClick: PropTypes.func
}

export default IssueItem
