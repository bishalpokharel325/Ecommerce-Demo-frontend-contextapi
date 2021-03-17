import React, { useState } from 'react'
import './CategoryHoverLists.css'


const CategoryHoverLists = ({hover_id}) => {
    const [display, setDisplay] = useState("flex")
    return (
        <div className="category__hover__lists" style={hover_id?{display:"flex"}:{display:"none"}}>
            {hover_id}
        </div>
    )
}

export default CategoryHoverLists
