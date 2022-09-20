import React from 'react'

export default function NewsCard(props) {
  return (
    <div className='bg-white shadow-md mt-8 w-1/3 p-4'>
        <img src={props.article.urlToImage} className="h-64"/>
        <h1 className='text-2xl font-bold text-blue-500 my-4'>{props.article.title}</h1>
        <p>{props.article.content}</p>
    </div>
  )
}
