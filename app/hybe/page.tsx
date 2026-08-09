import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jieun Seo — Concert & Festival Planning",
  description: "기획과 운영을 하나의 흐름으로. IP 팝업(BTL) 이벤트 6건+ 기획·운영, 현장과 데이터를 잇는 이벤트 기획자 서지은입니다.",
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
            IP의 세계관을 관객의 경험으로 구현해온 이벤트 기획자입니다.<br />
            컨셉·키비주얼 기획부터 계약·예산관리 및 정산, 현장 제반 운영 총괄까지 책임집니다.
          </p>

          <div className="hero-fade-4 grid grid-cols-3 gap-px bg-[#403f3f] border border-[#403f3f] mt-20 max-w-3xl mx-auto">
            {[
              { num: "6+", label: "IP 팝업(BTL) 이벤트 기획·운영" },
              { num: "10년+", label: "리테일 · 이벤트 현장" },
              { num: "E2E", label: "계약·예산관리부터 정산까지" },
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
            IP 팝업은,<br />무대와 같은 문제를 풉니다
          </h2>
          <p className="text-lg md:text-xl text-[#aebcca] max-w-2xl leading-[1.9] mb-16">
            한정된 기간, 대규모 관객, 정해진 동선과 회차 — IP 팝업(BTL 이벤트) 현장은
            규모만 다를 뿐 공연장과 같은 문제를 풉니다. Disney · Pixar · Pokémon · 데브시스터즈
            IP 현장에서 관객 동선과 대기열을 설계하고, 현장 인력을 배치하고,
            MD 부스의 재고와 정산을 책임져 왔습니다. 컨셉 및 키비주얼 기획부터
            계약·예산관리 및 정산까지 — 같은 역량으로 공연 현장의 문제를 풉니다.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="rounded-[15px] overflow-hidden border border-[#403f3f] aspect-[3/2]">
              <img src="/popup-toystory.png" alt="토이스토리5 팝업 (성수)" className="w-full h-full object-cover" style={{ objectPosition: "50% 35%" }} />
            </div>
            <div className="rounded-[15px] overflow-hidden border border-[#403f3f] aspect-[3/2]">
              <img src="/popup-cookie.png" alt="쿠키런 Cookie & More 팝업" className="w-full h-full object-cover" />
            </div>
            {/* 실시간 품절현황 페이지 — 재구성 목업 */}
            <div className="rounded-[15px] border border-[#403f3f] aspect-[3/2] bg-[#161616] p-5 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-bold">🍪 실시간 품절현황</p>
                <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-[#2aff2a]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2aff2a] inline-block" />LIVE
                </span>
              </div>
              <div className="flex-1 flex flex-col justify-between text-sm">
                {[
                  { name: "아크릴 키링", st: "판매중", c: "#2aff2a" },
                  { name: "한정판 인형", st: "품절", c: "#ff2a2a" },
                  { name: "스티커 팩", st: "잔여 5", c: "#ffb02a" },
                  { name: "아크릴 스탠드", st: "판매중", c: "#2aff2a" },
                  { name: "마그넷 세트", st: "품절", c: "#ff2a2a" },
                ].map((r) => (
                  <div key={r.name} className="flex items-center justify-between border-b border-[#2a2a2a] py-1.5 last:border-0">
                    <span className="text-[#aebcca]">{r.name}</span>
                    <span className="font-semibold" style={{ color: r.c }}>{r.st}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-[#6f879c] mt-2">직접 제작·운영한 페이지 — 보안상 화면은 재구성한 예시</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[#403f3f] border border-[#403f3f]">
            {[
              {
                emoji: "🤠",
                title: "토이스토리5 팝업 (성수)",
                desc: "Disney/Pixar 라이선스. 자체 제작 토이 카메라 + DIY 키캡 키링 MD 기획·개발. 컨셉 및 키비주얼 기획부터 현장 제반 운영 총괄까지 담당.",
                tag: "컨셉·키비주얼 기획 · MD 개발 · 현장 총괄",
                img: "/popup-toystory.png",
                wide: false,
              },
              {
                emoji: "🦊",
                title: "주토피아2 팝업 (잠실)",
                desc: "Disney IP BTL 이벤트 기획·운영. 관객 응대·호스피탈리티 체계와 실시간 판매 모니터링 구축, 운영보고서 작성.",
                tag: "현장 제반 운영 · 호스피탈리티 · KPI 관리",
                img: "/popup-zootopia.jpg",
                wide: false,
              },
              {
                emoji: "✈️",
                title: "K-헤리티지 & 주토피아2 (제주공항)",
                desc: "공항이라는 특수 공간의 대관·입점 커뮤니케이션 조건을 반영해 키비주얼 구현과 현장 연출, 운영 매뉴얼(롤북)을 직접 제작.",
                tag: "키비주얼 구현 · 현장 연출 · 롤북",
                img: "/popup-jeju.png",
                wide: false,
              },
              {
                emoji: "🍪",
                title: "쿠키런 〈쿠키앤모어〉 팝업",
                desc: "데브시스터즈 IP. 운영안 수립부터 MD 부스 재고·판매 운영 체계, 매출 정산까지 전 과정 담당. 실시간 품절현황 공유 페이지를 직접 제작해 대기 관객 안내에 활용.",
                tag: "운영 설계 · 예산관리·정산 · 실시간 판매 모니터링",
                img: "/popup-cookie.png",
                wide: false,
              },
              {
                emoji: "⚡",
                title: "Pokémon Korea 팝업 컨설팅",
                desc: "가차형 판매 구조를 반영한 현장 인력·재고·물류·MD 전체 운영 체계 설계. 제안부터 수주, 운영 컨설팅 PM 수행.",
                tag: "제안 · 수주 · 운영 컨설팅 PM",
                img: "/popup-pokemon.png",
                wide: false,
              },
              {
                emoji: "🌏",
                title: "글로벌 브랜드 굿즈 사업화",
                desc: "현지 생산·수입 혼합형 상품 운영 및 팝업스토어 사업화. 굿즈 기획·소싱·판매 전 과정 담당.",
                tag: "굿즈 기획 · 소싱 · 사업화",
                img: null,
                wide: false,
              },
            ].map((p) => (
              <div key={p.title} className={`card-hover card-photo bg-[#101010] p-8 md:p-10 ${p.wide ? "md:col-span-2" : ""}`}>
                {p.img && <div className="card-bg" style={{ backgroundImage: `url(${p.img})` }} />}
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
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-16">
            <div>
              <p className="text-xs text-[#6f879c] tracking-[0.02em] uppercase mb-3">02 — On-site Experience</p>
              <h2 className="text-4xl md:text-6xl font-normal leading-[1.25] tracking-[-0.01em] mb-8">
                관객의 눈,<br />운영자의 몸
              </h2>
              <p className="text-lg md:text-xl text-[#aebcca] max-w-2xl leading-[1.9]">
                15살부터 음악과 K-POP을 사랑하며 콘서트·공연·페스티벌 트렌드에 대한
                인사이트를 꾸준히 넓혀왔습니다. 보는 것에 그치지 않고 직접 현장에 들어가,
                규모별 운영 프로세스가 실제로 어떻게 움직이는지 몸으로 익혔습니다.
              </p>
            </div>

            {/* 티켓 스택 */}
            <div className="py-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    label: "🎟 AUDIENCE",
                    items: [
                      { emoji: "💜", t: "아이돌 콘서트", d: "잠실 · 고척 · 월드투어 다수", type: "AUDIENCE", color: "#b02aff", rot: -2 },
                      { emoji: "🎸", t: "밴드 · 록 콘서트", d: "홀 공연부터 스타디움까지", type: "AUDIENCE", color: "#2ad5ff", rot: 1.5 },
                      { emoji: "🎪", t: "뮤직 페스티벌", d: "사운드베리 외 다수 관람", type: "AUDIENCE", color: "#2aff2a", rot: -1 },
                    ],
                  },
                  {
                    label: "🛠 STAFF",
                    items: [
                      { emoji: "🏃", t: "마라톤", d: "도심 대규모 러닝 행사 현장 운영", type: "STAFF", color: "#ffb02a", rot: 2 },
                      { emoji: "⚽", t: "축구 경기", d: "수만 명 규모 관중 운영", type: "STAFF", color: "#ff2a2a", rot: -1.5 },
                      { emoji: "🎆", t: "야외 축제 · 콘서트", d: "축제 · 공원 공연 현장 운영", type: "STAFF", color: "#2a7fff", rot: 1 },
                    ],
                  },
                ].map((col) => (
                  <div key={col.label} className="flex flex-col">
                    <p className="text-sm font-bold text-[#8fa0b0] tracking-[0.15em] mb-3 text-center">{col.label}</p>
                    {col.items.map((tk) => (
                      <div
                        key={tk.t}
                        className="ticket w-full flex items-stretch"
                        style={{ "--fc": tk.color, "--rot": `${tk.rot}deg` } as React.CSSProperties}
                      >
                        <div className="flex-1 flex items-center gap-3 px-4 py-4">
                          <span className="text-2xl">{tk.emoji}</span>
                          <div>
                            <p className="text-base font-semibold leading-snug">{tk.t}</p>
                            <p className="text-sm text-[#aebcca] mt-0.5">{tk.d}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* 본업 — IP 팝업 티켓 (강조) */}
              <div
                className="ticket ticket-main w-full flex items-stretch mt-6"
                style={{ "--fc": "#fffdf9", "--rot": "0deg" } as React.CSSProperties}
              >
                <div className="flex-1 flex items-center gap-4 px-5 py-5">
                  <span className="text-3xl">🎫</span>
                  <div>
                    <p className="text-lg font-bold leading-snug">IP 팝업 기획·운영 6+</p>
                    <p className="text-base text-[#aebcca] mt-1">Disney · Pixar · Pokémon — 컨셉부터 현장·정산까지 총괄</p>
                  </div>
                </div>
                <div className="ticket-stub flex items-center px-4">
                  <span className="text-[11px] font-bold tracking-[0.15em] text-[#fffdf9]">MAIN JOB</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[#403f3f] border border-[#403f3f]">
            {[
              {
                emoji: "🎤",
                title: "관객으로서",
                desc: "관람 이력을 쌓는 데 그치지 않고 연출 의도, 관객 동선, 운영 선택을 분석하며 공연·페스티벌 트렌드 인사이트를 축적해왔습니다. 팬이 무엇에 지갑을 열고 어디서 실망하는지 아는 기획자입니다.",
              },
              {
                emoji: "🏟️",
                title: "스태프로서",
                desc: "마라톤, 축구 경기, 야외 축제 등 수만 명 규모 오프라인 이벤트의 현장 운영 스태프로 참여. 규모별 인력 구조·관객 동선·돌발 대응의 차이를 현장에서 체득했습니다.",
              },
              {
                emoji: "📋",
                title: "운영 총괄로서",
                desc: "IP 팝업(BTL) 현장의 인력 배치, 관객 동선, MD 재고·정산, 돌발 대응까지 직접 총괄. 기획 의도가 관객 경험까지 끊기지 않게 만드는 것이 저의 일입니다.",
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
            <p className="text-lg md:text-xl font-bold text-[#fffdf9] tracking-[0.02em] uppercase mb-10 text-center">
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
                  <p className="text-base text-[#aebcca] mt-1">매출 발생 채널</p>
                </div>
              ))}
            </div>

            {/* Connector */}
            <div className="flex flex-col items-center py-6">
              <div className="w-px h-8 bg-[#403f3f]" />
              <div className="prism-anim h-[2px] w-24 bg-gradient-to-r from-[#ff2a2a] via-[#2aff2a] to-[#2a7fff] opacity-80 my-3" />
              <p className="text-lg text-[#aebcca]">매일 21:10 — AI 에이전트가 5개 채널 자동 수집</p>
              <div className="w-px h-8 bg-[#403f3f] mt-3" />
            </div>

            {/* Step 2: DB */}
            <div
              className="flow-step rounded-[10px] max-w-md mx-auto px-6 py-6 text-center"
              style={{ "--fc": "#2a7fff", animationDelay: "2.3s" } as React.CSSProperties}
            >
              <span className="flow-dot" style={{ "--fc": "#2a7fff" } as React.CSSProperties} />
              <p className="text-lg font-semibold">통합 매출 데이터베이스</p>
              <p className="text-base text-[#aebcca] mt-1">일자·채널·상품 단위 적재, 누락 검증 포함</p>
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
                  <p className="text-base text-[#aebcca] mt-1">{o.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#403f3f] border border-[#403f3f]">
            {[
              { num: "5채널", label: "매출 데이터 자동 수집 체계 구축" },
              { num: "매일", label: "데이터 수집·리포팅 자동화 운영" },
              { num: "E2E", label: "계약·예산관리 → 운영 → 정산 전 과정" },
              { num: "Power BI", label: "위클리 리포트 대시보드 설계" },
            ].map((s) => (
              <div key={s.label} className="bg-[#101010] p-6 md:p-8">
                <p className="text-2xl md:text-3xl font-normal leading-[1.01] mb-2">{s.num}</p>
                <p className="text-base text-[#aebcca] leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>

          <p className="text-lg md:text-xl text-[#aebcca] max-w-3xl leading-[1.9] mt-12">
            이 구조는 공연 현장에 그대로 이식됩니다. 회차·공연별 굿즈 판매 데이터는
            다음 공연과 투어의 <span className="text-[#fffdf9] font-semibold">수요 예측 기반 발주</span>로,
            시간대별 매출 데이터는 입장 회차·인력 배치 최적화로, 실시간 품절 공유는
            MD 부스 대기 관객 안내로 이어집니다.
          </p>
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
              { period: "2022.06 ~ 2025.03 (병행)", org: "싸이들", role: "전략기획팀 · 플랫폼 입점/콘텐츠 운영 — 타 직장과 병행 수행" },
              { period: "2015.06 ~ 2022.06", org: "비알코리아(주)", role: "수도권직영팀 7년 — 직영 매장 현장 인력 관리 · 매출 책임 · 상시 고객 응대. 장기간 현장을 감당하며 운영의 기본기를 다진 시기" },
            ].map((c, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-2 md:gap-8 py-6 border-b border-[#403f3f]">
                <p className="text-base text-[#8fa0b0] md:w-52 shrink-0">{c.period}</p>
                <div>
                  <p className="text-lg font-medium">{c.org}</p>
                  <p className="text-base text-[#aebcca] mt-1">{c.role}</p>
                </div>
              </div>
            ))}
            <p className="text-base text-[#8fa0b0] mt-6">✈️ 해외 출장 가능 — 결격사유 없음</p>
          </div>
        </div>
      </section>

      {/* 05 Proposal */}
      <section className="w-full py-28 px-8 md:px-16 border-t border-[#403f3f]">
        <div className="max-w-[1440px] mx-auto reveal-item">
          <p className="text-xs text-[#6f879c] tracking-[0.02em] uppercase mb-3">05 — Proposal for HYBE 360</p>
          <h2 className="text-4xl md:text-6xl font-normal leading-[1.25] tracking-[-0.01em] mb-8">
            하이브 360에서<br />풀고 싶은 문제
          </h2>
          <div className="border border-[#403f3f] rounded-[15px] p-8 md:p-12 max-w-4xl">
            <p className="text-xl md:text-2xl font-semibold mb-6">🎯 회차·공연별 MD 수요 예측 체계</p>
            <p className="text-lg text-[#aebcca] leading-[1.9] mb-6">
              공연 MD 부스는 팝업과 같은 문제를 더 압축된 시간 안에 풉니다 — 한정된 회차,
              예측이 어려운 수요, 품절과 재고 사이의 줄타기. 지금 운영 중인 5채널 매출
              자동 수집 파이프라인을 공연 MD 부스에 이식하면, 회차별 판매 데이터가
              다음 공연의 발주와 재고 배분으로 이어지는 구조를 만들 수 있습니다.
            </p>
            <p className="text-lg text-[#aebcca] leading-[1.9]">
              공연마다 리셋되는 운영 기록이 아니라, 투어 전체에 누적되는
              <span className="text-[#fffdf9] font-semibold"> 수요 예측 체계</span>를 만들고 싶습니다.
              사람의 감에 의존하던 판단을 시스템이 뒷받침하는 구조 — 제가 팝업 현장에서
              이미 만들어온 방식입니다.
            </p>
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
