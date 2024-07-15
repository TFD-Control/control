// import React from "react";
// import Select from 'react-select';
// import Flatpickr from "react-flatpickr";

// interface Option { label: string; value: string; isDisabled?: boolean };

// const PersonalTabs = () => {
//     return (
//         <React.Fragment>
//             <div className="card">
//                 <div className="card-body">
//                     <h6 className="mb-1 text-15">Personal Information</h6>
//                     <p className="mb-4 text-slate-500 dark:text-zink-200">Update your photo and personal details here easily.</p>
//                     <form action="#!">
//                         <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
//                             {/* Prénom */}
//                             <div className="xl:col-span-6">
//                                 <label htmlFor="inputValue" className="inline-block mb-2 text-base font-medium">First Name</label>
//                                 <input type="text" id="inputValueFirst" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter your value" defaultValue="Paula" />
//                             </div>
//                             {/* Nom */}
//                             <div className="xl:col-span-6">
//                                 <label htmlFor="inputValue" className="inline-block mb-2 text-base font-medium">Last Name</label>
//                                 <input type="text" id="inputValueLast" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter your value" defaultValue="Keenan" />
//                             </div>
//                             {/* Numéro de téléphone */}
//                             <div className="xl:col-span-6">
//                                 <label htmlFor="inputValue" className="inline-block mb-2 text-base font-medium">Phone Number</label>
//                                 <input type="text" id="inputValuePhone" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="+214 8456 8459 23" defaultValue="+214 8456 8459 23" />
//                             </div>
//                             {/* Poste */}
//                             <div className="xl:col-span-6">
//                                 <label htmlFor="joiningDateInput" className="inline-block mb-2 text-base font-medium">Birth of Date</label>
//                                 <Flatpickr
//                                     options={{
//                                         dateFormat: "d M, Y",
//                                         defaultDate: "24 Oct, 2023"
//                                     }}
//                                     placeholder="Select Date"
//                                     className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
//                                 />
//                             </div>
                            
//                             <div className="xl:col-span-12">
//                                 <label htmlFor="inputValue" className="inline-block mb-2 text-base font-medium">Designation</label>
//                                 <input type="text" id="inputValueDesignation" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter your value" defaultValue="CEO & Founder" />
//                             </div>
//                             <div className="xl:col-span-4">
//                                 <label htmlFor="inputValue" className="inline-block mb-2 text-base font-medium">City</label>
//                                 <input type="text" id="inputValueWebsite" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter your value" defaultValue="www.themesdesign.in" />
//                             </div>
//                             <div className="xl:col-span-4">
//                                 <label htmlFor="inputValue" className="inline-block mb-2 text-base font-medium">Country</label>
//                                 <input type="text" id="inputValueWebsite" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter your value" defaultValue="www.themesdesign.in" />
//                             </div>
//                             <div className="xl:col-span-4">
//                                 <label htmlFor="inputValue" className="inline-block mb-2 text-base font-medium">Code</label>
//                                 <input type="text" id="inputValueWebsite" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter your value" defaultValue="www.themesdesign.in" />
//                             </div>
//                             <div className="xl:col-span-12">
//                                 <label htmlFor="inputValue" className="block mb-2 text-base font-medium">Bio</label>
//                                 <textarea className="w-full form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="exampleFormControlTextarea" placeholder="Enter your description" rows={5}
//                                     defaultValue="
//                                 A Web Developer creates and designs different websites for clients. They are responsible for their aesthetic as well as their function. Professionals in this field may also need to be able to ensure sites are compatible with multiple types of media. Web Developers need to have a firm understanding of programming and graphical design. Having a strong resume that emphasizes these attributes makes it significantly easier to get hired as a Web Developer. As a web designer, my objective is to make a positive impact on clients, co-workers, and the Internet using my skills and experience to design compelling and attractive websites. Solving code problems. Editing &amp; Design with designing team in the company to build perfect web designs.">
//                                 </textarea>
//                             </div>
//                         </div>
//                         <div className="flex justify-end mt-6 gap-x-4">
//                             <button type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Updates</button>
//                             <button type="button" className="text-red-500 bg-red-100 btn hover:text-white hover:bg-red-600 focus:text-white focus:bg-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:ring active:ring-red-100 dark:bg-red-500/20 dark:text-red-500 dark:hover:bg-red-500 dark:hover:text-white dark:focus:bg-red-500 dark:focus:text-white dark:active:bg-red-500 dark:active:text-white dark:ring-red-400/20">Cancel</button>
//                         </div>
//                     </form>
//                 </div>
//             </div >
//         </React.Fragment >
//     );
// }

// export default PersonalTabs;

import React, { useState } from "react";
import Select from 'react-select';
import Flatpickr from "react-flatpickr";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";

