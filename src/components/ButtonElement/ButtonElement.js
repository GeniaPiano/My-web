import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
  color: #010606;
  display: flex;
  background-image: linear-gradient(to right, #a28ad9, #7538f6);
  text-decoration: none;
  padding: 10px 30px;
  border-radius: 20px;
  cursor: pointer;
 

  &:hover {
    transition: all 0.2s ease-in-out;

    color: #fff;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }



`;

