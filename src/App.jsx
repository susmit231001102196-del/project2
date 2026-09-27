import { useMemo, useState } from 'react'
import './App.css'
import Header from './components/Header'
import StudentList from './components/StudentList'
import Footer from './components/Footer'

const studentData = [
  {
    id: 1,
    name: 'Aisha Rahman',
    course: 'Computer Science',
    semester: '5th Semester',
    grade: 'A+',
    status: 'Active',
    email: 'aisha.rahman@campus.edu',
    club: 'Robotics Club',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: 'Daniel Kim',
    course: 'Business Administration',
    semester: '3rd Semester',
    grade: 'A',
    status: 'On Leave',
    email: 'daniel.kim@campus.edu',
    club: 'Marketing Team',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'Priya Nair',
    course: 'Electronics',
    semester: '6th Semester',
    grade: 'A+',
    status: 'Active',
    email: 'priya.nair@campus.edu',
    club: 'Innovation Lab',
    photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    name: 'Lucas Martin',
    course: 'Mechanical Engineering',
    semester: '4th Semester',
    grade: 'B+',
    status: 'Active',
    email: 'lucas.martin@campus.edu',
    club: 'Cycling Club',
    photo: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 5,
    name: 'Maya Patel',
    course: 'Psychology',
    semester: '2nd Semester',
    grade: 'A',
    status: 'Active',
    email: 'maya.patel@campus.edu',
    club: 'Debate Society',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 6,
    name: 'Omar Hassan',
    course: 'Data Science',
    semester: '7th Semester',
    grade: 'A+',
    status: 'Active',
    email: 'omar.hassan@campus.edu',
    club: 'AI Research',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
  },
]

const sortOptions = [
  { label: 'Name A–Z', value: 'name-asc' },
  { label: 'Name Z–A', value: 'name-desc' },
  { label: 'Grade High-Low', value: 'grade-desc' },
  { label: 'Semester', value: 'semester-asc' },
]

function App() {
  const [sortBy, setSortBy] = useState('name-asc')

  const sortedStudents = useMemo(() => {
    const students = [...studentData]

    students.sort((first, second) => {
      switch (sortBy) {
        case 'name-desc':
          return second.name.localeCompare(first.name)
        case 'grade-desc':
          return second.grade.localeCompare(first.grade)
        case 'semester-asc':
          return first.semester.localeCompare(second.semester)
        case 'name-asc':
        default:
          return first.name.localeCompare(second.name)
      }
    })

    return students
  }, [sortBy])

  return (
    <div className="portal-shell">
      <Header />

      <main className="portal-main container" id="overview">
        <section className="summary-bar">
          <div>
            <p className="eyebrow muted">Student Directory</p>
            <h1>Academic Portal Overview</h1>
          </div>

          <div className="sort-controls" aria-label="Sort students">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                className={sortBy === option.value ? 'sort-button active' : 'sort-button'}
                onClick={() => setSortBy(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </section>

        <section className="stats-panel">
          <div className="stat-box">
            <span>Total Students</span>
            <strong>{studentData.length}</strong>
          </div>
          <div className="stat-box">
            <span>Active Members</span>
            <strong>{studentData.filter((student) => student.status === 'Active').length}</strong>
          </div>
          <div className="stat-box">
            <span>Top Grade</span>
            <strong>A+</strong>
          </div>
        </section>

        <StudentList students={sortedStudents} />
      </main>

      <Footer />
    </div>
  )
}

export default App
