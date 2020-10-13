/**
 * Action represents to events.
 * An action must have a 'type' which is a string
 * and optional payload, which represents data associated
 * to the actions
 */
import { Action } from '@ngrx/store';
import { Tutorial } from '../../../models/tutorial.model';

/**
 * These constants will be used to define the type of
 * action which is a string.
 */
export const ADD_TUTORIAL = '[Tutorial] Add';
export const REMOVE_TUTORIAL = '[Tutorial] Remove';

export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL;

    constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL;
    constructor(public payload: number) {}
}

export type Actions = AddTutorial|RemoveTutorial;
