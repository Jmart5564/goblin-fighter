// set state to an empty object
const state = {};

// initialize state, also used in test
export function initialize() {
    state.damage = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2];
    state.message = '';
    state.enemies = [
        { name: 'OZ', health: 3 },
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

export function addEnemy(enemy) {
    state.enemies.push(enemy);
}

export function removeEnemy(enemy) {
    const index = state.enemies.indexOf(enemy);
    state.enemies.splice(index, 1);
}

