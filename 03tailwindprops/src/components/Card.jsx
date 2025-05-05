import React from 'react'

function Card({username, btnText="visit me"}) {
    console.log(username);
  return (
    <div className = "relative h-[400px] w-[300px] rounded-md">
        <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D" alt="AirMax Pro" className="z-0 h-full w-full rounded-md object-cover" />
        <div className="absolute insert-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">{username}</h1>
            <p className="mt-2 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ipsum?
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">{btnText} -</button>
        </div>
    </div>
  )
}

export default Card
