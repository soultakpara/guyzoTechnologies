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
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-slate-200">

      <div className="max-w-6xl mx-auto px-6 py-10">

        <TypingTitle text="Nouvel Enregistrement" />

        <p className="text-gray-600 mt-4 mb-10 text-lg">
          Enregistrez un nouveau client ainsi que son appareil.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-10"
        >

          {/* CLIENT */}

<section className="bg-white/95 backdrop-blur-sm rounded-3xl border border-slate-200 shadow-xl p-8 hover:shadow-2xl transition duration-300">

  <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-blue-600 pl-4 mb-8">
    Informations du client
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="flex flex-col gap-2">

      <label className="text-sm font-semibold text-slate-700">
        Nom
      </label>

      <input
        type="text"
        {...register("nom")}
        placeholder="Entrez le nom"
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          bg-white
          px-4
          py-3
          text-slate-800
          placeholder:text-slate-400
          shadow-sm
          transition-all
          duration-300
          hover:border-slate-700
          hover:shadow-md
          focus:outline-none
          focus:border-blue-600
          focus:ring-4
          focus:ring-blue-200
        "
      />

    </div>

    <div className="flex flex-col gap-2">

      <label className="text-sm font-semibold text-slate-700">
        Prénom
      </label>

      <input
        type="text"
        {...register("prenom")}
        placeholder="Entrez le prénom"
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          bg-white
          px-4
          py-3
          text-slate-800
          placeholder:text-slate-400
          shadow-sm
          transition-all
          duration-300
          hover:border-slate-700
          hover:shadow-md
          focus:outline-none
          focus:border-blue-600
          focus:ring-4
          focus:ring-blue-200
        "
      />

    </div>

    <div className="flex flex-col gap-2">

      <label className="text-sm font-semibold text-slate-700">
        Téléphone
      </label>

      <input
        type="tel"
        {...register("telephone")}
        placeholder="Ex : 01 90 00 00 00"
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          bg-white
          px-4
          py-3
          text-slate-800
          placeholder:text-slate-400
          shadow-sm
          transition-all
          duration-300
          hover:border-slate-700
          hover:shadow-md
          focus:outline-none
          focus:border-blue-600
          focus:ring-4
          focus:ring-blue-200
        "
      />

    </div>

  </div>

</section>

          {/* APPAREIL */}

<section className="bg-white/95 backdrop-blur-sm rounded-3xl border border-slate-200 shadow-xl p-8 hover:shadow-2xl transition duration-300">

  <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-blue-600 pl-4 mb-8">
    Informations sur l'appareil
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    {/* Type */}

    <div className="flex flex-col gap-2">

      <label className="text-sm font-semibold text-slate-700">
        Type d'appareil
      </label>

      <select
        {...register("type")}
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          bg-white
          px-4
          py-3
          text-slate-800
          shadow-sm
          transition-all
          duration-300
          hover:border-slate-700
          hover:shadow-md
          focus:outline-none
          focus:border-blue-600
          focus:ring-4
          focus:ring-blue-200
        "
      >
        <option>Ordinateur</option>
        <option>Android</option>
        <option>iPhone</option>
      </select>

    </div>

    {/* Marque */}

    <div className="flex flex-col gap-2">

      <label className="text-sm font-semibold text-slate-700">
        Marque
      </label>

      <input
        {...register("marque")}
        placeholder="Ex : HP, Dell, Samsung..."
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          bg-white
          px-4
          py-3
          text-slate-800
          placeholder:text-slate-400
          shadow-sm
          transition-all
          duration-300
          hover:border-slate-700
          hover:shadow-md
          focus:outline-none
          focus:border-blue-600
          focus:ring-4
          focus:ring-blue-200
        "
      />

    </div>

    {/* Modèle */}

    <div className="flex flex-col gap-2">

      <label className="text-sm font-semibold text-slate-700">
        Modèle
      </label>

      <input
        {...register("modele")}
        placeholder="Ex : EliteBook 840 G6"
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          bg-white
          px-4
          py-3
          text-slate-800
          placeholder:text-slate-400
          shadow-sm
          transition-all
          duration-300
          hover:border-slate-700
          hover:shadow-md
          focus:outline-none
          focus:border-blue-600
          focus:ring-4
          focus:ring-blue-200
        "
      />

    </div>

    {/* IMEI */}

    <div className="flex flex-col gap-2">

      <label className="text-sm font-semibold text-slate-700">
        Numéro de série / IMEI
      </label>

      <input
        {...register("imei")}
        placeholder="Numéro de série ou IMEI"
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          bg-white
          px-4
          py-3
          text-slate-800
          placeholder:text-slate-400
          shadow-sm
          transition-all
          duration-300
          hover:border-slate-700
          hover:shadow-md
          focus:outline-none
          focus:border-blue-600
          focus:ring-4
          focus:ring-blue-200
        "
      />

    </div>

  </div>

</section>{/* DIAGNOSTIC */}

<section className="bg-white/95 backdrop-blur-sm rounded-3xl border border-slate-200 shadow-xl p-8 hover:shadow-2xl transition duration-300">

  <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-blue-600 pl-4 mb-8">
    Diagnostic de l'appareil
  </h2>

  <div className="space-y-6">

    <div className="flex flex-col gap-2">

      <label className="text-sm font-semibold text-slate-700">
        Description de la panne
      </label>

      <textarea
        {...register("panne")}
        rows={6}
        placeholder="Décrivez précisément la panne rencontrée..."
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          bg-white
          px-4
          py-3
          text-slate-800
          placeholder:text-slate-400
          resize-none
          shadow-sm
          transition-all
          duration-300
          hover:border-slate-700
          hover:shadow-md
          focus:outline-none
          focus:border-blue-600
          focus:ring-4
          focus:ring-blue-200
        "
      />

    </div>

    <div className="flex flex-col gap-2">

      <label className="text-sm font-semibold text-slate-700">
        Accessoires laissés par le client
      </label>

      <textarea
        {...register("accessoires")}
        rows={4}
        placeholder="Chargeur, souris, sacoche, batterie, câble USB..."
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          bg-white
          px-4
          py-3
          text-slate-800
          placeholder:text-slate-400
          resize-none
          shadow-sm
          transition-all
          duration-300
          hover:border-slate-700
          hover:shadow-md
          focus:outline-none
          focus:border-blue-600
          focus:ring-4
          focus:ring-blue-200
        "
      />

    </div>

  </div>

</section>

          {/* BOUTON */}

          <div className="flex justify-center pt-4">

            <button
              type="submit"
              className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-12 py-4 rounded-2xl flex items-center gap-3 font-semibold shadow-xl hover:from-slate-900 hover:to-blue-700 hover:scale-105 transition-all duration-300"
            >

              <Save size={22} />

              Enregistrer l'appareil

            </button>

          </div>

        </form>

      </div>

    </main>
  );
}