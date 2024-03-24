import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Searcher() {
  return (
    <div className="relative w-1/3">
      <div className="flex items-center px-6 py-3 rounded-full bg-background-200">
        <FontAwesomeIcon icon={faSearch} className="text-gray-400 mr-2" />
        <input
          type="text"
          className="w-full text-sm text-gray focus:outline-none bg-transparent"
          placeholder="Search Item, Collection and Account.."
        />
      </div>
    </div>
  );
}
