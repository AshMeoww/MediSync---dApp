import React, { useState, useEffect } from "react";
import { FaBell, FaFileUpload, FaFilePdf, FaFileImage, FaFileAlt } from "react-icons/fa";
import { WalletComponent } from "../../Authentication/Wallet/connect";

interface MedicalRecord {
  id: string;
  patientName: string;
  recordType: string;
  fileName: string;
  uploadDate: string;
  fileSize: string;
  fileType: string;
  doctor?: string;
}

interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  condition: string;
  status: string;
  lastVisit: string;
  walletAddress?: string;
}

function MedicalRecords() {
  const [selectedPatient, setSelectedPatient] = useState("");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadingFile, setUploadingFile] = useState<File | null>(null);
  const [recordType, setRecordType] = useState("");
  const [records, setRecords] = useState<MedicalRecord[]>([
    {
      id: "1",
      patientName: "John Doe",
      recordType: "Lab Results",
      fileName: "blood_test_results.pdf",
      uploadDate: "2024-03-15",
      fileSize: "1.2 MB",
      fileType: "pdf"
    },
    {
      id: "2",
      patientName: "Jane Smith",
      recordType: "X-Ray",
      fileName: "chest_xray.jpg",
      uploadDate: "2024-03-10",
      fileSize: "3.5 MB",
      fileType: "image"
    }
  ]);
  const [patients, setPatients] = useState<Patient[]>([]);

  // Load patients from localStorage when component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Load existing patients
      const storedPatients = JSON.parse(localStorage.getItem('patients') || '[]');
      setPatients(storedPatients);
      
      // Load existing records
      const storedRecords = JSON.parse(localStorage.getItem('medicalRecords') || '[]');
      if (storedRecords.length > 0) {
        setRecords(prevRecords => {
          // Combine default records with stored records, avoiding duplicates
          const recordIds = new Set(prevRecords.map(r => r.id));
          const newRecords = storedRecords.filter((r: MedicalRecord) => !recordIds.has(r.id));
          return [...prevRecords, ...newRecords];
        });
      }
    }
  }, []);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadingFile(e.target.files[0]);
    }
  };

  // Handle record upload
  const handleUpload = () => {
    if (!uploadingFile || !selectedPatient || !recordType) return;

    const newRecord: MedicalRecord = {
      id: Date.now().toString(),
      patientName: selectedPatient,
      recordType: recordType,
      fileName: uploadingFile.name,
      uploadDate: new Date().toISOString().split('T')[0],
      fileSize: `${(uploadingFile.size / (1024 * 1024)).toFixed(2)} MB`,
      fileType: uploadingFile.type.includes('pdf') ? 'pdf' : 
               uploadingFile.type.includes('image') ? 'image' : 'document',
      doctor: "Dr. Ashley Nicole Santos"
    };

    setRecords([...records, newRecord]);
    
    // Store in localStorage for both doctor and patient views
    const existingRecords = JSON.parse(localStorage.getItem('medicalRecords') || '[]');
    localStorage.setItem('medicalRecords', JSON.stringify([...existingRecords, newRecord]));
    
    // Reset form
    setUploadingFile(null);
    setSelectedPatient("");
    setRecordType("");
    setShowUploadModal(false);
  };

  // Close modal and reset form
  const handleCloseModal = () => {
    setShowUploadModal(false);
    setUploadingFile(null);
    setSelectedPatient("");
    setRecordType("");
  };

  // Get icon based on file type
  const getFileIcon = (fileType: string) => {
    switch(fileType) {
      case 'pdf':
        return <FaFilePdf className="text-red-500" />;
      case 'image':
        return <FaFileImage className="text-blue-500" />;
      default:
        return <FaFileAlt className="text-gray-500" />;
    }
  };

  return (
    <div className="h-full flex flex-col p-10">
      <div className="text-3xl flex flex-row w-full justify-end space-x-4">
        <FaBell />
        <WalletComponent />
      </div>

      <div className="mt-14 flex flex-row justify-between">
        <div className="flex flex-col">
          <h1 className="text-4xl text-[#13505B] font-bold">Medical Records</h1>
          <h1 className="font-medium mt-2">
            Manage and upload patient medical records
          </h1>
        </div>
        <div className="flex">
          <button
            onClick={() => setShowUploadModal(true)}
            className="flex items-center gap-x-2 rounded-lg bg-[#13505B] text-[#FCFFFD] text-base lg:text-lg px-4 lg:px-5 h-10 lg:h-12 w-fit hover:bg-[#0f3d46] transition duration-300 font-medium"
            type="button"
          >
            <FaFileUpload />
            Upload Record
          </button>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-[#13505B]">Upload Medical Record</h2>
              <button 
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Patient
                </label>
                <select
                  title="selected patient"
                  value={selectedPatient}
                  onChange={(e) => setSelectedPatient(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                >
                  <option value="">Select a patient</option>
                  {patients.map((patient) => (
                    <option key={patient.id || patient.name} value={patient.name}>
                      {patient.name}
                    </option>
                  ))}
                  {patients.length === 0 && (
                    <>
                      <option value="John Doe">John Doe</option>
                      <option value="Jane Smith">Jane Smith</option>
                    </>
                  )}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Record Type
                </label>
                <select
                  title="record type"
                  value={recordType}
                  onChange={(e) => setRecordType(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                >
                  <option value="">Select record type</option>
                  <option value="Lab Results">Lab Results</option>
                  <option value="X-Ray">X-Ray</option>
                  <option value="Prescription">Prescription</option>
                  <option value="Diagnosis">Diagnosis</option>
                  <option value="Treatment Plan">Treatment Plan</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload File
                </label>
                <div className="relative border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
                  {uploadingFile ? (
                    <div className="text-sm text-gray-600">
                      <p className="font-medium">{uploadingFile.name}</p>
                      <p>{(uploadingFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                    </div>
                  ) : (
                    <div className="space-y-1 text-center">
                      <FaFileUpload className="mx-auto h-12 w-12 text-gray-400" />
                      <p className="text-sm text-gray-600">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        PDF, JPG, PNG up to 10MB
                      </p>
                    </div>
                  )}
                  <input
                    title="file"
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                onClick={handleCloseModal}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleUpload}
                disabled={!uploadingFile || !selectedPatient || !recordType}
                className={`px-4 py-2 rounded-md text-white ${
                  !uploadingFile || !selectedPatient || !recordType
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#13505B] hover:bg-[#0f3d46]"
                }`}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Records Table */}
      <div className="mt-8">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                File
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Patient
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Record Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Upload Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Size
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {records.map((record) => (
              <tr key={record.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {getFileIcon(record.fileType)}
                    <span className="ml-2 text-sm font-medium text-gray-900">
                      {record.fileName}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {record.patientName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {record.recordType}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {record.uploadDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {record.fileSize}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-[#13505B] hover:text-[#0f3d46]">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MedicalRecords;