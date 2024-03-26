import React, { useEffect, useState } from "react";
import Prescription from "../components/Prescription";
import ContentContainer from "../components/ContentContainer";
import PageHeader from "../components/PageHeader";
import pic from "../assets/prescribertable.jpg";

const PrescriberPrescriptions = () => {
  const [data, setData] = useState(null);
  const [myItem, setItem] = useState(null);

  useEffect(() => {
    const sampleData = [
      {
        "date": "2024-03-12",
        "patient_initials": "AB",
        "prescriber_code": "001",
        "status": "Pending",
        "comments": "Details for item 1",
        "discovery": true,
      },
      {
        "date": "2024-03-12",
        "patient_initials": "CD",
        "prescriber_code": "001",
        "status": "Completed",
        "comments": "Details for item 2 asjdfklajsdlfj alsdfjaslkdfjas lasdjfaslkdjf alsdkjfalskdjfaslkdfjalksdjf aslkdfjalsd fal"
      },
      {
        "date": "2024-03-12",
        "patient_initials": "EF",
        "prescriber_code": "001",
        "status": "Pending",
        "comments": "Details for item 3"
      }
    ];

    setData(sampleData)
  }, []);


  const itemClick = (item) => {
    if (myItem !== item) {
      setItem(item);
    }
    else {
      setItem(null);
    }
  };


  return (
    <>
      <PageHeader
        title="My Prescriptions"
        desc="Check all of your prescriptions all in one place."
      />
      <div className="flex w-full h-[650px] items-center justify-center bg-cover" style={{backgroundImage: `url(${pic})`}}> 
        
        <div class="rounded-xl w-3/4 bg-gray-200 bg-opacity-70 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="flex flex-col mx-auto mb-12 text-center">
          <h1 className="text-3xl underline font-bold !text-gray-900  mb-5">First/Last Name's Logged Prescriptions</h1>
          <p className="font-semibold">Click on Show More to access more details about your prescription. Prescription status will automatically change once both parties log the prescription.</p>
          <p className="font-semibold">Prescribed Discovery Passes will be mailed to the patient.</p>
        </div>
          <table className="w-full mt-10 mb-20 text-sm rtl:text-right text-gray-500">
            <thead className="text-xs text-left text-black uppercase bg-[#f0fff0]">
              <tr>
                <th scope="col" className="px-2 py-3">Date</th>
                <th scope="col" className="px-2 py-3">Patient Initials</th>
                <th scope="col" className="px-2 py-3">Prescription Status</th>
                <th scope="col" className="px-2 py-3">Discovery Pass Prescribed?</th>
                <th scope="col" className="px-2 py-3">Prescription Comments</th>
                <th scope="col" className="px-2 py-3"></th>

              </tr>
            </thead>
            <tbody>
              {data && data.map((item) => (
                <>
                  <tr className="w-full text-left text-black border-t border-white odd:bg-white/60 even:text-white even:bg-[#0a0e1a]/40 hover:">
                    <td className="px-2 py-3 w-1/8">{item.date}</td>
                    <td className="px-2 py-3 w-1/8">{item.patient_initials}</td>
                    <td className="px-2 py-3">{item.status}</td>
                    <td className="px-2 py-3 w-1/8"><input type="checkbox" checked={item.discovery} disabled /></td>
                    <td className="px-2 py-3 w-1/2 truncate max-w-md">{item.comments}</td>
                    <button onClick={() => itemClick(item)} className="p-2 w-1/8">
                      <p className="font-bold text-nowrap underline">Show More</p>
                    </button>
                  </tr>{myItem === item && (<tr className="text-left text-black border-t border-white">
                    <td colSpan="5">
                      <Prescription item={item} />
                    </td>
                  </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
          </div>
        
      </div>
    </>
  );
};

export default PrescriberPrescriptions;