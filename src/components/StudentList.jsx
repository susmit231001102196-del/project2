import StudentCard from './StudentCard'

function StudentList({ students }) {
  return (
    <section className="student-list" id="students">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </section>
  )
}

export default StudentList
