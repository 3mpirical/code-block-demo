import React, { Component } from 'react';
import { CodeBlock, highlightCode } from "./CodeBlock";
import "./atom-one-dark.css";
// styles for specific themes must be imported from a css file
// (It should be possible to specify the import dynamically if we want more than one theme)


class App extends Component {
  state = {code: ""}

  // Call the highlightCode function imported 
  // from the CodeBlock file to apply styles
  componentDidMount() {
    highlightCode()
  }

  render() {
    return (
    <>
      <h1>Code Block Demo</h1>
      <div className="demo-container">
      
      {/* the CodeBlock element takes a 'syntax' prop 
        to specify the desired programming language */}
        <CodeBlock syntax="javascript" >
          {`
          const helloWorld = () => {
            return alert("hello world!");
          };

          helloWorld();
          // causes browser to open prompt 
          // which says "hello world"
          `}
        </CodeBlock>

        <CodeBlock syntax="ruby" >
          {`
          # Create Controller Example
          # If todo saves successfully, return the todo to the user
          # Else, return the error and handle client side
          def create
            todo = Todo.new(todo_params)

            if todo.save
              render json: todo
            else
              render json: {eror: todo.errors}, status: 422
            end
          end
          `}
        </CodeBlock>

        <CodeBlock syntax="html" >
          {`
          <!-- HTML Boilerplate -->
          <!DOCTYPE html>

          <html lang="en">
            <head>
              <meta charset="UTF-8"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
              <title>Document</title>
            </head>

            <body>
              <div>Hello World<div>
            </body>
          </html>
          `}
        </CodeBlock>
      </div>
    </>
    );
  }
}

export default App;


