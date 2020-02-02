import { episodes } from './database.js';
for(let a of episodes)
{
  a.hasBeenWatched = false;
}


export { episodes };