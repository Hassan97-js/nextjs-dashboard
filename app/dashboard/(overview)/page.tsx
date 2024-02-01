import { Suspense } from "react";
import CardWrapper from "@/app/ui/dashboard/cards";
import RevenuesChart from "@/app/ui/dashboard/revenues-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import {
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton
} from "@/app/ui/skeletons";

import { lusitana } from "@/app/ui/fonts";

const Dashboard = async () => {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenuesChart />
        </Suspense>

        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
};

export default Dashboard;
