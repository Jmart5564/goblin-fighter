//add handleAddEnemy next to root?
export default function createAddEnemy(root, { handleAddEnemy }) {
    const form = form.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        handleAddEnemy(formData.get('name'));
    });

    return () => {};

}
