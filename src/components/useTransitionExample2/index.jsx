import { useId, useState, useTransition } from "react";
import { listName } from "./data";
import StudentList from "./StudentList";

const List = () => {
  const [search, setSearch] = useState("");
  const [filterText, setFilterText] = useState("");
  const [isPending, startTransition] = useTransition();
  const id = useId();

  const data = listName.map((student) => {
    const index = student.name.toLowerCase().indexOf(filterText.toLowerCase());

    if (index === -1) {
      return { name: student.name, highlighted: null };
    }

    return {
      name: student.name,
      highlighted: {
        start: student.name.slice(0, index),
        match: student.name.slice(index, index + filterText.length),
        end: student.name.slice(index + filterText.length),
      },
    };
  });

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    startTransition(() => {
      setFilterText(value);
    });
  };

  return (
    <>
      <label htmlFor={id}>Search name: </label>
      <input
        type="text"
        id={id}
        name="name"
        value={search}
        onChange={handleSearch}
        placeholder="Type a name..."
        className="border px-2 py-1 rounded-md"
      />
      {isPending ? <div>Loading...</div> : <StudentList data={data} />}
    </>
  );
};

export { List as UseTransitionExample2 };
