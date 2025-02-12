// factory functions return objects
const makeFriendsManager = (...initialFriends) => {
  const friends = [...initialFriends];

  return {
    getFriends() {
      return [...friends];
    },
    addFriend(newFriend) {
      if (typeof newFriend !== 'string') {
        throw Error('new friends must be strings');
      };
      friends.push(newFriend);
    }
  }
}

// instances of the factory function have their own friends
const reuben = makeFriendsManager();
reuben.addFriend('carmen')
reuben.addFriend('ann')
reuben.addFriend('motun')
console.log(reuben.getFriends()); // ['carmen', 'ann', 'motun']


const maya = makeFriendsManager();
maya.addFriend('ben')
maya.addFriend('gonzalo')
console.log(maya.getFriends()); // ['ben', 'gonzalo']


console.log(reuben);
// {
//   getFriends: [Function: getFriends],
//   addFriend: [Function: addFriend]
// }

console.log(maya);
// {
//   getFriends: [Function: getFriends],
//   addFriend: [Function: addFriend]
// }

// so, are they the same object?
console.log(reuben === maya);
// are the methods of these objects the same?
console.log(reuben.addFriend === maya.addFriend);
