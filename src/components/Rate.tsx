type type = {
  star: number;
  num: number;
  strength: number;
};
function Rate({ star, num, strength }: type) {
  return (
    <div className="rate">
      <div className="rating">
        {star > 0 ? <img src="/images/star1.png" /> : <></>}
        {star > 1 ? <img src="/images/star1.png" /> : <></>}
        {star > 2 ? <img src="/images/star1.png" /> : <></>}
        {star > 3 ? <img src="/images/star1.png" /> : <></>}
        {star > 4 ? <img src="/images/star1.png" /> : <></>}
        {star < 1 ? <img src="/images/star.png" /> : <></>}
        {star < 2 ? <img src="/images/star.png" /> : <></>}
        {star < 3 ? <img src="/images/star.png" /> : <></>}
        {star < 4 ? <img src="/images/star.png" /> : <></>}
        {star < 5 ? <img src="/images/star.png" /> : <></>}
      </div>
      <div className="strength">
        <div style={{ width: strength + '%' }}></div>
      </div>
      <p>({num})</p>
    </div>
  );
}

export default Rate;
