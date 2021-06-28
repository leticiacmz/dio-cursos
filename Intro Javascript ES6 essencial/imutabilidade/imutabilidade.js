const user = {
    name: 'Leticia',
    lastName: 'Cruz Menezes'
};

function getUserWithFullName(user) {
    return {
        ...user,
    fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullname(user);

console.log(userWithFullName, user);