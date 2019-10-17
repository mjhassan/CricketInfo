import {combineReducers} from 'react-redux';
import FirstInningsReducer from './FirstInningsReducer';
import SecondInningsReducer from './SecondInningsReducer';
import MatchConfigReducer from './MatchConfigReducer';

const AllReducers = combineReducers({
  first_innings: FirstInningsReducer,
  second_innings: SecondInningsReducer,
  matchconfig: MatchConfigReducer,
});

export default AllReducers;
