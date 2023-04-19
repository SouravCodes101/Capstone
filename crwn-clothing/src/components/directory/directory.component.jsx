import React from 'react'
import CategoryItemCmp from '../category-item/category-item.component'
import "./directory.styles.scss"

const DirectoryCmp = ({categories}) => {
 
  return (
    <div className="directory-container ">
    {categories.map((category)=>(
      <CategoryItemCmp key={category.id} category={category}/>
    ))}
    
  </div>
  )
}

export default DirectoryCmp