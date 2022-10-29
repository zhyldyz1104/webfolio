import { styled } from "@mui/material";

const WhiteButton = (props) => {
  return <Button>{props.children}</Button>;
};
export default WhiteButton;
const Button = styled("button")`
  background-color: white;
  width: auto;
  max-height: 65px;
  padding: 20px 40px;
  border-radius: 3em;
  font-family: "Epilogue";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  border: none;
  text-align: center;
  color: #000000;
  cursor: pointer;
  :hover{
    background-color: #e2e0e0;
  }
`;
