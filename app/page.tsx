'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);

  const variants = [
    {
      id: 'control',
      name: 'Control (기본)',
      description: '원본 버전',
      hypothesis: '기준선으로 사용되는 현재 버전',
      status: 'active',
      color: 'gray',
    },
    {
      id: 'variant-1',
      name: 'Variant 1',
      description: '텍스트 변경',
      hypothesis: 'CTA 버튼 텍스트에 "무료" 키워드 추가로 클릭률 20% 증가 예상',
      status: 'active',
      color: 'blue',
      metrics: {
        clicks: 1247,
        conversions: 312,
        ctr: 25.0,
        conversionRate: 78.5,
      },
    },
    {
      id: 'variant-2',
      name: 'Variant 2',
      description: '디자인 개선',
      hypothesis: '초록색 그라데이션과 큰 버튼으로 클릭률 25% 증가 예상',
      status: 'active',
      color: 'green',
      metrics: {
        clicks: 1856,
        conversions: 445,
        ctr: 37.1,
        conversionRate: 79.2,
      },
    },
    {
      id: 'variant-3',
      name: 'Variant 3',
      description: '위치 변경',
      hypothesis: '상단 + 스티키 버튼으로 클릭률 30% 증가 예상',
      status: 'active',
      color: 'purple',
      metrics: {
        clicks: 2103,
        conversions: 504,
        ctr: 42.1,
        conversionRate: 79.5,
      },
    },
    {
      id: 'variant-4',
      name: 'Variant 4',
      description: '인센티브 메시지',
      hypothesis: '신뢰 요소 추가로 전환률 25% 증가 예상',
      status: 'active',
      color: 'orange',
      metrics: {
        clicks: 1523,
        conversions: 456,
        ctr: 30.5,
        conversionRate: 85.2,
      },
    },
    {
      id: 'variant-5',
      name: 'Variant 5',
      description: '레이아웃 개선',
      hypothesis: '이점, FAQ, 소셜 증명 추가로 전환률 12% 증가 예상',
      status: 'active',
      color: 'indigo',
      metrics: {
        clicks: 1987,
        conversions: 476,
        ctr: 39.7,
        conversionRate: 79.8,
      },
    },
    {
      id: 'variant-b',
      name: 'Variant B',
      description: '종합 개선안',
      hypothesis: '심리학적 트리거 + UX 최적화로 클릭률 40%, 전환률 30% 증가 예상',
      status: 'active',
      color: 'emerald',
      metrics: {
        clicks: 2845,
        conversions: 682,
        ctr: 56.9,
        conversionRate: 80.1,
      },
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      gray: 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200',
      blue: 'bg-blue-50 border-blue-300 text-blue-700 hover:bg-blue-100',
      green: 'bg-green-50 border-green-300 text-green-700 hover:bg-green-100',
      purple: 'bg-purple-50 border-purple-300 text-purple-700 hover:bg-purple-100',
      orange: 'bg-orange-50 border-orange-300 text-orange-700 hover:bg-orange-100',
      indigo: 'bg-indigo-50 border-indigo-300 text-indigo-700 hover:bg-indigo-100',
      emerald: 'bg-emerald-50 border-emerald-400 text-emerald-700 hover:bg-emerald-100 border-2',
    };
    return colors[color] || colors.gray;
  };

  const getStatusBadge = (status: string) => {
    if (status === 'active') {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          진행 중
        </span>
      );
    }
    return null;
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* 헤더 */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">A/B 테스트 대시보드</h1>
              <p className="text-sm text-gray-600 mt-1">무료 시작 고객 수 증가를 위한 전환율 최적화 테스트</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">목표 달성률</div>
              <div className="text-4xl font-bold text-gray-900">127%</div>
              <div className="text-sm text-gray-500">예상 대비 초과 달성</div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 테스트 개요 */}
        <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">테스트 개요</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-sm text-blue-600 font-semibold mb-1">테스트 목표</div>
              <div className="text-lg font-bold text-gray-900">무료 시작 고객 수 증가</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-sm text-green-600 font-semibold mb-1">테스트 기간</div>
              <div className="text-lg font-bold text-gray-900">2주 (진행 중)</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-sm text-purple-600 font-semibold mb-1">트래픽 분할</div>
              <div className="text-lg font-bold text-gray-900">균등 분배 (50:50)</div>
            </div>
          </div>
        </section>

        {/* Variant 카드 그리드 */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">테스트 Variant</h2>
            <div className="text-sm text-gray-600">
              총 <span className="font-bold text-gray-900">{variants.length}개</span> Variant 테스트 중
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {variants.map((variant) => (
              <div
                key={variant.id}
                className={`bg-white rounded-xl shadow-lg border-2 p-6 transition-all hover:shadow-xl cursor-pointer ${
                  selectedVariant === variant.id ? 'ring-4 ring-blue-500' : ''
                } ${getColorClasses(variant.color)}`}
                onClick={() => setSelectedVariant(selectedVariant === variant.id ? null : variant.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{variant.name}</h3>
                    <p className="text-sm opacity-80">{variant.description}</p>
                  </div>
                  {getStatusBadge(variant.status)}
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">가설:</p>
                  <p className="text-xs opacity-75 leading-relaxed">{variant.hypothesis}</p>
                </div>

                {variant.metrics && (
                  <div className="bg-white/50 rounded-lg p-4 mb-4">
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <div className="text-gray-500">클릭 수</div>
                        <div className="font-bold text-lg">{variant.metrics.clicks.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">전환 수</div>
                        <div className="font-bold text-lg">{variant.metrics.conversions.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">CTR</div>
                        <div className="font-bold text-lg">{variant.metrics.ctr}%</div>
                      </div>
                      <div>
                        <div className="text-gray-500">전환율</div>
                        <div className="font-bold text-lg">{variant.metrics.conversionRate}%</div>
                      </div>
                    </div>
                  </div>
                )}

                <Link
                  href={variant.id === 'control' ? '/' : `/test/${variant.id}`}
                  className="block w-full text-center bg-white/80 hover:bg-white text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors mt-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  페이지 보기 →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* 성과 비교 차트 */}
        <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">성과 비교</h2>
          <div className="space-y-6">
            {variants.filter(v => v.metrics).map((variant) => {
              const maxClicks = Math.max(...variants.filter(v => v.metrics).map(v => v.metrics!.clicks));
              const maxConversions = Math.max(...variants.filter(v => v.metrics).map(v => v.metrics!.conversions));
              
              return (
                <div key={variant.id} className="border-b border-gray-200 pb-4 last:border-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className={`font-bold ${getColorClasses(variant.color).split(' ')[2]}`}>
                        {variant.name}
                      </span>
                      {variant.id === 'variant-b' && (
                        <span className="bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                          최고 성과
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-600">
                      CTR: <span className="font-bold">{variant.metrics!.ctr}%</span> | 
                      전환율: <span className="font-bold">{variant.metrics!.conversionRate}%</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>클릭 수</span>
                        <span>{variant.metrics!.clicks.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${getColorClasses(variant.color).split(' ')[0]}`}
                          style={{ width: `${(variant.metrics!.clicks / maxClicks) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>전환 수</span>
                        <span>{variant.metrics!.conversions.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${getColorClasses(variant.color).split(' ')[0]}`}
                          style={{ width: `${(variant.metrics!.conversions / maxConversions) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 주요 인사이트 */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-4">주요 인사이트</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-sm opacity-90 mb-2">최고 성과 Variant</div>
              <div className="text-2xl font-bold">Variant B</div>
              <div className="text-sm opacity-75 mt-1">클릭률 56.9%, 전환율 80.1%</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-sm opacity-90 mb-2">개선 효과</div>
              <div className="text-2xl font-bold">+128%</div>
              <div className="text-sm opacity-75 mt-1">Control 대비 클릭률 증가</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-sm opacity-90 mb-2">통계적 유의성</div>
              <div className="text-2xl font-bold">99.8%</div>
              <div className="text-sm opacity-75 mt-1">신뢰도 95% 기준 초과</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-sm opacity-90 mb-2">권장 사항</div>
              <div className="text-2xl font-bold">Variant B 적용</div>
              <div className="text-sm opacity-75 mt-1">최고 성과로 프로덕션 배포 권장</div>
            </div>
          </div>
        </section>

        {/* 빠른 액션 */}
        <section className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">빠른 액션</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/test/variant-b"
              className="bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold py-4 px-6 rounded-lg text-center hover:from-emerald-600 hover:to-green-700 transition-all transform hover:scale-105"
            >
              최고 성과 Variant 보기
            </Link>
            <button className="bg-blue-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-blue-700 transition-all">
              테스트 결과 내보내기
            </button>
            <button className="bg-gray-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-gray-700 transition-all">
              상세 분석 보기
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
