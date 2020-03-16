// Reducer functions take in two objects and return a single object
// The first argument is the current state
// The second argument is an action object
// Action Objects - objects that tell our reducer what event just occurred in the UI, and can be used to pass data from the UI to the reducer
// Action objects must have a "type" , always in a string property to inform reducer what happened
// The return object is a new state object (think immutability)

export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Clean the house',
        completed: false,
        id: 25897   
    },
    {
        item: 'Wash the dogs',
        completed: false,
        id: 345
    }
];
  
export const taskReducer = (state, action) => {
    console.log('action', action);
     switch (action.type) {
    case "TOGGLE_COMPLETED":
            return [...state.map(item => (
                (item.id === action.payload)?
                {...item, completed: !item.completed} :
                {...item}))]; 
      case "ADD_ITEM":
        return [...state, {
            item: action.payload.item, 
            completed: false, 
            id: new Date()}];
        
      case "CLEAR_DONE":
          return state.filter(item => !(item.completed));      
      default:
        return state;
    }
  
};
  
