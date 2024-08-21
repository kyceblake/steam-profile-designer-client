import { useState } from "react";
import SparklesIcon from "../../Assets/SparklesIcon";
import SearchInput from "../../Components/SearchInput/SearchInput";
import { Title, Wrapper } from "./styles";
import { useEffect } from "react";

function Header() {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const debouncer = setTimeout(() => {
      setSearchValue(searchValue);
      console.log(searchValue);
    }, 500);
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
