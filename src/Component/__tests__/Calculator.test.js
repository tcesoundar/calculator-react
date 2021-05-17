import {render, screen, cleanup} from '@testing-library/react'
import Calculator from '../Calculator'

afterEach(() => {
    cleanup()
})

test('should render Cal', () => {
    render(<Calculator/>)

    const calculatorElement = screen.getByTestId('testId')

    expect(calculatorElement).toBeInTheDocument()
})

test('first test', () => {
    expect(true).toBe(true)
})