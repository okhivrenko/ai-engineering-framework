import React from 'react'

// Accessible DataTable component example
// Props:
// - columns: [{key, header}]
// - data: array of objects
// - rowKey: function or string key

export default function DataTable({ columns = [], data = [], rowKey = 'id', caption }) {
  return (
    <table role="table" aria-label={caption || 'Data Table'}>
      {caption ? <caption>{caption}</caption> : null}
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key} scope="col">
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => {
          const key = typeof rowKey === 'function' ? rowKey(row) : row[rowKey] ?? i
          return (
            <tr key={key} tabIndex={0}>
              {columns.map((col) => (
                <td key={col.key} data-label={col.header}>
                  {row[col.key]}
                </td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
