import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// Initial state
const initialState = {
  user: null, // This will store your login data globally
  campaign: {
    Id: '-1', // Campaign ID
    Objective: '', // Campaign objective
    AdSetIds: [], // Array of AdSet IDs
  },
  adset: {
    Id: '',
    Name: '',
    Type: '',
    Pixel: '',
    ConversionEvent: '',
    BudgetType: '',
    BudgetAmount: '',
    AdIds: [],
  },
  ad: {
    Id: '',
    Name: '',
    AdSetup: '',
    Format: '',
    Text: '',
    Headline: '',
    Description: '',
    CallToAction: '',
    Image: '',
    Video: '',
  },
};

// Reducer function to update the state
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: {
          ...state.user, // Keep existing user data if there's any
          ...action.payload, // Set or update the user data from the signup page
        },
      };
    case 'SET_SURVEY':
      return {
        ...state,
        user: {
          ...state.user, // Keep existing user data
          ...action.payload, // Merge survey data (q1, q2, q3) into the user object
        },
      };
      case 'SET_USER_DATA':
      return {
        ...state,
        user: action.payload, // Directly set the user data from the backend
      };
      case 'SET_CAMPAIGN':
      return {
        ...state,
        campaign: {
          ...state.campaign, // Keep existing campaign fields
          ...action.payload, // Update campaign fields
        },
      };
      case 'SET_ADSET':
      return {
        ...state,
        adset: {
          ...state.adset, // Keep existing adset fields
          ...action.payload, // Update adset fields
        },
      };
    case 'SET_AD':
      return {
        ...state,
        ad: {
          ...state.ad, // Keep existing ad fields
          ...action.payload, // Update ad fields
        },
      };
    default:
      return state;
  }
};

// Persist configuration
const persistConfig = {
  key: 'root',
  storage, // Use localStorage to persist the state
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, reducer);

// Create the Redux store with the persisted reducer
const store = createStore(persistedReducer);

// Create a persistor
export const persistor = persistStore(store);

export default store;