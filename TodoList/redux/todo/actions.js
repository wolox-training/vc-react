export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const TOGGLE_ITEM_COMPLETED = 'TOGGLE_ITEM_COMPLETED';
export const REMOVE_COMPLETED_ITEMS = 'REMOVE_COMPLETED_ITEMS';

export const actionCreators = {
  addTodo(item) {
    return {
      type: ADD_ITEM,
      payload: { item }
    };
  },
  removeTodo(item) {
    return {
      type: REMOVE_ITEM,
      payload: { item }
    };
  },
  togleTodoCompleted(item) {
    return {
      type: TOGGLE_ITEM_COMPLETED,
      payload: { item }
    };
  },
  removeAllCompletedTodos() {
    return {
      type: REMOVE_COMPLETED_ITEMS
    };
  }
}
