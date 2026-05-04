const CreateField = () => {
    const newField = [];
    const random: number = Math.floor(Math.random() * 36);

    for (let i = 0; i < 36; i++) {
        const newCell = {
            hasItem: false,
            clicked: false,
            cell: '',
            id: i + 1
        };

        if (random === i) {
            newCell.hasItem = true;
            newCell.cell = '❌';
        }
        newField.push(newCell);
    };
    return newField;
};

export default CreateField