import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer';

export default configureStore({
  reducer: {
    modal: counterReducer,
  },
});