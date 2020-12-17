export const getStateFromLS = () => {

  // Get todos from the LS and use it as the initial state.
  // If there is no todo or it fails to load, return undefine
  // With undefined, the reducer will return what it considers as the initial state
  try {
    const storedTodos = localStorage.getItem('mytodo');
    if (storedTodos === null) {
      return undefined;
    }
    return JSON.parse(storedTodos);
  }
  catch (err) {
    return undefined;
  }
};

export const saveStateToLS = (state) => {
  // Save the state to localsorage 
  try {
    localStorage.setItem('mytodo', JSON.stringify(state));
  }
  catch (err) {
    console.log(err);
  }
};

