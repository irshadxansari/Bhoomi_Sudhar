import { CheckCircle } from "lucide-react"

interface FormSuccessProps {
  message?: string
}

export function FormSuccess({ message }: FormSuccessProps) {
  if (!message) {
    return null
  }

  return (
    <div className="flex items-center gap-2 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-600 border border-emerald-100">
      <CheckCircle className="size-4 text-emerald-500" />
      <p>{message}</p>
    </div>
  )
}
