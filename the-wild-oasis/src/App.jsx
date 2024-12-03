import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";







const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading>Hello World</Heading>
        <Button>Check In</Button>
        <Button>Check Out</Button>

        <Input type="number" placeholder="number of guests" />
      </StyledApp>
    </>
  );
}
