import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/* 네비게이션 바 */}
      <nav className="w-full flex justify-center gap-4 mb-8">
        <a
          href="#about"
          className="rounded-full px-4 py-2 bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
        >
          About
        </a>
        <a
          href="#greeting"
          className="rounded-full px-4 py-2 bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
        >
          Greeting
        </a>
        <a
          href="#deploy"
          className="rounded-full px-4 py-2 bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
        >
          Deploy
        </a>
        <a
          href="#docs"
          className="rounded-full px-4 py-2 bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
        >
          Docs
        </a>
      </nav>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/prof.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        {/* <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div> */}

        {/* About 섹션 */}
        <section id="about" className="w-full flex flex-col items-center mb-8">
          <h2 className="text-xl font-bold mb-2">About</h2>
          <p>이곳은 About 섹션입니다.</p>
        </section>
        {/* Greeting 섹션 */}
        <section
          id="greeting"
          className="w-full flex flex-col items-center mb-8"
        >
          <h2 className="text-xl font-bold mb-2">Greeting</h2>
          <ul className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
            <li className="mb-2 tracking-[-.01em]">Hi, I'm SOOYON!</li>
            <li className="tracking-[-.01em]">Nice to meet you!</li>
          </ul>
        </section>
        {/* Deploy 섹션 */}
        <section id="deploy" className="w-full flex flex-col items-center mb-8">
          <h2 className="text-xl font-bold mb-2">Deploy</h2>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
        </section>
        {/* Docs 섹션 */}
        <section id="docs" className="w-full flex flex-col items-center mb-8">
          <h2 className="text-xl font-bold mb-2">Docs</h2>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </section>
        <ul className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">Hi, I'm SOOYON!</li>
          <li className="tracking-[-.01em]">Nice to meet you!</li>
        </ul>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
