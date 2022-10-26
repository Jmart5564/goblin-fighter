
export default function createAddEnemy(root, { handleAddEnemy }) {
    const form = root.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        handleAddEnemy(formData.get('name'));
        form.reset();
    });

    return () => {};

}
