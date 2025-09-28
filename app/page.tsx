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
        {/* About 섹션 */}
        <div className="flex flex-row items-center gap-6">
          <Image
            className="dark:invert"
            src="/prof.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <section
            id="about"
            className="w-full flex flex-col items-center mb-8"
          >
            <h2 className="text-xl font-bold mb-2">About</h2>
            <p>박 수 연 | PARK SOOYON</p>
          </section>
        </div>

        {/* Greeting 섹션 */}
        <section
          id="greeting"
          className="w-full flex flex-col items-center mb-8"
        >
          <h2 className="text-xl font-bold mb-2">Greeting</h2>
          <div className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
            <p className="mb-2 tracking-[-.01em]">Hi, I'm SOOYON!</p>
            <p className="tracking-[-.01em]">Nice to meet you!</p>
            <hr />
            <p className="mb-2 tracking-[-.01em]">
              안녕하세요, FrontEnd 개발자 박수연입니다!
            </p>
            <p className="tracking-[-.01em]">
              제 포트폴리오 사이트에 방문해주셔서 감사합니다.
            </p>
            <p className="tracking-[-.01em]">
              웹 개발과 UX 개선에 관심이 많으며, FrontEnd 개발자로 참여한
              프로젝트 경험을 아래에서 확인해보세요!
            </p>
          </div>
        </section>

        {/* Deploy 섹션 */}
        <section id="deploy" className="w-full flex flex-col items-center mb-8">
          <h2 className="text-xl font-bold mb-2">Deploy</h2>
        </section>

        {/* Docs 섹션 */}
        <section id="docs" className="w-full flex flex-col items-center mb-8">
          <h2 className="text-xl font-bold mb-2">Docs</h2>
        </section>
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
