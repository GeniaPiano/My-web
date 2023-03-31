import styled from 'styled-components';
import {Link} from 'react-scroll';

export const ButtonTransparent = styled(Link)`
  color: #a28ad9;
  display: flex;
  background: transparent;
  text-decoration: none;
  padding: 20px 40px;
  border-radius: 20px;
  border: solid 2px  #a28ad9;
  cursor: pointer;


  &:hover {
    transition: all 0.2s ease-in-out;
    background-color:#a28ad9 ;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    font-size: 15px;
    text-align: center;
    padding: 14px 20px;
  }

`

