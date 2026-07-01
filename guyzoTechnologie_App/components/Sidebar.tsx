"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Monitor,
  Users,
  Bell,
  Wrench,
  ClipboardPlus,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Appareils",
    href: "/appareils",
    icon: Monitor,
  },
  {
    title: "Clients",
    href: "/clients",
    icon: Users,
  },
  {
    title: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
  {
    title: "Réparations",
    href: "/reparations",
    icon: Wrench,
  },
  {
    title: "Enregistrement",
    href: "/enregistrement",
    icon: ClipboardPlus,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex w-72 min-h-screen bg-slate-900 text-white flex-col">

      <div className="p-8 border-b border-slate-700">

        <h2 className="text-2xl font-bold text-blue-400">

          Guyzo

        </h2>

        <p className="text-gray-400">

          Technologie

        </p>

      </div>

      <nav className="flex-1 mt-8">

        {menus.map(({ title, href, icon: Icon }) => (

          <Link
            key={href}
            href={href}
            className={`flex items-center gap-4 px-8 py-4 transition ${
              pathname === href
                ? "bg-blue-600"
                : "hover:bg-slate-800"
            }`}
          >
            <Icon size={22} />

            {title}

          </Link>

        ))}

      </nav>

    </aside>
  );
}