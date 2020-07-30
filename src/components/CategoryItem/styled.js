import styled from "styled-components";

export const Container = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${(props) =>
    props.active == props.id ? "#fff" : "#aaee9a"};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin-right: 10px;
  cursor: pointer;
  transition: all ease 0.3s;
`;

export const CategoryImage = styled.img`
  height: 55px;
  width: 55px;
`;
