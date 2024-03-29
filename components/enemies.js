
export default function createEnemy(root, { handleAttackEnemy, handleBye }) {

    return ({ enemies }) => {
        root.innerHTML = '';

        for (const enemy of enemies) {
            const enemyEl = Enemy({ enemy, handleAttackEnemy, handleBye });
            root.append(enemyEl);
        }
    };
}


export function Enemy({ enemy, handleAttackEnemy, handleBye }) {
    const button = document.createElement('button');
    button.classList.add('enemy');

    button.addEventListener('click', () => {
        handleAttackEnemy(enemy);
    });

    const nameEl = document.createElement('span');
    nameEl.classList.add('name');
    nameEl.textContent = enemy.name;

    const imgEl = document.createElement('img');
    imgEl.classList.add('img');
    imgEl.src = './poe.png';

    const healthEl = document.createElement('span');
    healthEl.classList.add('health');
    healthEl.textContent = enemy.health;


    button.append(nameEl, imgEl, healthEl);

    if (enemy.health === 0) {
        const bye = document.createElement('button');
        bye.classList.add('bye');
        bye.textContent = '🗑️';
        imgEl.src = './skull.png';
        bye.addEventListener('click', (e) => {
            e.stopPropagation();
            handleBye(enemy);
        });
        button.append(bye);
    }

    return button;
}