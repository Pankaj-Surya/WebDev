import React, { memo } from 'react'


const Child = ({counterTwo}) => {
  console.log("child renderrr......")
    return (
    <div>
        <h2>Counter Child : {counterTwo} </h2>
    </div>
  )
}

export default memo(Child)