import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Sidebar = () => {
    
    const { pathname } = useLocation()
    const [userName, setUserName] = useState('')
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(()=>{
        setUserName(dummyProfileData.firstName + " "+)
    })


  return (
    <div>Sidebar</div>
  )
}

export default Sidebar