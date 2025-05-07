"use client"

import { useState } from "react"
import { CheckCircle, XCircle, Clock, RefreshCw } from "lucide-react"

import { updateStatus } from "@/actions/mutation"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { UserRecords } from "@/app/(protected)/dashboard/admin/applications/columns"

import DetailCard from "./detail-card"
import { FormError } from "./form-error"
import { FormSuccess } from "./form-success"

type ApplicationStatus = "PENDING" | "PROCESSING" | "APPROVED" | "REJECTED"

export function ViewDetails({ record }: { record: UserRecords }) {
  const [status, setStatus] = useState<ApplicationStatus>(record.applicationStatus)
  const [isUpdating, setIsUpdating] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const handleStatusUpdate = async () => {
    setIsUpdating(true)
    setSuccess("")
    setError("")
    const response = await updateStatus(record.id, status)
    if (response?.success) {
      setSuccess(response.success)
    }
    if (response?.error) {
      setError(response.error)
    }
    setIsUpdating(false)
  }

  const getStatusIcon = (statusValue: string) => {
    switch (statusValue) {
      case "APPROVED":
        return <CheckCircle className="h-5 w-5 text-emerald-500" />
      case "REJECTED":
        return <XCircle className="h-5 w-5 text-red-500" />
      case "PROCESSING":
        return <RefreshCw className="h-5 w-5 text-blue-500" />
      default:
        return <Clock className="h-5 w-5 text-amber-500" />
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="w-full px-2 py-1.5 text-left hover:text-emerald-600">
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] min-w-[80vw] md:min-w-[800px] overflow-auto">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl font-bold text-gray-900">Land Application Details</DialogTitle>
          <DialogDescription className="text-gray-600">
            Review the complete application information below.
          </DialogDescription>
        </DialogHeader>

        <DetailCard {...record} />

        <FormSuccess message={success} />
        <FormError message={error} />

        <DialogFooter className="mt-6 pt-4 border-t border-gray-100">
          <div className="flex w-full items-center gap-4">
            <div className="flex-1">
              <p className="mb-2 text-sm font-medium text-gray-700">Update Application Status</p>
              <Select value={status} onValueChange={(value) => setStatus(value as ApplicationStatus)}>
                <SelectTrigger className="border-gray-200 focus:ring-emerald-500 focus:border-emerald-500 rounded-lg">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(status)}
                    <SelectValue placeholder="Select status" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PENDING" className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-amber-500" />
                    <span>Pending</span>
                  </SelectItem>
                  <SelectItem value="PROCESSING" className="flex items-center gap-2">
                    <RefreshCw className="h-4 w-4 text-blue-500" />
                    <span>Processing</span>
                  </SelectItem>
                  <SelectItem value="APPROVED" className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>Approved</span>
                  </SelectItem>
                  <SelectItem value="REJECTED" className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    <span>Rejected</span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              onClick={handleStatusUpdate}
              disabled={isUpdating || status === record.applicationStatus}
              className="self-end bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg"
            >
              {isUpdating ? (
                <span className="flex items-center gap-2">
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  Updating...
                </span>
              ) : (
                "Update Status"
              )}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
