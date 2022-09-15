import { useState } from "react";

type userProps = {
  name: string;
  email: string;
};

export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // type inferred
  const [user, setUser] = useState<userProps | null>(null);
  const handleLogin = () => {
    setIsLoggedIn(true);
    setUser({ name: "Ramy", email: "ramy@email.com" });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };
  return (
    <>
      <h2>State</h2>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>

      <p>User is{isLoggedIn ? "logged in" : "logged out"}</p>
      <h3>
        {user?.name} {user?.email}
      </h3>
    </>
  );
};
