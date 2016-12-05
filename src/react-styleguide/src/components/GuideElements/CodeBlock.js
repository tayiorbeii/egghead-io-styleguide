import React from 'react'

const formatLine = (line, i) => <pre key={i}>{line}</pre>

export default ({code}) => {
  return (
    <div className='pl4 bl bw4 b--white'>
      {code.map((line, i) => formatLine(line, i))}
    </div>
  )
}
