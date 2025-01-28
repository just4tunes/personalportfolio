import React, { useState, useEffect } from "react";

const Skills = () => {
  const SkillLoader = ({ percentage, skill }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let interval;
      if (count < percentage) {
        interval = setInterval(() => {
          setCount((prevCount) => {
            if (prevCount < percentage) {
              return prevCount + 1;
            } else {
              clearInterval(interval);
              return prevCount;
            }
          });
        }, 30); // Adjust the speed of the counter
      }

      return () => clearInterval(interval);
    }, [count, percentage]);

    return (
      <div className="flex flex-col items-center w-full sm:w-[50%] md:w-[33.33%] mb-6">
        {/* Outer Circle */}
        <div
          className="relative w-32 h-32 rounded-full flex items-center justify-center"
          style={{
            background: `conic-gradient(#ffc107 ${count}%, #e5e7eb ${count}%)`,
          }}
        >
          {/* Inner Circle */}
          <div className="w-28 h-28 bg-primary rounded-full flex items-center justify-center">
            <span className="text-xl font-bold text-white">{count}%</span>
          </div>
        </div>
        <p className="text-pink-700 mt-4">{skill}</p>
      </div>
    );
  };

  return (
    <div className="w-full h-[100vh] bg-primary px-3 mt-20 sm:px-0">
      <h1 className="font-black text-white text-[3vh] sm:items-center justify-center lg:mr-8 flex">MY SKILLS</h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3   md:ml-[10vh] md:mt-10  lg:ml-[30vh] lg:px-9 gap-5">
  {/* Circles */}
  <SkillLoader percentage={95} skill="HTML" />
  <SkillLoader percentage={90} skill="CSS" />
  <SkillLoader percentage={80} skill="JAVASCRIPT" />
  <SkillLoader percentage={75} skill="REACT" />
  <SkillLoader percentage={75} skill="TYPESCRIPT" />
  <SkillLoader percentage={75} skill="ANGULAR" />
</div>

    </div>
  );
};

// w-full mt-7 flex flex-wrap xl:px-20

export default Skills;



