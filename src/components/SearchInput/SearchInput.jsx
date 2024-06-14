import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setValue } from "../../redux/slices/searchSlice";

import { IoIosSearch } from "react-icons/io";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;

  && svg {
    position: absolute;
    left: 5px;
    top: 6px;
  }

  && input {
    background: #393d43;
    border-radius: 5px;
    border: 0;
    outline: none;
    height: 28px;
    width: 300px;
    color: #c5cbd8;
    padding-left: 28px;
    box-sizing: border-box;
    font-style: italic;
  }
`;

export default function SearchInput({ debounceDelay }) {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const delayInputTimer = setTimeout(() => {
      dispatch(setValue(inputValue));
    }, debounceDelay);

    return () => clearTimeout(delayInputTimer);
  }, [inputValue, debounceDelay]);

  return (
    <Wrapper>
      <input
        type="text"
        placeholder="Search for items..."
        tabIndex="0"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <IoIosSearch />
    </Wrapper>
  );
}
