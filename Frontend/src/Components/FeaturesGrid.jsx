import {
  FaChalkboardTeacher,
  FaBookOpen,
  FaFileAlt,
  FaCalendarCheck,
  FaBullhorn,
  FaUserPlus,
  FaArrowUp,
  FaExchangeAlt,
  FaUserShield,
  FaUserCog,
  FaUsers,
  FaUserTie,
  FaFileInvoiceDollar,
  FaMoneyBillWave,
  FaWallet,
  FaCashRegister,
  FaListAlt,
} from "react-icons/fa";

const sectionData = [
  {
    title: "Teacher",
    items: [
      ["Classes and Sections", "Create Classes and Sections in a School", <FaChalkboardTeacher />],
      ["Subjects", "Add Different Types of Subjects", <FaBookOpen />],
      ["Study Materials", "Add and distribute study materials to classes", <FaFileAlt />],
      ["Attendance", "Take Date Wise Attendance of Students", <FaCalendarCheck />],
      ["Notice Board", "Display recent notices using widget", <FaBullhorn />],
    ],
  },
  {
    title: "Student",
    items: [
      ["Student Admission", "Add new admissions to a class", <FaUserPlus />],
      ["Student Promotion", "Promote student from one class to another", <FaArrowUp />],
      ["Student Transfer", "Transfer student from one school to another", <FaExchangeAlt />],
      ["Send Leave", "Student can Send Leave to Class Teacher", <FaExchangeAlt />],
      ["Payment History", "Student Can View Details of Payment History", <FaExchangeAlt />],
      ["Fee Voucher", "Student Fee Voucher Generation", <FaExchangeAlt />],
    ],
  },
  {
    title: "Administrator",
    items: [
      ["Roles and Permissions", "Create custom roles and assign permissions", <FaUserShield />],
      ["Admin", "Add school admins to manage the school", <FaUserCog />],
      ["Staff", "Add school staff with permissions", <FaUsers />],
      ["Teacher", "Add teachers to manage students", <FaChalkboardTeacher />],
      ["Accountant", "Manage fees, expenses, and income", <FaUserTie />],
    ],
  },
  {
    title: "Accounting",
    items: [
      ["Fee Invoice Generation", "Generate fee invoices in bulk", <FaFileInvoiceDollar />],
      ["Expense Management", "Add categories and manage expenses", <FaMoneyBillWave />],
      ["Income Management", "Track income sources and date-wise income", <FaWallet />],
      ["Payment Collection", "Collect payments offline and online", <FaCashRegister />],
      ["Custom Fee Structure", "Define fee structure at admission", <FaListAlt />],
    ],
  },
];

export default function FeaturesGrid() {
  return (
    <div className="p-8 bg-gradient-to-b from-[rgb(23,15,47)] to-[rgb(12,14,43)] text-white">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center tracking-tight">
        Manage Your School with Ease, Anytime, Anywhere
      </h1>
      <p className="text-center text-lg sm:text-xl mb-10">
        What makes it a smart School Management System
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {sectionData.map((section, idx) => (
          <div
            key={idx}
            className="bg-[#1e293b] p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
          >
            <div className="w-full bg-[#c19703] rounded-xl mb-6 px-6 py-3">
              <h2 className="text-black text-xl font-bold">{section.title}</h2>
            </div>
            <div className="space-y-4">
              {section.items.map(([title, desc, Icon], i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 text-yellow-400">{Icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-sm text-gray-300">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

