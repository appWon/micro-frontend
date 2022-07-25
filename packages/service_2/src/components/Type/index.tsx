import axios from 'axios'
import { useState, useEffect } from 'react'
import { Options } from '../Options'
import { Products } from '../Products'

interface Props {
    orderType: string,
}

export default function Type(props: Props){
    const [items, setItems] = useState<{
        name: string
        imagePath: string
    }[]>([])

    useEffect(() => {
      getProducts()
    }, [])
    

    const getProducts = async () => {
        try{
            const res = await axios.get('http://localhost:5000/products');
            setItems(res.data);
        }catch(err: unknown){
            console.log(err)
        }
    }

    const ItemComponents = props.orderType === "products" ? Products : Options;

    const optionItems = items.map((item) => (
        <ItemComponents
          key={item.name}
          name={item.name}
          imagePath={item.imagePath}
        //   updateItemCount={(itemName, newItemCount) =>
        //     updateItemCount(itemName, newItemCount, orderType)
        //   }
        />
      ));

      let orderTypeKorean = props.orderType === "products" ? "상품" : "옵션";
    return (
        <>
        <h2>주문 종류</h2>
        <p>하나의 가격</p>
        <p>
          {/* {orderTypeKorean} 총 가격: {orderDatas.totals[orderType]} */}
        </p>
        <div
          style={{
            display: "flex",
            // flexDirection: orderType === "options" && "column",
          }}
        >
          {optionItems}
        </div>
      </>
    )
}
