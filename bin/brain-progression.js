#!/usr/bin/env node
import { description, generateRound } from '../src/games/brain-progression.js';
import startGame from '../src/index.js';

startGame(description, generateRound);
