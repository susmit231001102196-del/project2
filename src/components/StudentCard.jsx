function StudentCard({ student }) {
  const { name, photo, course, semester, grade, status, email, club } = student

  return (
    <article className="student-card">
      <div className="card-top">
        <img src={photo} alt={name} className="student-photo" />
        <div className="student-meta">
          <span className={`status-badge ${status.toLowerCase()}`}>{status}</span>
          <h3>{name}</h3>
          <p>{course}</p>
        </div>
      </div>

      <div className="student-details">
        <div>
          <span>Semester</span>
          <strong>{semester}</strong>
        </div>
        <div>
          <span>Grade</span>
          <strong>{grade}</strong>
        </div>
        <div>
          <span>Club</span>
          <strong>{club}</strong>
        </div>
      </div>

      <div className="student-contact">
        <span>{email}</span>
      </div>
    </article>
  )
}

export default StudentCard
