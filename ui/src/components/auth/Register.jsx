function Register() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f1e8] px-6">
      
      <div className="w-full max-w-md rounded-3xl bg-[#e9ebe9] p-8 shadow-sm">

        <div className="mb-8 text-center">
          <a
            href="/"
            className="text-2xl font-bold tracking-wide text-[#1f2d24]"
          >
            PEAK
          </a>

          <h1 className="mt-6 text-3xl font-medium text-[#1f2d24]">
            Create an Account
          </h1>

          <p className="mt-2 text-sm text-[#1f2d24]/60">
            Join the PEAK community and start exploring Nepal.
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label
              htmlFor="Name"
              className="mb-2 block text-sm font-medium text-[#1f2d24]"
            >
              Name
            </label>

            <input
              id="name"
              type="name"
              placeholder="Your Name"
              className="w-full rounded-xl border border-[#1f2d24]/10 bg-white px-4 py-3 outline-none transition focus:border-[#1f2d24]/40"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-[#1f2d24]"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-[#1f2d24]/10 bg-white px-4 py-3 outline-none transition focus:border-[#1f2d24]/40"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-[#1f2d24]"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl border border-[#1f2d24]/10 bg-white px-4 py-3 outline-none transition focus:border-[#1f2d24]/40"
            />
          </div>

            <div>
            <label
              htmlFor=" confirm password"
              className="mb-2 block text-sm font-medium text-[#1f2d24]"
            >
              Confirm Password
            </label>

            <input
              id="confirm-password"
              type="password"
              placeholder="Enter your password again"
              className="w-full rounded-xl border border-[#1f2d24]/10 bg-white px-4 py-3 outline-none transition focus:border-[#1f2d24]/40"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#1f2d24] py-3 font-medium text-[#f5f2e8] transition hover:opacity-90"
          >
            Register
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-[#1f2d24]/60">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-[#1f2d24] underline"
          >
            Log in
          </a>
        </p>

      </div>

    </main>
  )
}

export default Register