"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  CalendarDays,
  Search,
  Wrench,
  CheckCircle,
  Clock3,
} from "lucide-react";

import TypingTitle from "@/components/TypingTitle";
import toast from "react-hot-toast";

type Reparation = {
  id: number;
  client: string;
  appareil: string;
  panne: string;
  depot: string;
  statut: string;
};

const reparations: Reparation[] = [
  {
    id: 1,
    client: "Jean Dupont",
    appareil: "HP EliteBook",
    panne: "Écran noir",
    depot: "01/07/2026",
    statut: "En cours",
  },
  {
    id: 2,
    client: "Paul Martin",
    appareil: "Samsung A54",
    panne: "Batterie",
    depot: "28/06/2026",
    statut: "Diagnostic",
  },
  {
    id: 3,
    client: "Sophie Bernard",
    appareil: "iPhone 13",
    panne: "Face ID",
    depot: "30/06/2026",
    statut: "Terminé",
  },
];

export default function ReparationsPage() {
  const [search, setSearch] = useState("");

  const [selectedRepair, setSelectedRepair] =
    useState<Reparation | null>(null);

  const [dateRecuperation, setDateRecuperation] =
    useState<Date | null>(new Date());

  const filtered = reparations.filter(
    (item) =>
      item.client.toLowerCase().includes(search.toLowerCase()) ||
      item.appareil.toLowerCase().includes(search.toLowerCase())
  );

  function enregistrerDate() {
    toast.success("Date enregistrée avec succès.");

    console.log({
      client: selectedRepair?.client,
      dateRecuperation,
    });

    //  remplace ceci par l'appel API soulé

    setSelectedRepair(null);
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">

      <TypingTitle text="Gestion des Réparations" />

      <p className="text-gray-600 mt-3">
        Programmez la récupération des appareils.
      </p>

      <div className="relative mt-8 max-w-md">

        <Search
          className="absolute left-3 top-4 text-gray-400"
          size={18}
        />

        <input
          placeholder="Rechercher..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-xl py-3 pl-10"
        />

      </div>

      <div className="grid gap-6 mt-10">

        {filtered.map((item) => (

          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg p-6"
          >

            <div className="flex justify-between flex-wrap gap-5">

              <div>

                <h2 className="text-2xl font-bold text-blue-700">

                  {item.client}

                </h2>

                <p className="text-gray-600 mt-1">
                  {item.appareil}
                </p>

              </div>

              <div>

                {item.statut === "Terminé" ? (

                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full flex items-center gap-2">

                    <CheckCircle size={18} />

                    Terminé

                  </span>

                ) : (

                  <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full flex items-center gap-2">

                    <Clock3 size={18} />

                    {item.statut}

                  </span>

                )}

              </div>

            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">

              <div>

                <p className="text-gray-500">
                  Panne
                </p>

                <h3 className="font-semibold">
                  {item.panne}
                </h3>

              </div>

              <div>

                <p className="text-gray-500">
                  Date dépôt
                </p>

                <h3 className="font-semibold">
                  {item.depot}
                </h3>

              </div>

              <div>

                <p className="text-gray-500">
                  Action
                </p>

                <button
                  onClick={() => setSelectedRepair(item)}
                  className="mt-2 bg-blue-700 text-white px-5 py-3 rounded-xl hover:bg-blue-800 transition flex items-center gap-2"
                >
                  <CalendarDays size={18} />

                  Programmer la récupération
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Modal */}

      {selectedRepair && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl p-8 w-[500px]">

            <h2 className="text-2xl font-bold text-blue-700 mb-6">

              Date de récupération

            </h2>

            <p className="mb-5">

              Client :
              <strong> {selectedRepair.client}</strong>

            </p>

           <DatePicker
  selected={dateRecuperation}
  onChange={(date: Date | null) => setDateRecuperation(date)}
  dateFormat="dd/MM/yyyy"
  className="border rounded-xl p-3 w-full"
/>
            <div className="bg-slate-100 rounded-xl p-4 mt-6">

              <h3 className="font-semibold">

                Aperçu du message

              </h3>

              <p className="mt-3 text-gray-700">

                Bonjour <b>{selectedRepair.client}</b>,

                votre appareil

                <b> {selectedRepair.appareil}</b>

                est prêt.

                Merci de venir le récupérer à la date programmée.

              </p>

            </div>

            <div className="flex justify-end gap-4 mt-8">

              <button
                onClick={() => setSelectedRepair(null)}
                className="px-5 py-3 rounded-xl bg-gray-200"
              >
                Annuler
              </button>

              <button
                onClick={enregistrerDate}
                className="px-5 py-3 rounded-xl bg-blue-700 text-white"
              >
                Enregistrer
              </button>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}