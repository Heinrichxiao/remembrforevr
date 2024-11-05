import { Button } from "@/components/ui/button";
import { Brain, BookOpen, Users, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Learn Anything, Remember Forever
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Create and share learning materials optimized for long-term retention using proven memory techniques.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/explore">
                  Start Learning
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/create">
                  Create Lesson
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-primary/10 p-4">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Optimized Learning</h3>
              <p className="text-muted-foreground">
                Our algorithm adapts to your learning pace and optimizes review timing for maximum retention.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-primary/10 p-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Create & Share</h3>
              <p className="text-muted-foreground">
                Build your own lessons and share them with the community or keep them private.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-primary/10 p-4">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Track Progress</h3>
              <p className="text-muted-foreground">
                Monitor your learning journey with detailed analytics and progress tracking.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}