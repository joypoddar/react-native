import { createStore, combineReducers, applyMiddleware } from "redux";
// import { createForms } from "react-redux-form";
import thunk from "redux-thunk";
import logger from "redux-logger";
// import { InitialFeedback } from "./forms";
import { dishes } from "./dishes";
import { comments } from "./comments";
import { promotions } from "./promotions";
import { leaders } from "./leaders";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes,
      comments,
      promotions,
      leaders,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
