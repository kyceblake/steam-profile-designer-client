import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setValue } from "../../redux/slices/searchSlice";

import { IoIosSearch } from "react-icons/io";

export default function SearchInput({ debounceDelay, className }) {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const delayInputTimer = setTimeout(() => {
      dispatch(setValue(inputValue));
    }, debounceDelay);

    return () => clearTimeout(delayInputTimer);
  }, [inputValue, debounceDelay]);

  return (
    <div className={className}>
      <input
        type="text"
        placeholder="Search for items..."
        tabIndex="0"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <IoIosSearch />
    </div>
  );
}
