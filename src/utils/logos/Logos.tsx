export function ClientSection() {
  return (
    <section
      id="clients"
      className="mx-auto max-w-7xl px-6 text-center md:px-8"
    >
      <div className="py-14">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="text-center text-sm font-semibold text-gray-600">
            TRUSTED BY TEAMS FROM AROUND THE WORLD
          </h2>
          <div className="mt-6">
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white">
              <li>
                <img
                  alt="Google"
                  src="/fl1.png"
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                  width={112}
                  height={32}
                />
              </li>
             
              <li>
                <img
                  alt="GitHub"
                  src="/fl3.png"
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                  width={112}
                  height={32}
                />
              </li>
              <li>
                <img
                  alt="Uber"
                  src="/fl6.png"
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                  width={112}
                  height={32}
                />
              </li>
              <li>
                <img
                  alt="Notion"
                  src="/fl5.png"
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                  width={112}
                  height={32}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}