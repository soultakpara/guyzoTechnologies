import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export default function DashboardCard({
  title,
  description,
  href,
  icon: Icon,
}: DashboardCardProps) {
  return (
    <Link href={href}>
      <div className="group bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 h-56 flex flex-col justify-between hover:border-blue-600 hover:-translate-y-2">

        <div>
          <Icon
            size={48}
            className="text-blue-600 group-hover:scale-110 transition"
          />
        </div>

        <div>

          <h2 className="text-2xl font-bold text-gray-800">

            {title}

          </h2>

          <p className="text-gray-500 mt-2">

            {description}

          </p>

        </div>

      </div>
    </Link>
  );
}