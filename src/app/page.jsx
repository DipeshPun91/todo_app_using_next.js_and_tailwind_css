import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto">
      <section className="min-h-screen flex flex-col justify-center items-center py-10 px-6 bg-gray-900">
        <div className="text-center mb-12">
          <h1 className="h1 text-accent mb-6">Welcome to ToDo App</h1>
          <p className="h3 text-gray-300 max-w-2xl mx-auto">
            Stay organized and productive with our ToDo app. Manage your tasks,
            set priorities, and meet your deadlines efficiently.
          </p>
        </div>

        <div className="text-center">
          <Link
            href="/Todo"
            className="px-10 py-4 bg-accent text-primary font-bold text-lg rounded-lg hover:bg-accent-HOVER transition-all shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </section>

      <section className="min-h-screen flex flex-col justify-center items-center py-10 px-6 bg-gray-900">
        <h2 className="h2 text-accent mb-12">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-8 rounded-lg shadow-md hover:scale-105 transition-transform">
            <h3 className="h3 text-accent mb-4">Simple & Intuitive</h3>
            <p className="text-gray-300">
              Easily add, edit, and organize your tasks with a simple and
              intuitive interface.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg shadow-md hover:scale-105 transition-transform">
            <h3 className="h3 text-accent mb-4">Stay Organized</h3>
            <p className="text-gray-300">
              Keep your tasks organized with clear deadlines and priorities.
              Never miss a due date!
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg shadow-md hover:scale-105 transition-transform">
            <h3 className="h3 text-accent mb-4">Task Completion Tracking</h3>
            <p className="text-gray-300">
              Mark tasks as completed and track your progress. Get things done
              with satisfaction!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
