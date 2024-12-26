import { SearchProps } from "../../types/types";

export const SearchBar: React.FC<SearchProps> = ({ filterTasks }) => {
  const handleQuery = (ev: React.ChangeEvent<HTMLInputElement>) => {
    filterTasks(ev.target.value);
  };

  console.log('search bar is rendering');
  
  return (
    <input
      className="input"
      onChange={handleQuery}
    ></input>
  );
};
