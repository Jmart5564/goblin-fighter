import state, {
    initialize,
    // import dispatch functions
} from '../components/state.js';

// make sure state is at known starting point
QUnit.module('state', { beforeEach: initialize });

const test = QUnit.test;

test('the first state test...', (expect) => {
    // what is the initial expected state?
    const expected = {
        defeated: 0,
        hp: 10,  
        damage: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2],
        enemyMessage: '',
        playerMessage: '',
        enemies: [
            { name: 'Poe', health: 3 },
        ],
    };
    // use the action

    // what should the state be now?


    // remove this line when starting your test
    expect.deepEqual(state, expected);
});
