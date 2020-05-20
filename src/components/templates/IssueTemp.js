import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../../styles/variable'
import IssueItem from '../organisms/IssueItem'
import TextField from '../atoms/TextField'
import Button from '../atoms/Button'
import NewIssue from './NewIssue'

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

const Header = styled.div`
  display: flex;
  align-items: center;
`

const Heading = styled.div``

const SearchForm = styled.div`
  padding: 8px 16px;
  display: flex;
  width: 100%;

  .text-field-container {
    width: 100%;
  }
`

const Action = styled.div`
  display: flex;
`

const IssueTemp = ({ data, showModal, removeModal }) => {
  const [searchWord, setSearchWord] = useState('')
  const list = useMemo(() => {
    const values = Object.values(data)
    if (!searchWord) {
      return values
    }
    return values.filter((value) => value.title.includes(searchWord))
  }, [data, searchWord])

  const onNew = () => showModal({ component: <NewIssue onClose={removeModal} /> })

  return (
    < Container >
      <Header>
        <Heading>
          <h2>Issue</h2>
        </Heading>
        <SearchForm>
          <TextField
            value={searchWord}
            placeholder="issue名で検索"
            onChangeText={setSearchWord}
          />
        </SearchForm>
        <Action>
          <Button type="primary" onClick={onNew}>
            New
          </Button>
        </Action>
      </Header>
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
  data: PropTypes.object,
  showModal: PropTypes.func
}

export default IssueTemp
