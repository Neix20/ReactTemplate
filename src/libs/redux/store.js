import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./reducers";

import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage: storage,
    timeout: 60 * 60 * 24 * 7,
};

let middleware = [];
if (process.env.NODE_ENV === `development`) {
    middleware.push(logger);
}

middleware = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

export { store, persistor };