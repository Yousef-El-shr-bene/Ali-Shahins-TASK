import { IoTimeOutline } from "react-icons/io5";
import { course_Details, Comments  } from "@/app/lip/data";
import { TbBooks } from "react-icons/tb";
import { LiaBookReaderSolid } from "react-icons/lia";
import { GrLanguage } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";
import Icons from "../../../lip/Icons";
import Topics from "@/app/lip/Topics";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col items-start justify-center">
      <h1 className="text-4xl font-semibold w-full bg-blue-50 pb-5 p-2 px-8">
        Starting SEO as your Home
      </h1>
      <div className="flex flex-row items-start justify-center w-full ">
        <div className="lg:w-6/12 w-11/12 lg:ml-10 my-5 ">
          <div className="sticky top-0 lg:relative flex justify-center items-center" >
            <video controls className="rounded-md w-svh h-s  bg-gray-200">
              <source src="video.mp4" type="video/mp4" />
              <source src="video.ogg" type="video/ogg" />
              Your browser does not support the video .
            </video>
          </div>
          <div><Icons/></div>
          <div>
            <h1 className="text-3xl mt-5 ">Course Matirials</h1>
            <div className="flex justify-between items-center flex-row rounded-xl shadow-2xl shadow-gray-300 w-full">
              {course_Details.Course_Matirials.map((item, i) => (
                <div
                  className={`flex flex-col items-center justify-center p-8 w-full ${i !== 1 && "hidden md:block"}`}
                  key={i}
                >
                  <div className="flex justify-between items-center mb-2 pb-3 w-full border-b-2 border-gray-200 ">
                    <div className="flex justify-start items-center">
                      <IoTimeOutline className="mr-1 pr-1 text-3xl" />
                      <h1 className="mr-2 pr-2">Duration:</h1>
                    </div>
                    <h1>{item.duration}</h1>
                  </div>
                  <div className="flex justify-between items-center mb-2 pb-3 w-full border-b-2 border-gray-200 ">
                    <div className="flex justify-start items-center">
                      <TbBooks className="mr-1 pr-1 text-3xl" />
                      <h1 className="mr-2 pr-2">Lessons:</h1>
                    </div>
                    <h1>{item.lessons}</h1>
                  </div>
                  <div className="flex justify-between items-center mb-2 pb-3 w-full border-b-2 border-gray-200 ">
                    <div className="flex justify-start items-center">
                      <LiaBookReaderSolid className="mr-1 pr-1 text-3xl" />
                      <h1 className="mr-2 pr-2">Enerolled:</h1>
                    </div>
                    <h1>{item.nerolled}</h1>
                  </div>
                  <div className="flex justify-between items-center mb-2 pb-3 w-full ">
                    <div className="flex justify-start items-center">
                      <GrLanguage className="mr-1 pr-1 text-3xl" />
                      <h1 className="mr-2 pr-2">Language:</h1>
                    </div>
                    <h1>{item.language}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:hidden flex justify-center items-center ">
            <div>
              <Topics />
            </div>
          </div>
          <div className="">
            <h1 className="text-3xl m-5">Comments</h1>
            <div>
              {Comments.map((e, i) => {
                return (
                  <div
                    key={i}
                    className={`flex justify-center items-center w-full py-5 ${
                      Comments.length !== i + 1 && "border-b-2 border-gray-200"
                    } `}
                  >
                    <div className="" >
                      <Image 
                        width={"180"}
                        height={"180"}
                        src={`/${e.img}`}
                        alt={e.img}
                        className="rounded-full"
                      />
                    </div>
                    <div className="flex justify-between items-start flex-col ml-5 text-gray-600">
                      <h1 className="my-2.5 font-medium text-xl ">{e.name}</h1>
                      <h1 className="my-2.5 font-medium">{e.time}</h1>
                      <h1 className="my-2.5">{e.comment}</h1>
                    </div>
                  </div>
                );
              })}
            </div>
            <textarea name="" id="" className="w-full shadow shadow-gray-500 h-52 m-2 p-5" placeholder="Write a Comment" ></textarea>
            <button className="bg-emerald-400 m-3 p-5 rounded-md hover:bg-emerald-500 text-white font-bold flex justify-center items-center"  > <h1 className="mr-3" >Submit Review</h1><FaArrowRightLong /></button>
          </div>
        </div>
        <div
          className={`w-4/12 justify-center items-center  ml-8 my-5 hidden lg:flex `}
        >
          <div>
            <Topics />
          </div>
        </div>
      </div>
    </div>
  );
}
