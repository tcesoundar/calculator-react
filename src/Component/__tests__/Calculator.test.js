import {render, cleanup, fireEvent} from '@testing-library/react'
import Calculator from '../Calculator'

afterEach(() => {
    cleanup()
})

test('should render Calculator', () => {
    const {queryByTitle} = render(<Calculator/>)

    const calculatorElement = queryByTitle('calculator')

    expect(calculatorElement).toBeInTheDocument()
})

describe('should update input values', () => {

    test('should update update first Input value', () => {
        const {queryByTitle} = render(<Calculator/>)
    
        const firstInput = queryByTitle('firstInput')
    
        fireEvent.change(firstInput, {target: {value: '10'}})
    
        expect(firstInput.type).toBe('number')
        expect(firstInput.placeholder).toBe('0')
        expect(firstInput.value).toBe('10')
    })

    test('should update update second Input value', () => {
        const {queryByTitle} = render(<Calculator/>)
    
        const secondInput = queryByTitle('secondInput')
    
        fireEvent.change(secondInput, {target: {value: '3'}})
    
        expect(secondInput.type).toBe('number')
        expect(secondInput.placeholder).toBe('0')
        expect(secondInput.value).toBe('3')
    })

})

describe('checking button enable disable functionality', () => {

    test('should button disable if two inputs are empty', () => {
        const {queryByTitle} = render(<Calculator/>)

        const firstInput = queryByTitle('firstInput')
        const secondInput = queryByTitle('secondInput')
        const add = queryByTitle('add')
        const result = queryByTitle('result')
    
        fireEvent.change(firstInput, {target: {value: ''}})
        fireEvent.change(secondInput, {target: {value: ''}})
        
        expect(firstInput.value).toBe('')
        expect(secondInput.value).toBe('')
        expect(add.disabled).toBeTruthy()
    })

    test('should button disable if one input is empty', () => {
        const {queryByTitle} = render(<Calculator/>)

        const firstInput = queryByTitle('firstInput')
        const secondInput = queryByTitle('secondInput')
        const add = queryByTitle('add')
        const result = queryByTitle('result')
    
        fireEvent.change(firstInput, {target: {value: '10'}})
        fireEvent.change(secondInput, {target: {value: ''}})
        
        expect(firstInput.value).toBe('10')
        expect(secondInput.value).toBe('')
        expect(add.disabled).toBeTruthy()
    })
    
    test('should button enable if two inputs are not empty', () => {
        const {queryByTitle} = render(<Calculator/>)

        const firstInput = queryByTitle('firstInput')
        const secondInput = queryByTitle('secondInput')
        const add = queryByTitle('add')
        const result = queryByTitle('result')
    
        fireEvent.change(firstInput, {target: {value: '10'}})
        fireEvent.change(secondInput, {target: {value: '20'}})
        
        expect(firstInput.value).toBe('10')
        expect(secondInput.value).toBe('20')
        expect(add.disabled).toBeFalsy()
    })

})

describe('should Perform addtion of two numbers', () => {

    test('should add two postive numbers', () => {
        const {queryByTitle} = render(<Calculator/>)

        const firstInput = queryByTitle('firstInput')
        const secondInput = queryByTitle('secondInput')
        const add = queryByTitle('add')
        const result = queryByTitle('result')
    
        fireEvent.change(firstInput, {target: {value: '10'}})
        fireEvent.change(secondInput, {target: {value: '3'}})
        fireEvent.click(add)

        expect(firstInput.value).toBe('10')
        expect(secondInput.value).toBe('3')
        expect(result.value).toBe('13')
    })

    test('should add two negative numbers', () => {
        const {queryByTitle} = render(<Calculator/>)

        const firstInput = queryByTitle('firstInput')
        const secondInput = queryByTitle('secondInput')
        const add = queryByTitle('add')
        const result = queryByTitle('result')
    
        fireEvent.change(firstInput, {target: {value: '-6'}})
        fireEvent.change(secondInput, {target: {value: '-4'}})
        fireEvent.click(add)

        expect(firstInput.value).toBe('-6')
        expect(secondInput.value).toBe('-4')
        expect(result.value).toBe('-10')
    })

}) 

