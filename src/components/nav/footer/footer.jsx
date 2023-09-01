function Footer() {
  let url = {
    buyGood: "https://aseelapp.com/en_us",
    doGood: "https://aseelapp.com/do_good",
    seller: "https://aseelapp.com/sell/vshops",
    about: "https://aseelapp.com/about",
    newsroom: "https://aseelapp.com/newsroom",
    stories: "https://aseelapp.com/stories",
  };
  return (
    <>
      <div
        className="fixed mt-48">
        <ul className=" h-9 pb-2 bg-slate-100 flex justify-start gap-5 px-32 w-full items-center">
          <li className=" text-sm">
            <a href={url.buyGood}>Buy Good</a>
          </li>
          <li className=" text-sm">
            <a href={url.doGood}>Do Good</a>
          </li>
          <li className=" text-sm">
            <a href={url.seller}>Seller</a>
          </li>
          <li className=" text-sm">
            <a href={url.about}>About</a>
          </li>
          <li className=" text-sm">
            <a href={url.newsroom}>Newsroom</a>
          </li>
          <li className=" text-sm font-bold">
            <a href={url.stories}>Stories</a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Footer;
