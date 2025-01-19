import React from 'react'
import { memo, useState, useCallback } from 'react'
const Count = ({ count, countFN }) => {
  return (
    <button
      className="btn"
      onClick={() => countFN()}
      style={{
        marginBottom: '1rem',
      }}
    >
      count {count}
    </button>
  )
}
export default memo(Count) //Count //Count
