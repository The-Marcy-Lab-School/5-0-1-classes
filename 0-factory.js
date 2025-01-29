// factory functions return objects
const makeFriendsManager = (...initialFriends) => {
  const friends = [...initialFriends];

  return {
    getFriends() {
      return [...friends];
    },
    addFriend(newFriend) {
      if (typeof newFriend !== 'string') return;
      friends.push(newFriend);
    }
  }
}

// instances of the factory function
const myFM = makeFriendsManager();
const yourFM = makeFriendsManager();