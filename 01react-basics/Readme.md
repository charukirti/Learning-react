# Introduction of JSX

- JSX is a syntax extention for JavaScript which allows us to write HTML like structure within our code.

- It is commonly used in React development for describing the user interface of our application

- Using JSX is optional, it is widely adopted due to its benifits :

### **Improved readability**

- JSX makes our code looks like HTML and it makes easier to understand the structure and content of the UI

### **Easier Component Creation**

- JSX allows us to define components in a more natural way, by combining HTML-like syntax and full power of JavaScript for logic and interactivity

### **Maintainability**

- JSX helps to maintain codebase easily

---

## Basics of JSX

1. Creating Element

- We can create React elements using JSX syntax that resembles HTML tags.
  For example:

```JS
const element = <h1> Hello World </h1>
```

This code defines a variable element that holds a React element representing an `<h1>` tag with the text "Hello, world!".

2. Nesting Elements:

- Similar to HTML, JSX allows nesting elements to create a hierarchy. For example:

```JS
const element = (
  <div>
    <h1>Welcome</h1>
    <p>This is a paragraph.</p>
  </div>
);
```

This code creates a div element containing an `<h1>` and a `<p>` element nested within it.

3. Adding Attributes:

- In the example below, we declare a variable called name and then use it inside JSX by wrapping it in curly braces:

```JS
const name = "Alice";
const element = <h1>Hello, {name}!</h1>;
```

## About rendring elements

### Rendering React Elements

In React, rendering is the process of taking our components and their elements, and transforming them into a user interface displayed in the browser. 

Here's a breakdown of what happens during rendering:

**1. From JSX to DOM Elements:**

- We write our UI using JSX, which resembles HTML but is actually converted into JavaScript objects describing the desired UI structure.

**2. The Virtual DOM:**

- React maintains an in-memory representation of our UI called the Virtual DOM. This is a lightweight copy of the actual DOM, allowing React to efficiently compare changes and identify what needs updating.

**3. Updating the Real DOM:**

- React intelligently compares the Virtual DOM with the actual DOM in the browser. It calculates the minimal set of changes required and updates the real DOM efficiently to match the desired UI state.

**How We Render:**

To display our React components, we typically follow these steps:

1. **Define a Root DOM Node:**

   - In our HTML file, we designate a specific element (often a `<div>`) as the root DOM node where our entire React application will be displayed. This element usually has an ID like "root" or "app".

2. **Create a Render Entry Point:**

   - We import the `ReactDOM` library and use the `createRoot` function to establish a connection between React and the root DOM node.

   ```jsx
   import ReactDOM from 'react-dom/client';
   const root = ReactDOM.createRoot(document.getElementById('root'));
   ```

3. **Render the React Element:**

   - The `ReactDOM.render` function takes two arguments:
     * **The React element to render:** This is typically the top-level component of our application.
     * **The root DOM node:** This specifies where the element will be displayed on the screen.

   ```jsx
   const element = <h1>Hello, world!</h1>;
   root.render(element);
   ```

**Why Rendering Matters:**

React's approach to rendering with the Virtual DOM offers several benefits:

* **Performance:** By comparing changes in the Virtual DOM before updating the real DOM, React minimizes unnecessary re-rendering and improves the overall performance of our application.

* **Declarative Style:** React allows us to describe the desired UI state declaratively using JSX, focusing on what we want the UI to look like, while React handles the efficient updates to the actual DOM.

