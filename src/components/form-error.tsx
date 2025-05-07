import { AlertCircle } from "lucide-react"

interface FormErrorProps {
  message?: string
}

export function FormError({ message }: FormErrorProps) {
  if (!message) {
    return null
  }

  return (
    <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-600 border border-red-100">
      <AlertCircle className="size-4 text-red-500" />
      <p>{message}</p>
    </div>
  )
}
