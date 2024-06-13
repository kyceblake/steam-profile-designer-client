import s from "./Header.module.css";
import SparklesIcon from "../../assets/SparklesIcon";
import SearchInput from "../SearchInput/SearchInput";

export default function Header() {
  return (
    <div className={s.Header}>
      <a className={s.title}>
        <SparklesIcon className={s.icon} />
        <div className={s.text}> The Points Shop </div>
      </a>

      <SearchInput className={s.search} debounceDelay={500} />
    </div>
  );
}
