// set state to an empty object
const state = {};

// initialize state, also used in test
export function initialize() {
    
    state.message = '';
    state.enemies = [
        { name: 'OZ', status: 3 },
    ];
}
// call initialize
initialize();
// export state as primary (default) export
export default state;

// export dispatch functions that modify state
export function setMessage(message) {
    state.message = message;
}

export function AddEnemy(enemy) {
    state.enemies.push(enemy);
}

