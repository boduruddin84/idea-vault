"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = ({ user, logout }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItemStyle = (path) =>
    pathname === path
      ? "text-indigo-400 font-medium"
      : "text-slate-300 transition hover:text-indigo-400";

  const navLinks = (
    <>
      <Link href="/" className={navItemStyle("/")}>
        Home
      </Link>

      <Link href="/ideas" className={navItemStyle("/ideas")}>
        Ideas
      </Link>

      <Link href="/add-idea" className={navItemStyle("/add-idea")}>
        Add Idea
      </Link>

      <Link href="/my-ideas" className={navItemStyle("/my-ideas")}>
        My Ideas
      </Link>

      <Link
        href="/my-interactions"
        className={navItemStyle("/my-interactions")}
      >
        My Interactions
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white">
            I
          </div>

          <h2 className="text-2xl font-bold text-white">IdeaVault</h2>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex">{navLinks}</div>

        {/* Right Side */}
        <div className="hidden items-center gap-4 lg:flex">
          {!user ? (
            <>
              <Link
                href="/login"
                className="rounded-xl border border-slate-700 px-5 py-2 text-slate-300 transition hover:border-indigo-500 hover:text-white"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-xl bg-indigo-600 px-5 py-2 font-medium text-white transition hover:bg-indigo-500"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="cursor-pointer">
                <Image
                  src={user?.photoURL || "/default-user.png"}
                  alt="user"
                  width={44}
                  height={44}
                  className="rounded-full border-2 border-slate-700 object-cover"
                />
              </div>

              <ul
                tabIndex={0}
                className="menu dropdown-content mt-4 w-60 rounded-2xl border border-slate-800 bg-slate-900 p-3 shadow-2xl"
              >
                <li className="mb-2 border-b border-slate-800 pb-2">
                  <p className="font-semibold text-white">
                    {user?.displayName}
                  </p>

                  <span className="text-xs text-slate-400">{user?.email}</span>
                </li>

                <li>
                  <Link href="/profile">Profile Management</Link>
                </li>

                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-slate-200 lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-slate-800 bg-slate-950 lg:hidden">
          <div className="flex flex-col gap-5 px-6 py-6">
            {navLinks}

            {!user ? (
              <>
                <Link
                  href="/login"
                  className="rounded-xl border border-slate-700 px-4 py-3 text-center text-slate-300"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="rounded-xl bg-indigo-600 px-4 py-3 text-center font-medium text-white"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link href="/profile" className="text-slate-300">
                  Profile Management
                </Link>

                <button onClick={logout} className="text-left text-red-400">
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
