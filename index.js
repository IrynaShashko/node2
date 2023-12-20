console.log("start project");

const reviews = require("./reviews");

console.log("reviews", reviews);

const invokeAction = async ({
  action,
  id,
  name,
  comment,
  totalPositiveStars,
}) => {
  switch (action) {
    case "read":
      const allReviews = await reviews.getAllReviews();
      return console.log(allReviews);

    case "getById":
      const oneReviews = await reviews.getById(id);
      return console.log("oneReviews", oneReviews);

    case "add":
      const newReviews = await reviews.add({
        name,
        comment,
        totalPositiveStars,
      });
      return console.log("oneReviews", newReviews);

    case "updateById":
      const updateReviews = await reviews.updateById(id, {
        name,
        comment,
        totalPositiveStars,
      });
      return console.log("updateReviews", updateReviews);

    case "deleteById":
      const deleteReviews = await reviews.deleteById(id);
      return console.log(deleteReviews);

    default:
      break;
  }
};

// invokeAction({ action: "read" });
// invokeAction({ action: "getById", id: 5 });
// invokeAction({
//   action: "add",
//   name: "Ольга",
//   comment: "Чудовий спеціаліст, я в захваті! Врятувала мою спину!",
//   totalPositiveStars: "5",
// });
// invokeAction({
//   action: "updateById",
//   id: "th3JA_IwCwVN211wFR0-S",
//   name: "Катерина",
//   comment: "Чудовий спеціаліст, я в захваті! Врятувала мою спину!",
//   totalPositiveStars: "5",
// });
invokeAction({ action: "deleteById", id: "yLvWT1ek3u2v5y7doUfhZ" });
