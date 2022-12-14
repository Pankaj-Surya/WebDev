import { Avatar } from '@mui/material'
import React from 'react'
import ".././Style/HeaderOption.css"
function HeaderOption({Icon,title,avatar}) {
  return (
    <div className='headerOption'>
        {Icon && <Icon className="headerOption__icon"/>}
        { avatar && <Avatar className="headerOption__icon" src={avatar}/> }
        <h3 className="headerOption_title">{title}</h3>
        </div>
  )
}

export default HeaderOption