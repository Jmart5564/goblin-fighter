// import services and utilities
import { getRandomItem, getRandomIndex } from './utils.js';

// import component creators
import state, { addEnemy, setPlayerMessage, setEnemyMessage, removeEnemy } from './components/state.js';
import createAddEnemy from './components/AddEnemy.js';
import createEnemy from './components/enemies.js';
import createMessage from './components/Message.js';

// import state and dispatch functions
const playerMessage = createMessage(document.querySelector('#player-message'));
const enemyMessage = createMessage(document.querySelector('#enemy-message'));
const playerHP = document.querySelector('#player-hp');
const defeatedEnemies = document.querySelector('#defeated-number');



// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object
const Enemies = createEnemy(document.querySelector('#enemies'), {
    handleAttackEnemy: (enemy) => {
        if (enemy.health <= 0) {
            state.defeated++;
            return;
        }
        if (Math.random() < 0.33) {
            enemy.health--;
            setPlayerMessage('You hit the enemy!');
        } else {
            setPlayerMessage('You missed!');
        }
        if (Math.random() < 0.5) {
            state.hp--;
            setEnemyMessage('Enemy hit you!');
        } else {
            setEnemyMessage('Enemy missed!');
        }
        if (state.hp === 0) {
            setPlayerMessage('GAME OVER');
        }
        display();
    },
    handleBye: (enemy) => {
        removeEnemy(enemy);
        display();
    },
});


const AddEnemy = createAddEnemy(document.querySelector('#add-enemy'), {
    handleAddEnemy: (name) => {
        const enemy = {
            name: name,
            health: Math.ceil(Math.random() * 5),
        };
        addEnemy(enemy);
        display();
    },
});

// Roll-up display function that renders (calls with state) each component
function display() {
    playerMessage({ message: state.playerMessage });
    enemyMessage({ message: state.enemyMessage });
    AddEnemy({ enemy: state.enemy });
    Enemies({ enemies: state.enemies });
    // Call each component passing in props that are the pieces of state this component needs
}

// Call display on page load
display();
