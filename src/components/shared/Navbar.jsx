"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import { Menu, X } from "lucide-react";

import { IoIosBulb } from "react-icons/io";

import { MdDarkMode, MdLightMode } from "react-icons/md";

import { useTheme } from "next-themes";

const Navbar = ({ user, logout }) => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItemStyle = (path) =>
    pathname === path
      ? "text-indigo-500 font-medium"
      : "text-slate-700 transition hover:text-indigo-500 dark:text-slate-300";

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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-xl text-white shadow-lg">
            <IoIosBulb />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            IdeaVault
          </h2>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex">{navLinks}</div>

        {/* Right Side */}
        <div className="hidden items-center gap-4 lg:flex">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 bg-slate-100 text-slate-700 transition hover:border-indigo-500 hover:text-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              {theme === "dark" ? (
                <MdLightMode size={22} />
              ) : (
                <MdDarkMode size={22} />
              )}
            </button>
          )}

          {/* Auth */}
          {!user ? (
            <>
              <Link
                href="/login"
                className="rounded-xl border border-slate-300 px-5 py-2 text-slate-700 transition hover:border-indigo-500 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-300"
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
                  className="rounded-full border-2 border-slate-300 object-cover dark:border-slate-700"
                />
              </div>

              <ul
                tabIndex={0}
                className="menu dropdown-content mt-4 w-60 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl dark:border-slate-800 dark:bg-slate-900"
              >
                <li className="mb-2 border-b border-slate-200 pb-2 dark:border-slate-800">
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {user?.displayName}
                  </p>

                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {user?.email}
                  </span>
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
          className="text-slate-700 dark:text-slate-200 lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          <div className="flex flex-col gap-5 px-6 py-6">
            {navLinks}

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center justify-center rounded-xl border border-slate-300 px-4 py-3 text-slate-700 dark:border-slate-700 dark:text-slate-300"
              >
                {theme === "dark" ? (
                  <MdLightMode size={22} />
                ) : (
                  <MdDarkMode size={22} />
                )}
              </button>
            )}

            {!user ? (
              <>
                <Link
                  href="/login"
                  className="rounded-xl border border-slate-300 px-4 py-3 text-center text-slate-700 dark:border-slate-700 dark:text-slate-300"
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
                <Link
                  href="/profile"
                  className="text-slate-700 dark:text-slate-300"
                >
                  Profile Management
                </Link>

                <button onClick={logout} className="text-left text-red-500">
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
