import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDataByCategory } from "../Data/Data";
import Card from "../Card";
import { ChevronRight, ChevronUp } from "lucide-react";
import { SlidersHorizontal } from "lucide-react";
import RangeSlider from "../Slider/RangeSlider";
const filterItems = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];

const dress_styles = ["Casual", "Formal", "Party", "Gym"];
const colors = [
  "#00C12B",
  "#F50606",
  "#F5DD06",
  "#F57906",
  "#06CAF5",
  "#063AF5",
  "#7D06F5",
  "#F506A4",
  "#FFFFFF",
  "#000000",
];
const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];
const CatogorieInfo = () => {
  const { cat_name } = useParams();
  const [items, setItem] = useState([]);
  const [open, setOpen] = useState(true);
  const [isslider, setFilter] = useState(true);
  const [iscolor, setcolor] = useState(true);
  const [issize, setsize] = useState(true);
  const [isstyle, setstyle] = useState(true);
  const ClickHandler = () => {
    setOpen(!open);
  };
  const Clickcolor = () => {
    setcolor(!iscolor);
  };
  const sliderHandler = () => {
    setFilter(!isslider);
  };
  const sizeHandler = () => {
    setsize(!issize);
  };
  const styleHandler = () => {
    setstyle(!isstyle);
  };
  useEffect(() => {
    const data = getDataByCategory(cat_name)
      .then((data) => setItem(data.items))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="w-[1240px] mt-[25px] ml-[86px] border-[0.5px] opacity-50 rotate-0 bg-[ #0000001A] border-[#0000001A] leading-1"></div>
      <div className="path flex gap-1 mt-[30px] ml-[84px]">
        <p className="home w-[43px] h-[11px] ">Home</p>
        <ChevronRight
          alt="right"
          className="w-4 h-4 text-[#00000099] mt-[3px]"
        />
        <p className="cat_name text-[#000000] text-[20px] font-[Poppins] font-[500] ">
          {cat_name}
        </p>
      </div>
      <div className="cat_container flex gap-[58px]">
        <div
          className={`filters_con max-w-[295px] rounded-[20px] border  ${
            open ? "active" : "inactive"
          } `}
        >
          <div className="filter-title w-[247px] h-[27px] justify-between flex">
            <span className="w-[57px] h-[27px] font-[Satoshi] font-bold text-[20px] leading-7 text-[#000000]">
              Filters
            </span>
            <SlidersHorizontal
              className="rotate-90 w-[20.25px] h-[18.75px] mt-[4.63px] text-[#00000066] hover:cursor-pointer"
              onClick={ClickHandler}
            />
          </div>
          {open && (
            <div className="flex flex-col gap-3">
              <div className="border bg-[#0000001a] opacity-50"></div>
              <div className="flex flex-col gap-4 w-[247px] h-40">
                {filterItems.map((item, index) => (
                  <div key={index} className="Casual_items_ele">
                    <span className="w-[52px] h-[11px] font-[Satoshi] font-normal leading-[21.6px] text-[#00000099]">
                      {item}
                    </span>
                    <ChevronRight className="w-[16px] h-[16px] mt-[13.75px] ml-[5.25px] text-[#00000099]" />
                  </div>
                ))}
              </div>
              <div className="border bg-[#0000001a] opacity-50 mt-[49px]"></div>
              <div className="filter-title w-[247px] h-[27px] justify-between flex">
                <span className="w-[48px] h-[27px] font-[Satoshi] font-bold text-[20px] leading-7 text-[#000000]">
                  Price
                </span>
                <ChevronUp
                  className={`w-[17.25px] h-[18.75px] mt-[4.63px] hover:cursor-pointer ${
                    isslider ? "a_slider" : "d_slider"
                  }`}
                  onClick={sliderHandler}
                />
              </div>
              {isslider && (
                <div
                  className={`slider  ${isslider ? "a_slider" : "d_slider"} `}
                >
                  <RangeSlider />
                </div>
              )}
              <div className="border bg-[#0000001a] opacity-50 "></div>
              <div className="filter-title w-[247px] h-[27px] justify-between flex">
                <span className="w-[48px] h-[27px] font-[Satoshi] font-bold text-[20px] leading-7 text-[#000000]">
                  Colors
                </span>
                <ChevronUp
                  className={` w-[17.25px] h-[18.75px] mt-[4.63px] hover:cursor-pointer ${
                    iscolor ? "a_slider" : "d_slider"
                  }`}
                  onClick={Clickcolor}
                />
              </div>
              <div
                className={`color_con w-[247px] h-[90px] gap-[10px] flex flex-col ${
                  iscolor ? "a_c" : "d_c"
                }`}
              >
                <div className="colors max-w-[247px] h-[37px] justify-between flex flex-wrap">
                  {colors.slice(0, 5).map((color) => (
                    <div
                      className="color border-2 text-[#00000033]"
                      style={{ background: color }}
                    ></div>
                  ))}
                </div>
                <div className="colors max-w-[247px] h-[37px] justify-between flex flex-wrap">
                  {colors.slice(5, 10).map((color) => (
                    <div
                      className="color border-2 text-[#00000033]"
                      style={{ background: color }}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="border bg-[#0000001a] opacity-50 "></div>
              <div className="filter-title w-[247px] h-[27px] justify-between flex">
                <span className="w-[48px] h-[27px] font-[Satoshi] font-bold text-[20px] leading-7 text-[#000000]">
                  Size
                </span>
                <ChevronUp
                  className={`w-[17.25px] h-[18.75px] mt-[4.63px] hover:cursor-pointer ${
                    issize ? "a_slider" : "d_slider"
                  }`}
                  onClick={sizeHandler}
                />
              </div>
              {issize && (
                <div className="sizes_con max-w-[247px] h-[227px] flex gap-2">
                  {
                    <div className="buttons ">
                      {sizes.map((size) => (
                        <button className="size_btn  text- [#00000099] ">
                          {size}
                        </button>
                      ))}
                    </div>
                  }
                </div>
              )}
              <div className="border bg-[#0000001a] opacity-50 "></div>
              <div className="filter-title w-[247px] h-[27px] justify-between flex">
                <span className="w-[103px] h-[27px] font-[Satoshi] font-bold text-[20px] leading-7 text-[#000000]">
                  Dress Style
                </span>
                <ChevronUp
                  className={`w-[17.25px] h-[18.75px] mt-[4.63px] hover:cursor-pointer ${
                    isstyle ? "a_slider" : "d_slider"
                  }`}
                  onClick={styleHandler}
                />
              </div>
              {isstyle && (
                <div className="flex flex-col gap-4 w-[247px] h-40">
                  {dress_styles.map((d_style, index) => (
                    <div key={index} className="Casual_items_ele">
                      <span className="w-[52px] h-[11px] font-[Satoshi] font-normal leading-[21.6px] text-[#00000099]">
                        {d_style}
                      </span>
                      <ChevronRight className="w-[16px] h-[16px] mt-[13.75px] ml-[5.25px] text-[#00000099]" />
                    </div>
                  ))}
                </div>
              )}
              <button className="filter_btn mt-[29px]">
                <span>Apply Filter</span>
              </button>
            </div>
          )}
        </div>
        <div className="images_container w-[925px]">
          <div className="images_container-title flex gap-[72%] mt-[63px] ml-[44px]">
            <span className="w-[100px] h-[43px] font-bold text-[32px]">
              {cat_name}
            </span>
            <div className="sorting flex gap-[16px] leading-[3rem]">
              <span className="text-[#00000099] w-[60px]">Sort by</span>
              <select name="sort" id="sort">
                <option value="popularity">Popularity</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
          <div className="w-[965px] grid grid-cols-3 gap-5 mt-6">
            {items?.map((item) => (
              <Card
                image={item.image_url}
                title={item.title}
                rating={item.rating}
                price={item.price}
                discount={item?.discount}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CatogorieInfo;
