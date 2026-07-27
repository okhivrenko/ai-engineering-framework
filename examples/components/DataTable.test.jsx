import React from 'react'
import { render, screen } from '@testing-library/react'
import DataTable from './DataTable'

test('renders table with caption and headers', () => {
  const columns = [{ key: 'name', header: 'Name' }, { key: 'age', header: 'Age' }]
  const data = [{ id: 1, name: 'Alice', age: 30 }]
  render(<DataTable columns={columns} data={data} caption="Users" />)

  const table = screen.getByRole('table', { name: /users/i })
  expect(table).toBeInTheDocument()
  expect(screen.getByText('Name')).toBeInTheDocument()
})
