import { useEffect, useState } from "react";
import { PlusCircle, Trash2, Globe, Image as ImageIcon, LayoutDashboard } from "lucide-react";

export default function Dashboard() {
  // 🔹 State Declarations
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [image, setImage] = useState(null);

  const token = localStorage.getItem("token");

  // 🔹 Fetch projects
  const fetchProjects = async () => {
    try {
      const res = await fetch("http://localhost:5000/projects");
      const data = await res.json();
      setProjects(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // 🔹 ADD PROJECT (The single, correct version using FormData)
  const handleAddProject = async () => {
    if (!token) {
      alert("You must be logged in to add a project!");
      return;
    }

    if (!title || !description) {
      alert("Please provide at least a title and description.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("techStack", techStack);
    formData.append("githubLink", githubLink);
    formData.append("liveLink", liveLink);
    if (image) formData.append("image", image);

    try {
      const res = await fetch("http://localhost:5000/projects", {
        method: "POST",
        headers: {
          // Note: Browser sets Content-Type automatically for FormData
          "Authorization": `Bearer ${token}`, 
        },
        body: formData,
      });

      if (res.ok) {
        alert("Project added successfully!");
        fetchProjects(); 
        clearForm();     
      } else {
        const errorData = await res.json();
        alert(`Upload failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setTechStack("");
    setGithubLink("");
    setLiveLink("");
    setImage(null);
  };

  // 🔹 Delete project
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;

    try {
      const res = await fetch(`http://localhost:5000/projects/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      
      if(res.ok) fetchProjects();
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-gray-100 flex font-sans">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-gray-800 bg-[#111113] hidden md:flex flex-col p-6">
        <div className="flex items-center gap-2 mb-10 text-purple-500 font-bold text-xl">
          <LayoutDashboard size={24} />
          <span>Admin Panel</span>
        </div>
        <nav className="space-y-4">
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Main</div>
          <button className="flex items-center gap-3 text-white bg-purple-600/10 border border-purple-600/20 w-full p-3 rounded-lg">
            Projects
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <header className="mb-10">
            <h1 className="text-3xl font-bold text-white">Project Management</h1>
            <p className="text-gray-400">Add, edit, or remove your portfolio items.</p>
          </header>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column: The Form */}
            <section className="lg:col-span-1">
              <div className="bg-[#111113] border border-gray-800 p-6 rounded-2xl sticky top-8">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <PlusCircle size={20} className="text-purple-500" />
                  Add New Project
                </h2>

                <div className="space-y-4 text-sm">
                  <div>
                    <label className="block text-gray-400 mb-1">Project Title</label>
                    <input
                      className="w-full bg-[#18181b] border border-gray-700 rounded-lg p-2.5 focus:ring-2 focus:ring-purple-600 outline-none transition"
                      value={title} onChange={e => setTitle(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-1">Description</label>
                    <textarea
                      className="w-full bg-[#18181b] border border-gray-700 rounded-lg p-2.5 h-24 focus:ring-2 focus:ring-purple-600 outline-none transition"
                      value={description} onChange={e => setDescription(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 mb-1">Tech Stack</label>
                    <input
                      className="w-full bg-[#18181b] border border-gray-700 rounded-lg p-2.5 focus:ring-2 focus:ring-purple-600 outline-none transition"
                      value={techStack} onChange={e => setTechStack(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      placeholder="GitHub URL" 
                      className="w-full bg-[#18181b] border border-gray-700 rounded-lg p-2.5 outline-none" 
                      value={githubLink} onChange={e => setGithubLink(e.target.value)} 
                    />
                    <input 
                      placeholder="Live URL" 
                      className="w-full bg-[#18181b] border border-gray-700 rounded-lg p-2.5 outline-none" 
                      value={liveLink} onChange={e => setLiveLink(e.target.value)} 
                    />
                  </div>

                  <div>
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-700 rounded-lg cursor-pointer bg-[#18181b] hover:bg-[#202024] transition">
                      <ImageIcon className="text-gray-500 mb-2" />
                      <p className="text-xs text-gray-400">{image ? image.name : "Select Thumbnail"}</p>
                      <input type="file" className="hidden" accept="image/*" onChange={e => setImage(e.target.files[0])} />
                    </label>
                  </div>

                  <button
                    onClick={handleAddProject}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-all active:scale-[0.98]"
                  >
                    Publish Project
                  </button>
                </div>
              </div>
            </section>

            {/* Right Column: Project List */}
            <section className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((p) => (
                  <div key={p._id} className="bg-[#111113] border border-gray-800 rounded-2xl overflow-hidden group">
                    <div className="h-40 bg-gray-800 relative">
                      {p.image && (
                        <img
                          src={`http://localhost:5000/uploads/${p.image}`}
                          alt={p.title}
                          className="w-full h-full object-cover opacity-80"
                        />
                      )}
                      <button
                        onClick={() => handleDelete(p._id)}
                        className="absolute top-3 right-3 p-2 bg-red-600/80 hover:bg-red-600 rounded-full text-white transition shadow-lg"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-lg mb-1">{p.title}</h3>
                      <p className="text-gray-400 text-sm line-clamp-2 mb-4">{p.description}</p>
                      <div className="flex gap-4">
                        <a href={p.liveLink} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition">
                          <Globe size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}