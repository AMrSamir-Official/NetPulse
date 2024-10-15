
const codeExamples = {
  HTML: `<html>
    <head>
      <title>HTML Example</title>
    </head>
    <body>
      <h1>Hello, World!</h1>
      <p>This is an HTML example.</p>
    </body>
  </html>`,

  CSS: `body {
    font-family: Arial, sans-serif;
  }
  
  h1 {
    color: #333;
  }
  
  p {
    color: #666;
  }`,

  JavaScript: `function greet(name) {
    return \`Hello, \${name}!\`;
  }
  
  console.log(greet('World'));`,

  TypeScript: `function greet(name: string): string {
    return \`Hello, \${name}!\`;
  }
  
  console.log(greet('World'));`,

  React: `import React from 'react';
  
  const App: React.FC = () => {
    return (
      <div>
        <h1>Hello, World!</h1>
        <p>This is a React example.</p>
      </div>
    );
  };
  
  export default App;`,

  Sass: `$primary-color: #3498db;
  
  body {
    font-family: Arial, sans-serif;
    background-color: $primary-color;
  }
  
  h1 {
    color: darken($primary-color, 10%);
  }`,

  TailwindCSS: `<div class="bg-blue-500 text-white p-4">
    <h1 class="text-2xl font-bold">Hello, World!</h1>
    <p class="mt-2">This is a Tailwind CSS example.</p>
  </div>`,

  Bootstrap: `<div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1 class="text-primary">Hello, World!</h1>
        <p>This is a Bootstrap example.</p>
      </div>
    </div>
  </div>`,

  NextJS: `import React from 'react';
  
  const Home: React.FC = () => {
    return (
      <div>
        <h1>Hello, World!</h1>
        <p>This is a Next.js example.</p>
      </div>
    );
  };
  
  export default Home;`,

  Jest: `test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });`,

  Angular: `import { Component } from '@angular/core';
  
  @Component({
    selector: 'app-root',
    template: '<h1>Hello, World!</h1>',
    styles: ['h1 { color: blue; }']
  })
  export class AppComponent {}`,

  Vite: `import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';
  
  export default defineConfig({
    plugins: [react()]
  });`,

  CRA: `import React from 'react';
  import ReactDOM from 'react-dom';
  import './index.css';
  
  const App: React.FC = () => {
    return (
      <div>
        <h1>Hello, World!</h1>
        <p>This is a Create React App example.</p>
      </div>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById('root'));`,

  PHP: `<?php
// Display a greeting message
echo "<h1>Hello, World!</h1>";
echo "<p>Today's date and time is: " . date("Y-m-d H:i:s") . "</p>";
?>
`,

  Python: `def greet(name):
      return f"Hello, {name}!"
  
  print(greet('World'))`,

  SQL: `SELECT * FROM users WHERE age > 30;`,

  CSharp: `using System;
  
  namespace HelloWorld
  {
      class Program
      {
          static void Main()
          {
              Console.WriteLine("Hello, World!");
          }
      }
  }`,

  CPlusPlus: `#include <iostream>
  
  int main() {
      std::cout << "Hello, World!" << std::endl;
      return 0;
  }`,

  // Add more languages and examples as needed
};

export default codeExamples;
