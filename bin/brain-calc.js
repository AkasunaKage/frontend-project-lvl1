#!/usr/bin/env node
import { description, generateRound } from '../src/games/brain-calc.js';
import startGame from '../src/index.js';

startGame(description, generateRound);
