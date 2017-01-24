import React, { PropTypes } from 'react'

const VideoLength = ({length}) => {
  return <div className='w3 ml3 tr o-60'>{length}</div>
}
VideoLength.propTypes = {
  length: PropTypes.string.isRequired
}

const VideoTitle = ({title}) => {
  return (
      <div className='truncate'>
        {title}
      </div>
  )
}
VideoTitle.propTypes = {
  title: PropTypes.string.isRequired
}

const CategoryIcon = ({icon}) => {
  return <img src={icon} className='ml2 mt1' alt='' />
}

const PlaylistItem = ({item}) => {
  const { watched, current, icon, title, length } = item
  const liClasses = 'flex items-start relative f6 lh-solid pointer pv3 pl4 pr3 gray hover-bg-white card-progress-list-item' 
  const textClasses = 'ml2 flex justify-between flex-grow-1 lh-copy overflow-hidden lesson-title'

  const watchedClasses = 'viewed o-60'
  const watchedTitleClasses = 'o-60'
  const currentClasses = 'next'

  return (
    <li className={`${liClasses} ${watched ? watchedClasses : null} ${current ? currentClasses : null}`}>
      <CategoryIcon icon={icon} />
      <div className={`${textClasses} ${watched ? watchedTitleClasses : null}`}>
        <VideoTitle title={title} />
        <VideoLength length={length} />
      </div>
    </li>
  )
}
PlaylistItem.propTypes = {
  item: PropTypes.object.isRequired
}

const Playlist = ({playlist}) => {
  return (
    <div className='pr3 pt3 bg-tag-gray self-stretch h-100 br2 overflow-y-scroll'>
      <ul className='list pa0 ma0 overflow-hidden card-progress-list'>
        {playlist.map((i, k) => <PlaylistItem item={i} key={k} />)}
      </ul>
    </div>
  )
}
Playlist.propTypes = {
  playlist: PropTypes.array.isRequired
}

export default Playlist
