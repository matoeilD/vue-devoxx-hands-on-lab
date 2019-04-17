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

// 1.4
const getReactions = postId => {};

const submitReaction = (postId, reaction) => {};
