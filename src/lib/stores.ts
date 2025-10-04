import { writable } from 'svelte/store';
import type { Question } from './data';

export const currentQuestion = writable<Question | null>(null);
export const scores = writable({ teamA: 0, teamB: 0 });
export const strikes = writable(0);
export const currentTeam = writable<'teamA' | 'teamB'>('teamA');
export const stealOpen = writable(false);