function Stories(props) {
  return (
    <>
      <div className="flex flex-col h-40">
        <a
          href={
            "https://stories.aseelapp.com/stories/hope-of-millions-of-malnourished-afghan-children"
          }
        >
          <img className="w-80 h-48 rounded-2xl" src={props.img} alt="" />
          <h3 className="px-2 text-xl hover:underline">{props.text}</h3>
          <p className="px-2 text-xs">{props.date}</p>
        </a>
      </div>
    </>
  );
}
export default Stories;
