import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="account">
          <div className="loader-icon mt-3" />
          <ul>
            <li>
              <div className="loader_content">
                <div className="loader-small" />
                <div className="loader" />
              </div>
            </li>
            <li>
              <div className="loader_content">
                <div className="loader-small" />
                <div className="loader" />
              </div>
            </li>
            <li>
              <div className="loader_content">
                <div className="loader-small" />
                <div className="loader" />
              </div>
            </li>
          </ul>
        </div>

        <div className="sidebar__account">Owner Account</div>
      </div>
    </>
  );
};

export default Sidebar;
