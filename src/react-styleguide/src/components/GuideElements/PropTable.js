import React from 'react'

const formatRow = (row, i) => {
  return (
    <tr key={i}>
      <td className='bb pl0 pr3 tl bb'>
        <pre>{row.prop}</pre>
      </td>
      <td className='bb pl0 pr3 tl bb'>
        <pre>{row.type}</pre>
      </td>
      <td className='bb pl0 pr3 tl bb'>{row.description}</td>
    </tr>
  )
}

export default ({rows}) => {
  return (
    <table className='dt collapse mw-100 w-100 mv2' cellSpacing='0' cellPadding='0'>
      <thead>
        <tr>
          <th className='pl0 pr3 tl f4 bb'>Prop</th>
          <th className='pl0 pr3 tl f4 bb'>Type</th>
          <th className='pl0 pr3 tl f4 bb'>Description</th>
        </tr>
      </thead>
        <tbody>
          {rows.map((row, i) => formatRow(row, i))}
        </tbody>
    </table>
 
  )
}
