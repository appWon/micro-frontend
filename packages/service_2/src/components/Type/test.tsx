import { render, screen } from "@testing-library/react";
import Type from "./index";

describe('', () => {
    test('',async () => {
        render(<Type orderType={'products'}/>)

        const productImages = await screen.findAllByRole<HTMLImageElement>('img', {
            name: /product$/i
        })
        expect(productImages).toHaveLength(2)

        // const altText = productImages.map((ele) => { ele.alt })
        // expect(altText).toEqual(['Americal product', 'England product'])
    })
})
