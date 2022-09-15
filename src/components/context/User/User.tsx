import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    userContext.setUser({ name: "Ramy", email: "ramy@email.com" });
  };

  const handleLogout = () => {
    userContext.setUser(null);
  };
  return (
    <>
      <h2>UseContext</h2>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>

      {/* <p>User is{isLoggedIn ? "logged in" : "logged out"}</p> */}
      <h3>
        {userContext.user?.name} {userContext.user?.email}
      </h3>
    </>
  );
};
