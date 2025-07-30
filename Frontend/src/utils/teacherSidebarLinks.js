// utils/sidebarLinks.js
export const teacherSidebarLinks = {
  // Existing
  view_subjects:        { label: "📖 View Subjects", to: "/teacher/subjects" },
  add_subjects:         { label: "➕ Add Subject", to: "/teacher/subjects/add" },
  view_timetable:       { label: "📅 View Timetable", to: "/teacher/timetable" },
  add_timetable:        { label: "➕ Add Timetable", to: "/teacher/timetable/add" },
  add_attendance:       { label: "📝 Mark Attendance", to: "/Mark/Attendance" },
  // Missing in permissions list — optional, add permission if needed
  publish_marks:        { label: "📊 Publish Marks", to: "/teacher/publish/marks" },
  announcements:        { label: "📢 Announcements", to: "/teacher/announcements" },
  add_announcement:     { label: "📢 Add Announcement", to: "/teacher/add/announcement" },
  chat:                 { label: "💬 Chat", to: "/teacher/chat" },

  // Found in permissions but missing from sidebar — you can include:
  view_attendance:      { label: "📘 View Attendance", to: "/teacher/attendance/view" },
  view_students:        { label: "👥 View Students", to: "/teacher/students" },
  view_students_Leaves: { label: "👥 View Leaves", to: "/teacher/view/students/leave"},
  view_events:          { label: "🎉 View Events", to: "/teacher/events" },
  manage_classes:       { label: "🏫 Manage Classes", to: "/teacher/classes/manage" },
  view_notices:         { label: "📢 View Notices", to: "/teacher/notices" },
};

