import { Input } from "../ui/input";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="relative w-full max-w-md">
      <FaSearch className="absolute top-1/2 right-6 -translate-y-1/2 text-gray-500 z-10" />
      <Input
        className=" bg-slate-200 border-2 border-slate-100 rounded-full w-full min-h-12 pl-5"
        placeholder="Search through all movies..."
      />
    </div>
  );
};

export default Search;
