/** @format */

import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

import { motion as m } from "framer-motion";

function Nav() {
  const { setPopup, currentPage } = useContext(AppContext);

  return (
    <nav className="flex max-w- justify-between items-center py-8">
      <Link href="/">
        <m.button
          initial={{ gap: "10px" }}
          animate={{ gap: 0 }}
          transition={{ duration: 0.4, ease: "easeIn" }}
          className="text-xl font-semibold flex space-x-3"
        >
          Dev
          <m.span className="">Task</m.span>
        </m.button>
      </Link>

      <ul className="flex items-center gap-10">
        {currentPage === "/" ? (
          <Link href="/auth/signup" legacyBehavior>
            <a className="py-2 px-4 text-sm bg-cyan-500 text-white rounded-lg font-medium ml-8">
              Join Now
            </a>
          </Link>
        ) : (
          ""
        )}

        {currentPage === "dashboard" ? (
          <li className="flex items-center gap-6">
            <button
              onClick={() => setPopup(true)}
              className="font-medium bg-cyan-500 text-white py-2 px-4 rounded-md"
            >
              Add Project
            </button>
          </li>
        ) : (
          ""
        )}

        {currentPage === "project_type" ? (
          <li className="flex items-center gap-6">
            <button
              onClick={() => setPopup(true)}
              className="font-medium bg-cyan-500 text-white py-2 px-4 rounded-md"
            >
              Add Type
            </button>
          </li>
        ) : (
          ""
        )}

        {currentPage === "task" ? (
          <li className="flex items-center gap-6">
            <button
              onClick={() => setPopup(true)}
              className="font-medium bg-cyan-500 text-white py-2 px-4 rounded-md"
            >
              Add Task
            </button>
          </li>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
}

export default Nav;
