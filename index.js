
import { AppRegistry } from 'react-360';

import CharacterModel from './components/CharacterModel';
import ListOfCharacters from './components/ListOfCharacters';
    
     
import * as Store from './Store';
Store.initState();



AppRegistry.registerComponent('ListOfCharacters', () => ListOfCharacters);
AppRegistry.registerComponent('CharacterModel', () => CharacterModel);
