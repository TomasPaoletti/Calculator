import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Calculator from "./Calculator";


describe('<calculator />', () => {

    let component
    beforeEach(() => {
        component = render(<Calculator />);
    })

    test('component render', () => {
        const { getByText, getByTestId } = component;
        getByText("AC");
        getByTestId('screen');
    })

    test('update state if eval(input).length > 3 & eval(input).includes(.)', () => {
        const { getByText, getByTestId } = component;
        const screen = getByTestId('screen');

        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('+'));
        fireEvent.click(getByText('2'));

        fireEvent.click(getByText('='));

        expect(screen.textContent).toBe('4');
    });

    test('result catch', () => {
        const { getByText, getByTestId } = component;
        const screen = getByTestId('screen');

        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('+'));

        fireEvent.click(getByText('='));

        expect(screen.textContent).toBe('');
    });

    test('button clear', () => {
        const { getByText, getByTestId } = component;
        const screen = getByTestId('screen');

        fireEvent.click(getByText('AC'));

        expect(screen.textContent).toBe('');
    })
})