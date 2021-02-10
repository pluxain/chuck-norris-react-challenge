import React from 'react';
import Home from 'features/home';
import Jokes from 'features/jokes/Jokes';
import { NavLink, Route } from 'react-router-dom';

function MainNav() {
  const routes = [
    {
      to: '/',
      text: 'Home',
    },
    {
      to: '/jokes',
      text: 'Jokes',
    },
  ];

  return (
    <nav>
      <ul className="flex flex-row items-stretch justify-center bg-gray-100 h-12 divide-x divide-black">
        {routes.map(({ to, text }, i) => (
          <li
            key={i}
            className="w-1/2 flex flex-row items-center justify-center"
          >
            <NavLink
              to={to}
              className="flex justify-center items-center self-stretch w-full"
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <MainNav />
      <Route exact path="/" component={Home} />
      <Route path="/jokes" component={Jokes} />
    </>
  );
}
