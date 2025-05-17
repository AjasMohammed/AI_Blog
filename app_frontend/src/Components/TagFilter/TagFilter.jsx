import React from 'react'


function TagFilter({tags, setFilteredTag, setSearchParams}) {
  const handleTagClick = (tag) => {
    setFilteredTag(tag.uid);
    setSearchParams({ tag: tag.name });
  }
  return (
    <div className='flex flex-wrap text-xl font-medium text-primary gap-6 bg-ternary rounded-2xl px-8 py-6 mx-12 mt-12'>
        {
            tags &&
            tags.map((tag) => (
                <button onClick={() => handleTagClick(tag)} key={tag.uid} className='underline cursor-pointer'>{tag.name}</button>
            ))
        }
    </div>
  )
}

export default TagFilter