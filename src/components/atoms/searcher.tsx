export default function Searcher() {
  return (
    <div className="relative w-1/3">
      <input
        type="text"
        className="w-full text-sm text-white py-2 pl-10 pr-4 rounded-full bg-background-200 focus:outline-none focus:border-accent border-2 border-transparent transition-colors duration-300"
        placeholder="Search Item, Collection and Account.."
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="h-5 w-5 text-grey"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 0a8 8 0 015.938 13.406l5.374 5.373-1.414 1.414-5.372-5.373A8 8 0 118 0zm0 2a6 6 0 100 12A6 6 0 008 2z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
