import styled from 'styled-components';

export const Input = styled.input`
    padding: 0.5em;
    margin-bottom: 0.5em;
    border: none;
    width: 90%;
    border-bottom: ${props => props.hasError === undefined ? '2px solid #e0e0eb' : '2px solid red'};
    outline: none;
`;
export const Button = styled.button`
    background: blue;
    border-radius: 12px;
    border: none;
    color: white;
    padding: 1em 4.5em;
    width: 90%;
    margin-top: 100px;
`;
export const Error = styled.div`
    color: red;
`;

export const SendGrid = styled.div`
    margin: 0.5em;
    display: grid;
`;