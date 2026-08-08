"use client";

import Link from "next/link";
import { Cpu, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  {
    name: "Accueil",
    href: "/",
  },
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Enregistrement",
    href: "/enregistrement",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  // La date est initialisée à null pour éviter les erreurs d'hydratation
 

  const [dateTime, setDateTime] = useState<Date | null>(null);

  useEffect(() => {
    const updateDateTime = () => {
      setDateTime(new Date());
    };

    // Évite la mise à jour synchrone dans l'effet
    const initialUpdate = setTimeout(updateDateTime, 0);
    const timer = setInterval(updateDateTime, 1000);

    return () => {
      clearTimeout(initialUpdate);
      clearInterval(timer);
    };
  }, []);



  const pageTitle = () => {
    switch (pathname) {
      case "/":
        return "Accueil";

      case "/dashboard":
        return "Dashboard";

      case "/appareils":
        return "Appareils";

      case "/clients":
        return "Clients";

      case "/notifications":
        return "Notifications";

      case "/reparations":
        return "Réparations";

      case "/enregistrement":
        return "Enregistrement";

      default:
        return "";
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Cpu size={36} className="text-blue-700" />

          <div>
            <h1 className="text-xl font-bold text-blue-700">
              Guyzo Technologie
            </h1>

            <p className="text-sm text-gray-500">{pageTitle()}</p>
          </div>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-medium transition ${
                pathname === item.href
                  ? "text-blue-700"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Date et Heure */}
        <div className="hidden lg:block text-right">
          <p className="text-sm text-gray-500">
            {dateTime?.toLocaleDateString("fr-FR", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>

          <p
            className="text-xl font-bold text-blue-700"
            suppressHydrationWarning
          >
            {dateTime?.toLocaleTimeString("fr-FR")}
          </p>
        </div>

        {/* Menu Mobile */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 hover:bg-blue-50"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}