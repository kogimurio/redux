const redux = require('redux');
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAMS_ORDERED = 'ICECREAMS_ORDERED';
const ICECREAMS_RESTOCKED = 'ICECREAMS_RESTOCKED';

// Action
function orderCake() {
    return {
            type: CAKE_ORDERED,
            payload: 1,
    }
}

function restockCake(qty=1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty,
    }
}

function orderIcecreams() {
    return {
        type: ICECREAMS_ORDERED,
        payload: 1,
    }
}

function restockIcecreams(qty=1) {
    return {
        type: ICECREAMS_RESTOCKED,
        payload: qty,
    }
}

// Initial states
const initialCakeState = {
    numberOfCakes: 10,
}

const initialIcecreamsState = {
    numberOfIcecreams: 20,
}

// Reducer
const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1,
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes + action.payload,
            }
        default:
            return state
    }
}

const icecreamsReducer = (state = initialIcecreamsState, action) => {
    switch(action.type) {
        case ICECREAMS_ORDERED:
            return {
                ...state,
                numberOfIcecreams: state.numberOfIcecreams - 1,
            }
        case ICECREAMS_RESTOCKED:
            return {
                ...state,
                numberOfIcecreams: state.numberOfIcecreams + action.payload,
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: icecreamsReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial state', store.getState())

const unsubscribe = store.subscribe(() => {})

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(4))

const action = bindActionCreators({ orderCake, restockCake, orderIcecreams, restockIcecreams }, store.dispatch)
action.orderCake()
action.orderCake()
action.orderCake()
action.restockCake(4)
action.orderIcecreams()
action.orderIcecreams()
action.restockIcecreams(2)

unsubscribe()
