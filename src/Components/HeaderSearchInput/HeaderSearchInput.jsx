import { IoIosSearch } from "react-icons/io";
import { Wrapper } from "./style";

function HeaderSearchInput({ inputValue, setInputValue }) {
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

export default HeaderSearchInput;
