import type { Metadata } from "next"
import { RegisterForm } from "@/components/auth/register-form"

export const metadata: Metadata = {
  title: "Create an account",
  description: "Create an account to get started.",
}

export default function RegisterPage() {
  return (
    // <CardWrapper
    //   title=""
    //   description=""
    //   linkLabel="Already have an account? Sign in"
    //   linkHref="/login"
    // >
    // </CardWrapper>
    <RegisterForm />
  )
}
