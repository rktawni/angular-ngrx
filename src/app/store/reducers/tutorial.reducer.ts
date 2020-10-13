import { Tutorial } from '../../../models/tutorial.model';
import * as TutorialActions from '../actions/tutorial.actions';

// Define an initial state first
const initialState: Tutorial = {
    name: '[Tutorial] Inital Tutorial',
    url: 'http://google.com'
};

/**
 * declare a function which will react over action.
 * Use switch case to act as per action dispatched.
 * declare state perameter expecting array of model(Tutorial) and
 * action(TutorialActions)
 */
export function tutorialReducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {
    console.log('action', state);
    switch (action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];

        case TutorialActions.REMOVE_TUTORIAL:
            const index = action.payload;
            return [...state.slice(0, index), ...state.slice(index + 1)];

        default:
            return state;
    }
}
