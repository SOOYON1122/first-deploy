import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/* 네비게이션 바 */}
      <nav className="w-full flex justify-center gap-4 mb-8">
        <a
          href="#about"
          className="rounded-full px-4 py-2 bg-foreground text-background hover:bg-[#ffc7e7] dark:hover:bg-[#f2f2f2] transition-colors"
        >
          About
        </a>
        <a
          href="#contact"
          className="rounded-full px-4 py-2 bg-foreground text-background hover:bg-[#ffc7e7] dark:hover:bg-[#f2f2f2] transition-colors"
        >
          Contact
        </a>
        <a
          href="#greeting"
          className="rounded-full px-4 py-2 bg-foreground text-background hover:bg-[#ffc7e7] dark:hover:bg-[#f2f2f2] transition-colors"
        >
          Greeting
        </a>
        <a
          href="#docs"
          className="rounded-full px-4 py-2 bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
        >
          Skills
        </a>
        <a
          href="#deploy"
          className="rounded-full px-4 py-2 bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
        >
          Projects
        </a>
      </nav>

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* profile 섹션 */}
        <div className="flex flex-row justify-center items-center gap-6 w-full mb-8">
          <Image
            className="dark:invert"
            src="/prof.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <Image
            className="dark:invert"
            src="/selfProfile.jpg"
            alt="profile"
            width={180}
            height={38}
            priority
          />
        </div>
        {/* About 섹션 */}
        <section id="about" className="w-full flex flex-col items-center mb-8">
          <h2 className="text-xl font-bold mb-2">About</h2>
          <p className="mb-2 tracking-[-.01em]">박 수 연</p>
          <p className="mb-2 tracking-[-.01em]">PARK SOOYON</p>
        </section>

        {/* Contact 섹션 */}
        <section
          id="contact"
          className="w-full flex flex-col items-center mb-8"
        >
          <h2 className="text-xl font-bold mb-2">Contact</h2>
          <div className="flex flex-row items-center gap-2 mb-2 w-full max-w-xs justify-between">
            <p className="mb-0 tracking-[-.01em]">EMAIL</p>
            <p
              className="mb-0 tracking-[-.01em] text-center select-all cursor-pointer"
              title="클릭하면 복사할 수 있습니다."
            >
              pksuyon1122@naver.com
            </p>
          </div>
          <div className="flex flex-row items-center gap-2 mb-2 w-full max-w-xs justify-between">
            <p className="mb-0 tracking-[-.01em]">PHONE</p>
            <p
              className="mb-0 tracking-[-.01em] text-center select-all cursor-pointer"
              title="클릭하면 복사할 수 있습니다."
            >
              010-8596-8726
            </p>
          </div>
          <div className="flex flex-row items-center gap-2 mb-2 w-full max-w-xs justify-between">
            <p className="mb-0 tracking-[-.01em]">GITHUB</p>
            <a
              className="mb-0 tracking-[-.01em] text-center select-all cursor-pointer"
              title="클릭하면 복사할 수 있습니다."
            >
              https://github.com/SOOYON1122
            </a>
          </div>
        </section>

        {/* Greeting 섹션 */}
        <section
          id="greeting"
          className="w-full flex flex-col items-center mb-8"
        >
          <h2 className="text-xl font-bold mb-2">👋 Greeting 👋</h2>
          <div className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left items-center text-center">
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

        {/* Skills 섹션 */}
        <section id="docs" className="w-full flex flex-col items-center mb-8">
          <h2 className="text-xl font-bold mb-2">✨ My Tech Stack ✨</h2>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded">
              JAVASCRIPT
            </span>
            <span className="bg-blue-400 text-white font-bold px-3 py-1 rounded">
              TYPESCRIPT
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <span className="bg-[#222] text-white font-bold px-3 py-1 rounded">
              REACT
            </span>
            <span className="bg-[#222] text-white font-bold px-3 py-1 rounded">
              REACT NATIVE
            </span>
            <span className="bg-green-500 text-white font-bold px-3 py-1 rounded">
              VUEJS
            </span>
            <span className="bg-cyan-400 text-white font-bold px-3 py-1 rounded">
              TAILWINDCSS
            </span>
            <span className="bg-blue-300 text-white font-bold px-3 py-1 rounded">
              CSS3
            </span>
            <span className="bg-orange-500 text-white font-bold px-3 py-1 rounded">
              HTML5
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <span className="bg-blue-500 text-white font-bold px-3 py-1 rounded">
              PYTHON
            </span>
            <span className="bg-orange-400 text-white font-bold px-3 py-1 rounded">
              JAVA
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <span className="bg-green-400 text-white font-bold px-3 py-1 rounded">
              SPRING
            </span>
            <span className="bg-green-900 text-white font-bold px-3 py-1 rounded">
              DJANGO
            </span>
            <span className="bg-blue-700 text-white font-bold px-3 py-1 rounded">
              MYSQL
            </span>
            <span className="bg-slate-500 text-white font-bold px-3 py-1 rounded">
              SQLITE
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2 mt-2">🛠️ Tools 🛠️</h3>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="bg-red-600 text-white font-bold px-3 py-1 rounded">
              GIT
            </span>
            <span className="bg-black text-white font-bold px-3 py-1 rounded">
              GITHUB
            </span>
            <span className="bg-black text-white font-bold px-3 py-1 rounded">
              GITLAB
            </span>
            <span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded">
              NOTION
            </span>
            <span className="bg-blue-700 text-white font-bold px-3 py-1 rounded">
              VISUAL STUDIO CODE
            </span>
            <span className="bg-blue-900 text-white font-bold px-3 py-1 rounded">
              ANDROID STUDIO
            </span>
            <span className="bg-pink-500 text-white font-bold px-3 py-1 rounded">
              FIGMA
            </span>
            <span className="bg-blue-600 text-white font-bold px-3 py-1 rounded">
              JIRA
            </span>
          </div>
        </section>

        {/* Projects 섹션 */}
        <section id="deploy" className="w-full flex flex-col items-center mb-8">
          <h2 className="text-xl font-bold mb-2">📝 Projects 📝</h2>
          <p className="mb-2 tracking-[-.01em] font-bold">
            점검중 - 전자기기 중고거래 서비스
          </p>
          <div className="w-full max-w-xl flex flex-row items-center gap-2 mb-2 justify-between">
            <p className="mb-0 tracking-[-.01em] w-24">기 간</p>
            <p className="mb-0 tracking-[-.01em] text-center flex-1">
              2025.04.14 - 2025.05.22
            </p>
          </div>
          <div className="w-full max-w-xl flex flex-row items-center gap-2 mb-2 justify-between">
            <p className="mb-0 tracking-[-.01em]">참여 인원</p>
            <p className="mb-0 tracking-[-.01em] text-center flex-1">6 명</p>
          </div>
          <div className="w-full max-w-xl flex flex-row items-center gap-2 mb-2 justify-between">
            <p className="mb-0 tracking-[-.01em] w-24">개 요</p>
            <p className="mb-0 tracking-[-.01em] text-center flex-1">
              전자기기 중고거래 판매자 및 구매자들의 편리성과 신뢰성을 확보하기
              위해, AI 기반 흠집 탐지 및 판매 게시글 자동 생성 기능을 추가한
              중고거래 서비스
            </p>
          </div>
          <div className="w-full max-w-xl flex flex-row items-center gap-2 mb-2 justify-between">
            <p className="mb-0 tracking-[-.01em]">기술 환경</p>
            <p className="mb-0 tracking-[-.01em] text-center flex-1 whitespace-pre-line">
              {
                "FE - TypeScript, React, PWA, Node.js, NPM \n BE - JAVA, Python, Spring Boot, Spring JPA"
              }
            </p>
          </div>
          <div className="w-full max-w-xl flex flex-row items-center gap-2 mb-2 justify-between">
            <p className="mb-0 tracking-[-.01em]">담당 역할</p>
            <p className="mb-0 tracking-[-.01em] text-center flex-1 whitespace-pre-line">
              {"프론트엔드 개발 리더 \n UI/UX 디자인 설계"}
            </p>
          </div>
          <hr className="w-full max-w-xl my-6 border-t-2 border-gray-300" />
          <p className="mb-2 tracking-[-.01em] font-bold">
            Barrier Free - 시각장애인을 위한 금융 앱
          </p>
          <div className="w-full max-w-xl flex flex-row items-center gap-2 mb-2 justify-between">
            <p className="mb-0 tracking-[-.01em] w-24">기 간</p>
            <p className="mb-0 tracking-[-.01em] text-center flex-1">
              2025.02.24 - 2025.04.11
            </p>
          </div>
          <div className="w-full max-w-xl flex flex-row items-center gap-2 mb-2 justify-between">
            <p className="mb-0 tracking-[-.01em]">참여 인원</p>
            <p className="mb-0 tracking-[-.01em] text-center flex-1">6 명</p>
          </div>
          <div className="w-full max-w-xl flex flex-row items-center gap-2 mb-2 justify-between">
            <p className="mb-0 tracking-[-.01em] w-24">개 요</p>
            <p className="mb-0 tracking-[-.01em] text-center flex-1">
              시각 장애인 및 저시력자를 위한 간편 뱅킹 서비스
            </p>
          </div>
          <div className="w-full max-w-xl flex flex-row items-center gap-2 mb-2 justify-between">
            <p className="mb-0 tracking-[-.01em]">기술 환경</p>
            <p className="mb-0 tracking-[-.01em] text-center flex-1 whitespace-pre-line">
              {
                "FE – TypeScript, ReactNative, React, Node.js, NPM \n BE – JAVA, Python, Spring Boot, Spring JPA"
              }
            </p>
          </div>
          <div className="w-full max-w-xl flex flex-row items-center gap-2 mb-2 justify-between">
            <p className="mb-0 tracking-[-.01em]">담당 역할</p>
            <p className="mb-0 tracking-[-.01em] text-center flex-1 whitespace-pre-line">
              {"프론트엔드 개발 리더 \n UI/UX 디자인 설계"}
            </p>
          </div>
          <hr className="w-full max-w-xl my-6 border-t-2 border-gray-300" />
          <p className="mb-2 tracking-[-.01em] font-bold">
            NAVI - 자격증 정보 제공 서비스
          </p>
          <div className="w-full max-w-xl flex flex-row items-center gap-2 mb-2 justify-between">
            <p className="mb-0 tracking-[-.01em] w-24">기 간</p>
            <p className="mb-0 tracking-[-.01em] text-center flex-1">
              2025.01.13 - 2025.02.21
            </p>
          </div>
          <div className="w-full max-w-xl flex flex-row items-center gap-2 mb-2 justify-between">
            <p className="mb-0 tracking-[-.01em]">참여 인원</p>
            <p className="mb-0 tracking-[-.01em] text-center flex-1">6 명</p>
          </div>
          <div className="w-full max-w-xl flex flex-row items-center gap-2 mb-2 justify-between">
            <p className="mb-0 tracking-[-.01em] w-24">개 요</p>
            <p className="mb-0 tracking-[-.01em] text-center flex-1">
              취업 준비를 시작한 사회 초년생들에게 필요한 자격증 정보를 제공하고
              사용자의 자격증 합격률과 실시간 화상 공부방을 제공하는 서비스
            </p>
          </div>
          <div className="w-full max-w-xl flex flex-row items-center gap-2 mb-2 justify-between">
            <p className="mb-0 tracking-[-.01em]">기술 환경</p>
            <p className="mb-0 tracking-[-.01em] text-center flex-1 whitespace-pre-line">
              {"FE – TypeScript, Vue.js, NPM \n BE – JAVA, Python, Spring Boot"}
            </p>
          </div>
          <div className="w-full max-w-xl flex flex-row items-center gap-2 mb-2 justify-between">
            <p className="mb-0 tracking-[-.01em]">담당 역할</p>
            <p className="mb-0 tracking-[-.01em] text-center flex-1 whitespace-pre-line">
              {"프론트엔드 개발 \n UI/UX 디자인 설계"}
            </p>
          </div>
        </section>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
