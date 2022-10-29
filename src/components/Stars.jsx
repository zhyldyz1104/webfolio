import { styled } from "@mui/material";
import blue from "../assets/star.svg";
import yellow from "../assets/yellow.svg";
const Stars = (props) => {
  if (props.color === "BLUE") {
    return (
      <Div>
        <img src={blue} alt={blue} />
        <img src={blue} alt={blue} />
        <img src={blue} alt={blue} />
        <img src={blue} alt={blue} />
        <img src={blue} alt={blue} />
      </Div>
    );
  } else if (props.color === "YELLOW") {
    return (
      <Div>
        <img src={yellow} alt={blue} />
        <img src={yellow} alt={blue} />
        <img src={yellow} alt={blue} />
        <img src={yellow} alt={blue} />
        <img src={yellow} alt={blue} />
      </Div>
    );
  }
  return;
};
export default Stars;
const Div = styled("div")`
  width: 152px;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px 0px;
`;
