/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

//  importing components
import Shorts from "./Shorts";
import People from "./People";
import HomeDiscover from "./HomeDiscover";
import Category from "./Category";

const intialState = {
  title: "",
  caption: "",
  fileUrl: "",
};

const HomeLeftContent = ({ isAdmin }) => {
  const [token, setToken] = useState("");
  const [formValue, setFormValue] = useState(intialState);
  const [file, setFile] = useState("");

  const { title, caption, fileUrl } = formValue;

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const onFileChange = (file) => {
    console.log(file);
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const removeModal = () => {
    var modal = document.getElementById("modal");
    modal.classList.add("hidden");
  };

  const removeCategoryModal = () => {
    var modal = document.getElementById("categoryModal");
    modal.classList.add("hidden");
  };

  //    modal funtions ends here

  const handleShortSubmit = async (e) => {
    e.preventDefault();
    console.log(formValue, token);
    //      await axios.post("http://localhost:7000/shorts/add",formValue ,{
    //           method : "POST" ,
    //           headers:{
    //           "Content-Type" : "application/json",
    //           "Authorization" : "Bearer " + token
    //           },
    //       body : JSON.stringify(formValue),
    //     })
    //     .then((res) => {
    //       console.log(res);
    //      })
    //     .catch((err)=>{
    //        console.log(err);
    //     })
  };

  return (
    <>

      {/*  modal container ends here  */}

      <div className="lg:w-8/12 w-full lg:h-full md:h-screen h-screen p-2 rounded-t-3xl flex lg:flex-row flex-col justify-center items-center bg-gradient-to-b to-black from-slate-900 me-2 select-none">
        <div
          className="lg:w-9/12 w-full lg:h-full overflow-y-scroll h-4/6"
          id="leftLeftContent"
        >
          <Shorts isAdmin={isAdmin} />
          <Category isAdmin={isAdmin} />
          <HomeDiscover />
        </div>

        <div className="lg:w-3/12 w-full lg:h-full h-2/6 p-2 overflow-hidden flex flex-col justify-start items-center">
          <People />
        </div>
      </div>
    </>
  );
};

export default HomeLeftContent;
