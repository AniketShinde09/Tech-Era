import {Link} from 'react-router-dom'

import './index.css'

const CourseItem = props => {
  const {course} = props
  const {id, name, logoUrl} = course

  return (
    <Link className="link-item" to={`/courses/${id}`}>
      <li className="course">
        <img className="course-img" src={logoUrl} alt={name} />
        <p className="course-name">{name}</p>
      </li>
    </Link>
  )
}
export default CourseItem
