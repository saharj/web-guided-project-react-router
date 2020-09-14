import React from 'react'
// We'll need a Link and the useRouteMatch hook from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'

export default function ItemsList(props) {
  const { items } = props
  // We'll grab the current URL using the useRouteMatch hook
  // returns an object with things, among them the current url
  // so we don't have to repeat it in our Links
  const { url, path } = useRouteMatch()

  console.log('the url from useRouteMatch', url)

  return (
    <div className='items-list-wrapper'>
      {items.map(item => (
        <div
          className='item-card'
          key={item.id}
        >
          {/* 👉 STEP 6 - Link starts, navigates us from <current url> to <current url>/<id of the item> */}
          <Link to={`${url}/${item.id}`}>
            <img
              className='items-list-image'
              src={item.imageUrl}
              alt={item.name}
            />
            <p>{item.name}</p>
          </Link>
          {/* Link ends */}

          <p>${item.price}</p>
        </div>
      ))}
    </div>
  )
}
