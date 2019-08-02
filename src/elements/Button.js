import styled from 'styled-components';

export const Button = styled.button`
    color: #fff;
    padding: 1.2rem 2rem;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    transition: all 0.2s;
    margin-left: 1rem;
    background-color: ${props => props.primary ? "#26ae62" : "#191919"};

    &:hover {
        background-color: ${props => props.primary ? "#229c58" : "#292727"};
    }
`;

export const FeaturedButton = styled(Button)`
    margin-left: 0;
    width: 100%;
`

export const SearchButton = styled(Button)`
    margin-left: 0;
`