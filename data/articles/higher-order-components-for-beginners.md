---
title: "Higher-Order Components (HOCs) for Beginners"
excerpt: "A gentle introduction to Higher-Order Components"
image: "/images/hoc-for-beginners.jpg"
published: "Jul 15, 2017"
---

## Preface

I'm writing this because literally every other article—including the official 
React documentation on [Higher-Order Components](https://facebook.github.io/react/docs/higher-order-components.html)—confused the hell out of me as a beginner. For example "Use HOCs For Cross-Cutting Concerns"(wtf does that even mean?). Even more confusing, the docs then make reference to an API that has been deprecated for nearly a year. But, I digress.

Before we can understand HOCs we must first understand some things about
functions in Javascript.

## Functions as Values and Partial Application

Just like numbers, strings, booleans, etc., *functions are values*. That means
that you can pass functions around like any other data. You can pass a function
as an argument to another function:

```js
const execute = (someFunction) => someFunction()

execute(() => alert('Executed'))
```

And you can return a function from a function.

```js
const getOne = () => () => 1

getOne()()
```

The reason we have two `()` after `getOne` is that the first application of the
function returns another. To illustrate:

```js
const getOne = () => () => 1

getOne
//=> () => () => 1

getOne()
//=> () => 1

getOne()()
//=> 1
```

The cool thing about returning functions from functions is that we can write
functions that keep track of their initial input. For example, the function
below accepts a number as an argument and returns a function that multiplies
that argument by a new one:

```js
const multiply = (x) => (y) => x * y

multiply(5)(20)
```

This example works the same as `getOne`, each parenthesis applies the function
to some input. In this case we are assigning `x` to `5` and `y` to `20`.

```js
const multiply = (x) => (y) => x * y

multiply
//=> (x) => (y) => x * y

multiply(5)
//=> (y) => 5 * 20

multiply(5)(20)
//=> 100
```

When we call the function `multiply` with only one argument we are doing
something called partial application. When we call `multiply(5)` we get a function that will multiply it's input by 5. If we call `multiply(7)` we get a function that will multiply it's input by 7, and so on. We can use partial application to create new functions with a predefined input:

```js
const multiply = (x) => (y) => x * y

const multiplyByFive = multiply(5)
const multiplyBy100 = multiply(100)

multiplyByFive(20)
//=> 100
multiply(5)(20)
//=> 100

multiplyBy100(5)
//=> 500
multiply(100)(5)
//=> 500
```

This may not seem super useful at first. However, you can use partial application to write code that is easier to read and reason about. For example, we can replace [`styled-components`](https://www.styled-components.com/docs/basics#adapting-based-on-props) complex function interpolation syntax with something a bit cleaner.

```js
// before
const Button = styled.button`
  background-color: ${({ theme }) => theme.bgColor}
  color: ${({ theme }) => theme.textColor}
`

<Button theme={themes.primary}>Submit</Button>
```

```js
// after
const fromTheme = (prop) => ({ theme }) => theme[prop]

const Button = styled.button`
  background-color: ${fromTheme("bgColor")}
  color: ${fromTheme("textColor")}
`

<Button theme={themes.primary}>Submit</Button>
```

This is a prime example of partial application. We create a function that accepts a string as a parameter: `fromTheme("textColor")`, which returns a function accepting an object with a `theme` property: `({ theme }) => theme[prop]`, which we then attempt to lookup via the initial string we passed in `"textColor"`. We could go furthur and write functions like `backgroundColor` and `textColor` that partially apply the `fromTheme` function:

```js
const fromTheme = (prop) => ({ theme }) => theme[prop]
const backgroundColor = fromTheme("bgColor")
const textColor = fromTheme("textColor")

const Button = styled.button`
  background-color: ${backgroundColor}
  color: ${textColor}
`
```

## Higher-Order Functions

Higher-order functions are defined as functions that accept a function as an argument. You may already be familiar with higher-order functions if you've ever used a function like [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map). If you aren't familiar with `map`, it is a function that loops over and applies a function to every element in an array. For example, you can square an array of numbers like so:

```js
[1, 2, 3].map((x) => x * x)
//=> [ 1, 4, 9 ]
```

We can write our own version of `map` to illustrate this concept:

```js
const map = (fn, array) => {
  const mappedArray = []

  for (let i = 0; i < array.length; i++) {
    mappedArray.push(
      // apply fn with the current element of the array
      fn(array[i])
    )
  }

  return mappedArray
}
```

We can then use our version of `map` to do something like square an array of numbers:

```js
const square = (x) => x * x

console.log(map(square, [1, 2, 3, 4, 5]))
//=> [ 1, 4, 9, 16, 25 ]
```

Or return an array of `<li>` React Elements:

```js
const HeroList = ({ heroes }) => (
  <ul>
    {map((hero) => (
      <li key={hero}>{hero}</li>
    ), heroes)}
  </ul>
)

<HeroList heroes=[
  "Wonder Woman",
  "Black Widow",
  "Spider Man",
  "Storm",
  "Deadpool"
]/>
/*=> (
  <ul>
    <li>Wonder Woman</li>
    <li>Black Widow</li>
    <li>Spider Man</li>
    <li>Storm</li>
    <li>Deadpool</li>
  </ul>
)*/
```

## Higher-Order Components

We know that a higher-order function is a function that accepts a function as an argument. In React, any function that returns JSX is known as a Stateless Functional Component, or Functional Component for short. A basic Functional Component looks like this:

```js
const Title = (props) => <h1>{props.children}</h1>

<Title>Higher-Order Components(HOCs) for React Newbies</Title>
//=> <h1>Higher-Order Components(HOCs) for React Newbies</h1>
```

A higher-order component **is a function that accepts a Component as an argument and returns a Component**. How you use the passed Component is up to you. You can even completely disregard it:

```js
// Technically an HOC
const ignore = (Anything) => (props) => <h1>:)</h1>

const Title = ignore(HeroList)
<Title />
//=> <h1>:)</h1>
```

You can write an HOC that uppercases it's input:

```js
const yell = (PassedComponent) =>
  ({ children, ...props }) =>
    <PassedComponent {...props}>
      {children.toUpperCase()}!
    </PassedComponent>

const Title = (props) => <h1>{props.children}</h1>
const AngryTitle = yell(Title)

<AngryTitle>Whatever</AngryTitle>
//=> <h1>WHATEVER!</h1>
```

You can return a Stateful Component because classes in Javascript are syntax sugar for functions. This allows you to hook into React Lifecycle methods like `componentDidMount`. This is where HOCs become really useful, because we can now do things like pass down the result of an XHR request as props to a Functional Component.

```js
const withGists = (PassedComponent) => (
  class WithGists extends React.Component {
    state = {
      gists: []
    }

    componentDidMount() {
      fetch("https://api.github.com/gists/public")
      .then(r => r.json())
      .then(gists => this.setState({
        gists
      }))
    }

    render() {
      return <PassedComponent {...this.props} gists={this.state.gists} />
    }
  }
)

const Gists = ({ gists }) => (
  <pre>{JSON.stringify(gists, null, 2)}</pre>
)

const GistsList = withGists(Gists)

<GistsList />
//=> Before api request finishes:
// <Gists gists={[]} />
// 
//=> After api request finishes:
// <Gists gists={[
//  { /* … */ },
//  { /* … */ },
//  { /* … */ }
// ]} />
```

You can call `withGists` on any component and it will pass down the result of the gists api call. You can see a more fleshed out example of this [here](https://codesandbox.io/embed/o2YpJnpDj).

## Conclusion: HOCs are 🔥🔥🔥

Redux uses an HOC called `connect` to pass values from your application store to "connected" components. It also does some error checking and component optimizations that, if done manually, would cause your code to become bloated out of control.
