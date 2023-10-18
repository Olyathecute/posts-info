import { render } from '@testing-library/react'
import * as reduxHooks from 'react-redux'
import Table from '../components/Table'

jest.mock('react-redux')

const posts = [
  { userId: 1, id: 1, title: 'PostTitle', body: 'PostBody' },
  { userId: 1, id: 2, title: 'PostTitle', body: 'PostBody' },
  { userId: 2, id: 3, title: 'PostTitle', body: 'PostBody' },
]

describe('Table', () => {
  it('should create Table with no posts', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue([])

    const component = render(<Table />)
    expect(component).toMatchSnapshot()
  })

  it('should create Table with posts', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue(posts)

    const component = render(<Table />)
    expect(component).toMatchSnapshot()
  })
})
