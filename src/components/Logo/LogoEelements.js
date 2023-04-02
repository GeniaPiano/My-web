import styled from "styled-components";
import { Link } from 'react-scroll';

export const LogoLinked = styled(Link)`
  justify-self: center;
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  background-image: linear-gradient(to right, #c1acf1, #6b36da);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:hover {
    background-image: linear-gradient(to left, #c1acf1, #6b36da);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transform: scale(102%);
  }

` ;


