import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
    it('click button and call buttonValue', () => {
        const buttonValueMock = jest.fn();
        const children = '1';
        const component = render(
            <Button onclick={jest.fn()} buttonValue={buttonValueMock}>
                {children}
            </Button>
        )
        const button = component.getByRole('button');
        fireEvent.click(button)

        expect(buttonValueMock).toHaveBeenCalledWith(children)
    })
})
