import React from "react";
import { useState } from "react";
import Button from "./components/Button";


const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [subjects, setSubjects] = useState({
    english: false,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState();
  const [about, setAbout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      subjects,
      resume,
      url,
      about,
    );
  };

  const handleSubChange = (e) => {
    setSubjects((prev) => ({
      ...prev,
      [e]: !prev[e],
    }));
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects({
      english: true,
      maths: false,
      physics: false,
    });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
  };

  return (
    <div className="bg-gray-300 flex items-center justify-center min-h-screen py-5">
      <div className="bg-white flex flex-col items-center px-6 py-3 gap-4  ">
        <h1>Form in React</h1>
        <form action="" className="flex flex-col justify-center gap-1.5 w-full">
          <label htmlFor="firstname">First Name*</label>
          <input
            type="text"
            placeholder="Enter Your First Name"
            id="firstname"
            className="border px-2 py-1"
            onChange={(e) => {
              // console.dir( e.target.value)
              setFirstName(e.target.value);
            }}
          />

          <label htmlFor="Lastname">Last Name*</label>
          <input
            type="text"
            placeholder="Enter Your Last Name"
            id="Lastname"
            className="border px-2 py-1"
            onChange={(e) => {
              setLastName(e.target.value);
              //  console.log(e.target.value)
            }}
          />

          <label htmlFor="mail">Enter Email*</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="border px-2 py-1"
            id="mail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label htmlFor="contact">Contact*</label>
          <input
            type="text"
            placeholder="Enter Your Mobile No"
            id="contact"
            className="border px-2 py-1"
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />

          <div className="  flex gap-3">
            <div className=" py-1">
              <label htmlFor="gender" className=" text-xl ">
                Gender*
              </label>
            </div>
            <div className="flex  py-4 gap-4 text-[1.2rem]">
              <input
                type="radio"
                name="gender"
                className="cursor-pointer"
                value="female"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              Female
              <input
                type="radio"
                name="gender"
                className="cursor-pointer"
                value="male"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />{" "}
              Male
              <input
                type="radio"
                name="gender"
                value="other"
                className="cursor-pointer"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />{" "}
              Other
            </div>
          </div>

          <div className="  flex gap-3">
            <div className=" py-1">
              <label htmlFor="lang" className=" text-xl ">
                Your Subject*
              </label>
            </div>
            <div className="flex  py-4 gap-4 text-[1.2rem]">
              <input
                type="checkbox"
                name="lang"
                className="cursor-pointer"
                checked={subjects.english === true}
                onChange={(e) => handleSubChange("english")}
              />{" "}
              English
              <input
                type="checkbox"
                name="lang"
                className="cursor-pointer"
                checked={subjects.maths === true}
                onChange={(e) => handleSubChange("maths")}
              />{" "}
              Maths
              <input
                type="checkbox"
                name="lang"
                className="cursor-pointer"
                checked={subjects.physics === true}
                onChange={(e) => handleSubChange("physics")}
              />{" "}
              Physics
            </div>
          </div>

          <label htmlFor="file">Upload Resume*</label>
          <input
            type="file"
            name="file"
            className="border  px-2 py-1 "
            onChange={(e) => {
              setResume(e.target.files[0]);
            }}
          />
          <label htmlFor="url">ENTER URL*</label>
          <input
            type="url"
            name="url"
            placeholder="Enter url"
            className="border  px-2 py-1 "
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />

          <label htmlFor="about">About</label>

          <textarea
            name="about"
            id="about"
            className="border"
            cols={30}
            rows={4}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
          <Button handleReset={handleReset} handleSubmit={handleSubmit}/>
        </form>
      </div>
    </div>
  );
};

export default App;
