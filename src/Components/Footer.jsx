import React from 'react';
import { ArrowUp } from 'lucide-react';

function Footer() {
  return (
    <>
    <footer className="bg-[#0a0a0a] px-6 pb-10">

    <div className="pt-32  border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold">
            <span className="text-purple-600">Muhammad Saad Khan</span>
          </div>

          <p className="text-gray-500 text-sm">
            © 2024 Muhammad Saad Khan. All rights reserved.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 bg-[#111111] border border-gray-800 rounded-full text-purple-500 hover:bg-purple-500 hover:text-white transition-all shadow-lg"
          >
            <ArrowUp size={20} />
          </button>
        </div>
    </footer>
    </>
  )
}
export default Footer;