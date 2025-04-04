import Progress from "./Progress";
import { TbLock } from "react-icons/tb";
import { week_detals ,Progres } from "@/app/lip/data";
export default function Topics() {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-semibold mt-5">Topics for This Coures</h1>
      <div className="w-full">
        <Progress Progres={Progres} />
      </div>
      <div className="w-full mt-10 ">
        {week_detals.map((ee, i) => {
          return (
            <div
              key={i}
              className="border-2 border-gray-200 pt-5 px-5 rounded-xs mt-10"
            >
              <div className="w-full text-xl my-3">{ee.title}</div>
              <div className="pb-3 border-b-2 border-gray-200">
                {ee.supTitle}
              </div>
              <div>
                {ee.conitent.map((e, i) => {
                  return (
                    <div
                      key={i}
                      className={`flex justify-between items-center ${
                        ee.conitent.length !== i + 1 &&
                        " border-b-2 border-gray-200"
                      } p-5`}
                    >
                      <h1>{e.title}</h1>
                      {e.value ? (
                        <div className="flex justify-center items-center flex-nowrap">
                          <h1 className="bg-cyan-50 text-cyan-500  m-1 p-1 rounded-md">{e.value.question} QUESTION</h1>
                          <h1 className="bg-red-50 text-red-500  m-1 p-1 rounded-md" >{e.value.minutes} MINUTES</h1>
                        </div>
                      ) : (
                        <TbLock />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}