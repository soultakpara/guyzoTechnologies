"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  UserPlus,
  Pencil,
  Trash2,
} from "lucide-react";

import TypingTitle from "@/components/TypingTitle";

const clients = [
  {
    id: 1,
    nom: "Jean Dupont",
    telephone: "97000000",
    appareil: "HP EliteBook",
    dateDepot: "01/07/2026",
    statut: "En cours",
  },
  {
    id: 2,
    nom: "Paul Martin",
    telephone: "96000000",
    appareil: "Samsung A54",
    dateDepot: "28/06/2026",
    statut: "Terminé",
  },
  {
    id: 3,
    nom: "Sophie Bernard",
    telephone: "95000000",
    appareil: "iPhone 13",
    dateDepot: "30/06/2026",
    statut: "En attente",
  },
];

export default function ClientsPage() {
  const [search, setSearch] = useState("");

  const filteredClients = clients.filter((client) =>
    client.nom.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusColor = (statut: string) => {
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

      <TypingTitle text="Gestion des Clients" />

      <div className="flex flex-col md:flex-row gap-4 justify-between mt-8 mb-8">

        <div className="relative w-full md:w-96">

          <Search
            size={18}
            className="absolute left-3 top-4 text-gray-400"
          />

          <input
            type="text"
            placeholder="Rechercher un client..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-xl py-3 pl-10 pr-4"
          />

        </div>

        <Link
          href="/enregistrement"
          className="bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-blue-800 transition"
        >
          <UserPlus size={18} />
          Nouvel Enregistrement
        </Link>

      </div>

      <div className="bg-white rounded-2xl shadow-md overflow-x-auto">

        <table className="w-full">

          <thead className="bg-blue-700 text-white">

            <tr>

              <th className="p-4 text-left">Nom</th>

              <th className="p-4 text-left">Téléphone</th>

              <th className="p-4 text-left">Appareil</th>

              <th className="p-4 text-left">Date Dépôt</th>

              <th className="p-4 text-left">Statut</th>

              <th className="p-4 text-center">Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredClients.map((client) => (

              <tr
                key={client.id}
                className="border-b hover:bg-slate-50"
              >

                <td className="p-4">{client.nom}</td>

                <td className="p-4">{client.telephone}</td>

                <td className="p-4">{client.appareil}</td>

                <td className="p-4">{client.dateDepot}</td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      client.statut
                    )}`}
                  >
                    {client.statut}
                  </span>

                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-3">

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