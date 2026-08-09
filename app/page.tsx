export default function Home() {
  return (
    <main className="min-h-screen text-[#0a0a0a]">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-5 bg-[#f9f9f7]/90 backdrop-blur-sm border-b border-[#e5e5e5]">
        <span className="font-mono text-sm text-[#f97316]">JIEUN SEO</span>
        <span className="font-mono text-xs text-[#888888]">PLANNING · OPS · DATA</span>
      </nav>

      {/* Hero - bg A */}
      <section className="w-full bg-[#f9f9f7] pt-40 pb-24">
        <div className="px-8 md:px-16 max-w-7xl mx-auto">
          <p className="font-mono text-xs text-[#f97316] mb-8 tracking-widest">PORTFOLIO · SEO JIEUN · 2026</p>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-8 tracking-tight">
            현장 · 운영 · 데이터를<br />
            하나의 흐름으로<br />
            설계합니다
          </h1>
          <p className="text-base md:text-lg text-[#555555] max-w-2xl leading-relaxed mb-12">
            End-to-End 전체를 보고 병목을 찾아 제거합니다.<br />
            사람에 의존하던 구조를 프로세스와 시스템으로 바꿉니다.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#e5e5e5] border border-[#e5e5e5] rounded-xl overflow-hidden mb-0">
            {[
              { label: "APPROACH", value: "End-to-End" },
              { label: "CAREER", value: "10년+" },
              { label: "CORE SKILL", value: "Power BI · ERP · AI" },
              { label: "SPECIALTY", value: "병목 제거 · 프로세스 설계" },
            ].map((item) => (
              <div key={item.label} className="p-5 bg-[#f9f9f7]">
                <p className="font-mono text-xs text-[#888888] mb-2 tracking-widest">{item.label}</p>
                <p className="text-sm font-semibold text-[#0a0a0a]">{item.value}</p>
              </div>
            ))}
          </div>

          {/* 숫자 임팩트 바 */}
          <div className="mt-16 pt-16 border-t border-[#e5e5e5] grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#e5e5e5]">
            {[
              { num: "10년+", label: "리테일 경력", sub: "2015 – 현재" },
              { num: "6개+", label: "IP 팝업 운영", sub: "Disney · Pokémon · 데브시스터즈" },
              { num: "5곳", label: "매출 자동화", sub: "POS · 가챠 · AI사진기 · 네컷 · 키오스크" },
            ].map((stat) => (
              <div key={stat.num} className="px-0 md:px-12 py-8 first:pl-0 last:pr-0">
                <p className="text-5xl font-black text-[#f97316] mb-2 leading-none">{stat.num}</p>
                <p className="text-base font-semibold text-[#0a0a0a] mb-1">{stat.label}</p>
                <p className="text-xs text-[#888888] font-mono">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 01 About - bg B */}
      <section className="w-full bg-white py-24">
        <div className="px-8 md:px-16 max-w-7xl mx-auto">
          <div className="flex gap-8 md:gap-16 flex-col md:flex-row">
            <div className="md:w-48 shrink-0">
              <p className="font-mono text-[#f97316] text-xs tracking-widest">01</p>
              <p className="font-mono text-[#888888] text-xs mt-1">About</p>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-6">나는 누구인가</h2>
              <p className="text-[#555555] leading-relaxed mb-6">
                현장과 운영, 데이터를 잇는 End-to-End 기획자입니다.
                비알코리아 직영팀에서 시작해 10년 이상 리테일·이커머스 현장을 거쳤고,
                IP 팝업 물류 컨설팅·데이터 자동화·AI 에이전트 설계까지 직접 해왔습니다.
              </p>
              <p className="text-[#555555] leading-relaxed mb-6">
                전체 흐름에서 병목을 찾고 프로세스를 설계합니다.
                문제가 생기면 스스로 분석하고 해결하는 것이 제 방식이고,
                기획부터 디자인(PS·AI)·데이터·개발 도구까지 필요하면 직접 익혀 씁니다.
              </p>
              <p className="text-[#555555] leading-relaxed mb-10">
                개인적으로는 굿즈를 직접 기획·제작·판매했고,
                AI 에이전트를 설계해 업무와 일상 모두에 적용하고 있습니다.
              </p>

              <h3 className="text-sm font-mono text-[#888888] tracking-widest mb-5">CAREER</h3>
              <div className="space-y-0">
                {[
                  { period: "2026 ~", org: "IdeaPLAB (SMORE)", role: "MD · 리테일 운영", current: true },
                  { period: "2025.04 ~ 2025.12", org: "트랜스코스모스코리아", role: "EC사업부 전략기획팀", current: false },
                  { period: "2024.01 ~ 2025.04", org: "쿠팡 리테일", role: "리테일 부서", current: false },
                  { period: "2022.06 ~ 2025.03", org: "싸이들", role: "전략기획팀", current: false },
                  { period: "2015.06 ~ 2022.06", org: "비알코리아(주)", role: "수도권직영팀 · 7년", current: false },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-stretch">
                    <div className="flex flex-col items-center w-3 shrink-0 pt-1">
                      <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${item.current ? "bg-[#f97316]" : "bg-[#d0d0ce]"}`} />
                      {i < 4 && <div className="w-px flex-1 bg-[#e5e5e5] my-1" />}
                    </div>
                    <div className="pb-5">
                      <p className="text-xs font-mono text-[#888888] mb-0.5">{item.period}</p>
                      <p className={`font-semibold text-sm ${item.current ? "text-[#0a0a0a]" : "text-[#333333]"}`}>{item.org}</p>
                      <p className="text-xs text-[#555555]">{item.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: "전문 분야", value: "IP 팝업 · 프로세스 설계" },
                  { label: "툴", value: "PS · AI · Excel · PPT · Power BI" },
                  { label: "사이드", value: "굿즈 기획 · 제작 · 판매" },
                  { label: "위치", value: "Seoul, Korea" },
                ].map((item) => (
                  <div key={item.label} className="border border-[#e5e5e5] rounded-lg p-4">
                    <p className="text-[#888888] text-xs font-mono mb-1">{item.label}</p>
                    <p className="text-sm font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 Planning - bg A */}
      <section className="w-full bg-[#f9f9f7] py-24">
        <div className="px-8 md:px-16 max-w-7xl mx-auto">
          <div className="flex gap-8 md:gap-16 flex-col md:flex-row">
            <div className="md:w-48 shrink-0">
              <p className="font-mono text-[#f97316] text-xs tracking-widest">02</p>
              <p className="font-mono text-[#888888] text-xs mt-1">Planning</p>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-6">이벤트 기획</h2>
              <p className="text-[#555555] leading-relaxed mb-8">
                IP 라이선스 팝업부터 브랜드 체험 이벤트까지, 컨셉 기획·예산 운영·현장 총괄의
                전 사이클을 책임지며 운영했습니다.
              </p>

              {/* 팝업 현장 사진 */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-[#e5e5e5]">
                  <img src="/popup-jeju.png" alt="제주공항 K-헤리티지 & Disney 팝업" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-[#e5e5e5]">
                  <img src="/popup-cookie.png" alt="쿠키런 Cookie & More 팝업" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "토이스토리5 팝업",
                    sub: "성수 · 2026.06",
                    desc: "Disney/Pixar 라이선스 팝업. 자체 제작 토이 카메라 + DIY 키캡 키링 기획. 컨셉 설계부터 상품 개발, 현장 운영까지 총괄.",
                    tags: ["IP 기획", "상품 개발", "현장 운영"],
                  },
                  {
                    title: "주토피아2 팝업",
                    sub: "잠실 · 2026.01",
                    desc: "Disney IP 팝업스토어 기획 및 운영보고서 작성. 방문객 응대 체계, 매출 추적 시스템 구축.",
                    tags: ["팝업 운영", "KPI 관리", "운영 보고"],
                  },
                  {
                    title: "K-헤리티지 팝업",
                    sub: "제주공항 · 2026.01",
                    desc: "K-헤리티지·주토피아2 복합 팝업. 공항 입점 특수성을 반영한 VMD 및 운영 매뉴얼 PPT 작성.",
                    tags: ["VMD", "매뉴얼 작성", "복합 기획"],
                  },
                  {
                    title: "쿠키런 〈쿠키앤모어〉 팝업",
                    sub: "롯데월드몰 · 2026.05",
                    desc: "데브시스터즈 IP 팝업. 운영안 수립부터 재고 시스템 세팅, 매출 정산까지 전 과정 담당. 실시간 품절현황 공유 페이지 직접 제작(Next.js + Supabase).",
                    tags: ["운영 기획", "재고 시스템", "매출 정산"],
                  },
                  {
                    title: "Michelin · Caterpillar 굿즈",
                    sub: "싸이들 · 2022–2025",
                    desc: "현지 생산·수입 혼합형 상품 운영 및 팝업스토어 사업화 추진. 글로벌 브랜드 굿즈 기획·소싱·판매 전 과정 담당.",
                    tags: ["굿즈 기획", "글로벌 소싱", "팝업 사업화"],
                  },
                  {
                    title: "순환 팝업 운영 체계",
                    sub: "연간 기획",
                    desc: "팝업스토어 기획·운영 표준화. 체크리스트, 매뉴얼, 데이터 추적 시스템을 내재화해 반복 가능한 구조로 만듦.",
                    tags: ["프로세스 설계", "표준화", "매뉴얼"],
                  },
                ].map((item) => (
                  <div key={item.title} className="border border-[#e5e5e5] rounded-xl p-6 hover:border-[#f97316]/50 transition-colors bg-white">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold">{item.title}</h3>
                      <span className="text-xs text-[#888888] font-mono shrink-0 ml-2">{item.sub}</span>
                    </div>
                    <p className="text-[#555555] text-sm leading-relaxed mb-4">{item.desc}</p>
                    <div className="flex gap-2 flex-wrap">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 bg-[#efefed] text-[#888888] rounded font-mono">{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 Operations - bg B */}
      <section className="w-full bg-white py-24">
        <div className="px-8 md:px-16 max-w-7xl mx-auto">
          <div className="flex gap-8 md:gap-16 flex-col md:flex-row">
            <div className="md:w-48 shrink-0">
              <p className="font-mono text-[#f97316] text-xs tracking-widest">03</p>
              <p className="font-mono text-[#888888] text-xs mt-1">Operations</p>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-6">리테일 운영</h2>
              <p className="text-[#555555] leading-relaxed mb-8">
                상설 매장 2곳(삼청·행궁)의 일상 운영과 데이터 기반 의사결정을 담당합니다.
                사람에 의존하는 구조를 시스템으로 전환하는 것이 핵심 목표입니다.
              </p>
              {/* 운영 프로세스 플로우 */}
              <div className="mb-10">
                <p className="text-xs font-mono text-[#888888] tracking-widest mb-5 uppercase">Daily Operation Flow</p>
                <div className="grid grid-cols-5 gap-2">
                  {[
                    { step: "01", label: "발주·재고", desc: "ERP 기반 발주 요청 → 입고 확인" },
                    { step: "02", label: "입고 검수", desc: "수량 확인 거래명세서 대조" },
                    { step: "03", label: "진열·VMD", desc: "디스플레이 매장 세팅" },
                    { step: "04", label: "매출 수집", desc: "5개 채널 자동 수집" },
                    { step: "05", label: "분석·리포트", desc: "KPI 추적 임원 보고" },
                  ].map((item, i, arr) => (
                    <div key={item.step} className="relative flex flex-col items-center">
                      <div className="w-full border border-[#f97316]/30 rounded-xl p-3 bg-[#f97316]/5 text-center">
                        <span className="text-xs font-bold text-[#f97316] block mb-1">{item.step}</span>
                        <p className="text-xs font-semibold text-[#0a0a0a] mb-1">{item.label}</p>
                        <p className="text-[10px] text-[#888888] leading-tight">{item.desc}</p>
                      </div>
                      {i < arr.length - 1 && (
                        <span className="absolute -right-1.5 top-4 text-[#e5e5e5] text-sm z-10">›</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {[
                  { num: "2", label: "상설 매장" },
                  { num: "6+", label: "팝업 운영 경험" },
                  { num: "매일", label: "매출 데이터 수집·분석" },
                ].map((stat) => (
                  <div key={stat.label} className="border border-[#e5e5e5] rounded-xl p-6 text-center bg-[#f9f9f7]">
                    <p className="text-3xl font-bold text-[#f97316] mb-2">{stat.num}</p>
                    <p className="text-sm text-[#555555]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 Data - bg A */}
      <section className="w-full bg-[#f9f9f7] py-24">
        <div className="px-8 md:px-16 max-w-7xl mx-auto">
          <div className="flex gap-8 md:gap-16 flex-col md:flex-row">
            <div className="md:w-48 shrink-0">
              <p className="font-mono text-[#f97316] text-xs tracking-widest">04</p>
              <p className="font-mono text-[#888888] text-xs mt-1">Data</p>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-6">데이터 & 분석</h2>
              <p className="text-[#555555] leading-relaxed mb-8">
                감이 아닌 숫자로 의사결정합니다. 매출·재고·방문 데이터를 직접 수집하고
                대시보드로 시각화해 팀과 경영진이 빠르게 판단할 수 있도록 만듭니다.
              </p>

              {/* Power BI 대시보드 스크린샷 */}
              <div className="rounded-xl overflow-hidden border border-[#e5e5e5] mb-6">
                <img src="/dashboard-powerbi.png" alt="Weekly Report Dashboard — Power BI" className="w-full" />
                <p className="text-xs text-[#888888] font-mono px-4 py-2 bg-white">Weekly Report Dashboard — Power BI · Google Sheets 연동</p>
              </div>

              {/* 쿠팡 리테일 하이라이트 */}
              <div className="border border-[#f97316]/30 rounded-xl p-6 bg-[#f97316]/5 mb-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">🛒</span>
                  <div>
                    <p className="text-xs font-mono text-[#888888] tracking-widest mb-1">쿠팡 리테일 · OHL 파트 · 2024–2025</p>
                    <h3 className="font-bold mb-2">20만 개 상품 E2E 데이터 관리</h3>
                    <p className="text-[#555555] text-sm leading-relaxed">
                      홈·키친·레저(OHL) 카테고리 20만 개 상품의 온보딩부터 인스탁까지 전 프로세스를 데이터로 시각화·관리.
                      소싱 전략 수립, 셀렉션 플래닝, 프로세스 병목 제거, Playbook 설계까지 e2e 운영.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "위클리 매출 대시보드",
                    desc: "Top 상품, 판매 부진 상품, 시간대별 매출, 재고 현황을 자동 수집·시각화. Power BI + Google Sheets 연동.",
                    icon: "📊",
                  },
                  {
                    title: "매출 자동 수집 시스템",
                    desc: "5개 매출원(POS, 가챠머신, AI사진기, 네컷, 키오스크)에서 매일 자동 수집 후 DB 저장까지 자동화.",
                    icon: "🤖",
                  },
                  {
                    title: "재고 현황 추적",
                    desc: "이카운트 ERP 기반 실시간 재고 조회. 악성재고 감지, 발주 누락 알림 체계 구축.",
                    icon: "📦",
                  },
                  {
                    title: "임원 보고서 자동화",
                    desc: "주간 데이터를 SCQA 구조로 요약해 의사결정 가능한 형태로 변환. 보고 시간 대폭 단축.",
                    icon: "📋",
                  },
                ].map((item) => (
                  <div key={item.title} className="border border-[#e5e5e5] rounded-xl p-6 hover:border-[#f97316]/50 transition-colors bg-white">
                    <span className="text-2xl mb-4 block">{item.icon}</span>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-[#555555] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 AI - bg B */}
      <section className="w-full bg-white py-24">
        <div className="px-8 md:px-16 max-w-7xl mx-auto">
          <div className="flex gap-8 md:gap-16 flex-col md:flex-row">
            <div className="md:w-48 shrink-0">
              <p className="font-mono text-[#f97316] text-xs tracking-widest">05</p>
              <p className="font-mono text-[#888888] text-xs mt-1">AI</p>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-6">AI 에이전트 설계 & 운영</h2>
              <p className="text-[#555555] leading-relaxed mb-8">
                단순히 AI를 사용하는 것이 아니라, 내 업무 구조를 에이전트가 기억하고 실행하고
                검증하는 Harness를 직접 설계합니다. 비개발자임에도 OpenClaw 기반 에이전트를
                직접 설계·운영하며 업무와 개인 루틴 모두를 자동화했습니다.
              </p>

              {/* Before / After + 대시보드 */}
              <div className="grid md:grid-cols-3 gap-4 mb-8 items-stretch">
                <div className="border border-[#e5e5e5] rounded-xl p-6 bg-white text-center flex flex-col justify-center">
                  <p className="font-mono text-xs text-[#888888] mb-2 tracking-widest">BEFORE</p>
                  <p className="text-4xl font-black text-[#cccccc] mb-2">15분+</p>
                  <p className="text-sm text-[#888888]">매일 5개 사이트 수동 접속·로그인·합산</p>
                </div>
                <div className="border border-[#f97316]/40 rounded-xl p-6 bg-[#f97316]/5 text-center flex flex-col justify-center">
                  <p className="font-mono text-xs text-[#f97316] mb-2 tracking-widest">AFTER</p>
                  <p className="text-4xl font-black text-[#f97316] mb-2">0초</p>
                  <p className="text-sm text-[#555555]">슬랙 한 줄 트리거, 또는 21:10 자동 크론</p>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e5e5e5] bg-white flex flex-col">
                  <div className="flex-1 overflow-hidden">
                    <img src="/dashboard-sales.png" alt="팝업 매출 자동 수집 대시보드" className="w-full h-full object-cover object-top" />
                  </div>
                  <p className="text-[10px] text-[#888888] font-mono px-3 py-2 shrink-0">실시간 수집 대시보드</p>
                </div>
              </div>

              {/* 스킬 시스템 */}
              <div className="border border-[#e5e5e5] rounded-xl p-6 bg-white mb-6">
                <p className="font-mono text-xs text-[#f97316] mb-3 tracking-widest">AI WORKFLOW DESIGN</p>
                <h3 className="font-bold mb-3">반복 업무를 구조화하다</h3>
                <p className="text-sm text-[#555555] leading-relaxed mb-5">
                  단순 프롬프트 입력이 아닌, 반복 업무의 절차와 판단 기준을 구조화하고 AI에게 위임하는 설계까지.
                  매일 처음부터 설명해야 했던 업무를 스킬 파일로 문서화하면, 한 줄 트리거로 실행됩니다.
                  실패 케이스가 스킬에 누적될수록 AI는 더 적은 설명으로 더 정확하게 동작합니다.
                </p>
                <div className="space-y-2 font-mono text-sm">
                  {[
                    { name: "sales-collection.md", desc: "5개 사이트 매출 수집 전체 절차 + 실패 케이스 가이드" },
                    { name: "morning-briefing.md", desc: "아침 브리핑 생성 기준 · 우선순위 판단 규칙" },
                    { name: "meeting-notes.md", desc: "회의록 → 노션 정리 형식 · 필수 필드 정의" },
                    { name: "report.md", desc: "업무일지 · 토큰 회고 양식 · SCQA 보고 구조" },
                  ].map((item) => (
                    <div key={item.name} className="flex gap-3 items-start">
                      <span className="text-[#f97316] shrink-0">$</span>
                      <div>
                        <span className="text-[#0a0a0a]">{item.name}</span>
                        <span className="text-[#888888] ml-2">— {item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 에이전트 두 영역 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border border-[#e5e5e5] rounded-xl p-6 bg-white">
                  <p className="font-mono text-xs text-[#f97316] mb-3 tracking-widest">WORK AGENT</p>
                  <h3 className="font-bold mb-4">업무 에이전트</h3>
                  <div className="space-y-2 font-mono text-sm">
                    {[
                      "매일 21:10 → 5개 매출원 자동 수집 + DB",
                      "매일 08:00 → 아침 브리핑 자동 생성",
                      "매일 22:00 → 업무일지 자동 작성",
                      "재고 이상 · 발주 누락 감지 알림",
                      "회의록 → 노션 자동 정리 및 아카이빙",
                    ].map((item) => (
                      <div key={item} className="flex gap-2">
                        <span className="text-[#f97316]">→</span>
                        <span className="text-[#555555]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border border-[#e5e5e5] rounded-xl p-6 bg-white">
                  <p className="font-mono text-xs text-[#f97316] mb-3 tracking-widest">PERSONAL AGENT</p>
                  <h3 className="font-bold mb-4">개인 에이전트</h3>
                  <div className="space-y-2 font-mono text-sm">
                    {[
                      "업무 지시사항 자동 기록 및 트래킹",
                      "카카오톡 대화 → 노션 분석 기록",
                      "이메일 · 메시지 요약 및 핵심 추출",
                      "일정 · 할 일 자동 리마인드",
                      "임원 보고서 SCQA 구조 자동 초안",
                    ].map((item) => (
                      <div key={item} className="flex gap-2">
                        <span className="text-[#f97316]">→</span>
                        <span className="text-[#555555]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border border-[#f97316]/30 bg-[#f97316]/5 rounded-xl p-5">
                <p className="text-sm text-[#555555] leading-relaxed">
                  <span className="font-semibold text-[#0a0a0a]">비개발자가 에이전트를 설계한다는 것</span> —
                  코드를 짜는 것이 아니라 업무 구조를 절차로 정의하고, 실행 기준을 세우고,
                  결과를 검증하는 Harness를 만드는 일입니다.
                  반복되는 판단을 에이전트에게 위임하고, 나는 예외와 의사결정에 집중합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 Projects - bg A */}
      <section className="w-full bg-[#f9f9f7] py-24">
        <div className="px-8 md:px-16 max-w-7xl mx-auto">
          <div className="flex gap-8 md:gap-16 flex-col md:flex-row">
            <div className="md:w-48 shrink-0">
              <p className="font-mono text-[#f97316] text-xs tracking-widest">06</p>
              <p className="font-mono text-[#888888] text-xs mt-1">Projects</p>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-6">주요 프로젝트</h2>

              {/* 현재 프로젝트 */}
              <div className="space-y-4 mb-10">
                {[
                  {
                    title: "Smore Ops — 매장 운영 플랫폼",
                    period: "2026",
                    desc: "기획 및 운영 주도. 입고검수, 가챠머신 관리, 매장 간 재고이동, 매출 대시보드를 포함한 리테일 운영 통합 플랫폼. Next.js + Supabase 기반.",
                    highlight: true,
                  },
                  {
                    title: "토이스토리5 팝업 기획",
                    period: "2026.06",
                    desc: "Disney/Pixar 라이선스 팝업 전체 기획. 자체 제작 굿즈(토이 카메라, DIY 키캡 키링) 개발 포함.",
                    highlight: false,
                  },
                  {
                    title: "Smore 상품 매뉴얼 사이트",
                    period: "2026",
                    desc: "매장 운영 가이드, 클레임 대응 매뉴얼을 웹사이트로 구축. Next.js + Vercel 배포. 비개발자가 직접 기획·내용을 총괄.",
                    highlight: false,
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className={`border rounded-xl p-6 ${item.highlight ? "border-[#f97316]/50 bg-[#f97316]/5" : "border-[#e5e5e5] bg-white"}`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold">{item.title}</h3>
                      <span className="text-xs text-[#888888] font-mono shrink-0 ml-4">{item.period}</span>
                    </div>
                    <p className="text-[#555555] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* 전략 기획 프로젝트 */}
              <p className="text-xs font-mono text-[#888888] tracking-widest mb-4 uppercase">Strategy Consulting</p>
              <div className="space-y-4">
                {[
                  {
                    title: "CBE One-Stop Service (SHIP-NE)",
                    sub: "트랜스코스모스코리아 · 2025.06",
                    desc: "CJ대한통운과 협업, 글로벌 브랜드의 한국 시장 진입을 위한 Cross-Border E-Commerce One-Stop Service 구축. 서비스 모델·제안서 기획 총괄, OMS–WMS–VOC 통합 프로세스 설계 및 협업사(CJ·TCI) 간 역할 정립.",
                    outcome: "CJ대한통운 × TCK CBE 협력 MOU 체결 (2025.10)",
                    tags: ["CBE", "프로세스 설계", "MOU", "PM"],
                  },
                  {
                    title: "Shiseido Japan VOC Insight",
                    sub: "트랜스코스모스코리아 · 2025.06",
                    desc: "일본에서 강한 브랜드 체험을 가진 한국 고객의 '여행 후 재구매 단절' 원인을 VOC 분석·소비자 리뷰 데이터로 규명. 고객 구매 여정 설계 및 데이터 기반 마케팅 전략 수립으로 프로젝트 수주.",
                    outcome: "시세이도재팬 한국 이커머스 진출용 실행형 캠페인 모델 제시·수주",
                    tags: ["VOC 분석", "구매 여정 설계", "마케팅 전략"],
                  },
                  {
                    title: "Pokémon Korea Pop-up & EC Operation",
                    sub: "컨설팅 PM · 2025.06",
                    desc: "Pokémon Korea IP상품 리테일 비즈니스 확장을 위한 온·오프라인 옴니채널 운영 모델 기획·제안. 가차형 팝업스토어 판매 구조 특성을 반영해 운영 인력·재고·물류·MD 전체 체계 설계 및 컨설팅 PM 수행.",
                    outcome: "팝업스토어 운영 프로세스 및 EC 통합관리 체계 실행 테스트 진행",
                    tags: ["팝업 컨설팅", "EC 운영", "옴니채널", "물류 설계"],
                  },
                ].map((item) => (
                  <div key={item.title} className="border border-[#e5e5e5] rounded-xl p-6 bg-white">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold">{item.title}</h3>
                      <span className="text-xs text-[#888888] font-mono shrink-0 ml-4">{item.sub}</span>
                    </div>
                    <p className="text-[#555555] text-sm leading-relaxed mb-3">{item.desc}</p>
                    <p className="text-xs text-[#f97316] font-mono mb-4">→ {item.outcome}</p>
                    <div className="flex gap-2 flex-wrap">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 bg-[#efefed] text-[#888888] rounded font-mono">{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - bg B */}
      <footer className="w-full bg-white border-t border-[#e5e5e5] py-12">
        <div className="px-8 md:px-16 max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-4">
          <div>
            <p className="font-mono text-[#f97316] text-sm">JIEUN SEO</p>
            <p className="text-[#888888] text-xs mt-1">seojieun22@gmail.com</p>
          </div>
          <p className="font-mono text-xs text-[#888888]">© 2026</p>
        </div>
      </footer>
    </main>
  );
}
