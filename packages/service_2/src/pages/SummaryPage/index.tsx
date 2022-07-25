import { InputHTMLAttributes, useState } from 'react';

export default function SummaryPage() {
  const [checked, setChecked] = useState(false);

  const handleOnChangeCheck = () => {
    setChecked(!checked)
  }

  return (
    <>
      <input type="checkbox" id='check_order' checked={checked} onChange={handleOnChangeCheck}/>
      <label htmlFor="check_order">주무하려는 것을 확인하셨나요?</label>
      <button disabled={!checked}>주문 확인</button>
    </>
    )
}
