import React, { type ReactElement, type FormEvent } from "react";
import { type StudentMark } from "./types";

export const AddStudent = ({
  addStudent,
}: {
  addStudent: (student: Omit<StudentMark, "id">) => void;
}): ReactElement => {
  const [newStudent, setNewStudent] = React.useState("");

  const onAddStudent = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const newStudentData: Omit<StudentMark, "id"> = {
      fullName: newStudent,
      mark: undefined,
    };
    addStudent(newStudentData);
    setNewStudent("");
  };

  return (
    <form onSubmit={onAddStudent}>
      <div className="flex items-center mt-4 px-10">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-4 flex-1"
          type="text"
          placeholder="Enter new student name"
          value={newStudent}
          onChange={(event) => {
            setNewStudent(event.target.value);
          }}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Student
        </button>
      </div>
    </form>
  );
};
