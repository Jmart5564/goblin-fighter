
export default function createEnemy(root, { handleAttackEnemy, handleBye }) {

    return ({ enemies }) => {
        root.HTML = '';

        for (const enemy of enemies) {
            const enemyEl = Enemy({ enemy, handleAttackEnemy, handleBye });
            root.append(enemyEl);
        }
    };
}

const emojis = ['👿', '💀'];

export function Enemy({ enemy, handleAttackEnemy, handleBye }) {
    const button = document.createElement('button');
    button.classList.add('enemy');

    button.addEventListener('click', () => {
        handleAttackEnemy(enemy);
    });

    const nameEl = document.createElement('span');
    nameEl.classList.add('name');
    nameEl.textContent = enemy.name;

    const emojiEl = document.createElement('span');
    emojiEl.classList.add('emoji');
    emojiEl.textContent = emojis[enemy.status];

    button.append(nameEl, emojiEl);

    if (enemy.status === 0) {
        const bye = document.createElement('button');
        bye.classList.add('bye');
        bye.textContent = '🗑️';
        bye.addEventListener('click', (e) => {
            e.stopPropagation();
            handleBye(enemy);
        });
        button.append(bye);
    }

    return button;
}