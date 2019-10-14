import React, { } from "react";
import SmurfList from "./components/SmurfList"
import Form from "./components/Form"

const App = () => {
    return (
      <div className = "app">
        <h1>Hello World</h1>
        <Form />
        <SmurfList />
      </div>
    );
}
export default App;