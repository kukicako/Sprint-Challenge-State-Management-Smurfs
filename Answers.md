1. What problem does the context API help solve?

 <!-- allows passing of props to child component without prop drilling -->

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

<!-- store holds all of the state, reducers hold action calls, actions run pure functions that change state  -->


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

<!-- component state is state held in the components, best with smaller projects. Application state can be passed to all components making it easier to work with huge projects -->


1. Describe `redux-thunk`, what does it allow us to do? How does it 
change our `action-creators`?


<!-- redux thunk allows us to run async actions. our action creators can have multiple dispatches -->

1. What is your favorite state management system you've learned and this sprint? Please explain why!

<!-- i hate redux because its confusing but also love it because its quite awesome the amount of power and control you have -->