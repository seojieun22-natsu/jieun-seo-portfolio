export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-5 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-[#262626]">
        <span className="font-mono text-sm text-[#f97316]">JIEUN SEO</span>
        <span className="font-mono text-xs text-[#404040]">MD · RETAIL · EVENTS</span>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24 px-8 md:px-16 max-w-5xl mx-auto">
        <p className="font-mono text-xs text-[#f97316] mb-6 tracking-widest">PORTFOLIO 2026</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
          Jieun Seo
        </h1>
        <p className="text-xl md:text-2xl text-[#a0a0a0] max-w-2xl leading-relaxed">
          오프라인 경험을 기획하고, 데이터로 운영하며,<br />
          사람들이 기억하는 순간을 만듭니다.
        </p>
        <div className="mt-12 flex gap-3 flex-wrap">
          <span className="px-4 py-2 border border-[#f97316] text-[#f97316] text-sm font-mono rounded-full">Retail Operations</span>
          <span className="px-4 py-2 border border-[#404040] text-[#a0a0a0] text-sm font-mono rounded-full">Event Planning</span>
          <span className="px-4 py-2 border border-[#404040] text-[#a0a0a0] text-sm font-mono rounded-full">Data Analytics</span>
          <span className="px-4 py-2 border border-[#404040] text-[#a0a0a0] text-sm font-mono rounded-full">AI Workflow</span>
        </div>
      </section>

      <div className="border-t border-[#262626]" />

      {/* 01 나는 누구인가 */}
      <section className="py-24 px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex gap-8 md:gap-16 flex-col md:flex-row">
          <div className="md:w-48 shrink-0">
            <p className="font-mono text-[#f97316] text-xs tracking-widest">01</p>
            <p className="font-mono text-[#404040] text-xs mt-1">About</p>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-6">나는 누구인가</h2>
            <p className="text-[#a0a0a0] leading-relaxed mb-6">
              저는 오프라인 공간에서 브랜드 경험을 기획하고 운영하는 MD·리테일 매니저입니다.
              아이디어플랩(SMORE)에서 상설 매장 2곳과 다수의 팝업스토어를 운영하며,
              기획부터 현장 운영, 데이터 분석까지 전 과정을 직접 담당했습니다.
            </p>
            <p className="text-[#a0a0a0] leading-relaxed">
              BTS 팬덤 커뮤니티에서 쌓은 K-POP 인사이트와 실무 운영 경험을 바탕으로,
              아티스트와 팬이 만나는 최고의 오프라인 경험을 만들고 싶습니다.
            </p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "현직", value: "MD / Retail Manager" },
                { label: "소속", value: "IdeaPLAB (SMORE)" },
                { label: "운영 매장", value: "상설 2 + 팝업 다수" },
                { label: "K-POP", value: "BTS ARMY" },
                { label: "트위터", value: "1.5M 팔로워" },
                { label: "위치", value: "Seoul, Korea" },
              ].map((item) => (
                <div key={item.label} className="border border-[#262626] rounded-lg p-4">
                  <p className="text-[#404040] text-xs font-mono mb-1">{item.label}</p>
                  <p className="text-sm font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#262626]" />

      {/* 02 기획력 */}
      <section className="py-24 px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex gap-8 md:gap-16 flex-col md:flex-row">
          <div className="md:w-48 shrink-0">
            <p className="font-mono text-[#f97316] text-xs tracking-widest">02</p>
            <p className="font-mono text-[#404040] text-xs mt-1">Planning</p>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-6">이벤트 기획</h2>
            <p className="text-[#a0a0a0] leading-relaxed mb-8">
              IP 라이선스 팝업부터 브랜드 체험 이벤트까지, 컨셉 기획·예산 운영·현장 총괄의
              전 사이클을 책임지며 운영했습니다.
            </p>
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
                  title: "순환 팝업 운영 체계",
                  sub: "연간 기획",
                  desc: "팝업스토어 기획·운영 표준화. 체크리스트, 매뉴얼, 데이터 추적 시스템을 내재화해 반복 가능한 구조로 만듦.",
                  tags: ["프로세스 설계", "표준화", "매뉴얼"],
                },
              ].map((item) => (
                <div key={item.title} className="border border-[#262626] rounded-xl p-6 hover:border-[#f97316]/50 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold">{item.title}</h3>
                    <span className="text-xs text-[#404040] font-mono shrink-0 ml-2">{item.sub}</span>
                  </div>
                  <p className="text-[#a0a0a0] text-sm leading-relaxed mb-4">{item.desc}</p>
                  <div className="flex gap-2 flex-wrap">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-[#1a1a1a] text-[#404040] rounded font-mono">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#262626]" />

      {/* 03 리테일 운영 */}
      <section className="py-24 px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex gap-8 md:gap-16 flex-col md:flex-row">
          <div className="md:w-48 shrink-0">
            <p className="font-mono text-[#f97316] text-xs tracking-widest">03</p>
            <p className="font-mono text-[#404040] text-xs mt-1">Operations</p>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-6">리테일 운영</h2>
            <p className="text-[#a0a0a0] leading-relaxed mb-8">
              상설 매장 2곳(삼청·행궁)의 일상 운영과 데이터 기반 의사결정을 담당합니다.
              사람에 의존하는 구조를 시스템으로 전환하는 것이 핵심 목표입니다.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { num: "2", label: "상설 매장" },
                { num: "3+", label: "팝업 운영 경험" },
                { num: "매일", label: "매출 데이터 수집·분석" },
              ].map((stat) => (
                <div key={stat.label} className="border border-[#262626] rounded-xl p-6 text-center">
                  <p className="text-3xl font-bold text-[#f97316] mb-2">{stat.num}</p>
                  <p className="text-sm text-[#a0a0a0]">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {[
                "재고 관리 · 발주 프로세스 운영 (이카운트 ERP)",
                "매출 KPI 추적 및 주간 리포트 작성",
                "VMD 기획 및 매장 디스플레이 운영",
                "팀원 교육 및 매장 운영 매뉴얼 작성",
                "외부 업체·벤더 커뮤니케이션 및 계약 관리",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-[#f97316] mt-1">→</span>
                  <p className="text-[#a0a0a0] text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#262626]" />

      {/* 04 데이터 */}
      <section className="py-24 px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex gap-8 md:gap-16 flex-col md:flex-row">
          <div className="md:w-48 shrink-0">
            <p className="font-mono text-[#f97316] text-xs tracking-widest">04</p>
            <p className="font-mono text-[#404040] text-xs mt-1">Data</p>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-6">데이터 & 분석</h2>
            <p className="text-[#a0a0a0] leading-relaxed mb-8">
              감이 아닌 숫자로 의사결정합니다. 매출·재고·방문 데이터를 직접 수집하고
              대시보드로 시각화해 팀과 경영진이 빠르게 판단할 수 있도록 만듭니다.
            </p>
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
                <div key={item.title} className="border border-[#262626] rounded-xl p-6 hover:border-[#f97316]/50 transition-colors">
                  <span className="text-2xl mb-4 block">{item.icon}</span>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-[#a0a0a0] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#262626]" />

      {/* 05 AI 활용 */}
      <section className="py-24 px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex gap-8 md:gap-16 flex-col md:flex-row">
          <div className="md:w-48 shrink-0">
            <p className="font-mono text-[#f97316] text-xs tracking-widest">05</p>
            <p className="font-mono text-[#404040] text-xs mt-1">AI</p>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-6">AI 워크플로우</h2>
            <p className="text-[#a0a0a0] leading-relaxed mb-8">
              비개발자이지만 AI 에이전트를 직접 운영하며 업무를 자동화합니다.
              반복 업무를 시스템화해 중요한 일에 집중하는 구조를 만드는 데 관심이 많습니다.
            </p>
            <div className="bg-[#111111] border border-[#262626] rounded-xl p-6 font-mono text-sm">
              <p className="text-[#404040] mb-4"># 자동화된 업무 목록</p>
              {[
                "매일 21:10 → 5개 매출원 자동 수집 + DB 저장",
                "매일 08:00 → 오늘 할 일 아침 브리핑 자동 생성",
                "매일 22:00 → 업무일지 자동 작성 + 기록",
                "이메일·메시지 요약 및 핵심 추출",
                "회의록 → 노션 자동 정리 및 아카이빙",
                "재고 이상·발주 누락 감지 알림",
              ].map((item) => (
                <div key={item} className="flex gap-3 mb-2">
                  <span className="text-[#f97316]">$</span>
                  <span className="text-[#a0a0a0]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#262626]" />

      {/* 06 주요 프로젝트 */}
      <section className="py-24 px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex gap-8 md:gap-16 flex-col md:flex-row">
          <div className="md:w-48 shrink-0">
            <p className="font-mono text-[#f97316] text-xs tracking-widest">06</p>
            <p className="font-mono text-[#404040] text-xs mt-1">Projects</p>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-6">주요 프로젝트</h2>
            <div className="space-y-6">
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
                {
                  title: "팬덤 SNS 계정 운영",
                  period: "2019 — 현재",
                  desc: "BTS 팬 트위터 계정 1.5M 팔로워 보유. 콘텐츠 기획, 팬덤 커뮤니케이션, 트렌드 분석을 통한 K-POP 인사이트 축적.",
                  highlight: false,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`border rounded-xl p-6 ${item.highlight ? "border-[#f97316]/50 bg-[#f97316]/5" : "border-[#262626]"}`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold">{item.title}</h3>
                    <span className="text-xs text-[#404040] font-mono shrink-0 ml-4">{item.period}</span>
                  </div>
                  <p className="text-[#a0a0a0] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#262626] py-12 px-8 md:px-16 max-w-5xl mx-auto">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <p className="font-mono text-[#f97316] text-sm">JIEUN SEO</p>
            <p className="text-[#404040] text-xs mt-1">seojieun22@gmail.com</p>
          </div>
          <p className="font-mono text-xs text-[#404040]">© 2026</p>
        </div>
      </footer>
    </main>
  );
}
