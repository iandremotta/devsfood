import styled from "styled-components";

export const Container = styled.div`
  background: #136713;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  height: 70px;
  width: auto;
`;

export const SearchInput = styled.input`
  border: 0;
  border-radius: 25px;
  width: ${(props) => (props.active ? 300 : 0)}px;
  height: 50px;
  outiline: 0;
  background-image: url("/assets/search.png");
  background-size: 30px 32px;
  background-color: white;
  background-repeat: no-repeat;
  background-position: 10px center;
  padding-left: 45px;
  transition: all ease 0.2s;
  cursor: pointer;
  font-size: 16px;
  &:focus {
    cursor: text;
  }
`;
