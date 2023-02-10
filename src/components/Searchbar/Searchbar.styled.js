import styled from "@emotion/styled";


export const Header = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #555555;
width: 100%;
height: 55px;
position: sticky;
top: 0px;
left: 0px;
z-index: 3;
border: solid 2px orange ;
`;


export const Form = styled.form`
display: flex;
justify-content: center;
width: 100%;
`;


export const Input = styled.input`
width: 250px;
height: 25px;
border: solid 1px orange ;
`;


export const Button = styled.button`
width: 80px;
border: solid 1px orange ;
margin-left: 5px;
cursor: pointer;
`;
