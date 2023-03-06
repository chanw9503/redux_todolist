const initialState = {
  toDos: {
    subject: '',
    content: '',
    isDone: false,
  },
};

const toDoReducer = (prevState = initialState, action) => {
  switch (action.type) {
    default:
      return prevState;
  }
};

export default toDoReducer;
