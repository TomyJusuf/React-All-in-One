import React from 'react'
import avatar from '../../../assets/default-avatar.svg'
export function Person(person) {
  const { name, images, nickName = 'No Nickname' } = person
  const img = images?.[0].small.url || avatar
  return (
    <div>
      <img src={img} alt={name} style={{ width: '50px' }} />
      <h4>{name} </h4>
      <p>Nickname : {nickName}</p>
    </div>
  )
}
