/* eslint-disable react/prop-types */
const Student = ({ student }) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return (
    <li className="text-gray-800">
      {student.highlighted ? (
        <>
          {student.highlighted.start}
          <span className="text-blue-500 font-bold">
            {student.highlighted.match}
          </span>
          {student.highlighted.end}
        </>
      ) : (
        student.name
      )}
    </li>
  );
};

export default Student;
