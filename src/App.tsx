import React, { type ReactElement } from "react";
import { AddStudent } from "./AddStudent";
import { Table } from "./components/Table";
import { TableBody } from "./components/Table/TableBody";
import { TableHead } from "./components/Table/TableHead";
import { TableHeaderCell } from "./components/Table/TableHeaderCell";
import { studentsMarksMock } from "./mocks/studentsMarks";
import { Mark } from "./Mark";
import type { StudentMark } from "./types";

function App(): ReactElement {
  const [studentsMarks, setStudentsMarks] = React.useState(studentsMarksMock);

  const removeMark = (markId: string): void => {
    console.log({ markId });
    setStudentsMarks((studentsMarks) => studentsMarks.filter(({ id }) => id !== markId));
  };

  const addStudent = (newStudent: Omit<StudentMark, "id">): void => {
    setStudentsMarks((studentsMarks) => [
      ...studentsMarks,
      { ...newStudent, id: `${studentsMarks.length}` },
    ]);
  };

  return (
    <div className="border-collapse w-full bg-white rounded-lg shadow-md pb-10">
      <div className="flex flex-col items-center justify-center">
        <Table>
          <TableHead>
            <TableHeaderCell>Student Name</TableHeaderCell>
            <TableHeaderCell>Marks Obtained</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableHead>
          <TableBody>
            {studentsMarks.map(({ fullName, id }, index) => (
              <Mark
                onRemove={removeMark}
                fullName={fullName}
                id={id}
                // Technical dept: index must not be used as key ! nor f(index)
                // use data.id instead
                // eslint-disable-next-line
                key={index}
              />
            ))}
          </TableBody>
        </Table>
        <AddStudent addStudent={addStudent} />
      </div>
    </div>
  );
}

export default App;
