import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/TweetsPage">
              <span>Tweets</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
