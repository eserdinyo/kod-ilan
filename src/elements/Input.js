import styled from 'styled-components';

export const Input = styled.input`
    margin-bottom: 10px;
    padding: 6px;
    border: 1px solid $color-green;
    border-radius: 3px;
    font-size: 14px;
    width: 20%;

    &::placeholder {
      color: rgba(179, 176, 176, 0.767);
    }
`

export const SearchInput = styled.input`
    margin-right: 2rem;
    border-radius: 3px;
    padding: 2rem;
    border: none;
    width: 100%;
    outline: none;
`

export const SearchSelect = styled.select`
    margin-right: 2rem;
    border-radius: 3px;
    padding: 2rem;
    border: none;
    width: 100%;
    outline: none;
`