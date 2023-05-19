import { render, screen } from '@testing-library/vue'
import { ref } from 'vue'

import App from '@/App.vue'

jest.mock('@/utilities/fetch', () => ({
  useFetch: jest.fn()
}))

describe('AdviceBody.vue', () => {
  it('should fetch advice and render it', async () => {
    const useFetchMock = jest.requireMock('@/utilities/fetch').useFetch

    // Mock the response data
    const adviceData = {
      slip: {
        id: '1',
        advice: 'Some advice'
      }
    }
    const fetchResult = {
      data: ref(adviceData),
      error: ref(null)
    }

    // Mock the useFetch function to return the fetch result
    useFetchMock.mockResolvedValue(fetchResult)

    render(App)

    // Wait for the advice to be fetched and rendered
    await screen.findByText('Advice # 1')
    await screen.findByText('"Some advice"')

    // Verify that the useFetch function was called with the correct URL
    expect(useFetchMock).toHaveBeenCalledWith('https://api.adviceslip.com/advice')
  })
})
