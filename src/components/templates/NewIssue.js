import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TextField from '../../components/atoms/TextField'
import TextArea from '../../components/atoms/TextArea'
import Button from '../../components/atoms/Button'
import LabelButton from '../../components/atoms/LabelButton'

const Container = styled.div`
  max-width: 598px;
  margin: auto;
  a {
    width: auto;
  }

  textarea {
    min-height: 150px;
  }
`

const Title = styled.h2`
  padding: 0 8px;
`

const Form = styled.div`
  padding: 32px 0;
  padding-bottom: 16px;
`
const Field = styled.div`
  padding: 16px;
`
const Label = styled.label`
  display: block;
  padding: 8px 0;
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 8px;
`

const NewIssue = ({ onClose }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    return (
        <Container>
            <Title>Issueを追加</Title>
            <Form>
                <Field>
                    <Label>タイトル</Label>
                    <TextField
                        value={title}
                        placeholder="タイトルを入力してください"
                        onChangeText={setTitle}
                    />
                </Field>
                <Field>
                    <Label>説明</Label>
                    <TextArea
                        value={description}
                        placeholder="説明を入力してください"
                        onChangeText={setDescription}
                    />
                </Field>
            </Form>
            <Footer>
                <Button type="primary">
                    作成
                </Button>
                <LabelButton onClick={onClose}>閉じる</LabelButton>
            </Footer>
        </Container>
    )
}

NewIssue.propTypes = {
    onClose: PropTypes.func
}

export default NewIssue
