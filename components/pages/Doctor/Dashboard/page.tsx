import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { WalletComponent } from "../../Authentication/Wallet/connect";
import { FiFilter, FiSearch, FiPlus } from "react-icons/fi";

interface Patient {
  name: string;
  age: number;
  gender: string;
  condition: string;
  status: string;
  lastVisit: string;
  walletAddress?: string;
}

// This would normally be in a shared store or context
let globalPendingRequests: any[] = [];

function Dashboard() {
    const [searchTerm, setSearchTerm] = useState("");
    const [showAddForm, setShowAddForm] = useState(false);
    const [newPatient, setNewPatient] = useState<Patient>({
        name: "",
        age: 0,
        gender: "",
        condition: "",
        status: "Pending",
        lastVisit: new Date().toISOString().split('T')[0],
        walletAddress: ""
    });
    const [patients, setPatients] = useState<Patient[]>([
        {
            name: "John Doe",
            age: 45,
            gender: "Male",
            condition: "Hypertension",
            status: "Active",
            lastVisit: "2024-01-15",
            walletAddress: "0x123..."
        },
        {
            name: "Jane Smith",
            age: 32,
            gender: "Female", 
            condition: "Diabetes",
            status: "Pending",
            lastVisit: "2024-01-10",
            walletAddress: "0x456..."
        }
    ]);

    const handleAddPatient = () => {
        if (newPatient.name && newPatient.age && newPatient.gender && newPatient.condition && newPatient.walletAddress) {
            const newPatientWithId = {
                ...newPatient,
                id: Date.now().toString()
            };
            
            // Add to local state
            setPatients([...patients, newPatientWithId]);
            
            // Add to global pending requests that will be visible in Patient Access Control
            globalPendingRequests.push({
                doctor: {
                    name: "Dr. Ashley Nicole Santos",
                    hospital: "MediSync Hospital",
                    requestDate: new Date().toISOString().split('T')[0],
                    reason: `Access to medical records for ${newPatient.condition} treatment`
                },
                patient: newPatientWithId
            });
            
            // Store in localStorage for persistence between pages
            const existingRequests = JSON.parse(localStorage.getItem('pendingRequests') || '[]');
            localStorage.setItem('pendingRequests', JSON.stringify([
                ...existingRequests,
                {
                    doctor: {
                        name: "Dr. Ashley Nicole Santos",
                        hospital: "MediSync Hospital",
                        requestDate: new Date().toISOString().split('T')[0],
                        reason: `Access to medical records for ${newPatient.condition} treatment`
                    },
                    patient: newPatientWithId,
                    id: Date.now().toString()
                }
            ]));
            
            // Store patients in localStorage for use in Medical Records
            const existingPatients = JSON.parse(localStorage.getItem('patients') || '[]');
            localStorage.setItem('patients', JSON.stringify([
                ...existingPatients, 
                newPatientWithId
            ]));
            
            // Reset form
            setNewPatient({
                name: "",
                age: 0,
                gender: "",
                condition: "",
                status: "Pending",
                lastVisit: new Date().toISOString().split('T')[0],
                walletAddress: ""
            });
            setShowAddForm(false);
        }
    };

    const filteredPatients = patients.filter(patient =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="ml- h-full flex flex-col p-10">
            <div className="text-3xl flex flex-row w-full justify-end space-x-4">
                <FaBell />
                <WalletComponent />
            </div>

            <div className="mt-14 flex flex-row justify-between">
                <div className="flex flex-col w-full">
                    <h1 className="text-4xl text-[#13505B] font-bold">Welcome back, Dr. Ashley Nicole Santos </h1>
                    <h1 className="font-sm mt-2">
                        Manage medical records and appointments with MediSync.
                    </h1>
                
                    <div className=" w-full mt-10 rounded-lg p-4">
                        <h1 className="text-2xl text-[#13505B] font-medium">List Of Patients</h1>
                        <p className="font-sm mb-5">Overview of your patients information </p>
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center space-x-2">
                                <div className="relative">
                                    <FiSearch className="absolute left-3 top-3 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search patients..."
                                        className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                <button className="flex items-center space-x-1 px-4 py-2 border rounded-lg hover:bg-gray-50">
                                    <FiFilter />
                                    <span>Filter</span>
                                </button>
                            </div>
                            <button 
                                className="flex items-center space-x-1 px-4 py-2 bg-[#13505B] text-white rounded-lg hover:bg-opacity-90"
                                onClick={() => setShowAddForm(true)}
                            >
                                <FiPlus />
                                <span>Add Patient</span>
                            </button>
                        </div>

                        {showAddForm && (
                            <div className="mb-4 p-4 border rounded-lg">
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="p-2 border rounded"
                                        value={newPatient.name}
                                        onChange={(e) => setNewPatient({...newPatient, name: e.target.value})}
                                    />
                                    <input
                                        type="number"
                                        placeholder="Age"
                                        className="p-2 border rounded"
                                        value={newPatient.age || ''}
                                        onChange={(e) => setNewPatient({...newPatient, age: parseInt(e.target.value)})}
                                    />
                                    <select
                                        title="new patient"
                                        className="p-2 border rounded"
                                        value={newPatient.gender}
                                        onChange={(e) => setNewPatient({...newPatient, gender: e.target.value})}
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                    <input
                                        type="text"
                                        placeholder="Condition"
                                        className="p-2 border rounded"
                                        value={newPatient.condition}
                                        onChange={(e) => setNewPatient({...newPatient, condition: e.target.value})}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Wallet Address"
                                        className="p-2 border rounded"
                                        value={newPatient.walletAddress}
                                        onChange={(e) => setNewPatient({...newPatient, walletAddress: e.target.value})}
                                    />
                                </div>
                                <div className="mt-4 flex justify-end space-x-2">
                                    <button 
                                        className="px-4 py-2 bg-gray-200 rounded"
                                        onClick={() => setShowAddForm(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                        className="px-4 py-2 bg-[#13505B] text-white rounded"
                                        onClick={handleAddPatient}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        )}
                        
                        <table className="min-w-full">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Condition</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Visit</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wallet</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredPatients.map((patient, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap">{patient.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{patient.age}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{patient.gender}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{patient.condition}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                patient.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                                {patient.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">{patient.lastVisit}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{patient.walletAddress}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;