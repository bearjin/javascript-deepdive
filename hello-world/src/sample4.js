function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? "좋아요 취소" : "좋아요";
  return React.createElement(
    "button",
    { onClick: () => setLiked(!liked) },
    text
  );
}

function Container() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <LikeButton />
      <div style={{ marginTop: 20 }}>
        <span>현재 카운트: </span>
        <span>{count}</span>
        <button type="button" onClick={() => setCount(count + 1)}>
          증가
        </button>
        <button type="button" onClick={() => setCount(count - 1)}>
          감소
        </button>
      </div>
    </div>
  );
}

const domContainer1 = document.querySelector("#react-root1");
ReactDOM.render(React.createElement(Container), domContainer1);
