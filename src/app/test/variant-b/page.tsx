'use client';

import { useState, useEffect } from 'react';

export default function VariantB() {
  const [liveCount, setLiveCount] = useState(23);
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 34,
    seconds: 12,
  });

  // 실시간 가입자 수 시뮬레이션
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount((prev) => {
        const change = Math.floor(Math.random() * 3) - 1; // -1, 0, 1
        return Math.max(15, Math.min(50, prev + change));
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // 타이머 시뮬레이션
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCTAClick = (source: string) => {
    // CTA 버튼 클릭 로그 - Variant B
    console.log(`[CTA Variant B] ${source}에서 버튼이 클릭되었습니다.`, {
      timestamp: new Date().toISOString(),
      action: 'cta_button_click',
      variant: 'comprehensive_improvement',
      clickSource: source,
      liveCount,
    });
    
    alert(`${source}에서 버튼이 클릭되었습니다!`);
  };

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero 섹션 */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-4 text-sm text-gray-500">
            A/B 테스트 Variant B: 종합 개선안
          </div>
          
          {/* 헤드라인 */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            30일 무료로 시작하고,
            <br />
            <span className="text-blue-600">더 많은 고객을 확보하세요</span>
          </h1>
          
          {/* 부제목 */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            신용카드 불필요 · 언제든 취소 가능 · 모든 기능 무제한
          </p>
          
          {/* 신뢰 배지 */}
          <div className="flex justify-center items-center gap-6 mb-8 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="font-semibold text-gray-700">4.8/5.0</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">👥</span>
              <span className="font-semibold text-gray-700">10,000+ 사용자</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <span className="font-semibold text-gray-700">보안 인증</span>
            </div>
          </div>
          
          {/* 주요 CTA 버튼 */}
          <div className="mb-4">
            <button
              onClick={() => handleCTAClick('Hero')}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-6 px-12 rounded-xl shadow-2xl transition-all duration-200 transform hover:scale-105 active:scale-95 text-xl flex items-center gap-3 mx-auto relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
              <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full absolute -top-2 -right-2 animate-pulse">
                무료
              </span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              30일 무료로 시작하기
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
          
          {/* CTA 보조 메시지 */}
          <p className="text-sm text-gray-500">
            신용카드 불필요 · 5분이면 시작
          </p>
          
          {/* 실시간 활동 표시 */}
          <div className="mt-6 text-sm text-gray-600">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              지금 이 순간 <span className="font-bold text-green-600">{liveCount}명</span>이 가입 중
            </span>
          </div>
        </div>
      </section>

      {/* 가치 제안 섹션 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            왜 선택해야 할까요?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl text-center transform hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">빠른 시작</h3>
              <p className="text-gray-600">5분 안에 설정 완료</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl text-center transform hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">비용 절감</h3>
              <p className="text-gray-600">첫 30일 무료</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl text-center transform hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">성장 가속</h3>
              <p className="text-gray-600">평균 3배 빠른 고객 확보</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl text-center transform hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">안전한 보안</h3>
              <p className="text-gray-600">엔터프라이즈급 보안</p>
            </div>
          </div>
        </div>
      </section>

      {/* 소셜 증명 섹션 */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            이미 많은 사람들이 시작했습니다
          </h2>
          
          {/* 통계 */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl text-center shadow-lg">
              <div className="text-5xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600 font-semibold">활성 사용자</div>
            </div>
            <div className="bg-white p-8 rounded-xl text-center shadow-lg">
              <div className="text-5xl font-bold text-yellow-500 mb-2">4.8</div>
              <div className="text-gray-600 font-semibold">평균 평점</div>
              <div className="text-yellow-400 text-xl mt-2">⭐⭐⭐⭐⭐</div>
            </div>
            <div className="bg-white p-8 rounded-xl text-center shadow-lg">
              <div className="text-5xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-semibold">업타임</div>
            </div>
          </div>

          {/* 고객 후기 */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
                  김
                </div>
                <div>
                  <div className="font-bold">김철수</div>
                  <div className="text-sm text-gray-500">스타트업 CEO</div>
                </div>
              </div>
              <p className="text-gray-600">&quot;5분 만에 시작했고, 첫 달에 고객이 3배 늘었어요!&quot;</p>
              <div className="text-yellow-400 mt-2">⭐⭐⭐⭐⭐</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
                  이
                </div>
                <div>
                  <div className="font-bold">이영희</div>
                  <div className="text-sm text-gray-500">마케팅 디렉터</div>
                </div>
              </div>
              <p className="text-gray-600">&quot;무료 체험으로 모든 기능을 테스트할 수 있어서 좋았어요.&quot;</p>
              <div className="text-yellow-400 mt-2">⭐⭐⭐⭐⭐</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
                  박
                </div>
                <div>
                  <div className="font-bold">박민수</div>
                  <div className="text-sm text-gray-500">비즈니스 오너</div>
                </div>
              </div>
              <p className="text-gray-600">&quot;비용 대비 효과가 정말 좋아요. 강력 추천합니다!&quot;</p>
              <div className="text-yellow-400 mt-2">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            자주 묻는 질문
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Q. 신용카드가 필요한가요?</h3>
              <p className="text-gray-600">A. 아니요, 무료로 시작할 때는 신용카드가 필요하지 않습니다. 언제든지 취소할 수 있습니다.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Q. 언제든지 취소할 수 있나요?</h3>
              <p className="text-gray-600">A. 네, 언제든지 취소할 수 있으며 추가 비용은 없습니다. 취소 후에도 남은 기간 동안은 계속 사용할 수 있습니다.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Q. 무료 체험 기간은 얼마나 되나요?</h3>
              <p className="text-gray-600">A. 첫 30일 동안 무료로 모든 기능을 사용할 수 있습니다. 체험 기간 중에는 결제 정보를 요청하지 않습니다.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Q. 어떤 기능을 사용할 수 있나요?</h3>
              <p className="text-gray-600">A. 무료 체험 기간 동안 모든 프리미엄 기능을 무제한으로 사용할 수 있습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 최종 CTA 섹션 */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            30일 무료 체험으로 모든 기능을 경험해보세요
          </p>
          
          {/* 긴급성 배너 */}
          <div className="bg-yellow-400 text-yellow-900 px-6 py-3 rounded-lg mb-8 inline-block font-bold">
            <span>⏰ 오늘만 특가: 첫 30일 무료</span>
            <span className="ml-4">
              남은 시간: {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
            </span>
          </div>
          
          {/* 최종 CTA 버튼 */}
          <div className="mb-6">
            <button
              onClick={() => handleCTAClick('최종 CTA')}
              className="bg-white text-blue-600 font-bold py-6 px-12 rounded-xl shadow-2xl transition-all duration-200 transform hover:scale-105 active:scale-95 text-xl flex items-center gap-3 mx-auto relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full absolute -top-2 -right-2 animate-pulse">
                무료
              </span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              30일 무료로 시작하기
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
          
          {/* 신뢰 메시지 */}
          <div className="flex justify-center items-center gap-6 flex-wrap text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              신용카드 불필요
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              취소는 언제든지 가능
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              모든 기능 무제한
            </span>
          </div>
        </div>
      </section>

      {/* 스티키 하단 CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-2xl p-4 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden md:block">
            <div className="font-bold text-gray-900">30일 무료로 시작하세요</div>
            <div className="text-sm text-gray-600">신용카드 불필요 · 언제든 취소 가능</div>
          </div>
          <button
            onClick={() => handleCTAClick('스티키 하단')}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 text-lg flex items-center gap-2 flex-1 md:flex-initial justify-center"
          >
            <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
              무료
            </span>
            무료로 시작하기
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>

      {/* 하단 여백 (스티키 버튼 공간) */}
      <div className="h-24"></div>
    </main>
  );
}

