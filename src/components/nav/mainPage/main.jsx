import Stories from "../../stor/stories";
import Footer from "../footer/footer";
import Nav from "../nav/nav";
function Main() {
  let data = [
    {
      img: "https://stories.aseelapp.com/_next/image?url=https%3A%2F%2Fapi-stories.aseelapp.com%2Fcontent%2Fimages%2F2023%2F08%2FCute-2.jpg&w=1920&q=75",
      date: "21 Aug,2022",
      text: "lorem ipsum dolor sit ajd jnaki met",
    },
    {
      img: "https://stories.aseelapp.com/_next/image?url=https%3A%2F%2Fapi-stories.aseelapp.com%2Fcontent%2Fimages%2F2023%2F08%2FHumanitarian-Day_Blog-Thumbnail.jpg&w=1920&q=75",
      date: "21 Aug,2022",
      text: "lorem ipsum dolor situmr sit amet",
    },
    {
      img: "https://stories.aseelapp.com/_next/image?url=https%3A%2F%2Fapi-stories.aseelapp.com%2Fcontent%2Fimages%2F2023%2F08%2FBlog-Thumbnail.jpg&w=1920&q=75",
      date: "21 Aug,2022",
      text: "lorem ipsum  ipsum dolor sit amet",
    },
    {
      img: "https://stories.aseelapp.com/_next/image?url=https%3A%2F%2Fapi-stories.aseelapp.com%2Fcontent%2Fimages%2F2023%2F07%2FDigital-Devices-Mockup-Vol-4-Freebies.jpg&w=1920&q=75",
      date: "21 Aug,2022",
      text: "lorem ipsum  ipsum dolor sit amet",
    },
  ];

  return (
    <>
      <div>
        <Nav />

        <h1 className=" px-32 font-bold text-2xl mt-32 mb-8">Latest Stories</h1>

        <div className="flex px-32 gap-6">
          <Stories date={data[0].date} text={data[0].text} img={data[0].img} />
          <Stories date={data[1].date} text={data[1].text} img={data[1].img} />
          <Stories date={data[2].date} text={data[2].text} img={data[2].img} />
          <Stories date={data[3].date} text={data[3].text} img={data[3].img} />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Main;
