import GitHubCalendar from "react-github-calendar";
import "../style/skills.css";
import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";


const Github = () => {
  return (
    <div
      id="github"
      className="pt-8"
    >
      <div className=" m-auto rounded-3xl  w-[100%] md:w-[90%] mt-16">
        <h1 className=" text-3xl lg:text-5xl md:text-5xl font-black text-slate-400 underline underline-offset-8  pt-20 py-20   lg:py-10 md:py-10">
          Github
        </h1>
        <div className="flex flex-col justify-center items-center	gap-6  ">
          <div data-aos="flip-left" className="pt-9 w-[100%] lg:w-[100%] md:w-[95%] flex items-center justify-center  cursor-pointer">
            <GitHubCalendar
              username="rashmigautam16"
              blockSize={19}
              blockMargin={4}
              color="#3cd455"
              fontSize={14}
              margin="auto"
            />
          </div>
          {/* <div className="w-[90%] flex flex-col justify-center	items-center	gap-6 pb-5">
            <div className="flex justify-Center items-center gap-8 flex-col lg:flex-row md:flex-row">
              <div className=" w-[80%] lg:w-[80%] md:w-[50%]  hover:scale-105 hover:duration-300  cursor-pointer">
                <img
                  className="w-[100%]"
                  src="https://camo.githubusercontent.com/100fcda7c25305614c45f317adb379dbf2d1bfd4feb613529c917ee660b1b473/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d526173686d6967617574616d31362673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374267468656d653d676f7468616d"
                  alt="rashmigautam16"
                />
              </div>
              <div className="w-[80%] lg:w-[80%] md:w-[50%]  hover:scale-105 hover:duration-300  cursor-pointer">
                <img
                  className="w-[100%]"
                  src="https://camo.githubusercontent.com/dad56d6cbea0d088471cd2e1e2eccc040d492461617416cf718417a60fa56fd8/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d526173686d6967617574616d31362673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374267468656d653d676f7468616d"
                  alt="rashmigautam16"
                />
              </div>
              <div className="w-[80%] lg:w-[80%] md:w-[50%] hover:scale-105 hover:duration-300  cursor-pointer">
                <img
                  className="w-[100%]"
                  src="https://camo.githubusercontent.com/1a262488012dcb400224573fd8e29e49ab57aebac2a28479f1511505e04b1a4a/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d526173686d6967617574616d31362673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374267468656d653d676f7468616d"
                  alt="rashmigautam16"
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Github;
