"use client";

import Sidebar from "@/components/Sidebar";
import TypingTitle from "@/components/TypingTitle";
import DashboardCard from "@/components/DashboardCard";

import {
  Monitor,
  Users,
  Bell,
  Wrench,
  ClipboardPlus,
} from "lucide-react";

export default function DashboardPage() {
  const today = new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex bg-slate-100 min-h-screen">

      <Sidebar />

      <main className="flex-1 p-6 lg:p-10">

        {/* Titre */}

        <TypingTitle text="Tableau de bord" />

        <p className="text-gray-600 mt-4">

          Bienvenue dans votre espace de gestion.

        </p>

        <p className="text-sm text-gray-500 mt-2">

          📅 {today}

        </p>

        {/* Statistiques */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

          <StatCard
            title="Appareils"
            value="0"
          />

          <StatCard
            title="Clients"
            value="0"
          />

          <StatCard
            title="Réparations"
            value="0"
          />

          <StatCard
            title="Notifications"
            value="0"
          />

        </div>

        {/* Modules */}

        <h2 className="text-2xl font-bold text-gray-800 mt-14 mb-8">

          Modules de gestion

        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          <DashboardCard
            title="Appareils"
            description="Ajouter, modifier ou consulter les appareils."
            href="/appareils"
            icon={Monitor}
          />

          <DashboardCard
            title="Clients"
            description="Consulter la liste des clients."
            href="/clients"
            icon={Users}
          />

          <DashboardCard
            title="Notifications"
            description="Créer un devis ou notifier un client."
            href="/notifications"
            icon={Bell}
          />

          <DashboardCard
            title="Réparations"
            description="Suivre les réparations en cours."
            href="/reparations"
            icon={Wrench}
          />

          <DashboardCard
            title="Enregistrement"
            description="Enregistrer un nouvel appareil."
            href="/enregistrement"
            icon={ClipboardPlus}
          />

        </div>

      </main>

    </div>
  );
}

interface StatCardProps {
  title: string;
  value: string;
}

function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">

      <p className="text-gray-500">

        {title}

      </p>

      <h3 className="text-4xl font-bold text-blue-700 mt-3">

        {value}

      </h3>

    </div>
  );
}