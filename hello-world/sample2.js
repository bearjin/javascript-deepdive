function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? "좋아요 취소" : "좋아요";
  return React.createElement(
    "button",
    { onClick: () => setLiked(!liked) },
    text
  );
}

const domContainer1 = document.querySelector("#react-root1");
const domContainer2 = document.querySelector("#react-root2");
const domContainer3 = document.querySelector("#react-root3");
ReactDOM.render(React.createElement(LikeButton), domContainer1);
ReactDOM.render(React.createElement(LikeButton), domContainer2);
ReactDOM.render(React.createElement(LikeButton), domContainer3);
