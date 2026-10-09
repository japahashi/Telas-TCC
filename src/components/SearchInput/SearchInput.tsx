import type { ReactNode } from "react";
import IconSlot from "../IconSlot/IconSlot";
import "./SearchInput.css";

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  icon?: ReactNode;
  className?: string;
}

function SearchInput({ placeholder, value, onChange, icon, className = "" }: SearchInputProps) {
  return (
    <label className={"bloom-search " + className}>
      <IconSlot icon={icon} label="search" size="1.2vw" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange && onChange(event.target.value)}
      />
    </label>
  );
}

export default SearchInput;
