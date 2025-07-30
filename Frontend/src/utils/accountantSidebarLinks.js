export const accountantSidebarLinks = {
  // Existing
//  add_attendance:       { label: "📝 Mark Attendance", to: "/Mark/Attendance" },
  add_fees:             { label: "💰 Add Fees", to: "/accountant/fees/add" },

  // Missing in permissions list — optional, add permission if needed
  announcements:        { label: "📢 Announcements", to: "/accountant/announcements" },
  chat:                 { label: "💬 Chat", to: "/accountant/chat" },

  // Found in permissions but missing from sidebar — you can include:
  view_events:          { label: "🎉 View Events", to: "/accountant/events" },
  view_notices:         { label: "📢 View Notices", to: "/accountant/notices" },
  view_fees:            { label: "💰 View Fees", to: "/accountant/fees" },
  view_invoices:        { label: "🧾 View Invoices", to: "/accountant/invoices" },
  stats_payments:       { label: "📊 Payment Stats", to: "/accountant/stats/payments" },
};