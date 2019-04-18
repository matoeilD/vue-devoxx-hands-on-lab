// 1.2
const REACTIONS = {
  HEART: "😻",
  LAUGH: "😹",
  SHOCK: "🙀",
  GRIEF: "😿",
  ANGER: "😾"
};

const initialiseReactionCounts = (reactionsObj, initialValue = 0) =>
  Object.keys(reactionsObj).reduce(
    (reactionCounts, reaction) =>
      Object.assign(reactionCounts, {
        [reaction]: initialValue
      }),
    {}
  );

// 1.4 & 1.5

const database = firebase.database().ref("GLOBAL");
const createdAt = firebase.database.ServerValue.TIMESTAMP;
const incrementFirebaseValue = ref => ref.transaction(prev => (prev || 0) + 1);

const getReactionsCount = async postId =>
  (await database.child(`${postId}/summary`).once("value")).val();

const submitReaction = (itemId, reaction) =>
  Promise.all([
    incrementFirebaseValue(database.child(`${itemId}/summary/${reaction}`)),
    database.child(`${itemId}/reactions`).push({ reaction, createdAt })
  ]);
