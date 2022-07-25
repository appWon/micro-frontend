import React from 'react'

interface Props {
    imagePath: string
    name: string
}

export const Products = (props: Props) => {
  return (
    <div style={{textAlign: 'center'}}>
        <img src={props.imagePath} alt={`${props.name} product`}  style={{width:'75%'}}/>
        <form style={{marginTop: '10px'}}>
            <label>{props.name}</label>
            <input type="number" min={0} name="quantity" defaultValue={0}/>
        </form>
    </div>
  )
}
