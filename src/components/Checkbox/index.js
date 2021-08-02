import { useState } from 'react';

import './styles.scss';

const Checkbox = ({ id, label, checked }) => {
  const [isChecked, setIsChecked] = useState(checked || false);
  const handleOnChange = (e) => {
    setIsChecked(e.target.checked)
  }

  return (
    <div className="checkbox-container">
      <input className="checkbox-input" id={id} type="checkbox" checked={isChecked} onChange={handleOnChange} />
      <label className="checkbox" htmlFor={id}>
        <span className="checkbox-icon">
          <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 4.66667L3.13043 7L8 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="checkbox-label">{label}</span>
      </label>

    </div>
  )
}

export default Checkbox;

