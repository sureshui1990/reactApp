
export default ({ dispatch }) => next => action => {
    
    // Check the action contain promise
    // Allow the action if does not exist promise
    // Handling the action with promise 
    if(action instanceof Promise) {
        action.then(actionWithPayload => {
            const newAction = {...actionWithPayload};
            return dispatch(newAction);
        })
    } else if(Object.keys(action).length === 0){
        return null;
    }
    return next(action);

}