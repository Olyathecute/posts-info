import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import App from '../App'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios)

describe('App', () => {
  it('should fetch and display data', async () => {
    mock.onGet('../App').reply(200, 'Mocked Data')

    render(<App />)

    await waitFor(() => {
      expect(screen.getByText('Mocked Data')).toBeInTheDocument()
    })
  })
})
