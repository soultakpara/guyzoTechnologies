"use client";

import { useState } from "react";
import {
  Search,
  Bell,
  CheckCircle,
  Clock3,
} from "lucide-react";

import TypingTitle from "@/components/TypingTitle";

const notifications = [
  {
    id: 1,
    client: "Jean Dupont",
    appareil: "HP EliteBook",
    probleme: "Écran noir",
    pieces: "Écran LCD",
    tarif: "45 000 FCFA",
    statut: "En attente",
  },
  {
    id: 2,
    client: "Paul Martin",
    appareil: "Samsung A54",
    probleme: "Batterie défectueuse",
    pieces: "Batterie",
    tarif: "18 000 FCFA",
    statut: "Envoyée",
  },
  {
    id: 3,
    client: "Sophie Bernard",
    appareil: "iPhone 13",
    probleme: "Face ID HS",
    pieces: "Module Face ID",
    tarif: "70 000 FCFA",
    statut: "En attente",
  },
];

export default function NotificationsPage() {

  const [search, setSearch] = useState("");

  const resultats = notifications.filter((item) =>
    item.client.toLowerCase().includes(search.toLowerCase()) ||
    item.appareil.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">

      <TypingTitle text="Notifications" />

      <p className="text-gray-600 mt-2 mb-8">
        Consultez les notifications concernant les réparations.
      </p>

      <div className="relative max-w-md mb-8">

        <Search
          className="absolute left-3 top-4 text-gray-400"
          size={18}
        />

        <input
          type="text"
          placeholder="Rechercher..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-xl py-3 pl-10 pr-4"
        />

      </div>

      <div className="space-y-6">

        {resultats.map((item) => (

          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-blue-600"
          >

            <div className="flex justify-between items-center flex-wrap gap-4">

              <div>

                <h2 className="text-xl font-bold text-blue-700">

                  {item.client}

                </h2>

                <p className="text-gray-600">

                  {item.appareil}

                </p>

              </div>

              <div>

                {item.statut === "Envoyée" ? (

                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full flex items-center gap-2">

                    <CheckCircle size={18} />

                    Envoyée

                  </span>

                ) : (

                  <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full flex items-center gap-2">

                    <Clock3 size={18} />

                    En attente

                  </span>

                )}

              </div>

            </div>

            <hr className="my-5" />

            <div className="grid md:grid-cols-3 gap-5">

              <div>

                <p className="text-gray-500">
                  Problème
                </p>

                <h3 className="font-semibold">
                  {item.probleme}
                </h3>

              </div>

              <div>

                <p className="text-gray-500">
                  Pièces
                </p>

                <h3 className="font-semibold">
                  {item.pieces}
                </h3>

              </div>

              <div>

                <p className="text-gray-500">
                  Tarif estimé
                </p>

                <h3 className="font-semibold text-blue-700">
                  {item.tarif}
                </h3>

              </div>

            </div>

            <button className="mt-6 bg-blue-700 text-white px-5 py-3 rounded-xl hover:bg-blue-800 transition flex items-center gap-2">

              <Bell size={18} />

              Préparer la notification

            </button>

          </div>

        ))}

      </div>

    </main>
  );
}