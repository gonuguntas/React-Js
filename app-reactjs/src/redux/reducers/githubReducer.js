import { FETCH_GITHUB_DATA } from '../constants/action-types';

export default function githubReducer(state = [], action) {
  switch (action.type) {
      case FETCH_GITHUB_DATA:
      return action.data;
    default:
      return state;
  }
}
