import { memo } from "react";
import Student from "./Student";

/* eslint-disable react/prop-types */
const StudentList = ({ data }) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return (
    <ul className="mt-4 space-y-2">
      {data.map((student, index) => (
        <Student key={index} student={student} />
      ))}
    </ul>
  );
};

export default memo(StudentList);
