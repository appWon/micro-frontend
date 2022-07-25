import React from 'react'

interface Props {
    imagePath: string
    name: string
}

export const Options = (props: Props) => {
  return (
    <form>
      <input
        type="checkbox"
        id={`${props.name} option`}
        // onChange={(event) => {
        //   updateItemCount(name, event.target.checked ? 1 : 0);
        // }}
      />{" "}
      <label htmlFor={`${props.name} option`}>{props.name}</label>
    </form>
  );
}
