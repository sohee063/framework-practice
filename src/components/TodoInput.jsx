import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const TodoInput = ({ getData }) => {
  useEffect(() => {
    getData();
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    const textContent = e.target.text.value;
    await axios.post(`http://localhost:4001/todo`, {
      textContent
    });
    getData();
  };

  return (
    <>
      <TextForm onSubmit={addTodo}>
        <TextInput name="text" />
      </TextForm>
      <AddText>쁠러스</AddText>
    </>
  );
};

const TextForm = styled.form`
  text-align: center;
`;

const TextInput = styled.input`
  font-size: 3rem;
`;

const AddText = styled.button`
  padding: 15px 30px;
  border: 3px solid #726a95;
  background-color: transparent;
  /* color: #726a95; */
  text-transform: 5px;
  letter-spacing: 5px;
  position: relative;
  transition: all 0.4s;
  overflow: hidden;

  :focus {
    outline: none;
  }

  ::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: gold;
    top: 100%;
    left: 0;
    transition: all 0.4s;
    z-index: -1;
  }

  :hover::before {
    transform: translateY(-100%);
  }

  :hover {
    color: #726a95;
  }
`;

export default TodoInput;
