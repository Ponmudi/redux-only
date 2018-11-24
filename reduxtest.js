const {createStore} = require('redux');

const initialState = {
    age: 35
};

const myReducers = (state = initialState , action) => {

    const newState = {...state};

    if(action.type === 'ADD'){
        newState.age +=  action.val
    }

    return newState;

}

const store = createStore(myReducers);

store.subscribe(
    () => console.log(store.getState())
);

store.dispatch({type: 'ADD', val: 10});