import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { IoMdPlay } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { CiBookmarkPlus } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import f1 from "../assets/hero/f1.jpg";
import la_la_land from "../assets/hero/la_la_land.jpg";
import the_last_of_us from '../assets/hero/the_last_of_us.jpg'
import the_intern from "../assets/hero/the_intern.jpg"
import interstellar from '../assets/hero/interstellar.jpg'
import sample1 from "../assets/hero/sample1.jpg";
import sample2 from "../assets/hero/sample2.jpg";

import "swiper/css";
import "swiper/css/navigation";

export default function Hero() {
  const currentItems = [
    {
      title: "Brad Pitt Stars in F1",
      likes: "386",
      hearts: "170",
      duration: "2:31",
      bgImageSrc: sample2,
      posterImageSrc: f1,
    },
    {
      title: "Ryan Gosling Stars in La La Land",
      likes: "541",
      hearts: "124",
      duration: "3:01",
      bgImageSrc: sample1,
      posterImageSrc: la_la_land,
    },
  ];

  const nextItems = [
    {
      title: "Every Path Has a Price: The Last of Us Season 2 Trailer",
      likes: 995,
      hearts: 681,
      duration: "1:55",
      posterImageSrc: the_last_of_us,
    },
    {
      title: "The intern Trailer",
      likes: 574,
      hearts: 298,
      duration: "2:27",
      posterImageSrc: the_intern,
    },
    {
      title: 'Interstellar on IMAX',
      likes: 3350,
      hearts: 1056,
      duration: '2:49',
      posterImageSrc: interstellar,
    }
  ];

  return (
    <section className="hero bg-black flex flex-col md:flex-row text-textWhite py-4 px-2 md:px-4">
      <div className="hero-left relative w-full lg:w-2/3 h-[500px] lg:h-[600px] pr-0 lg:pr-4">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 50000, disableOnInteraction: true }}
          spaceBetween={20}
          slidesPerView={1}
          className="h-full"
        >
          {currentItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative h-full bg-cover object-cover bg-top bg-no-repeat rounded-2xl duration-200 grayscale-50 hover:grayscale-25"
                style={{ backgroundImage: `url(${item.bgImageSrc})` }}
              >
                <div
                  className="absolute w-3/4 bottom-0 flex items-center p-4 rounded-lg justify-between"
                >
                  <div className="relative flex items-center gap-2">
                    <CiBookmarkPlus className="absolute top-0 -left-1 text-textWhite text-4xl rounded-2xl cursor-pointer" />
                    <img src={item.posterImageSrc} className="w-40 h-48 rounded-2xl" />
                  </div>
                  <div className="flex gap-3 mt-2">
                    <div className="p-4 border-[3px] border-white rounded-full duration-200 cursor-pointer group hover:text-yellow
                     hover:border-yellow self-start">
                      <IoMdPlay className="text-textWhite text-xl group-hover:text-yellow" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <h2 className="text-lg lg:text-3xl font-bold mt-2">
                        {item.title}
                      </h2>
                      <span className="text-textGray text-sm lg:text-lg">Watch the interview</span>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center justify-center gap-1 cursor-pointer">
                          <FaRegThumbsUp/>
                          {item.likes}
                        </span>
                        <span className="flex items-center justify-center gap-1 cursor-pointer">
                          <FaHeart className="text-red-500" />
                          {item.hearts}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-lg text-textGray">
                      <span>{item.duration}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hero-right hidden lg:flex flex-col">
        <h2 className="text-yellow text-2xl px-4">
          Up next
        </h2>
        <div className="nextItems bg-secondary_black p-4 flex flex-col gap-2">
          {nextItems.map((item) => (
            <div className="nextItem flex gap-4 duration-200   hover:opacity-80 cursor-pointer">
              <div className="min-w-28">
                <img src={item.posterImageSrc} className="w-28 h-40 rounded-2xl object-cover" />
              </div>
              <div className="nextItemDesc flex flex-col gap-1 pt-1">
                <div className="flex items-center gap-2">
                  <div className="flex justify-center items-center p-1 border-[2px] border-white rounded-full">
                      <IoMdPlay className="text-textWhite text-lg" />
                  </div>
                  <span className="text-textGray">{item.duration}</span>
                </div>
                <div className="flex flex-col">
                  {item.title}
                  <span className="text-textGray">Watch the interview</span>
                </div>
                <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center gap-1 text-textGray">
                        <FaRegThumbsUp/>
                        <span className="text-textGray">{item.likes}</span>
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <FaHeart className="text-red-500" />
                        <span className="text-textGray">{item.hearts}</span>
                      </div>
                  </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center text-lg px-4 cursor-pointer duration-200 hover:text-yellow">
          <a>Browse trailers</a>
          <MdKeyboardArrowRight />
        </div>
      </div>
    </section>
  );
}
