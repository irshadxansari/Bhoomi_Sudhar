"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoaderCircle, UserIcon, MailIcon, LockIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import Link from "next/link"
import type { z } from "zod"

import { register } from "@/actions/register"
import { registerSchema } from "@/schemas/auth"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormError } from "@/components/form-error"
import { FormSuccess } from "@/components/form-success"

export function RegisterForm() {
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    setSuccess("")
    setError("")
    const response = await register(values)
    if (response?.success) {
      setSuccess(response.success)
    }
    if (response?.error) {
      setError(response.error)
    }
    form.reset()
  }

  const { isSubmitting } = form.formState

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-[25rem] p-10 bg-white rounded-3xl shadow-xl border border-gray-100"
      >
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mb-2">
            <UserIcon className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Create your account</h2>
          <p className="text-gray-500 text-sm">Join our platform to manage your property records</p>
        </div>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Full Name</FormLabel>
              <FormControl>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <UserIcon className="w-5 h-5" />
                  </span>
                  <Input
                    className="pl-10 bg-gray-50 border-gray-200 rounded-xl focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Irshad Ansari"
                    disabled={isSubmitting}
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Email Address</FormLabel>
              <FormControl>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <MailIcon className="w-5 h-5" />
                  </span>
                  <Input
                    type="email"
                    autoComplete="email"
                    placeholder="irshad@example.com"
                    disabled={isSubmitting}
                    className="pl-10 bg-gray-50 border-gray-200 rounded-xl focus:ring-emerald-500 focus:border-emerald-500"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <LockIcon className="w-5 h-5" />
                  </span>
                  <Input
                    type="password"
                    autoComplete="new-password"
                    placeholder="********"
                    disabled={isSubmitting}
                    className="pl-10 bg-gray-50 border-gray-200 rounded-xl focus:ring-emerald-500 focus:border-emerald-500"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
              <p className="text-xs text-gray-500 mt-2">
                Password must be at least 8 characters with letters, numbers, and special characters.
              </p>
            </FormItem>
          )}
        />

        <FormSuccess message={success} />
        <FormError message={error} />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 rounded-xl transition-all"
        >
          {isSubmitting ? <LoaderCircle className="animate-spin" /> : "Create account"}
        </Button>

        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-emerald-600 hover:text-emerald-700 font-medium">
            Sign in
          </Link>
        </p>
      </form>
    </Form>
  )
}
