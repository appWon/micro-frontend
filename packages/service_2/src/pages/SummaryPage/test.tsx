import { render, screen } from "@testing-library/react";
import SummaryPage  from './index';

describe('',() => {
    test('Summary page is Rennder',() => {
        render(<SummaryPage/>)

        const checkBox = screen.getByRole<HTMLInputElement>('checkbox', {
            name: '주무하려는 것을 확인하셨나요?'
        })
        expect(checkBox.checked).toEqual(false)

        const confirmBtn = screen.getByRole<HTMLButtonElement>('button', {
            name: '주문 확인'
        })
        expect(confirmBtn.disabled).toBeTruthy();
    })
})