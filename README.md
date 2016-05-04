# React Redux Intermediate Class #3

This is an intermediate-level tutorial (tied in with a [Codementor.io course](https://www.codementor.io/classes)) that presumes that readers are proficient with JavaScript, have at least a passing familiarity with JavaScript 2015 syntax, and have done some basic work with React.js.

Let's build a flash card app to begin. It seems to fit with our GitHub-inspired app name, *Didactic Doodle*.

## Instructions

1. Let's take a break from the app itself and have a bit of fun. We'll play around with [react drag and drop](http://gaearon.github.io/react-dnd/) and we'll see how that works. That Dan Abramov guy sure stays busy. To begin, we'll install the required modules:

  ```sh
  npm i -S react-dnd react-dnd-html5-backend
  ```
2. Let's reimagine our Counter page. We'll have a list of possible increments/decrements that we can drag onto an increment block or a decrement block. Doing so will dispatch the correct action with the correct increment/decrement. We can change the `/src/containers/counter.js` file from this:

  ```jsx
  // in src/containers/counter.js
  <h1>Counter</h1>
  <Button onClick={incrementCount}>+</Button>
  <p>The count is {count}.</p>
  <Button onClick={decrementCount}>-</Button>
  ```

  to this:

  ```jsx
  // in src/containers/counter.js
  <h1>Counter</h1>
  <div className='nums'>
    <div className='num'>1</div>
    <div className='num'>2</div>
    <div className='num'>5</div>
    <div className='num'>10</div>
    <div className='num'>50</div>
    <div className='num'>100</div>
  </div>
  <div className="zones">
    <div className='dec'>minus</div>
    <div className='count'>{count}</div>
    <div className='inc'>plus</div>
  </div>
  ```

3. Next we'll add some CSS to make it look nice:

  ```css
  /* in src/theme/main.css */
  .nums {
    clear: both;
    height: 80px;
    margin: 10px 0;
    width: 480px;
  }

  .nums .num {
    border: 1px solid blue;
    border-radius: 20px;
    cursor: -moz-grab;
    cursor: -webkit-grab;
    float: left;
    font-size: 18px;
    height: 40px;
    line-height: 40px;
    margin: 20px;
    text-align: center;
    width: 40px;
  }

  .zones {
    clear: both;
    height: 120px;
    margin: 10px 0;
    padding: 0;
  }

  .zones .count,
  .zones .dec,
  .zones .inc {
    float: left;
    font-size: 40px;
    height: 120px;
    line-height: 120px;
    text-align: center;
  }

  .zones .dec,
  .zones .inc {
    color: white;
    width: 180px;
  }

  .zones .count {
    width: 120px;
  }

  .zones .dec {
    background-color: red;
  }

  .zones .inc {
    background-color: green;
  }
  ```
