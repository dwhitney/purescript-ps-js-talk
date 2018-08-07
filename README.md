* "Bio"
* "Intro: Adding PureScript to an existing JavaScript app"
* "Motivation: monad tutorial fallacy"
  * https://byorgey.wordpress.com/2009/01/12/abstraction-intuition-and-the-monad-tutorial-fallacy/
* "FFI"
  * Importing Values
  * Importing Types
* Demo application
* Walk through JavaScript (branch: `javascript`)

* Step 1: single foreign function and data type (branch: `step-1`)
  * npm install pulp bower purescript --save-dev
  * npx pulp init --force
  * edit package.json and add `pulp build && ` to the begining of the build step
  * rm src/Main.purs
  * create `src/Nav.purs` and `src/Nav.js`
  * implement `Nav.js` from the javascript branch in CommonJS
    * ```javascript
      import React from "react";

      const Nav = props => (
        <nav>
          <h1>Chart-o-Matic</h1>
          <button onClick={() => props.addChart()} />
        </nav>
      );
      ```

export default Nav;

* Step 2: refactor to React.createElement(name, props, children);
* Step 3: refactor with Fn3, runFn3 and JSX integration
* tour of purescript-react-basic
* Further reading

