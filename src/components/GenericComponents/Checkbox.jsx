import React from 'react'

const Checkbox = ({boxName, tickHandler}) => {
  return (
    <label>
            <input
              name={boxName}
              type="checkbox"
              onClick={tickHandler}
            />
            {boxName.charAt(0).toUpperCase() + boxName.slice(1)}
    </label>
  )
}

export default Checkbox