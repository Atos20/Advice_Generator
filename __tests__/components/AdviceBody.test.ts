import { fireEvent, render, screen } from '@testing-library/vue'

import AdviceBody from '@/components/templates/AdviceBody.vue'

export interface Advice {
  slip: Slip
}

export interface Slip {
  id: string
  advice: string
}

describe('BannerPage.vue', () => {
  // const advice: Advice = { slip: { id: '0', advice: 'some advice' } }
  it('renders banner without any issue', () => {
    render(AdviceBody, {
      props: {
        advice: { slip: { id: '1', advice: 'Some advice' } }
      }
    })
    //Assert that the banner message is render
    const adviceContainer = screen.getByTestId('advice-container')
    const adviceId = screen.getByTestId('advice-id')
    const adviceContent = screen.getByTestId('advice-content')

    expect(adviceContainer).toBeInTheDocument()
    expect(adviceId).toBeInTheDocument()
    expect(adviceContent).toBeInTheDocument()
  })

  it('should invoke fetchAdvice method when the fetch button is clicked', async () => {
    const onHandleAdviceMock = jest.fn()
    render(AdviceBody, {
      props: {
        advice: { slip: { id: 1, advice: 'Some advice' } }
      },
      global: {
        mocks: {
          onHandleAdvice: onHandleAdviceMock
        }
      }
    })

    const fetchButton = screen.getByTestId('fetch-btn')
    expect(fetchButton).toBeInTheDocument()

    await fireEvent.click(fetchButton)

    expect(onHandleAdviceMock).toHaveBeenCalled()
  })
})
