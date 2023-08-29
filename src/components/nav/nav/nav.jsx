function Nav() {
  let url = {
    storiesUrl: "https://stories.aseelapp.com/",
    buyUrl: "https://aseelapp.com/",
    doUrl: "https://aseelapp.com/do_good",
    aseelUrl: "https://aseelapp.com",
  };

  return (
    <>
      <div className="flex justify-between bg-slate-50n px-32 items-center w-full h-20">
        <a className=" flex justify-center items-center" href={url.aseelUrl}>
          <img
            className="h-16 w-16"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAYFBMVEX///8VYZIAXI8AVIr2+fsAUIhwlbPs8fUAV4wJXpBSfaMAWY3B0d4AUomZscfF1OB4m7dIfKIASoW3ydfb5Ovj6u8nZ5agtclCeKBmja4ARoMAQYBeiKo0bZmYrMOKqMC2VxokAAAELElEQVR4nO2a23qrIBCFxVO1HtKm0iSm3X3/t9yIoAyOhyjjFevrlTHJX2YJzCJB4OXl5eXl5eXl5eXlRadm+608pkF4lJsJ3okQ0udGBp6QIYTF15b7mu+QDiHfwiAIcjoExpLL2l08DBkpAktWxqEJc0aMwJZrIarAyBHyYuG56AmoERhrZ/3Aq5ydgsCimVo0rCc4ASEPUYbmd7iBHIHlGeIHzsbX6REYu04YeJSzUxFYZtWi+R4JTkKw/DD6gBThL2Hm11TGs8lzk4BlPzQEQfARmd9j+KHJckDwSUUgGArAoOdqNScOlz/dlIH/pKYef/JqCsZBzdUWQfb51l29pfADVpfYqS7P0FSSyqsfwA/sKvaTcYSNwe0K3t7We8ahDEGBI8WQgYtiGN4SSCBvqyuAmu0imDAUPUNqMkwQ1BjUAHQ3gWCAo67HwfCDjaCrAN+Y7CYQfkjAOFSKYRxkCyHTPoAEt/0Ek1pkD3l1rAVEKO7y5RpOH/uroBngx1meBAiufTAwwEFVfkirKUJ2x3xwPUwg/AAn36qvhfKkgaBm5RoiV4d8oFXm0A9mLUYEqiooButjDU8OCDhB5YhA1MIa3HGu1ggF+jRenVRBMUA/RIMfFIL2gTWVORuDTrYfdC16BFofDAzWdKNq0XYIrVqd4S1HZmVcuB8eYtPCf6l9oIWv3VzsF/oqQB+4roJmwGqhVBcnEHRzdWWqldvkRu7d/j0jUy5mZVzNBeiLd4lGJewQf5VAO/aJ+6GEQeb67JN0SY7uSF5U/AbURaxl1D3/MYevELVzYtSjxFQr54NSjsHjCV/anNO+SLDUM8G9/Uom5ohA9Uyx/Atm+iy34hk2Bv+6Cbpvo+0+y/mD2cClUvdMT7lMYX0WqxzXAiYY4x6p6hdrpM+ay8T2iqNOFHtltWVB+qyZTGw3QWQlGMPqrDdu0z5L+sEZw5BoqjEweqZh+zrps3pYR7WY8wEzESZ9lks/GImm/CrQMxmtjNVnKYbIwbOpk+3BB/Kq7pnMhg72WVrH52qQaE47FtDWorU4PFfj60I909yjntx0njWv7pxpSmDsla2Io0IzsfXzrIUxCFEfGF9gBz0R6oe186wFgpUqIAgz88PeWswkmuAfnIZ+GTpX71u7eRLmhvAkqzumiltwafCD+e7wucMP/B2q3xSgPdNMRgrff3+dIbbUE+C9s9VnqbUb/YSjulkL4dAz4ZkYgRYSzQtczqsPIoQUPiGgb4QZSH4/42zKTnFAJnbOIeGkdzYzkDMQsETTyMROQMATjNEP9AhziebgB3KE+SRL+4EaYSlHUnM1McJyktUzEP+cZiXJkudZtD8qWk11uvMsSoQteaKoBSHCtkSzDOl+YLb11LdsqRAemzPVyy8Rwgtbr4Ys9vPy8vLy8vLy8vLy8gqC/2vrOaub363iAAAAAElFTkSuQmCC"
            alt=""
          />
          <h1 className=" font-bold text-blue-800 text-4xl">Aseel</h1>
        </a>
        <ul className="flex justify-center items-center gap-4">
          <li className=" font-bold text-sm font-sans">
            <a href={url.storiesUrl}>Stories</a>
          </li>
          <li className="  text-sm font-sans">
            <a href={url.buyUrl}>Buy Good</a>
          </li>
          <li className="  text-sm font-sans">
            <a href={url.doUrl}>Do Good</a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Nav;
