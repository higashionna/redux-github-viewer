import React, { useMemo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../../styles/variable'
import IssueItem from '../organisms/IssueItem'

const borderStyle = `1px solid ${colors.border}`

const Container = styled.div`
  padding: 16px;
  margin-top: 128px;

  h1 {
    text-align: center;
  }
`

const Content = styled.div`
  overflow: scroll;
`

const Table = styled.table`
  border: ${borderStyle};
  border-radius: 6px;
  .outline {
    width: 140rem;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
    min-width: 10rem;
    border-bottom: ${borderStyle};
  }

  th:first-child,
  td:first-child {
    min-width: auto;
  }

  .no-divider {
    border-bottom: 0;
  }
`

const IssueTemp = (props) => {
  const list = useMemo(() => {
    const values = Object.values(props.data)
    return values
  }, [props.data])
  return (
    < Container >
      <Content>
        <Table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th></th>
              <th>ステータス</th>
              <th>作成者</th>
              <th>作成日付</th>
              <th>更新日付</th>
            </tr>
          </thead>
          <tbody>
            {list.length ? (
              list.map((item) => {
                return (
                  <IssueItem
                    key={item.id}
                    issue={item}
                  />
                )
              })
            ) : (
                <></>
              )}
            {!list.length && (
              <tr>
                <td colSpan="6">データがありません</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Content>
    </Container >
  )
}


IssueTemp.propTypes = {
  data: PropTypes.object
}

export default IssueTemp
