type type = { rating: number };
function Rating({ rating }: type) {
  return (
    <div className="rating">
      {rating > 0 ? <img src="/images/star1.png" /> : <></>}
      {rating > 1 ? <img src="/images/star1.png" /> : <></>}
      {rating > 2 ? <img src="/images/star1.png" /> : <></>}
      {rating > 3 ? <img src="/images/star1.png" /> : <></>}
      {rating > 4 ? <img src="/images/star1.png" /> : <></>}
      {rating < 1 ? <img src="/images/star.png" /> : <></>}
      {rating < 2 ? <img src="/images/star.png" /> : <></>}
      {rating < 3 ? <img src="/images/star.png" /> : <></>}
      {rating < 4 ? <img src="/images/star.png" /> : <></>}
      {rating < 5 ? <img src="/images/star.png" /> : <></>}
    </div>
  );
}

export default Rating;
