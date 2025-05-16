import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import { WalletComponent } from "../../Authentication/Wallet/connect";
import {
  FaChevronDown,
  FaChevronUp,
  FaFilePdf,
  FaDownload,
  FaEye,
  FaSearch
} from "react-icons/fa";

// for demo only
// to follow api routes
const records = [
  {
    title: "Hypertension",
    doctor: "Dr. Ian Vergara",
    date: "April 7, 2025",
    location: "Divine Grace Medical Center, General Trias, Cavite",
    diagnosis: "Hypertension-Stage 1",
    prescription: [
      "Amlodipine 5mg – Take once daily in the morning",
      "Reduce sodium intake, engage in 30 minutes of moderate physical activity daily"
    ],
    notes:
      "Patient presented with elevated blood pressure readings (140/90 mmHg) on two separate occasions. No signs of end-organ damage. Lifestyle modifications advised along with antihypertensive therapy.",
    document: "Blood Pressure Monitoring Chart",
    type: "Clinical Diagnosis",
    category: "PDF",
    uploaded: "04/07/25 at 10:00 a.m.",
    center: "DGMC"
  },
  {
    title: "Pneumonia",
    doctor: "Dr. Ashley Nicole Santos",
    date: "December 7, 2022",
    location: "M.V.S. Medical Center, Trece Martires City",
    type: "Clinical Diagnosis"
  },
  {
    title: "Scoliosis",
    doctor: "Dr. Jasmyn Japag",
    date: "January 7, 2020",
    location: "St. Luke's Medical Center, Quezon City",
    type: "Imaging"
  }
];

function MedicalRecords() {
  const [openIndexes, setOpenIndexes] = useState([0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const filteredRecords = records.filter((r) => {
    const matchesSearch =
      r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.doctor?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.date?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.type?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "All" || r.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="ml- h-full flex flex-col p-6 md:p-10">
      <div className="text-3xl flex flex-row w-full justify-end space-x-4">
        <FaBell />
        <WalletComponent />
      </div>

      <div className="mt-14 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div className="flex flex-col">
          <h1 className="text-4xl text-[#13505B] font-bold">Medical Records</h1>
          <h1 className="font-medium mt-2">View your medical records.</h1>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for your medical record..."
              className="border rounded px-4 py-2 pl-10 w-72 md:w-96 shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <select
            className="border rounded px-4 py-2 shadow-sm"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="All">All Types</option>
            <option value="Clinical Diagnosis">Clinical Diagnosis</option>
            <option value="Imaging">Imaging</option>
          </select>
        </div>
      </div>

      {/* Records list */}
      <section className="flex flex-col gap-6 max-w-4xl mt-10">
        {filteredRecords.map((record, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm p-4 bg-white transition-shadow hover:shadow-md"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleIndex(index)}
            >
              <div>
                <h2 className="text-xl font-semibold text-[#13505B]">
                  {record.title}{" "}
                  <span className="text-sm text-gray-600">· {record.doctor}</span>
                </h2>
                <p className="text-sm text-gray-500">
                  {record.date} @ {record.location}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    record.type === "Imaging"
                      ? "bg-gray-200 text-gray-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {record.type}
                </span>
                {openIndexes.includes(index) ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </div>

            {openIndexes.includes(index) && record.diagnosis && (
              <div className="mt-4 text-sm space-y-3">
                <div>
                  <strong>Diagnosis:</strong>
                  <p>{record.diagnosis}</p>
                </div>
                <div>
                  <strong>Prescription:</strong>
                  <ul className="list-disc ml-5">
                    {record.prescription.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong>Clinical Notes:</strong>
                  <p>{record.notes}</p>
                </div>
                <div>
                  <strong>Documents:</strong>
                  <div className="flex items-center gap-2 mt-1">
                    <FaFilePdf />
                    <span>{record.document}</span>
                    <span className="text-xs text-gray-400">({record.category})</span>
                    <button className="text-sm px-2 py-1 border rounded">
                      <FaDownload className="inline" /> Download
                    </button>
                    <button className="text-sm px-2 py-1 border rounded bg-[#13505B] text-white">
                      <FaEye className="inline" /> View Full Record
                    </button>
                  </div>
                </div>
                <p className="text-xs text-gray-400 italic">
                  uploaded by {record.center} as of {record.uploaded}
                </p>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

export default MedicalRecords;

