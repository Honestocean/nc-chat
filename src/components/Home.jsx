import React from "react";
import { Link } from "@reach/router";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      {/* <Link to="/chat"> */}{" "}
      <form>
        <label>
          Username: &ensp;
          <input></input>
        </label>
        <br />
        <label>
          Password: &ensp;
          <input></input>
        </label>
        <br />
        <button>Log in as User</button>
      </form>
      {/* </Link> */}
      <br />
      <form>
        <Link to="/chat">
          {" "}
          <button>Log in as Guest</button>
        </Link>
      </form>
    </div>
  );
}
