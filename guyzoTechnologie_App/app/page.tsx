"use client";

import Link from "next/link";
import {
  ArrowRight,
  Monitor,
  Users,
  Bell,
  Wrench,
} from "lucide-react";

import TypingTitle from "@/components/TypingTitle";
import DashboardCard from "@/components/DashboardCard";

export default function Home() {
  return (
    <main className="bg-slate-50 min-h-screen">

      <section className="max-w-7xl mx-auto px-6 py-24">

        <TypingTitle text="Bienvenue sur Guyzo Technologie" />

        <p className="mt-8 text-lg text-gray-600 max-w-3xl leading-8">

          Cette application est dédiée exclusivement à la gestion interne
          de Guyzo Technologie.

          Elle permet de suivre les clients,
          les appareils, les réparations
          ainsi que les notifications.

        </p>

        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-xl mt-10 hover:bg-blue-800 transition"
        >

          Accéder au Dashboard

          <ArrowRight />

        </Link>

      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          <DashboardCard
            title="Appareils"
            description="Gestion des ordinateurs et smartphones."
            href="/appareils"
            icon={Monitor}
          />

          <DashboardCard
            title="Clients"
            description="Liste complète des clients."
            href="/clients"
            icon={Users}
          />

          <DashboardCard
            title="Notifications"
            description="Suivi des devis et informations."
            href="/notifications"
            icon={Bell}
          />

          <DashboardCard
            title="Réparations"
            description="Suivi des réparations."
            href="/reparations"
            icon={Wrench}
          />

        </div>

      </section>

    </main>
  );
}