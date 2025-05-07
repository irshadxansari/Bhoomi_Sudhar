import Link from "next/link"
import { FileText, MapPin, Clock, CheckCircle, BarChart3, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to your property management dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <Card className="border-0 shadow-md overflow-hidden">
          <div className="h-2 bg-emerald-500 w-full"></div>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-gray-700">Total Applications</CardTitle>
            <CardDescription>Your submitted applications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-gray-900">12</div>
              <div className="bg-emerald-100 p-3 rounded-full">
                <FileText className="h-6 w-6 text-emerald-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md overflow-hidden">
          <div className="h-2 bg-amber-500 w-full"></div>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-gray-700">Pending Applications</CardTitle>
            <CardDescription>Awaiting approval</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-gray-900">3</div>
              <div className="bg-amber-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md overflow-hidden">
          <div className="h-2 bg-blue-500 w-full"></div>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-gray-700">Properties Owned</CardTitle>
            <CardDescription>Your registered properties</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-gray-900">5</div>
              <div className="bg-blue-100 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-md h-full">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900">Recent Applications</CardTitle>
              <CardDescription>Your most recent property applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-emerald-100 p-2 rounded-full">
                        <FileText className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Land Parcel #{item}23456</h4>
                        <p className="text-sm text-gray-500">Submitted on April {item + 10}, 2023</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
                        Pending
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                      >
                        View
                      </Button>
                    </div>
                  </div>
                ))}

                <div className="text-center pt-4">
                  <Link href="/dashboard/records">
                    <Button variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                      View All Applications
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="border-0 shadow-md h-full">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900">Quick Actions</CardTitle>
              <CardDescription>Common tasks you can perform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Link href="/dashboard/mutation">
                  <Button className="w-full justify-start bg-emerald-600 hover:bg-emerald-700 text-white">
                    <FileText className="mr-2 h-4 w-4" />
                    Apply for Mutation
                  </Button>
                </Link>

                <Link href="/dashboard/records">
                  <Button variant="outline" className="w-full justify-start border-gray-200 hover:bg-gray-50">
                    <BarChart3 className="mr-2 h-4 w-4 text-gray-500" />
                    View Your Records
                  </Button>
                </Link>

                <Link href="#">
                  <Button variant="outline" className="w-full justify-start border-gray-200 hover:bg-gray-50">
                    <CheckCircle className="mr-2 h-4 w-4 text-gray-500" />
                    Verify Documents
                  </Button>
                </Link>

                <Link href="#">
                  <Button variant="outline" className="w-full justify-start border-gray-200 hover:bg-gray-50">
                    <Users className="mr-2 h-4 w-4 text-gray-500" />
                    Contact Support
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
