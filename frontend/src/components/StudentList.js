import { useEffect, useState } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const url = 'http://localhost:8000/students';


  const getStudentsList = async () => {
    const response = await fetch(url);
    const students = await response.json();
    console.log(students);
    setStudents(students);
  }

  useEffect(() => {
    getStudentsList();
  }, [])

  return (
    <>
      {students.length > 0 ? (
        <>
          <h2>Student List</h2>
          {students.map(student => 
            <div key={student.id}>
              <h3>Name: {student.name}</h3>
              <p>Age: {student.age}</p>
              <hr />
            </div>
          )}
        </>
      ) : (
        <h1>Loading</h1>
      )}

    </>
  )
}

export default StudentList