type type = { name: string };
function Review({ name }: type) {
  return (
    <div className="review">
      <div className="rating">
        <img src="/images/star1.png" />
        <img src="/images/star1.png" />
        <img src="/images/star1.png" />
        <img src="/images/star1.png" />
        <img src="/images/star.png" />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, scelerisque
        ut sapien, posuere non. Faucibus egestas consectetur interdum amet id
        elementum. Lacinia non augue amet at. Nunc fringilla bibendum nisl,
        vitae nisl.
      </p>
      <h4>
        <span></span>
        {name}
      </h4>
    </div>
  );
}

export default Review;
