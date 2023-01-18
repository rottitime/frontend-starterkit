import IndexPage from '@/pages/index'

import { renderWithProviders, screen } from '@/lib/test-utils'

describe('Page: Index', () => {
  it('renders', async () => {
    renderWithProviders(<IndexPage />)

    expect(screen.getByText('Get started by editing')).toBeInTheDocument()
  })
})
