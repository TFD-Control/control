// import React from 'react';
// import BreadCrumb from 'Common/BreadCrumb';
// import Flatpickr from 'react-flatpickr';

// // Icons
// import { Trash2, Save, Minus, Plus, Eye, RefreshCcw, Download } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const AddNew = () => {

//     return (
//         <React.Fragment>
//             <BreadCrumb title='Add New' pageTitle='Holidays' />

//             <div className="grid items-center grid-cols-1 gap-5 mb-5 xl:grid-cols-12">
//                 <div className="xl:col-span-2">
//                     <h5 className="text-16">New Holidays</h5>
//                 </div>
                
//             </div>

//             <div className="card">
//                 <div className="card-body">
//                     <form action="#!">
//                         <h6 className="mb-4 text-gray-800 underline text-16 dark:text-zink-50">Generale Info:</h6>
//                         <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">

//                             {/* <div className="xl:col-span-3">
//                                 <label htmlFor="invoiceID" className="inline-block mb-2 text-base font-medium">Invoice No.</label>
//                                 <input type="text" id="invoiceID" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter invoice no." value="#TW15090251" disabled required />
//                             </div> */}

//                             <div className="xl:col-span-8">
//                                 <label htmlFor="invoiceNo" className="inline-block mb-2 text-base font-medium">La date de tes congés</label>
//                                 <Flatpickr
//                                     id="dateRangeFilterInput"
//                                     className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
//                                     options={{
//                                         mode: "range",
//                                         altInput: true,
//                                         altFormat: "F j, Y",
//                                         weekNumbers: true,
//                                         dateFormat: "d M, Y"
//                                     }}
//                                     placeholder='Invoice date'
//                                 />


//                             </div>
                            
//                             <div className="xl:col-span-4">
//                                 <label htmlFor="legalRegistrationNo" className="inline-block mb-2 text-base font-medium">Nombre de jours.</label>
//                                 <input type="number" id="legalRegistrationNo" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Legal Registration No" required />
//                             </div>
                            
//                         </div>

//                         <div className="grid grid-cols-1 gap-5 xl:grid-cols-12 changeAddress my-5">
                            
//                             <div className="xl:col-span-12">
//                                 <label htmlFor="addressShippingInput" className="inline-block mb-2 text-base font-medium">Nature des congés</label>
//                                 <textarea className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Address" id="addressShippingInput" rows={3}></textarea>
//                             </div>
//                         </div>

//                         <div className="flex items-center mt-5">
//                             <div className="relative inline-block w-10 mr-2 align-middle transition duration-200 ease-in">
//                                 <input type="checkbox" name="customSoftSwitch" id="customSoftSwitch" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-600 bg-white/80 dark:bg-zink-400 peer/published checked:bg-custom-500 dark:checked:bg-custom-500 ltr:checked:right-0 rtl:checked:left-0 checked:border-custom-100 dark:checked:border-custom-900 arrow-none checked:bg-none" />
//                                 <label htmlFor="customSoftSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-custom-100 dark:peer-checked/published:bg-custom-900 peer-checked/published:border-custom-100 dark:peer-checked/published:border-custom-900"></label>
//                             </div>
//                             <label htmlFor="customSoftSwitch" className="inline-block text-base font-medium">En cochant, vous imposez votre signature et accepter la responsabilté liée à ses demandes.</label>
//                         </div>

//                         <div className="flex justify-end gap-2 mt-5">
//                             <button type="button" className="text-slate-500 btn bg-slate-200 border-slate-200 hover:text-slate-600 hover:bg-slate-300 hover:border-slate-300 focus:text-slate-600 focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100 active:text-slate-600 active:bg-slate-300 active:border-slate-300 active:ring active:ring-slate-100 dark:bg-zink-600 dark:hover:bg-zink-500 dark:border-zink-600 dark:hover:border-zink-500 dark:text-zink-200 dark:ring-zink-400/50"><RefreshCcw className="inline-block size-4 mr-1" /> <span className="align-middle">Reset</span></button>
//                             <button type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"><Save className="inline-block size-4 mr-1" /> <span className="align-middle">Save</span></button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </React.Fragment>
//     );
// };