const PersonalTabs = () => {
    const [firstName, setFirstName] = useState("Paula");
    const [lastName, setLastName] = useState("Keenan");
    const [phoneNumber, setPhoneNumber] = useState("+214 8456 8459 23");
    const [birthDate, setBirthDate] = useState("24 Oct, 2023");
    const [designation, setDesignation] = useState("CEO & Founder");
    const [city, setCity] = useState("City");
    const [country, setCountry] = useState("Country");
    const [code, setCode] = useState("Code");
    const [bio, setBio] = useState(`
        A Web Developer creates and designs different websites for clients. They are responsible for their aesthetic as well as their function. Professionals in this field may also need to be able to ensure sites are compatible with multiple types of media. Web Developers need to have a firm understanding of programming and graphical design. Having a strong resume that emphasizes these attributes makes it significantly easier to get hired as a Web Developer. As a web designer, my objective is to make a positive impact on clients, co-workers, and the Internet using my skills and experience to design compelling and attractive websites. Solving code problems. Editing & Design with designing team in the company to build perfect web designs.
    `);

    const handleUpdate = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // const user = auth.currentUser;
        const user = firebase.auth().currentUser;
        if (user) {
            try {
                await firebase.firestore().collection("users").doc(user.uid).update({
                    firstName,
                    lastName,
                    phoneNumber,
                    birthDate,
                    designation,
                    city,
                    country,
                    code,
                    bio
                });
                alert("Profile updated successfully!");
            } catch (error) {
                console.error("Error updating profile: ", error);
                alert("Failed to update profile. Please try again.");
            }
        } else {
            alert("No user is signed in.");
        }
    };

    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-1 text-15">Personal Information</h6>
                    <p className="mb-4 text-slate-500 dark:text-zink-200">Update your photo and personal details here easily.</p>
                    <form onSubmit={handleUpdate}>
                        <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
                            {/* Prénom */}
                            <div className="xl:col-span-6">
                                <label htmlFor="inputValueFirst" className="inline-block mb-2 text-base font-medium">First Name</label>
                                <input
                                    type="text"
                                    id="inputValueFirst"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="Enter your value"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            {/* Nom */}
                            <div className="xl:col-span-6">
                                <label htmlFor="inputValueLast" className="inline-block mb-2 text-base font-medium">Last Name</label>
                                <input
                                    type="text"
                                    id="inputValueLast"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="Enter your value"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            {/* Numéro de téléphone */}
                            <div className="xl:col-span-6">
                                <label htmlFor="inputValuePhone" className="inline-block mb-2 text-base font-medium">Phone Number</label>
                                <input
                                    type="text"
                                    id="inputValuePhone"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="+214 8456 8459 23"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </div>
                            {/* Date de naissance */}
                            <div className="xl:col-span-6">
                                <label htmlFor="joiningDateInput" className="inline-block mb-2 text-base font-medium">Birth of Date</label>
                                {/* <Flatpickr
                                    options={{
                                        dateFormat: "d M, Y",
                                        defaultDate: birthDate
                                    }}
                                    placeholder="Select Date"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    value={birthDate}
                                    onChange={(date) => setBirthDate(date[0])}
                                /> */}
                                    <Flatpickr
                                    options={{
                                        dateFormat: "d M, Y",
                                        defaultDate: "24 Oct, 2023"
                                    }}
                                    placeholder="Select Date"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    value={birthDate}
                                    onChange={(date) => setBirthDate(date[0].toLocaleDateString("fr-FR"))}
                                    />
                            </div>
                            {/* Designation */}
                            <div className="xl:col-span-12">
                                <label htmlFor="inputValueDesignation" className="inline-block mb-2 text-base font-medium">Designation</label>
                                <input
                                    type="text"
                                    id="inputValueDesignation"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="Enter your value"
                                    value={designation}
                                    onChange={(e) => setDesignation(e.target.value)}
                                />
                            </div>
                            {/* City */}
                            <div className="xl:col-span-4">
                                <label htmlFor="inputValueCity" className="inline-block mb-2 text-base font-medium">City</label>
                                <input
                                    type="text"
                                    id="inputValueCity"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="Enter your value"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                            {/* Country */}
                            <div className="xl:col-span-4">
                                <label htmlFor="inputValueCountry" className="inline-block mb-2 text-base font-medium">Country</label>
                                <input
                                    type="text"
                                    id="inputValueCountry"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="Enter your value"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                />
                            </div>
                            {/* Code */}
                            <div className="xl:col-span-4">
                                <label htmlFor="inputValueCode" className="inline-block mb-2 text-base font-medium">Code</label>
                                <input
                                    type="text"
                                    id="inputValueCode"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="Enter your value"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                />
                            </div>
                            {/* Bio */}
                            <div className="xl:col-span-12">
                                <label htmlFor="inputValueBio" className="block mb-2 text-base font-medium">Bio</label>
                                <textarea
                                    className="w-full form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    id="exampleFormControlTextarea"
                                    placeholder="Enter your description"
                                    rows={5}
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex justify-end mt-6 gap-x-4">
                            <button type="submit" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Updates</button>
                            <button type="button" className="text-red-500 bg-red-100 btn hover:text-white hover:bg-red-600 focus:text-white focus:bg-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:ring active:ring-red-100 dark:bg-red-500/20 dark:text-red-500 dark:hover:bg-red-500 dark:hover:text-white dark:focus:bg-red-500 dark:focus:text-white dark:active:bg-red-500 dark:active:text-white dark:ring-red-400/20">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default PersonalTabs;
