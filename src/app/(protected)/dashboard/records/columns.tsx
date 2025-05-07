"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type UserRecords = {
  landParcelNumber: string
  landType: "Residential" | "Agricultural" | "Commercial" | "Other"
  ownershipType: "Inherited" | "Purchased" | "Gifted" | "Other"
  applicantName: string
  previousOwnerName: string
  applicationStatus: "PENDING" | "PROCESSING" | "APPROVED" | "REJECTED"
}

export const columns: ColumnDef<UserRecords>[] = [
  {
    accessorKey: "landParcelNumber",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-emerald-700 hover:text-emerald-900"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <span className="font-semibold">Parcel No.</span>
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="text-gray-900">{row.getValue("landParcelNumber")}</div>,
  },
  {
    accessorKey: "landType",
    header: () => <span className="text-emerald-800 font-medium">Land Type</span>,
    cell: ({ row }) => <div className="text-gray-700">{row.getValue("landType")}</div>,
  },
  {
    accessorKey: "ownershipType",
    header: () => <span className="text-emerald-800 font-medium">Ownership</span>,
    cell: ({ row }) => <div className="text-gray-700">{row.getValue("ownershipType")}</div>,
  },
  {
    accessorKey: "applicantName",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-emerald-700 hover:text-emerald-900"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <span className="font-semibold">Current Owner</span>
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="text-gray-900 font-medium">{row.getValue("applicantName")}</div>,
  },
  {
    accessorKey: "previousOwnerName",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="text-emerald-700 hover:text-emerald-900"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <span className="font-semibold">Previous Owner</span>
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="text-gray-700">{row.getValue("previousOwnerName")}</div>,
  },
  {
    accessorKey: "applicationStatus",
    header: () => <span className="text-emerald-800 font-medium">Status</span>,
    cell: ({ row }) => {
      const status = row.getValue("applicationStatus") as string
      const colorMap: Record<string, string> = {
        PENDING: "bg-yellow-100 text-yellow-800",
        PROCESSING: "bg-blue-100 text-blue-800",
        APPROVED: "bg-emerald-100 text-emerald-800",
        REJECTED: "bg-red-100 text-red-800",
      }
      return (
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${colorMap[status]}`}>{status}</span>
      )
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0 text-emerald-700 hover:text-emerald-900">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel className="text-emerald-700">Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="hover:bg-emerald-100">View Details</DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-emerald-100">Update</DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-emerald-100 text-red-600">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
]
