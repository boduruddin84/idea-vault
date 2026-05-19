import Link from "next/link";

import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  
} from "react-icons/fa6";
import { IoIosBulb } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Brand */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold">
              <IoIosBulb />
            </div>

            <h2 className="text-2xl font-bold">
              IdeaVault
            </h2>
          </div>

          <p className="text-sm leading-7 text-slate-400">
            A collaborative startup idea-sharing platform
            where innovators connect, validate, and grow
            powerful ideas together.
          </p>
        </div>

        {/* Platform Links */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">
            Platform
          </h3>

          <ul className="space-y-3 text-slate-400">
            <li>
              <Link
                href="/ideas"
                className="transition hover:text-indigo-400"
              >
                Ideas
              </Link>
            </li>

            <li>
              <Link
                href="/categories"
                className="transition hover:text-indigo-400"
              >
                Categories
              </Link>
            </li>

            <li>
              <Link
                href="/trending"
                className="transition hover:text-indigo-400"
              >
                Trending
              </Link>
            </li>

            <li>
              <Link
                href="/add-idea"
                className="transition hover:text-indigo-400"
              >
                Add Idea
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">
            Contact
          </h3>

          <ul className="space-y-3 text-slate-400">
            <li>
              Email: support@ideavault.com
            </li>

            <li>
              Phone: +880 1700-000000
            </li>

            <li>
              Location: Rajshahi, Bangladesh
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">
            Social Links
          </h3>

          <div className="flex items-center gap-4">
            
            <Link
              href="https://github.com"
              target="_blank"
              className="rounded-xl border border-slate-800 p-3 text-slate-300 transition hover:border-indigo-500 hover:text-indigo-400"
            >
              <FaGithub size={20} />
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
              className="rounded-xl border border-slate-800 p-3 text-slate-300 transition hover:border-indigo-500 hover:text-indigo-400"
            >
              <FaLinkedin size={20} />
            </Link>

            <Link
              href="https://facebook.com"
              target="_blank"
              className="rounded-xl border border-slate-800 p-3 text-slate-300 transition hover:border-indigo-500 hover:text-indigo-400"
            >
              <FaFacebookF size={18} />
            </Link>

            <Link
              href="https://x.com"
              target="_blank"
              className="rounded-xl border border-slate-800 p-3 text-slate-300 transition hover:border-indigo-500 hover:text-indigo-400"
            >
              <FaXTwitter size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800 py-5 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} IdeaVault. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;