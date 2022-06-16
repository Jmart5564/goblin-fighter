// import services and utilities

// import component creators
import state, { addEnemy, setMessage } from './components/state.js';
import createAddEnemy from './components/AddEnemy.js';
import createEnemy from './components/enemies.js';

// import state and dispatch functions


// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object
const Enemies = createEnemy(document.querySelector('#enemies'), {
    handleAttackEnemy: (enemy) => {

    }
});


const AddEnemy = createAddEnemy(document.querySelector('#add-enemy'), {
    handleAddEnemy: (name) => {
        const enemy = {
            name: name
            //how to add aspect that randomly generates hp?
        };
        addEnemy(enemy);
        display();
    },
});

// Roll-up display function that renders (calls with state) each component
function display() {
    AddEnemy({ enemy: state.enemy });
    Enemies({ enemies: state.enemies });
    // Call each component passing in props that are the pieces of state this component needs
}

// Call display on page load
display();
