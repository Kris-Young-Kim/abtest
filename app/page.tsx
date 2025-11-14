'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const [showLimitations, setShowLimitations] = useState(false);

  // 노출 수는 알 수 없으므로 클릭 수를 기준으로 계산 (한계 명시)
  const variants = [
    {
      id: 'control',
      name: 'Control (기본)',
      description: '원본 버전',
      hypothesis: '기준선으로 사용되는 현재 버전',
      status: 'active',
      color: 'gray',
      clicks: 1250,
      conversions: 250,
      // 노출 수를 알 수 없어 정확한 CTR 계산 불가
      note: '노출 수 미측정으로 정확한 CTR 계산 불가',
    },
    {
      id: 'variant-1',
      name: 'Variant 1',
      description: '텍스트 변경',
      hypothesis: 'CTA 버튼 텍스트에 "무료" 키워드 추가로 클릭률 20% 증가 예상',
      status: 'active',
      color: 'blue',
      clicks: 1247,
      conversions: 312,
      note: '노출 수 미측정으로 정확한 CTR 계산 불가',
    },
    {
      id: 'variant-2',
      name: 'Variant 2',
      description: '디자인 개선 (Multivariate)',
      hypothesis: '초록색 그라데이션과 큰 버튼으로 클릭률 25% 증가 예상',
      status: 'active',
      color: 'green',
      clicks: 1856,
      conversions: 445,
      note: '여러 요소 동시 변경으로 개별 효과 파악 어려움',
      warning: 'Multivariate Test - 개별 효과 파악 불가',
    },
    {
      id: 'variant-3',
      name: 'Variant 3',
      description: '위치 변경',
      hypothesis: '상단 + 스티키 버튼으로 클릭률 30% 증가 예상',
      status: 'active',
      color: 'purple',
      clicks: 2103,
      conversions: 504,
      note: '노출 수 미측정으로 정확한 CTR 계산 불가',
    },
    {
      id: 'variant-4',
      name: 'Variant 4',
      description: '인센티브 메시지',
      hypothesis: '신뢰 요소 추가로 전환률 25% 증가 예상',
      status: 'active',
      color: 'orange',
      clicks: 1523,
      conversions: 456,
      note: '노출 수 미측정으로 정확한 CTR 계산 불가',
    },
    {
      id: 'variant-5',
      name: 'Variant 5',
      description: '레이아웃 개선',
      hypothesis: '이점, FAQ, 소셜 증명 추가로 전환률 12% 증가 예상',
      status: 'active',
      color: 'indigo',
      clicks: 1987,
      conversions: 476,
      note: '노출 수 미측정으로 정확한 CTR 계산 불가',
    },
    {
      id: 'variant-b',
      name: 'Variant B',
      description: '종합 개선안 (Multivariate)',
      hypothesis: '심리학적 트리거 + UX 최적화로 클릭률 40%, 전환률 30% 증가 예상',
      status: 'active',
      color: 'emerald',
      clicks: 2845,
      conversions: 682,
      note: '여러 요소 동시 변경으로 개별 효과 파악 어려움',
      warning: 'Multivariate Test - 개별 효과 파악 불가',
    },
  ];

  // 전환율 계산 (클릭 대비 전환)
  const calculateConversionRate = (clicks: number, conversions: number) => {
    if (clicks === 0) return 0;
    return ((conversions / clicks) * 100).toFixed(1);
  };

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
              <h1 className="text-3xl font-bold text-gray-900">A/B 테스트 분석 보고서</h1>
              <p className="text-sm text-gray-600 mt-1">무료 시작 고객 수 증가를 위한 전환율 최적화 테스트</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">예비 목표 달성률</div>
              <div className="text-4xl font-bold text-gray-900">127%</div>
              <div className="text-xs text-orange-600 font-semibold mt-1">⚠️ 통계적 유의성 확인 필요</div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 데이터 신뢰성 경고 */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3 flex-1">
              <h3 className="text-sm font-bold text-yellow-800">데이터 신뢰성 제한사항</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <ul className="list-disc list-inside space-y-1">
                  <li>노출 수(Impression)가 측정되지 않아 정확한 CTR(Click-Through Rate) 계산이 불가능합니다.</li>
                  <li>트래픽 분배 설정 오류로 인해 데이터의 신뢰성에 문제가 있을 수 있습니다.</li>
                  <li>현재 표시된 목표 달성률은 예비 결과이며, 테스트 종료 후 통계적 유의성을 반드시 확인해야 합니다.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

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
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
              <div className="text-sm text-red-600 font-semibold mb-1">트래픽 분배</div>
              <div className="text-lg font-bold text-gray-900">설정 오류 발견</div>
              <div className="text-xs text-red-600 mt-1">균등 분배 미적용</div>
            </div>
          </div>
        </section>

        {/* 분석 섹션 */}
        <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">데이터 분석</h2>
            <button
              onClick={() => setShowLimitations(!showLimitations)}
              className="text-sm text-blue-600 hover:text-blue-800 font-semibold"
            >
              {showLimitations ? '한계점 숨기기' : '측정 한계점 보기'}
            </button>
          </div>

          {showLimitations && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <h3 className="font-bold text-gray-900 mb-2">측정 한계점</h3>
              <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                <li><strong>CTR 계산 불가:</strong> 노출 수(Impression)가 측정되지 않아 정확한 클릭률(CTR) 계산이 불가능합니다.</li>
                <li><strong>전환율만 계산 가능:</strong> 현재는 클릭 수 대비 전환 수로 전환율만 계산할 수 있습니다.</li>
                <li><strong>트래픽 분배 오류:</strong> 설정 오류로 인해 각 Variant에 균등한 트래픽이 분배되지 않았을 가능성이 있습니다.</li>
                <li><strong>통계적 유의성 미확인:</strong> 현재 데이터는 예비 결과이며, 최소 샘플 사이즈 도달 및 통계적 유의성 검증이 필요합니다.</li>
              </ul>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Variant</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">설명</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">클릭 수</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">전환 수</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">전환율</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CTR</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">비고</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {variants.map((variant) => {
                  const conversionRate = calculateConversionRate(variant.clicks, variant.conversions);
                  return (
                    <tr key={variant.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-bold text-gray-900">{variant.name}</div>
                        {variant.warning && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800 mt-1">
                            ⚠️ {variant.warning}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{variant.description}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-bold text-gray-900">{variant.clicks.toLocaleString()}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-bold text-gray-900">{variant.conversions.toLocaleString()}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-bold text-blue-600">{conversionRate}%</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500 italic">계산 불가</div>
                        <div className="text-xs text-gray-400">노출 수 미측정</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-xs text-gray-500">{variant.note}</div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Variant 카드 그리드 */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">테스트 Variant 상세</h2>
            <div className="text-sm text-gray-600">
              총 <span className="font-bold text-gray-900">{variants.length}개</span> Variant 테스트 중
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {variants.map((variant) => {
              const conversionRate = calculateConversionRate(variant.clicks, variant.conversions);
              return (
                <div
                  key={variant.id}
                  className={`bg-white rounded-xl shadow-lg border-2 p-6 transition-all hover:shadow-xl ${
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

                  {variant.warning && (
                    <div className="bg-red-100 border border-red-300 rounded-lg p-2 mb-4">
                      <div className="text-xs font-semibold text-red-800">⚠️ {variant.warning}</div>
                    </div>
                  )}

                  <div className="mb-4">
                    <p className="text-sm font-semibold mb-2">가설:</p>
                    <p className="text-xs opacity-75 leading-relaxed">{variant.hypothesis}</p>
                  </div>

                  <div className="bg-white/50 rounded-lg p-4 mb-4">
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <div className="text-gray-500">클릭 수</div>
                        <div className="font-bold text-lg">{variant.clicks.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">전환 수</div>
                        <div className="font-bold text-lg">{variant.conversions.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">전환율</div>
                        <div className="font-bold text-lg text-blue-600">{conversionRate}%</div>
                      </div>
                      <div>
                        <div className="text-gray-500">CTR</div>
                        <div className="font-bold text-lg text-gray-400 italic">N/A</div>
                        <div className="text-xs text-gray-400">노출 수 미측정</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-gray-500 mb-4 italic">{variant.note}</div>

                  <Link
                    href={variant.id === 'control' ? '/' : `/test/${variant.id}`}
                    className="block w-full text-center bg-white/80 hover:bg-white text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    페이지 보기 →
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* 성과 비교 차트 */}
        <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">성과 비교 (전환율 기준)</h2>
          <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>주의:</strong> 노출 수가 측정되지 않아 CTR 비교는 불가능합니다. 아래는 전환율 기준 비교입니다.
            </p>
          </div>
          <div className="space-y-6">
            {variants.filter(v => v.id !== 'control').map((variant) => {
              const maxConversions = Math.max(...variants.filter(v => v.id !== 'control').map(v => v.conversions));
              const conversionRate = calculateConversionRate(variant.clicks, variant.conversions);
              
              return (
                <div key={variant.id} className="border-b border-gray-200 pb-4 last:border-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className={`font-bold ${getColorClasses(variant.color).split(' ')[2]}`}>
                        {variant.name}
                      </span>
                      {variant.id === 'variant-b' && (
                        <span className="bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                          최고 전환율
                        </span>
                      )}
                      {variant.warning && (
                        <span className="bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full font-semibold">
                          Multivariate
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-600">
                      전환율: <span className="font-bold">{conversionRate}%</span> | 
                      전환 수: <span className="font-bold">{variant.conversions.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>전환 수</span>
                        <span>{variant.conversions.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full ${getColorClasses(variant.color).split(' ')[0]}`}
                          style={{ width: `${(variant.conversions / maxConversions) * 100}%` }}
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
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 text-white mb-8">
          <h2 className="text-2xl font-bold mb-4">주요 인사이트</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-sm opacity-90 mb-2">최고 전환율 Variant</div>
              <div className="text-2xl font-bold">Variant B</div>
              <div className="text-sm opacity-75 mt-1">전환율 {calculateConversionRate(variants[6].clicks, variants[6].conversions)}%</div>
              <div className="text-xs opacity-60 mt-2">⚠️ Multivariate Test로 개별 효과 파악 어려움</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-sm opacity-90 mb-2">예비 개선 효과</div>
              <div className="text-2xl font-bold">+128%</div>
              <div className="text-sm opacity-75 mt-1">Control 대비 클릭 수 증가 (예비)</div>
              <div className="text-xs opacity-60 mt-2">⚠️ 통계적 유의성 확인 필요</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-sm opacity-90 mb-2">데이터 신뢰성</div>
              <div className="text-2xl font-bold">제한적</div>
              <div className="text-sm opacity-75 mt-1">노출 수 미측정, 트래픽 분배 오류</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-sm opacity-90 mb-2">통계적 유의성</div>
              <div className="text-2xl font-bold">미확인</div>
              <div className="text-sm opacity-75 mt-1">테스트 종료 후 검증 필요</div>
            </div>
          </div>
        </section>

        {/* 개선 및 향후 실험 */}
        <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">개선 및 향후 실험 방향</h2>
          
          <div className="space-y-6">
            {/* 측정 개선 */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. 측정 개선</h3>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-gray-700 mb-3">
                  <strong>향후 A/B 테스트 시에는 다음 핵심 지표가 반드시 포함된 대시보드를 사용해야 합니다:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>노출 수(Impression):</strong> 각 Variant에 노출된 사용자 수</li>
                  <li><strong>CTR (Click-Through Rate):</strong> 노출 대비 클릭률</li>
                  <li><strong>전환율 (Conversion Rate):</strong> 클릭 대비 전환률</li>
                  <li><strong>통계적 유의성 (Statistical Significance):</strong> 신뢰도 95% 기준</li>
                  <li><strong>최소 샘플 사이즈:</strong> 각 Variant당 충분한 샘플 수 확보</li>
                </ul>
              </div>
            </div>

            {/* 실험 설계 개선 */}
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. 실험 설계 개선</h3>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-gray-700 mb-3">
                  <strong>Multivariate Test의 한계:</strong>
                </p>
                <p className="text-gray-700 mb-3">
                  현재 'Variant 2'와 'Variant B'처럼 여러 요소(버튼 색상, 크기, 문구 등)를 한 번에 변경하는 테스트는 
                  어떤 변화가 성과에 영향을 미치는지 명확하게 파악하기 어렵습니다.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>권장 사항:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>한 가지 요소만 변경하는 단일 변수 테스트를 진행</li>
                  <li>예: 버튼 색상만 변경, 버튼 크기만 변경, 버튼 문구만 변경</li>
                  <li>각 요소의 개별 효과를 명확하게 파악한 후, 효과가 입증된 요소들을 조합</li>
                  <li>이를 통해 더 정확하고 신뢰할 수 있는 결과를 얻을 수 있습니다</li>
                </ul>
              </div>
            </div>

            {/* 데이터 신뢰성 개선 */}
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. 데이터 신뢰성 개선</h3>
              <div className="bg-orange-50 rounded-lg p-4">
                <p className="text-gray-700 mb-3">
                  <strong>트래픽 분배 설정 확인:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>각 Variant에 균등한 트래픽이 분배되도록 설정 확인</li>
                  <li>외부 요인(시간대, 요일, 트래픽 소스 등)의 영향을 최소화</li>
                  <li>최소 테스트 기간 및 샘플 사이즈 확보</li>
                </ul>
              </div>
            </div>

            {/* 통계적 유의성 */}
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-xl font-bold text-gray-900 mb-3">4. 통계적 유의성 확인</h3>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-gray-700 mb-3">
                  <strong>테스트 종료 후 반드시 확인해야 할 사항:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>최소 샘플 사이즈 도달 여부 확인</li>
                  <li>신뢰도 95% 기준 통계적 유의성 검증</li>
                  <li>현재 표시된 '목표 달성률 127%'는 예비 결과이며, 최종 검증 필요</li>
                  <li>통계적으로 유의한 결과만 프로덕션에 적용</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 빠른 액션 */}
        <section className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">빠른 액션</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/test/variant-b"
              className="bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold py-4 px-6 rounded-lg text-center hover:from-emerald-600 hover:to-green-700 transition-all transform hover:scale-105"
            >
              최고 성과 Variant 보기
            </Link>
            <button className="bg-blue-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-blue-700 transition-all">
              보고서 내보내기
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
