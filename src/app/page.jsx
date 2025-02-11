import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="flex flex-col justify-center items-center py-20">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">ToDo App</h1>
          <p className="text-xl text-gray-600">
            Stay organized and productive with our ToDo app. Manage your tasks,
            set priorities, and meet your deadlines efficiently.
          </p>
          <div className="mt-8">
            <Link
              href="/tasks"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Features</h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Simple & Intuitive
            </h3>
            <p className="text-gray-600">
              Easily add, edit, and organize your tasks with a simple and
              intuitive interface.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Stay Organized
            </h3>
            <p className="text-gray-600">
              Keep your tasks organized with clear deadlines and priorities.
              Never miss a due date!
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Task Completion Tracking
            </h3>
            <p className="text-gray-600">
              Mark tasks as completed and track your progress. Get things done
              with satisfaction!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
