import React, {PropTypes} from 'react'
import { keys } from 'lodash'
import { CourseMeta, CourseHeader } from './CourseCard'
import { LessonMeta, LessonHeader } from './LessonCard'
import { PlaylistMeta, PlaylistHeader } from './PlaylistCard'
import Playlist from '../Playlist/'
import './index.css'

const commonCardClasses = 'relative card'
const commonInnerClasses = 'flex flex-column items-center bg-white navy relative z-1 card-course-inner br2'
const enhancedInnerClasses = `${commonInnerClasses} overflow-hidden pa4 pointer`
const footerClasses = 'flex justify-between self-stretch items-center' 
const pillClasses = 'f6 lh-title ttu fw6 ph3 pv1 br-pill tracked'
const orangePillClasses = `${pillClasses} orange bg-tag-orange`
const bluePillClasses = `${pillClasses} blue bg-tag-blue`
const greenPillClasses = `${pillClasses} dark-green bg-tag-turquoise tracked`

const cardTypes = {
  'course': {
    'cardClasses': `${commonCardClasses} card-stacked-shadow card-course`,
    'innerClasses': `${enhancedInnerClasses}`,
    'pillClasses': `${orangePillClasses}`,
    'metaComponent': (meta) => <CourseMeta meta={meta} />,
    'headerComponent': (meta) => <CourseHeader meta={meta} />
  },
  'lesson': {
    'cardClasses': `${commonCardClasses} card-lesson`,
    'innerClasses': `${enhancedInnerClasses}`,
    'pillClasses': `${bluePillClasses}`,
    'metaComponent': (meta) => <LessonMeta meta={meta} />,
    'headerComponent': (meta) => <LessonHeader meta={meta} />


  },
  'playlist': {
    'cardClasses': `${commonCardClasses} card-stacked-shadow sans-serif card-playlist`,
    'innerClasses': `${commonInnerClasses}`,
    'pillClasses': `${greenPillClasses}`,
    'footerClasses': 'pb4 ph4',
    'metaComponent': (meta) => <PlaylistMeta meta={meta} />,
    'headerComponent': (meta) => <PlaylistHeader meta={meta} />
  }
}

const titleHeadingClasses = 'f3 tc mt4 mb2 avenir fw5'
const authorNameClasses = 'f6 dark-gray o-50 mb4 tc'

const MaterialType = ({type}) => {
  return (
    <div className={cardTypes[type]['pillClasses']}>{type}</div> 
  )
}
MaterialType.propTypes = {
  type: PropTypes.string.isRequired
}

const CardHeader = ({meta, type}) => {
  const headerComponent = cardTypes[type].headerComponent ? cardTypes[type].headerComponent(meta) : null
  return (
    <div className='w-100'>
      {headerComponent}
    </div>
  )  
}
CardHeader.propTypes = {
  meta: PropTypes.object,
  type: PropTypes.string.isRequired
}

const CardFooter = ({meta, type}) => {
  const metaComponent = cardTypes[type].metaComponent ? cardTypes[type].metaComponent(meta) : null
  return (
    <div className={`${footerClasses} ${cardTypes[type]['footerClasses']}`}>
      {metaComponent}
      <MaterialType type={type} />
    </div>
  ) 
}
CardFooter.propTypes = {
  meta: PropTypes.object,
  type: PropTypes.string.isRequired
}

const CardBody = ({title, author}) => {
  return (
    <div>
      <h3 className={titleHeadingClasses}>{title}</h3>
      <div className={authorNameClasses}>{author}</div>
    </div>
  )
}
CardBody.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

const Card = ({title, author, type, meta, expanded}) => {
  const extendedClasses = 'relative w-100 z-1 overflow-hidden pv3 bg-tag-gray br2'
  console.log('expanded: ', expanded)
  return (
    <div className={`${cardTypes[type]['cardClasses']} ${expanded === 'horizontal' ? 'flex expanded-horizontal' : null}`}> 
      <div className={`
        ${cardTypes[type]['innerClasses']}
        ${!expanded ? 'br2' : null}
        ${expanded === 'vertical' ? 'br2 br--top' : null}
        ${expanded === 'horizontal' ? 'br2 br--left' : null}
      `}> 
        <CardHeader type={type} meta={meta} />
        <CardBody title={title} author={author} />
        <CardFooter type={type} meta={meta} />
      </div>
      <div className={`${expanded === 'vertical' ? `${extendedClasses} br--bottom` : null}`}>
        { expanded === 'vertical'
          ? (
            <div style={{height: '290px'}}>
              <Playlist playlist={meta.playlist} />
            </div>
          )
          : null
        }
        { expanded === 'horizontal'
          ? (
            <div className={`${extendedClasses} br2 br--right`}
              style={{height: 'auto', maxHeight: '475px'}}
            >
              <Playlist playlist={meta.playlist} />
            </div>
          )
          : null
        }
      </div>
    </div>
  )
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  type: PropTypes.oneOf(keys(cardTypes)),
  meta: PropTypes.object
}


export default Card
