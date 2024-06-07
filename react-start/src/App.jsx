import { useState } from 'react';
import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PropTypes from 'prop-types'
import Header from './components/Header'
import './App.css'

// Button functional component
function Button() {
  return <button>Click</button>
}

// Welcome functional Component. This component receives a prop called userName
function Welcome(props) {
  return <h1>Hello, {props.userName}</h1>
}

// Parent Component that renders a Child Component
function ParentComponent() {
  let theValue = "whatever you want";
  return <ChildComponent theKey={theValue} />
}

// Child Component that takes data from props
function ChildComponent(props) {
  console.log(props);
  console.log(props.theKey);
}

// Functional component for the form.
function FormComponent() {
  const [typing, setTyping] = useState("");

  // Input onChange event handler function
  const handleChange = (e) => {
    console.log(e.target.value);
    // Update typing state variable with value within input field
    setTyping(e.target.value);
  }

  // Form onSubmit event handler function
  const handleSubmit = (e) => {
    e.preventDefault();
    // log the updated typing state variable value
    console.log(typing);
  }

  // Output for this FormComponent
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={typing}/>
      <input type='submit' />
    </form>
  )
}

function App() {
  const [counter, setCounter] = useState(0);

  // Saving html to a variable called element
  const element = <h1 className='greeting'>Hello, world</h1>;
  // This does the same as above
  const helloClass = React.createElement(
    "h1",
    { className: "greeting" },
    "Hello Class!"
  );


  return (
    <div>

      {/* Output the counter variable value */}
      {counter}

      <button onClick={() => setCounter(counter => counter + 1)}>Click to update counter</button>


      {/* Put components onto the page */}
      <Button />
      <Welcome userName="Frank" />
      {element}
      {helloClass}

      <ParentComponent />

      <FormComponent />

      <Header />
    </div>
  )
}

export default App

Welcome.propTypes = {
  userName: PropTypes.string
}