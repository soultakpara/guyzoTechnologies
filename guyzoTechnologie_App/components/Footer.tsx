import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-8">

          <div>

            <Link href="/">

              <h2 className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition">

                Guyzo Technologie

              </h2>

            </Link>

            <p className="mt-3 text-gray-300">

              Plateforme interne de gestion des réparations
              d'ordinateurs et smartphones.

            </p>

          </div>

          <div>

            <h3 className="font-semibold mb-4">

              Navigation

            </h3>

            <ul className="space-y-3">

              <li>

                <Link href="/">

                  Accueil

                </Link>

              </li>

              <li>

                <Link href="/dashboard">

                  Dashboard

                </Link>

              </li>

              <li>

                <Link href="/enregistrement">

                  Enregistrement

                </Link>

              </li>

            </ul>

          </div>

          <div>

            <h3 className="font-semibold mb-4">

              À propos

            </h3>

            <p className="text-gray-300">

              Logiciel de gestion destiné exclusivement au propriétaire
              de Guyzo Technologie.

            </p>

          </div>

        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-gray-400">

          © 2026 Guyzo Technologie. Tous droits réservés.

        </div>

      </div>

    </footer>
  );
}