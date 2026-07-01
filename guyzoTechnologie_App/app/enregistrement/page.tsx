"use client";

import { useForm } from "react-hook-form";
import { Save } from "lucide-react";
import TypingTitle from "@/components/TypingTitle";

type FormData = {
  nom: string;
  prenom: string;
  telephone: string;
  type: string;
  marque: string;
  modele: string;
  imei: string;
  panne: string;
  accessoires: string;
  tarif: string;
  depot: string;
  recuperation: string;
};

export default function EnregistrementPage() {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);

    alert("Appareil enregistré avec succès.");

    reset();
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">

      <TypingTitle text="Nouvel Enregistrement" />

      <p className="text-gray-600 mt-3 mb-10">
        Enregistrez un nouveau client et son appareil.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8"
      >

        {/* CLIENT */}

        <section className="bg-white rounded-2xl shadow-md p-8">

          <h2 className="text-2xl font-bold text-blue-700 mb-6">
            Informations du client
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <input
              {...register("nom")}
              placeholder="Nom"
              className="border rounded-xl p-3"
            />

            <input
              {...register("prenom")}
              placeholder="Prénom"
              className="border rounded-xl p-3"
            />

            <input
              {...register("telephone")}
              placeholder="Téléphone"
              className="border rounded-xl p-3"
            />

          </div>

        </section>

        {/* APPAREIL */}

        <section className="bg-white rounded-2xl shadow-md p-8">

          <h2 className="text-2xl font-bold text-blue-700 mb-6">
            Informations sur l'appareil
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <select
              {...register("type")}
              className="border rounded-xl p-3"
            >
              <option>Ordinateur</option>
              <option>Android</option>
              <option>iPhone</option>
            </select>

            <input
              {...register("marque")}
              placeholder="Marque"
              className="border rounded-xl p-3"
            />

            <input
              {...register("modele")}
              placeholder="Modèle"
              className="border rounded-xl p-3"
            />

            <input
              {...register("imei")}
              placeholder="Numéro de série / IMEI"
              className="border rounded-xl p-3"
            />

          </div>

        </section>

        {/* PANNE */}

        <section className="bg-white rounded-2xl shadow-md p-8">

          <h2 className="text-2xl font-bold text-blue-700 mb-6">
            Diagnostic
          </h2>

          <textarea
            {...register("panne")}
            rows={5}
            placeholder="Décrivez le problème..."
            className="border rounded-xl p-3 w-full"
          />

          <textarea
            {...register("accessoires")}
            rows={3}
            placeholder="Chargeur, Sac, Souris..."
            className="border rounded-xl p-3 w-full mt-5"
          />

        </section>

     

        <button
          className="bg-blue-700 text-white px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-blue-800 transition"
        >

          <Save size={20} />

          Enregistrer

        </button>

      </form>

    </main>
  );
}