// export default AddNew;
import React, { useState, useEffect } from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import Flatpickr from 'react-flatpickr';
import Select from 'react-select';


import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";

// Icons
import { Trash2, Save, Minus, Plus, Eye, RefreshCcw, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const AddNew = () => {
    const [dateRange, setDateRange] = useState<Date[]>([]);
    const [daysCount, setDaysCount] = useState('');
    const [leaveNature, setLeaveNature] = useState('');
    const [isSigned, setIsSigned] = useState(false);
    const [userData, setUserData] = useState<{ respo?: string; team?: string }>({});

    const leaveOptions = [
        { value: '', label: 'Select Leave Type' },
        { value: 'Medical Leave', label: 'Medical Leave' },
        { value: 'Casual Leave', label: 'Casual Leave' },
        { value: 'Sick Leave', label: 'Sick Leave' },
        { value: 'Annual Leave', label: 'Annual Leave' },
    ];

    const leaveDayOptions = [
        { value: '', label: 'Select Leave Day' },
        { value: 'Full Day', label: 'Full Day' },
        { value: 'Half Day', label: 'Half Day' },
    ];

    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                const userDoc = await firebase.firestore().collection('users').doc(user.uid).get();
                if (userDoc.exists) {
                    const data = userDoc.data();
                    console.log('User Data:', data); // Debug log
                    setUserData(data as { respo?: string; team?: string });
                } else {
                    console.warn('No such document!');
                }
            } else {
                console.warn('No user is authenticated!');
            }
        });

        // Cleanup subscription on unmount
        return () => unregisterAuthObserver();
    }, []);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const user = firebase.auth().currentUser;

        if (!user) {
            alert('User not authenticated');
            return;
        }

        if (!isSigned) {
            alert('You must agree to the terms by checking the checkbox.');
            return;
        }

        const db = firebase.firestore();
        const leaveRequest = {
            dateRange,
            daysCount,
            leaveNature,
            userId: user.uid,
            userEmail: user.email,
            userRespo: userData.respo || '',
            userTeam: userData.team || '',
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        };

        try {
            await db.collection('holidays').add(leaveRequest);
            alert('Leave request submitted successfully');
        } catch (error) {
            console.error('Error submitting leave request: ', error);
            alert('Error submitting leave request');
        }
    };

    const handleReset = () => {
        setDateRange([]);
        setDaysCount('');
        setLeaveNature('');
        setIsSigned(false);
    };

    return (
        <React.Fragment>
            <BreadCrumb title='Add New' pageTitle='Holidays' />

            <div className="grid items-center grid-cols-1 gap-5 mb-5 xl:grid-cols-12">
                <div className="xl:col-span-2">
                    <h5 className="text-16">New Holidays</h5>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <h6 className="mb-4 text-gray-800 underline text-16 dark:text-zink-50">General Info:</h6>
                        <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
                            <div className="xl:col-span-8">
                                <label htmlFor="dateRangeFilterInput" className="inline-block mb-2 text-base font-medium">La date de tes congés</label>
                                <Flatpickr
                                    id="dateRangeFilterInput"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    options={{
                                        mode: "range",
                                        altInput: true,
                                        altFormat: "F j, Y",
                                        weekNumbers: true,
                                        dateFormat: "d M, Y"
                                    }}
                                    placeholder='Invoice date'
                                    value={dateRange}
                                    onChange={(selectedDates) => setDateRange(selectedDates)}
                                />
                            </div>

                            <div className="xl:col-span-4">
                                <label htmlFor="daysCount" className="inline-block mb-2 text-base font-medium">Nombre de jours.</label>
                                <input
                                    type="number"
                                    id="daysCount"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="Legal Registration No"
                                    value={daysCount}
                                    onChange={(e) => setDaysCount(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-5 xl:grid-cols-12 changeAddress my-5">
                            <div className="xl:col-span-12">
                                <label htmlFor="leaveNature" className="inline-block mb-2 text-base font-medium">Nature des congés</label>
                                <textarea
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="Address"
                                    id="leaveNature"
                                    rows={3}
                                    value={leaveNature}
                                    onChange={(e) => setLeaveNature(e.target.value)}
                                ></textarea>
                            </div>
                        </div>

                        <div className="flex items-center mt-5">
                            <div className="relative inline-block w-10 mr-2 align-middle transition duration-200 ease-in">
                                <input
                                    type="checkbox"
                                    name="customSoftSwitch"
                                    id="customSoftSwitch"
                                    className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-600 bg-white/80 dark:bg-zink-400 peer/published checked:bg-custom-500 dark:checked:bg-custom-500 ltr:checked:right-0 rtl:checked:left-0 checked:border-custom-100 dark:checked:border-custom-900 arrow-none checked:bg-none"
                                    checked={isSigned}
                                    onChange={() => setIsSigned(!isSigned)}
                                />
                                <label
                                    htmlFor="customSoftSwitch"
                                    className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-custom-100 dark:peer-checked/published:bg-custom-900 peer-checked/published:border-custom-100 dark:peer-checked/published:border-custom-900"
                                ></label>
                            </div>
                            <label htmlFor="customSoftSwitch" className="inline-block text-base font-medium">
                                En cochant, vous imposez votre signature et accepter la responsabilté liée à ses demandes.
                            </label>
                        </div>

                        <div className="flex justify-end gap-2 mt-5">
                            <button
                                type="button"
                                onClick={handleReset}
                                className="text-slate-500 btn bg-slate-200 border-slate-200 hover:text-slate-600 hover:bg-slate-300 hover:border-slate-300 focus:text-slate-600 focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100 active:text-slate-600 active:bg-slate-300 active:border-slate-300 active:ring active:ring-slate-100 dark:bg-zink-600 dark:hover:bg-zink-500 dark:border-zink-600 dark:hover:border-zink-500 dark:text-zink-200 dark:ring-zink-400/50"
                            >
                                <RefreshCcw className="inline-block size-4 mr-1" /> <span className="align-middle">Reset</span>
                            </button>
                            <button
                                type="submit"
                                className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                            >
                                <Save className="inline-block size-4 mr-1" /> <span className="align-middle">Save</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-x-5">
                <div className="xl:col-span-12">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15 grow">Apply Leave</h6>
                            <form action="#!">
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-12">
                                    <div className="xl:col-span-6">
                                        <div>
                                            <label htmlFor="leaveType" className="inline-block mb-2 text-base font-medium">Leave Type</label>
                                            <Select
                                                className="border-slate-200 focus:outline-none focus:border-custom-500"
                                                options={leaveOptions}
                                                isSearchable={false}
                                                placeholder="Select Leave Type"
                                            />
                                        </div>
                                    </div>

                                    <div className="xl:col-span-6">
                                        <div>
                                            <label htmlFor="numberOfDayLeaves" className="inline-block mb-2 text-base font-medium">Number of Days</label>
                                            <input type="text" id="numberOfDayLeaves" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" value="01" disabled />
                                        </div>
                                    </div>

                                    <div className="xl:col-span-6">
                                        <label htmlFor="fromInput" className="inline-block mb-2 text-base font-medium">Form</label>
                                        <Flatpickr
                                            id="fromInput"
                                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                            options={{
                                                dateFormat: "d M, Y"
                                            }}
                                            placeholder='Select Date'
                                        />
                                    </div>
                                    <div className="xl:col-span-6">
                                        <label htmlFor="toInput" className="inline-block mb-2 text-base font-medium">To</label>
                                        <Flatpickr
                                            id="toInput"
                                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                            options={{
                                                dateFormat: "d M, Y"
                                            }}
                                            placeholder='Select Date'
                                        />
                                    </div>
                                    
                                    
                                    <div className="md:col-span-2 xl:col-span-12">
                                        <div>
                                            <label htmlFor="reasonInput" className="inline-block mb-2 text-base font-medium">Reason</label>
                                            <textarea className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="reasonInput" rows={3}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end gap-2 mt-4">
                                    <button type="reset" className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-700 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10">Reset</button>
                                    <button type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Apply Leave</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
};

export default AddNew;
