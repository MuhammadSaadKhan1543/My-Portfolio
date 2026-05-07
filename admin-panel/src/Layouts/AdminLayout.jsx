import { Link } from "react-router-dom";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#0a0a0c] text-white">

      <aside className="w-64 bg-[#111113] p-6 border-r border-gray-800">
        <h2 className="text-purple-500 text-xl mb-10">Admin Panel</h2>

        <nav className="space-y-4">
          <Link to="/admin/dashboard" className="block">Projects</Link>
          <Link to="/admin/messages" className="block">Messages</Link>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}