"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoaderCircle, MailIcon, LockIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import Link from "next/link"
import type { z } from "zod"

import { login } from "@/actions/login"
import { loginSchema } from "@/schemas/auth"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormError } from "@/components/form-error"
import { FormSuccess } from "@/components/form-success"

export function LoginForm() {
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setSuccess("")
    setError("")
    const response = await login(values)
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
        className="space-y-6 w-[25rem] p-10 bg-white rounded-3xl shadow-xl border border-gray-100 max-w-md mx-auto"
      >
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mb-2">
            <LockIcon className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-gray-500 text-sm">Sign in to access your account</p>
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Email</FormLabel>
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
              <div className="flex justify-between items-center">
                <FormLabel className="text-gray-700">Password</FormLabel>
                <Link href="#" className="text-xs text-emerald-600 hover:text-emerald-700">
                  Forgot password?
                </Link>
              </div>
              <FormControl>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <LockIcon className="w-5 h-5" />
                  </span>
                  <Input
                    type="password"
                    autoComplete="current-password"
                    placeholder="********"
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

        <FormSuccess message={success} />
        <FormError message={error} />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 rounded-xl transition-all"
        >
          {isSubmitting ? <LoaderCircle className="animate-spin" /> : "Sign In"}
        </Button>

        <p className="text-sm text-center text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link href="/register" className="text-emerald-600 hover:text-emerald-700 font-medium">
            Create account
          </Link>
        </p>
      </form>
    </Form>
  )
}
