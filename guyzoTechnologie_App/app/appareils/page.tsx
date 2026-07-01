"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  PlusCircle,
  Pencil,
  Trash2,
  Laptop,
  Smartphone,
} from "lucide-react";

import TypingTitle from "@/components/TypingTitle";

const appareils = [
  {
    id: 1,
    type: "Ordinateur",
    marque: "HP",
    modele: "EliteBook 840 G5",
    client: "Jean Dupont",
    statut: "En cours",
  },
  {
    id: 2,
    type: "Android",
    marque: "Samsung",
    modele: "Galaxy A54",
    client: "Paul Martin",
    statut: "Terminé",
  },
  {
    id: 3,
    type: "iPhone",
    marque: "Apple",
    modele: "iPhone 13",
    client: "Sophie Bernard",
    statut: "En attente",
  },
];

export default function AppareilsPage() {

  const [search, setSearch] = useState("");

  const filteredAppareils = appareils.filter((appareil) =>
    appareil.marque.toLowerCase().includes(search.toLowerCase()) ||
    appareil.modele.toLowerCase().includes(search.toLowerCase()) ||
    appareil.client.toLowerCase().includes(search.toLowerCase())
  );

  const badge = (statut: string) => {
    switch (statut) {
      case "Terminé":
        return "bg-green-100 text-green-700";

      case "En cours":
        return "bg-yellow-100 text-yellow-700";

      default:
        return "bg-red-100 text-red-700";
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">

      <TypingTitle text="Gestion des Appareils" />

      <div className="flex flex-col md:flex-row justify-between gap-5 mt-8 mb-8">

        <div className="relative w-full md:w-96">

          <Search
            size={18}
            className="absolute left-3 top-4 text-gray-400"
          />

          <input
            type="text"
            placeholder="Rechercher..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        <Link
          href="/enregistrement"
          className="bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-blue-800 transition"
        >
          <PlusCircle size={20} />
          Nouvel Enregistrement
        </Link>

      </div>

      <div className="bg-white rounded-2xl shadow-md overflow-x-auto">

        <table className="w-full">

          <thead className="bg-blue-700 text-white">

            <tr>

              <th className="p-4 text-left">Type</th>

              <th className="p-4 text-left">Marque</th>

              <th className="p-4 text-left">Modèle</th>

              <th className="p-4 text-left">Client</th>

              <th className="p-4 text-left">Statut</th>

              <th className="p-4 text-center">Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredAppareils.map((item) => (

              <tr
                key={item.id}
                className="border-b hover:bg-slate-50 transition"
              >

                <td className="p-4 flex items-center gap-2">

                  {item.type === "Ordinateur" ? (
                    <Laptop
                      size={18}
                      className="text-blue-600"
                    />
                  ) : (
                    <Smartphone
                      size={18}
                      className="text-green-600"
                    />
                  )}

                  {item.type}

                </td>

                <td className="p-4">
                  {item.marque}
                </td>

                <td className="p-4">
                  {item.modele}
                </td>

                <td className="p-4">
                  {item.client}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${badge(
                      item.statut
                    )}`}
                  >
                    {item.statut}
                  </span>

                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-4">

                    <button className="text-blue-600 hover:text-blue-800">

                      <Pencil size={18} />

                    </button>

                    <button className="text-red-600 hover:text-red-800">

                      <Trash2 size={18} />

                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}