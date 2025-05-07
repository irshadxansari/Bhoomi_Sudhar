import { getUserRecords } from "@/data/mutation"

import { columns } from "./columns"
import { DataTable } from "./data-table"

export default async function RecordsPage() {
  const data = await getUserRecords()
  return (
    // <div className="mx-auto px-10 py-5">
    //   <h1 className="mb-6 text-3xl font-bold tracking-tight">Mutation Records</h1>
    //   <DataTable columns={columns} data={data} />
    // </div>
    <div className="mx-auto max-w-7xl px-6 py-8">
  {/* Header Section */}
  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
    <h1 className="text-3xl font-bold text-emerald-700 tracking-tight">
      Mutation Records
    </h1>

  </div>

  {/* Data Table */}
  <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
    <DataTable columns={columns} data={data} />
  </div>
</div>

  )
}