describe('should Perform subtraction of two numbers', () => {

    test('should subtract two postive numbers', () => {
        const {queryByTitle} = render(<Calculator/>)

        const firstInput = queryByTitle('firstInput')
        const secondInput = queryByTitle('secondInput')
        const subtract = queryByTitle('subtract')
        const result = queryByTitle('result')
    
        fireEvent.change(firstInput, {target: {value: '10'}})
        fireEvent.change(secondInput, {target: {value: '3'}})
        fireEvent.click(subtract)

        expect(firstInput.value).toBe('10')
        expect(secondInput.value).toBe('3')
        expect(result.value).toBe('7')
    })

    test('should subtract two negative numbers', () => {
        const {queryByTitle} = render(<Calculator/>)

        const firstInput = queryByTitle('firstInput')
        const secondInput = queryByTitle('secondInput')
        const subtract = queryByTitle('subtract')
        const result = queryByTitle('result')
    
        fireEvent.change(firstInput, {target: {value: '-6'}})
        fireEvent.change(secondInput, {target: {value: '-4'}})
        fireEvent.click(subtract)

        expect(firstInput.value).toBe('-6')
        expect(secondInput.value).toBe('-4')
        expect(result.value).toBe('-2')
    })

}) 

describe('should Perform mutiplication of two numbers', () => {

    test('should multiply two postive numbers', () => {
        const {queryByTitle} = render(<Calculator/>)

        const firstInput = queryByTitle('firstInput')
        const secondInput = queryByTitle('secondInput')
        const multiply = queryByTitle('multiply')
        const result = queryByTitle('result')
    
        fireEvent.change(firstInput, {target: {value: '100'}})
        fireEvent.change(secondInput, {target: {value: '2'}})
        fireEvent.click(multiply)

        expect(firstInput.value).toBe('100')
        expect(secondInput.value).toBe('2')
        expect(result.value).toBe('200')
    })

    test('should multiply two negative numbers', () => {
        const {queryByTitle} = render(<Calculator/>)

        const firstInput = queryByTitle('firstInput')
        const secondInput = queryByTitle('secondInput')
        const multiply = queryByTitle('multiply')
        const result = queryByTitle('result')
    
        fireEvent.change(firstInput, {target: {value: '-5'}})
        fireEvent.change(secondInput, {target: {value: '-5'}})
        fireEvent.click(multiply)

        expect(firstInput.value).toBe('-5')
        expect(secondInput.value).toBe('-5')
        expect(result.value).toBe('25')
    })

}) 

describe('should Perform division of two numbers', () => {

    test('should divide two postive numbers', () => {
        const {queryByTitle} = render(<Calculator/>)

        const firstInput = queryByTitle('firstInput')
        const secondInput = queryByTitle('secondInput')
        const divide = queryByTitle('divide')
        const result = queryByTitle('result')
    
        fireEvent.change(firstInput, {target: {value: '100'}})
        fireEvent.change(secondInput, {target: {value: '2'}})
        fireEvent.click(divide)

        expect(firstInput.value).toBe('100')
        expect(secondInput.value).toBe('2')
        expect(divide.disabled).toBeFalsy()
        expect(result.value).toBe('50')
    })

    test('should return infinity if divident is zero', () => {
        const {queryByTitle} = render(<Calculator/>)

        const firstInput = queryByTitle('firstInput')
        const secondInput = queryByTitle('secondInput')
        const divide = queryByTitle('divide')
        const result = queryByTitle('result')
    
        fireEvent.change(firstInput, {target: {value: '25'}})
        fireEvent.change(secondInput, {target: {value: '0'}})
        fireEvent.click(divide)

        expect(firstInput.value).toBe('25')
        expect(secondInput.value).toBe('0')
        expect(divide.disabled).toBeFalsy()
        expect(result.value).toBe('Infinity')
    })

}) 






