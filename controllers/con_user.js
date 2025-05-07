
const users = [
    { id: 1, name: 'ASM Tamzid' },
    { id: 2, name: 'sabbit' }
];


const getAll = (req, res) => {
    res.json(users);
};

const deleteUser = (req, res) => {
    res.json({ message: 'User deleted' });
};

const updateUse = (req, res) => {
    res.json({ message: 'User updated' });
};

module.exports = {
    getAll,
    deleteUser,
    updateUse
};