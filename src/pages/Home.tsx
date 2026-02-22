import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome</CardTitle>
          <CardDescription>
            Your new web application is ready for development.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This project is built with React, TypeScript, Tailwind CSS, and
            Supabase. Start building your features by editing the source files.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
