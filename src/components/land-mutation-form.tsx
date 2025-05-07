"use client"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon, LoaderCircle, User, MapPin, Home, FileText, UploadCloud } from "lucide-react"
import { useForm } from "react-hook-form"
import type { z } from "zod"

import { mutation } from "@/actions/mutation"
import { mutationSchema } from "@/schemas/mutation"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

import { Label } from "@/components/ui/label"


type MutationFormValues = z.infer<typeof mutationSchema>

export function LandMutationForm() {
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const [files, setFiles] = useState<FileList | null>(null)

  const form = useForm<MutationFormValues>({
    resolver: zodResolver(mutationSchema),
    defaultValues: {
      applicantName: "",
      applicantEmail: "",
      applicantPhoneNo: "",
      applicantCitizenshipNo: "",
      landDistrict: "",
      landCity: "",
      landWardNumber: "",
      landParcelNumber: "",
      landType: "Residential",
      ownershipType: "Purchased",
      previousOwnerName: "",
      reasonForMutation: "",
      dateOfTransfer: new Date(),
    },
  })

  const { isSubmitting } = form.formState

  async function onSubmit(values: MutationFormValues) {
    setSuccess("")
    setError("")
    const response = await mutation(values)
    if (response?.success) setSuccess(response.success)
    if (response?.error) setError(response.error)
    form.reset()
    setFiles(null)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-8 max-w-5xl mx-auto p-6">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-emerald-700 tracking-tight">Land Mutation Application</h2>
          <p className="text-gray-500">Complete the form below to submit your mutation request.</p>
        </div>

        {/* Grid Layout: Personal + Land Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="bg-emerald-50 px-6 py-4 font-semibold text-gray-900 flex items-center gap-2">
              <User className="text-emerald-600 h-5 w-5" /> Personal Information
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <FormField control={form.control} name="applicantName" render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="applicantEmail" render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl><Input type="email" placeholder="email@example.com" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="applicantPhoneNo" render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number *</FormLabel>
                  <FormControl><Input placeholder="+977 98xxxxxxxx" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="applicantCitizenshipNo" render={({ field }) => (
                <FormItem>
                  <FormLabel>Citizenship No. *</FormLabel>
                  <FormControl><Input placeholder="Enter your citizenship number" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </CardContent>
          </Card>

          {/* Land Details */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="bg-emerald-50 px-6 py-4 font-semibold text-gray-900 flex items-center gap-2">
              <MapPin className="text-emerald-600 h-5 w-5" /> Land Information
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <FormField control={form.control} name="landDistrict" render={({ field }) => (
                <FormItem>
                  <FormLabel>District *</FormLabel>
                  <FormControl><Input placeholder="District Name" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="landCity" render={({ field }) => (
                <FormItem>
                  <FormLabel>City/Municipality *</FormLabel>
                  <FormControl><Input placeholder="City Name" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="landWardNumber" render={({ field }) => (
                <FormItem>
                  <FormLabel>Ward Number *</FormLabel>
                  <FormControl><Input placeholder="Ward No." {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="landParcelNumber" render={({ field }) => (
                <FormItem>
                  <FormLabel>Parcel Number *</FormLabel>
                  <FormControl><Input placeholder="Parcel No." {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="landType" render={({ field }) => (
                <FormItem>
                  <FormLabel>Land Type *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger><SelectValue placeholder="Select Type" /></SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Residential">Residential</SelectItem>
                      <SelectItem value="Agricultural">Agricultural</SelectItem>
                      <SelectItem value="Commercial">Commercial</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />
            </CardContent>
          </Card>
        </div>

        {/* Ownership Section + File Upload */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-0 shadow-sm md:col-span-2">
            <CardHeader className="bg-emerald-50 px-6 py-4 font-semibold text-gray-900 flex items-center gap-2">
              <Home className="text-emerald-600 h-5 w-5" /> Ownership Information
            </CardHeader>
            <CardContent className="p-6 space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField control={form.control} name="ownershipType" render={({ field }) => (
                <FormItem>
                  <FormLabel>Ownership Type *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger><SelectValue placeholder="Select Type" /></SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Inherited">Inherited</SelectItem>
                      <SelectItem value="Purchased">Purchased</SelectItem>
                      <SelectItem value="Gifted">Gifted</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="previousOwnerName" render={({ field }) => (
                <FormItem>
                  <FormLabel>Previous Owner *</FormLabel>
                  <FormControl><Input placeholder="Previous owner's name" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="dateOfTransfer" render={({ field }) => (
                <FormItem className="col-span-1 md:col-span-2">
                  <FormLabel>Date of Transfer *</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button variant="outline" className="w-full text-left">
                          <CalendarIcon className="mr-2 h-4 w-4 text-gray-400" />
                          {field.value ? format(new Date(field.value), "PPP") : "Select date"}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={field.value ? new Date(field.value) : undefined}
                        onSelect={(date) => date && field.onChange(format(date, "yyyy-MM-dd"))}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="reasonForMutation" render={({ field }) => (
                <FormItem className="col-span-1 md:col-span-2">
                  <FormLabel>Reason for Mutation *</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe the reason" className="min-h-[120px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </CardContent>
          </Card>

          {/* File Upload Section */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="bg-emerald-50 px-6 py-4 font-semibold text-gray-900 flex items-center gap-2">
              <UploadCloud className="text-emerald-600 h-5 w-5" /> Upload Documents
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="file-upload">Supporting Documents</Label>
                <Input
                  id="file-upload"
                  type="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />
                {files && files.length > 0 && (
                  <ul className="text-sm text-gray-700 list-disc list-inside">
                    {[...files].map((file, idx) => (
                      <li key={idx}>{file.name}</li>
                    ))}
                  </ul>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Submit Section */}
        {/* <div className="flex flex-col items-center gap-4 border-t pt-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center justify-center gap-2">
              <FileText className="text-emerald-600 h-5 w-5" /> Submit Application
            </h3>
            <p className="text-gray-500">Review all information before submission.</p>
          </div>
          <div className="flex gap-4">
            <Button type="button" variant="outline" onClick={() => { form.reset(); setFiles(null); }} disabled={isSubmitting}>
              Reset Form
            </Button>
            <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <LoaderCircle className="animate-spin h-4 w-4" /> Processing...
                </span>
              ) : (
                "Submit Application"
              )}
            </Button>
          </div>
        </div> */}
        <div className="flex flex-col items-center gap-4 border-t pt-6">
  <div className="text-center">
    <h3 className="text-lg font-semibold text-gray-900 flex items-center justify-center gap-2">
      <FileText className="text-emerald-600 h-5 w-5" /> Submit Application
    </h3>
    <p className="text-gray-500">Review all information before submission.</p>
    <p className="text-red-500">Note*: Make sure to bring all the orginal documents which you uplaod here.</p>
  </div>

  {/* Show success or error message */} 
  {success && (
    <div className="text-green-600 bg-green-100 border border-green-200 px-4 py-2 rounded-lg text-sm">
      {success}
    </div>
  )}
  {error && (
    <div className="text-red-600 bg-red-100 border border-red-200 px-4 py-2 rounded-lg text-sm">
      {error}
    </div>
  )}

  <div className="flex gap-4">
    <Button type="button" variant="outline" onClick={() => { form.reset(); setFiles(null); }} disabled={isSubmitting}>
      Reset Form
    </Button>
    <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white" disabled={isSubmitting}>
      {isSubmitting ? (
        <span className="flex items-center gap-2">
          <LoaderCircle className="animate-spin h-4 w-4" /> Processing...
        </span>
      ) : (
        "Submit Application"
      )}
    </Button>
  </div>
</div>
      </form>
    </Form>
  )
}