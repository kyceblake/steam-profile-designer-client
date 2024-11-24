import { useState } from "react";
import SparklesIcon from "../../Assets/SparklesIcon";
import SearchInput from "../../Components/HeaderSearchInput/HeaderSearchInput";
import { Title, Wrapper } from "./styles";
import { useEffect } from "react";

function Header() {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const debouncer = setTimeout(() => {
      setSearchValue(searchValue);
    }, 10000);
    return () => clearTimeout(debouncer);
  }, [searchValue]);

  return (
    <Wrapper>
      <Title>
        <SparklesIcon className="icon" />
        <div className="text"> The Points Shop </div>
      </Title>

      <SearchInput inputValue={searchValue} setInputValue={setSearchValue} />
    </Wrapper>
  );
}

export default Header;
