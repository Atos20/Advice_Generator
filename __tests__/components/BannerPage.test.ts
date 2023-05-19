import { fireEvent, render, screen } from '@testing-library/vue'

import BannerPage from '@/components/templates/BannerPage.vue'

describe('BannerPage.vue', () => {
  it('renders banner without any issue', () => {
    const bannerMessage = 'A welcome message goes here'
    render(BannerPage, {
      props: {
        banner: bannerMessage,
        scrollY: 0
      }
    })

    //Assert that the banner message is render
    const bannerElement = screen.getByTestId('message-id')
    expect(bannerElement).toBeInTheDocument()
    expect(bannerElement.textContent).toBe(bannerMessage)
  })

  it('should render scroll down icon on initial load when the scrollY is 0', () => {
    // Render the component with scrollY with initial value 0
    render(BannerPage, {
      props: {
        banner: 'A welcome message goes here',
        scrollY: 0
      }
    })
    // Assert that the "scroll to bottom" link is visible
    const scrollLink = screen.getByTestId('scroll-icon')
    expect(scrollLink).toBeInTheDocument()
  })

  it('should not render sroll icon once the user scrolls down', () => {
    // Render the component with scrollY greater than 700
    render(BannerPage, {
      props: {
        banner: 'A welcome message goes here',
        scrollY: 800
      }
    })
    // Assert that the "scroll to bottom" link is not initially visible
    const scrollLink = screen.queryByRole('link', { name: 'scroll to bottom' })
    expect(scrollLink).not.toBeInTheDocument()
  })

  it('should scroll to the bottom when scroll icon is clicked', async () => {
    const scrollToMock = jest.fn()
    global.scrollTo = scrollToMock

    render(BannerPage, {
      props: {
        banner: 'A welcome message goes here',
        scrollY: 0
      }
    })

    const scrollIcon = screen.getByTestId('scroll-icon')
    await fireEvent.click(scrollIcon)

    expect(scrollToMock).toHaveBeenCalledWith({ top: 813, left: 0, behavior: 'smooth' })
  })
})
