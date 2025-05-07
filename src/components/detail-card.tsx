"use client"

import { ClipboardCheck, Home, User, Calendar, MapPin, Phone, Mail, CreditCard } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface DetailCardProps {
  id: string
  applicantName: string
  applicantEmail: string
  applicantPhoneNo: string
  applicantCitizenshipNo: string
  landDistrict: string
  landCity: string
  landWardNumber: string
  landParcelNumber: string
  landType: string
  ownershipType: string
  previousOwnerName: string
  reasonForMutation: string
  dateOfTransfer: string
  applicationStatus: string
  appliedBy: string
  createdAt: string
}

export default function DetailCard({
  id,
  applicantName,
  applicantEmail,
  applicantPhoneNo,
  applicantCitizenshipNo,
  landDistrict,
  landCity,
  landWardNumber,
  landParcelNumber,
  landType,
  ownershipType,
  previousOwnerName,
  reasonForMutation,
  dateOfTransfer,
  applicationStatus,
  appliedBy,
  createdAt,
}: DetailCardProps) {
  // Format dates to be more readable
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  // Get status color based on application status
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "approved":
        return "bg-emerald-500"
      case "rejected":
        return "bg-red-500"
      case "pending":
        return "bg-amber-500"
      case "processing":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card className="mx-auto w-full border-0 shadow-md overflow-hidden">
      <CardHeader className="pb-2 bg-emerald-50 border-b border-emerald-100">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl text-gray-900">Land Application</CardTitle>
            <CardDescription className="text-gray-600">Application ID: {id}</CardDescription>
          </div>
          <Badge className={`${getStatusColor(applicationStatus)} text-white px-3 py-1 rounded-full`}>
            {applicationStatus}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-8 p-6">
        {/* Applicant Information */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-100 p-1.5 rounded-lg">
              <User className="text-emerald-600 h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Applicant Information</h3>
          </div>
          <Separator className="bg-gray-100" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <User className="text-gray-400 h-5 w-5 mt-0.5" />
              <div>
                <p className="text-gray-500 text-sm">Name</p>
                <p className="font-medium text-gray-900">{applicantName}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="text-gray-400 h-5 w-5 mt-0.5" />
              <div>
                <p className="text-gray-500 text-sm">Email</p>
                <p className="font-medium text-gray-900">{applicantEmail}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="text-gray-400 h-5 w-5 mt-0.5" />
              <div>
                <p className="text-gray-500 text-sm">Phone Number</p>
                <p className="font-medium text-gray-900">{applicantPhoneNo}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CreditCard className="text-gray-400 h-5 w-5 mt-0.5" />
              <div>
                <p className="text-gray-500 text-sm">Citizenship Number</p>
                <p className="font-medium text-gray-900">{applicantCitizenshipNo}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Land Information */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-100 p-1.5 rounded-lg">
              <MapPin className="text-emerald-600 h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Land Information</h3>
          </div>
          <Separator className="bg-gray-100" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <MapPin className="text-gray-400 h-5 w-5 mt-0.5" />
              <div>
                <p className="text-gray-500 text-sm">District</p>
                <p className="font-medium text-gray-900">{landDistrict}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="text-gray-400 h-5 w-5 mt-0.5" />
              <div>
                <p className="text-gray-500 text-sm">City</p>
                <p className="font-medium text-gray-900">{landCity}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="text-gray-400 h-5 w-5 mt-0.5" />
              <div>
                <p className="text-gray-500 text-sm">Ward Number</p>
                <p className="font-medium text-gray-900">{landWardNumber}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="text-gray-400 h-5 w-5 mt-0.5" />
              <div>
                <p className="text-gray-500 text-sm">Parcel Number</p>
                <p className="font-medium text-gray-900">{landParcelNumber}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Home className="text-gray-400 h-5 w-5 mt-0.5" />
              <div>
                <p className="text-gray-500 text-sm">Land Type</p>
                <p className="font-medium text-gray-900">{landType}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Home className="text-gray-400 h-5 w-5 mt-0.5" />
              <div>
                <p className="text-gray-500 text-sm">Ownership Type</p>
                <p className="font-medium text-gray-900">{ownershipType}</p>
              </div>
            </div>
            <div className="md:col-span-2 flex items-start gap-3">
              <User className="text-gray-400 h-5 w-5 mt-0.5" />
              <div>
                <p className="text-gray-500 text-sm">Previous Owner</p>
                <p className="font-medium text-gray-900">{previousOwnerName}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Application Details */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-100 p-1.5 rounded-lg">
              <ClipboardCheck className="text-emerald-600 h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Application Details</h3>
          </div>
          <Separator className="bg-gray-100" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <Calendar className="text-gray-400 h-5 w-5 mt-0.5" />
              <div>
                <p className="text-gray-500 text-sm">Date of Transfer</p>
                <p className="font-medium text-gray-900">{formatDate(dateOfTransfer)}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="text-gray-400 h-5 w-5 mt-0.5" />
              <div>
                <p className="text-gray-500 text-sm">Application Date</p>
                <p className="font-medium text-gray-900">{formatDate(createdAt)}</p>
              </div>
            </div>
            <div className="md:col-span-2 flex items-start gap-3">
              <ClipboardCheck className="text-gray-400 h-5 w-5 mt-0.5" />
              <div>
                <p className="text-gray-500 text-sm">Reason for Mutation</p>
                <p className="font-medium text-gray-900">{reasonForMutation}</p>
              </div>
            </div>
            <div className="md:col-span-2 flex items-start gap-3">
              <User className="text-gray-400 h-5 w-5 mt-0.5" />
              <div>
                <p className="text-gray-500 text-sm">Applied By</p>
                <p className="font-medium text-gray-900">{appliedBy}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
