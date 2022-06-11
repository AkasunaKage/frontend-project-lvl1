#!/usr/bin/env node
import { rule, getQuestionAnswer } from '../src/games/brain-gcd.js';
import gamesLogic from '../src/index.js';

gamesLogic(rule, getQuestionAnswer);
