import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jieun Seo — Concert & Festival Planning",
  description: "기획과 운영을 하나의 흐름으로. IP 팝업 6건+ 기획·운영, 현장과 데이터를 잇는 이벤트 기획자 서지은입니다.",
};

export default function HybePortfolio() {
  return (
    <main className="min-h-screen bg-[#101010] text-[#fffdf9]">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-5 bg-[#101010]/90 backdrop-blur-sm border-b border-[#403f3f]">
        <span className="text-sm tracking-[0.02em]">JIEUN SEO</span>
        <span className="text-xs text-[#6f879c] tracking-[0.02em] uppercase">Concert · Festival · Operations</span>
      </nav>

      {/* Hero */}
      <section className="w-full min-h-screen flex flex-col justify-center px-8 md:px-16 pt-32 pb-24">
        <div className="max-w-[1440px] mx-auto w-full text-center">
          <p className="hero-fade-1 text-xs text-[#6f879c] tracking-[0.02em] uppercase mb-10">Portfolio · Seo Jieun · 2026</p>
          <h1 className="hero-fade-2 font-normal text-5xl md:text-8xl leading-[1.18] tracking-[-0.02em] mb-2">
            기획이 현장에서
          </h1>
          <h1
            className="hero-fade-2 font-normal text-5xl md:text-8xl leading-[1.18] tracking-[-0.02em] mb-10"
            style={{ textShadow: "-3px 0 rgba(255,42,42,0.55), 3px 0 rgba(42,127,255,0.55)" }}
          >
            완성되는 순간
          </h1>
          {/* Prism artifact — the only chromatic element */}
          <div className="hero-fade-3 flex justify-center mb-12">
            <div className="prism-anim h-[3px] w-48 bg-gradient-to-r from-[#ff2a2a] via-[#2aff2a] to-[#2a7fff] opacity-80" />
          </div>
          <p className="hero-fade-3 text-lg md:text-xl text-[#aebcca] leading-[1.8] max-w-2xl mx-auto">
            IP의 세계관을 공간과 경험으로 구현해온 이벤트 기획자입니다.<br />
            컨셉 기획부터 예산 운영, 현장 총괄까지 — 전 사이클을 책임집니다.
          </p>

          <div className="hero-fade-4 grid grid-cols-3 gap-px bg-[#403f3f] border border-[#403f3f] mt-20 max-w-3xl mx-auto">
            {[
              { num: "6+", label: "IP 팝업 기획·운영" },
              { num: "10년+", label: "리테일 · 이벤트 현장" },
              { num: "E2E", label: "컨셉 기획부터 정산까지" },
            ].map((s) => (
              <div key={s.label} className="bg-[#101010] p-6 md:p-8">
                <p className="text-3xl md:text-5xl font-normal leading-[1.01] mb-2">{s.num}</p>
                <p className="text-sm md:text-base text-[#aebcca]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 01 Event Planning */}
      <section className="w-full py-28 px-8 md:px-16 border-t border-[#403f3f]">
        <div className="max-w-[1440px] mx-auto reveal-item">
          <p className="text-xs text-[#6f879c] tracking-[0.02em] uppercase mb-3">01 — Event Planning</p>
          <h2 className="text-4xl md:text-6xl font-normal leading-[1.25] tracking-[-0.01em] mb-8">
            IP 라이선스 팝업,<br />기획부터 현장까지
          </h2>
          <p className="text-lg md:text-xl text-[#aebcca] max-w-2xl leading-[1.9] mb-16">
            Disney · Pixar · Pokémon · 데브시스터즈. 브랜드의 세계관이 공간에서
            관객의 경험으로 완성되도록 컨셉 설계, VMD, 예산 운영, 현장 총괄의
            전 과정을 직접 담당했습니다.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="rounded-[15px] overflow-hidden border border-[#403f3f] aspect-[3/2]">
              <img src="/popup-toystory.png" alt="토이스토리5 팝업 (성수)" className="w-full h-full object-cover" style={{ objectPosition: "50% 35%" }} />
            </div>
            <div className="rounded-[15px] overflow-hidden border border-[#403f3f] aspect-[3/2]">
              <img src="/popup-cookie.png" alt="쿠키런 Cookie & More 팝업" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[#403f3f] border border-[#403f3f]">
            {[
              {
                emoji: "🤠",
                title: "토이스토리5 팝업 (성수)",
                desc: "Disney/Pixar 라이선스. 자체 제작 토이 카메라 + DIY 키캡 키링 기획. 컨셉 설계부터 상품 개발, 현장 운영까지 총괄.",
                tag: "컨셉 기획 · 상품 개발 · 현장 총괄",
                img: "/popup-toystory.png",
                wide: false,
              },
              {
                emoji: "🦊",
                title: "주토피아2 팝업 (잠실)",
                desc: "Disney IP 팝업스토어 기획·운영. 방문객 응대 체계와 매출 추적 시스템 구축, 운영보고서 작성.",
                tag: "팝업 운영 · KPI 관리",
                img: "/popup-zootopia.jpg",
                wide: false,
              },
              {
                emoji: "✈️",
                title: "K-헤리티지 & 주토피아2 (제주공항)",
                desc: "공항 입점 특수성을 반영한 VMD와 운영 매뉴얼 직접 제작. 복합 IP 공간 구성.",
                tag: "VMD · 운영 매뉴얼",
                img: "/popup-jeju.png",
                wide: false,
              },
              {
                emoji: "🍪",
                title: "쿠키런 〈쿠키앤모어〉 팝업",
                desc: "데브시스터즈 IP. 운영안 수립부터 재고 시스템 세팅, 매출 정산까지 전 과정 담당. 실시간 품절현황 공유 페이지 직접 제작.",
                tag: "운영 설계 · 정산 · 시스템 구축",
                img: "/popup-cookie.png",
                wide: false,
              },
              {
                emoji: "⚡",
                title: "Pokémon Korea 팝업 컨설팅",
                desc: "가차형 팝업스토어 판매 구조를 반영한 운영 인력·재고·물류·MD 전체 체계 설계. 제안부터 수주, 컨설팅 PM 수행.",
                tag: "제안 · 수주 · 운영 컨설팅 PM",
                img: "/popup-pokemon.png",
                wide: true,
              },
            ].map((p) => (
              <div key={p.title} className={`card-hover card-photo bg-[#101010] p-8 md:p-10 ${p.wide ? "md:col-span-2" : ""}`}>
                <div className="card-bg" style={{ backgroundImage: `url(${p.img})` }} />
                <div className="relative z-10">
                  <p className="text-2xl mb-4">{p.emoji}</p>
                  <h3 className="text-xl md:text-2xl font-semibold leading-[1.4] mb-4">{p.title}</h3>
                  <p className="text-base text-[#aebcca] leading-[1.8] mb-5">{p.desc}</p>
                  <p className="text-sm text-[#8fa0b0] tracking-[0.02em] uppercase">✦ {p.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 On-site */}
      <section className="w-full py-28 px-8 md:px-16 border-t border-[#403f3f]">
        <div className="max-w-[1440px] mx-auto reveal-item">
          <p className="text-xs text-[#6f879c] tracking-[0.02em] uppercase mb-3">02 — On-site Experience</p>
          <h2 className="text-4xl md:text-6xl font-normal leading-[1.25] tracking-[-0.01em] mb-8">
            관객의 눈,<br />운영자의 몸
          </h2>
          <p className="text-lg md:text-xl text-[#aebcca] max-w-2xl leading-[1.9] mb-16">
            15살부터 음악과 K-POP을 사랑하며 수많은 공연과 이벤트를 경험했습니다.
            보는 것에 그치지 않고 직접 현장에 들어가, 규모별 운영 프로세스가
            실제로 어떻게 움직이는지 몸으로 익혔습니다.
          </p>

          <div className="grid md:grid-cols-3 gap-px bg-[#403f3f] border border-[#403f3f]">
            {[
              {
                emoji: "🎤",
                title: "관객으로서",
                desc: "국내외 콘서트·페스티벌·팬 이벤트 다수 참여. 같은 공연에서도 연출 의도, 동선 설계, 운영 선택을 분석하는 습관 — 감동과 아쉬움을 운영의 언어로 번역합니다.",
              },
              {
                emoji: "🏟️",
                title: "스태프로서",
                desc: "마라톤, 공연장, 축구 경기, 이벤트, 팝업 등 다양한 행사에 스태프로 참여. 수만 명 규모와 수백 명 규모의 인력 구조·동선·돌발 대응 차이를 현장에서 체득했습니다.",
              },
              {
                emoji: "📋",
                title: "운영 총괄로서",
                desc: "IP 팝업 현장의 인력 배치, 관객 동선, 재고·정산, 돌발 상황 대응까지 직접 총괄. 기획 의도가 관객 경험까지 끊기지 않게 만드는 것이 저의 일입니다.",
              },
            ].map((c) => (
              <div key={c.title} className="card-hover bg-[#101010] p-8 md:p-10">
                <p className="text-2xl mb-4">{c.emoji}</p>
                <h3 className="text-xl md:text-2xl font-semibold leading-[1.4] mb-4">{c.title}</h3>
                <p className="text-base text-[#aebcca] leading-[1.8]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 Numbers */}
      <section className="w-full py-28 px-8 md:px-16 border-t border-[#403f3f]">
        <div className="max-w-[1440px] mx-auto reveal-item">
          <p className="text-xs text-[#6f879c] tracking-[0.02em] uppercase mb-3">03 — Numbers & Systems</p>
          <h2 className="text-4xl md:text-6xl font-normal leading-[1.25] tracking-[-0.01em] mb-8">
            숫자로 현장을 읽습니다
          </h2>
          <p className="text-lg md:text-xl text-[#aebcca] max-w-2xl leading-[1.9] mb-16">
            예산 편성과 정산 프로세스를 직접 운영하고, 매출·재고·시간대별 데이터를
            분석해 운영 판단에 연결합니다. 반복 업무는 AI로 자동화해
            데이터와 히스토리가 누락되지 않는 구조를 만들었습니다.
          </p>

          {/* 매출 데이터 파이프라인 인포그래픽 */}
          <div className="rounded-[15px] border border-[#403f3f] p-8 md:p-12 mb-12">
            <p className="text-base text-[#aebcca] tracking-[0.02em] uppercase mb-10 text-center">
              Daily Sales Data Pipeline — 직접 설계·운영 중인 자동화 구조
            </p>

            {/* Step 1: 5 channels */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-4xl mx-auto">
              {[
                { ch: "POS", color: "#ff2a2a", delay: 0 },
                { ch: "가챠 2F", color: "#ffb02a", delay: 0.35 },
                { ch: "가챠 3F", color: "#2aff2a", delay: 0.7 },
                { ch: "AI 사진기", color: "#2ad5ff", delay: 1.05 },
                { ch: "네컷사진", color: "#b02aff", delay: 1.4 },
              ].map((c) => (
                <div
                  key={c.ch}
                  className="flow-step rounded-[10px] bg-[#101010] px-4 py-6 text-center"
                  style={{ "--fc": c.color, animationDelay: `${c.delay}s` } as React.CSSProperties}
                >
                  <span className="flow-dot" style={{ "--fc": c.color } as React.CSSProperties} />
                  <p className="text-lg font-semibold">{c.ch}</p>
                  <p className="text-sm text-[#aebcca] mt-1">매출 발생 채널</p>
                </div>
              ))}
            </div>

            {/* Connector */}
            <div className="flex flex-col items-center py-6">
              <div className="w-px h-8 bg-[#403f3f]" />
              <div className="prism-anim h-[2px] w-24 bg-gradient-to-r from-[#ff2a2a] via-[#2aff2a] to-[#2a7fff] opacity-80 my-3" />
              <p className="text-base text-[#aebcca]">매일 21:10 — AI 에이전트가 5개 채널 자동 수집</p>
              <div className="w-px h-8 bg-[#403f3f] mt-3" />
            </div>

            {/* Step 2: DB */}
            <div
              className="flow-step rounded-[10px] max-w-md mx-auto px-6 py-6 text-center"
              style={{ "--fc": "#2a7fff", animationDelay: "2.3s" } as React.CSSProperties}
            >
              <span className="flow-dot" style={{ "--fc": "#2a7fff" } as React.CSSProperties} />
              <p className="text-lg font-semibold">통합 매출 데이터베이스</p>
              <p className="text-sm text-[#aebcca] mt-1">일자·채널·상품 단위 적재, 누락 검증 포함</p>
            </div>

            {/* Connector */}
            <div className="flex flex-col items-center py-6">
              <div className="w-px h-8 bg-[#403f3f]" />
            </div>

            {/* Step 3: outputs */}
            <div className="grid md:grid-cols-3 gap-3 max-w-4xl mx-auto">
              {[
                { t: "Power BI 위클리 리포트", d: "매출·재고·시간대 분석", color: "#ffb02a", delay: 3.2 },
                { t: "일일 매출 브리핑", d: "슬랙 자동 발송", color: "#2aff2a", delay: 3.55 },
                { t: "운영 판단", d: "발주·인력·상품 구성 반영", color: "#ff2a7f", delay: 3.9 },
              ].map((o) => (
                <div
                  key={o.t}
                  className="flow-step rounded-[10px] bg-[#101010] px-4 py-6 text-center"
                  style={{ "--fc": o.color, animationDelay: `${o.delay}s` } as React.CSSProperties}
                >
                  <span className="flow-dot" style={{ "--fc": o.color } as React.CSSProperties} />
                  <p className="text-lg font-semibold">{o.t}</p>
                  <p className="text-sm text-[#aebcca] mt-1">{o.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#403f3f] border border-[#403f3f]">
            {[
              { num: "5채널", label: "매출 데이터 자동 수집 체계 구축" },
              { num: "매일", label: "데이터 수집·리포팅 자동화 운영" },
              { num: "E2E", label: "예산 편성 → 운영 → 정산 전 과정" },
              { num: "Power BI", label: "위클리 리포트 대시보드 설계" },
            ].map((s) => (
              <div key={s.label} className="bg-[#101010] p-6 md:p-8">
                <p className="text-2xl md:text-3xl font-normal leading-[1.01] mb-2">{s.num}</p>
                <p className="text-sm text-[#aebcca] leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 Career */}
      <section className="w-full py-28 px-8 md:px-16 border-t border-[#403f3f]">
        <div className="max-w-[1440px] mx-auto reveal-item">
          <p className="text-xs text-[#6f879c] tracking-[0.02em] uppercase mb-3">04 — Career</p>
          <h2 className="text-4xl md:text-6xl font-normal leading-[1.25] tracking-[-0.01em] mb-16">
            10년의 현장
          </h2>

          <div className="max-w-3xl">
            {[
              { period: "2026 ~", org: "IdeaPLAB (SMORE)", role: "MD · 리테일 운영 · IP 팝업 기획/운영" },
              { period: "2025.04 ~ 2025.12", org: "트랜스코스모스코리아", role: "EC사업부 전략기획팀 · Pokémon 팝업 컨설팅 PM" },
              { period: "2024.01 ~ 2025.04", org: "쿠팡 리테일", role: "리테일 · 데이터 기반 운영 프로세스" },
              { period: "2022.06 ~ 2025.03", org: "싸이들", role: "전략기획팀 · 플랫폼 입점/콘텐츠 운영" },
              { period: "2015.06 ~ 2022.06", org: "비알코리아(주)", role: "수도권직영팀 7년 · 리테일 현장 운영" },
            ].map((c, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-2 md:gap-8 py-6 border-b border-[#403f3f]">
                <p className="text-base text-[#8fa0b0] md:w-52 shrink-0">{c.period}</p>
                <div>
                  <p className="text-lg font-medium">{c.org}</p>
                  <p className="text-base text-[#aebcca] mt-1">{c.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outro */}
      <section className="w-full py-40 px-8 md:px-16 border-t border-[#403f3f]">
        <div className="max-w-[1440px] mx-auto text-center reveal-item">
          <h2 className="text-4xl md:text-7xl font-normal leading-[1.18] tracking-[-0.02em] mb-10">
            기획과 운영,<br />하나의 흐름으로
          </h2>
          <div className="flex justify-center mb-12">
            <div className="prism-anim h-[3px] w-32 bg-gradient-to-r from-[#ff2a2a] via-[#2aff2a] to-[#2a7fff] opacity-80" />
          </div>
          <p className="text-lg md:text-xl text-[#aebcca] max-w-xl mx-auto leading-[1.9] mb-14">
            팬과 아티스트 모두에게 최고의 경험을 만드는 무대.<br />
            그 현장에서 일하고 싶습니다.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 text-sm">
            <a href="mailto:seojieun22@gmail.com" className="border border-[#fffdf9] px-8 py-3 hover:bg-[#fffdf9] hover:text-[#101010] transition-colors">
              seojieun22@gmail.com
            </a>
            <a href="/" className="text-[#6f879c] hover:text-[#fffdf9] transition-colors">
              전체 포트폴리오 보기 →
            </a>
          </div>
        </div>
      </section>

      <footer className="px-8 md:px-16 py-8 border-t border-[#403f3f] flex justify-between items-center">
        <span className="text-xs text-[#6f879c]">© 2026 Jieun Seo</span>
        <span className="text-xs text-[#6f879c] uppercase tracking-[0.02em]">Concert · Festival · Operations</span>
      </footer>
    </main>
  );
}
