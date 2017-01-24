import React, { PropTypes } from 'react'
import PlayButton from '../Button/PlayButton'
import Card from './'

export const CourseMeta = ({meta}) => {
  return (
    <div className='f6 dark-gray o-50'>
      {meta.lessonCount} {meta.lessonCount === 1 ? 'lesson' : 'lessons'}
    </div>
  )
}
CourseMeta.propTypes = {
  meta: PropTypes.object.isRequired
}

export const CourseHeader = ({meta}) => {
  return (
    <div>
      <PlayButton hover />
      <div className='mw5 mt3 center ph3'>
        <img alt='' src={meta.courseImg} />
      </div>
    </div>
  )
}
CourseHeader.propTypes = {
  meta: PropTypes.object.isRequired
}


const CourseCard = ({title, author, type, meta}) => {
  return (
    <Card title={title} author={author} type='course' meta={meta} />
  )
}
CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  meta: PropTypes.object
}

export default CourseCard
