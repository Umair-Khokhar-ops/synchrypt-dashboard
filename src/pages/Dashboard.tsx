import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
 import { CheckCircleIcon } from "@heroicons/react/24/solid";
 import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

const statusData = [
  { name: "Compliant", value: 86 },
  { name: "Non‑Compliant", value: 14 },
];
const COLORS = ["#2563EB", "#FBBF24"];

const lineData = [
  { month: "May", risk: 85 },
  { month: "Jul", risk: 82 },
  { month: "Sep", risk: 78 },
  { month: "Nov", risk: 88 },
  { month: "Jan", risk: 92 },
  { month: "Mar", risk: 95 },
  { month: "Feb", risk: 97 },
  { month: "Apr", risk: 97 },
];

const recentScans = [
  { id: "0005009794", product: "Azithromycin", status: "VALID", date: "1024‑04‑22" },
  { id: "0005053353", product: "Ibuprofen", status: "VALID", date: "1024‑04‑22" },
  { id: "0005033478", product: "Metformin", status: "VALID", date: "1024‑04‑22" },
  { id: "0005032320", product: "Omeprazole", status: "VALID", date: "1024‑04‑22" },
  { id: "0005035921", product: "Acefarninophen", status: "❗ LI", date: "1024‑04‑22" },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Grid: left two cols / right one col */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left stack */}
        <div className="lg:col-span-2 space-y-6">
          {/* Real-time Status */}
          <div className="bg-white rounded-lg shadow p-6 flex items-center space-x-6">
            <CheckCircleIcon className="h-12 w-12 text-green-500" />
            <div>
              <h3 className="text-2xl font-semibold text-[#0F1E42]">
                Verified
              </h3>
              <p className="text-gray-600">1.532 Validations Today</p>
            </div>
          </div>

          {/* Compliance Overview */}
          <div className="bg-white rounded-lg shadow p-6 flex items-center">
            <div className="w-32 h-32">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusData}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                    innerRadius={40}
                    outerRadius={60}
                    paddingAngle={2}
                  >
                    {statusData.map((_, idx) => (
                      <Cell key={idx} fill={COLORS[idx]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="ml-6">
              <h3 className="text-xl font-medium text-[#0F1E42]">86%</h3>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>
                  <span className="inline-block w-3 h-3 rounded-full bg-[#2563EB] mr-2" />
                  Compliant
                </li>
                <li>
                  <span className="inline-block w-3 h-3 rounded-full bg-[#FBBF24] mr-2" />
                  Non‑Compliant
                </li>
              </ul>
              <p className="mt-2 text-sm text-gray-500">
                14% in the last 24 hours
              </p>
            </div>
          </div>

          {/* Tamper Alerts */}
          <div className="bg-white rounded-lg shadow p-6 flex items-center space-x-6">
            <ExclamationTriangleIcon className="h-12 w-12 text-red-500" />
            <div>
              <h3 className="text-4xl font-bold text-red-500">3</h3>
              <p className="text-gray-600">In the last 24 hours</p>
              <p className="mt-2 italic text-sm">Ihu can’t see? pantaart’e luxury — it’s leadership</p>
            </div>
          </div>
        </div>

        {/* Right stack */}
        <div className="space-y-6">
          {/* Recent Scans */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium mb-4 text-[#0F1E42]">
              Recent Scans
            </h3>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="pb-2">Document ID</th>
                  <th className="pb-2">Product</th>
                  <th className="pb-2">Status</th>
                  <th className="pb-2">Timestamp</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {recentScans.map(row => (
                  <tr key={row.id} className="border-b last:border-none">
                    <td className="py-2">{row.id}</td>
                    <td className="py-2">{row.product}</td>
                    <td className="py-2">
                      <span
                        className={`inline-block px-2 py-1 rounded text-sm ${
                          row.status === "VALID"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="py-2">{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Supply Chain Graph */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium mb-4 text-[#0F1E42]">
              Supply Chain Graph
            </h3>
            <div style={{ width: "100%", height: 200 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="risk" stroke="#2563EB" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-4 text-sm text-gray-600 flex items-center">
              <span className="inline-block w-3 h-3 rounded-full bg-[#2563EB] mr-2" />
              Tracvre Risk
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
