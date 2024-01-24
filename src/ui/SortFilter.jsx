import { useSearchParams } from "react-router-dom";

const options = [
  {
    name: "Price low to high",
    value: "ascending",
  },
  {
    name: "Price high to low",
    value: "descending",
  },
];

function SortFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e) {
    searchParams.set("sort", e.target.value);
    console.log(e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div>
      <select
        className="border-solid border-2 border-gray-30 rounded py-1 px-3"
        onChange={handleChange}
      >
        <option disabled>Filter</option>
        {options.map((each) => (
          <option key={each.name} value={each.value}>
            {each.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortFilter;
