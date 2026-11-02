import styled from "styled-components"

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  background: #fff;
  border: 1px solid #e3e3e3;
  border-radius: 10px;
`

export const Heading = styled.h3`
  margin: 0 0 8px;
  font-size: 22px;
  color: #222;
`

export const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 15px;

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`

export const Textarea = styled.textarea`
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 15px;
  min-height: 150px;
  resize: vertical;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`

export const Button = styled.button`
  align-self: flex-end;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  background: #3b82f6;
  color: #fff;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`