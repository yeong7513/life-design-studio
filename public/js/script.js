document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.getElementById('main-container');
    const header = document.querySelector('header');
    const headerElements = header.querySelectorAll('a, h1');
    const animSpeed = 0.8;
    let activeSection = null;

    const sectionsData = [
        {
            title: 'Life Design </br>Studio',
            description: '형태와 기능이 완벽한 조화를 이루는 전체적인 디자인 접근법을 추구합니다. 우리의 과정은 협력적이고 투명하며, 각 고객의 고유한 비전에 맞춤화됩니다.',
            detailContent: `
                <div class="max-w-4xl mx-auto">
                    <h2 class="text-4xl font-bold mb-8">Life Design Studio</h2>
                    <div class="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p class="text-lg mb-6">우리는 단순한 인테리어 디자인을 넘어서, 삶의 방식을 디자인합니다. 각 공간은 거주자의 라이프스타일과 가치관을 반영하며, 기능성과 아름다움이 완벽하게 조화를 이룹니다.</p>
                            <p class="text-lg mb-6">20년 이상의 경험을 바탕으로, 우리는 클래식한 우아함과 현대적 감각을 결합한 독특한 디자인 언어를 구축했습니다.</p>
                            <ul class="space-y-3 text-lg">
                                <li>• 맞춤형 디자인 컨설팅</li>
                                <li>• 3D 시각화 및 렌더링</li>
                                <li>• 프로젝트 관리 및 시공 감리</li>
                                <li>• 사후 관리 서비스</li>
                            </ul>
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000" alt="디자인 스튜디오" class="w-full h-auto rounded-lg shadow-lg">
                        </div>
                    </div>
                </div>
            `,
            imageUrl: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070'
        },
        {
            title: '인테리어 </br>솔루션',
            description: '주거 공간부터 상업 공간까지, 일관성 있고 영감을 주는 환경을 보장하는 종합적인 인테리어 디자인 솔루션을 제공합니다.',
            detailContent: `
                <div class="max-w-4xl mx-auto">
                    <h2 class="text-4xl font-bold mb-8">인테리어 솔루션</h2>
                    <div class="space-y-12">
                        <div class="grid md:grid-cols-3 gap-8">
                            <div class="text-center">
                                <h3 class="text-2xl font-semibold mb-4">주거 공간</h3>
                                <p>아파트, 단독주택, 펜트하우스까지 모든 주거 형태에 최적화된 디자인을 제공합니다.</p>
                            </div>
                            <div class="text-center">
                                <h3 class="text-2xl font-semibold mb-4">상업 공간</h3>
                                <p>오피스, 카페, 레스토랑 등 브랜드 아이덴티티를 반영한 상업 공간을 설계합니다.</p>
                            </div>
                            <div class="text-center">
                                <h3 class="text-2xl font-semibold mb-4">특수 공간</h3>
                                <p>갤러리, 전시장, 호텔 등 특별한 목적의 공간에 맞춤형 솔루션을 제공합니다.</p>
                            </div>
                        </div>
                        <div class="grid md:grid-cols-2 gap-8">
                            <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000" alt="인테리어 1" class="w-full h-64 object-cover rounded-lg">
                            <img src="https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=2000" alt="인테리어 2" class="w-full h-64 object-cover rounded-lg">
                        </div>
                    </div>
                </div>
            `,
            imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000'
        },
        {
            title: '가구 </br>디자인',
            description: '맞춤형 가구는 우리 스튜디오의 핵심입니다. 각 작품은 지속 가능한 소재를 사용하여 숙련된 장인들이 세심하게 제작합니다.',
            detailContent: `
                <div class="max-w-4xl mx-auto">
                    <h2 class="text-4xl font-bold mb-8">가구 디자인</h2>
                    <div class="space-y-12">
                        <p class="text-xl text-center">전통적인 목공 기법과 현대적인 디자인이 만나 탄생하는 유니크한 가구들</p>
                        <div class="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 class="text-2xl font-semibold mb-4">제작 과정</h3>
                                <ul class="space-y-3">
                                    <li>• 디자인 컨셉 개발</li>
                                    <li>• 소재 선택 및 검수</li>
                                    <li>• 정밀 가공 및 조립</li>
                                    <li>• 마감 처리 및 품질 검사</li>
                                    <li>• 배송 및 설치</li>
                                </ul>
                            </div>
                            <div>
                                <h3 class="text-2xl font-semibold mb-4">주요 소재</h3>
                                <ul class="space-y-3">
                                    <li>• 천연 원목 (오크, 월넛, 체리)</li>
                                    <li>• 친환경 MDF</li>
                                    <li>• 프리미엄 금속 소재</li>
                                    <li>• 천연 가죽 및 패브릭</li>
                                    <li>• 강화유리 및 세라믹</li>
                                </ul>
                            </div>
                        </div>
                        <div class="grid md:grid-cols-3 gap-6">
                            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000" alt="가구 1" class="w-full h-48 object-cover rounded-lg">
                            <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2000" alt="가구 2" class="w-full h-48 object-cover rounded-lg">
                            <img src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=2000" alt="가구 3" class="w-full h-48 object-cover rounded-lg">
                        </div>
                    </div>
                </div>
            `,
            imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070'
        },
        {
            title: '우리의 </br>디자인 팀',
            description: '모든 프로젝트의 창조적 원동력인 비전 있는 아티스트와 숙련된 장인들로 구성된 우리 팀을 만나보세요.',
            detailContent: `
                <div class="max-w-4xl mx-auto">
                    <h2 class="text-4xl font-bold mb-8">우리의 디자인 팀</h2>
                    <div class="space-y-12">
                        <p class="text-xl text-center">창의성과 전문성을 겸비한 디자이너들이 여러분의 꿈을 현실로 만들어갑니다</p>
                        <div class="grid md:grid-cols-2 gap-12">
                            <div class="text-center">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000" alt="디자이너 1" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover">
                                <h3 class="text-xl font-semibold">김민수</h3>
                                <p class="text-gray-600">수석 디자이너</p>
                                <p class="mt-2">15년 경력의 공간 디자인 전문가</p>
                            </div>
                            <div class="text-center">
                                <img src="https://images.unsplash.com/photo-1494790108755-2616c27ad73b?q=80&w=2000" alt="디자이너 2" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover">
                                <h3 class="text-xl font-semibold">박지영</h3>
                                <p class="text-gray-600">가구 디자이너</p>
                                <p class="mt-2">맞춤형 가구 설계 및 제작 전문</p>
                            </div>
                        </div>
                        <div class="bg-gray-100 p-8 rounded-lg">
                            <h3 class="text-2xl font-semibold mb-4 text-center">팀의 철학</h3>
                            <p class="text-center text-lg">"디자인은 단순히 보기 좋은 것을 만드는 것이 아니라, 사람들의 삶을 더 풍요롭게 만드는 것입니다. 우리는 각 프로젝트에서 고객의 이야기를 듣고, 그들의 꿈을 공간으로 구현합니다."</p>
                        </div>
                    </div>
                </div>
            `,
            imageUrl: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1780'
        }
    ];

    sectionsData.forEach((data, index) => {
        const section = document.createElement('div');
        section.className = 'section relative flex-1 flex flex-col justify-between p-8 border-r border-gray-300 cursor-pointer overflow-hidden';
        if (index === sectionsData.length - 1) {
            section.classList.add('border-r-0');
        }

        section.innerHTML = `
            <div class="bg-image-container">
                <div class="bg-image" style="background-image: url('${data.imageUrl}');"></div>
            </div>
            
            <div class="relative z-10">
                <p class="text-sm">${data.topText || ''}</p>
            </div>

            <div class="relative z-10">
                <h2 class="section-title text-5xl font-bold uppercase" style="white-space: nowrap;">${data.title}</h2>
            </div>

            <div class="details-content absolute inset-0 text-white flex flex-col justify-center items-center p-8 opacity-0 pointer-events-none">
                <p class="details-p text-lg mb-6 max-w-lg text-center">${data.description}</p>
                <div class="scroll-indicator animate-bounce mt-8">
                    <svg class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                    <p class="text-sm mt-2">스크롤해서 더 보기</p>
                </div>
                <button class="close-btn absolute top-8 right-8 text-white text-4xl hover:text-gray-300 transition-colors z-20">&times;</button>
            </div>

            <div class="scroll-detail-content absolute top-full left-0 right-0 bg-white text-black py-16 px-8 min-h-screen opacity-0 pointer-events-none transition-opacity duration-500">
                ${data.detailContent}
            </div>
        `;
        mainContainer.appendChild(section);
    });

    const sections = document.querySelectorAll('.section');

    function expandSection(section) {
        activeSection = section;
        const details = section.querySelector('.details-content');
        const scrollDetail = section.querySelector('.scroll-detail-content');
        const closeBtn = section.querySelector('.close-btn');
        const bgContainer = section.querySelector('.bg-image-container');
        const title = section.querySelector('.section-title');

        // Change header color for visibility
        gsap.to(headerElements, { color: 'white', duration: 0.4 });

        // Instantly show background for active section
        gsap.set(bgContainer, { top: '0%' });
        gsap.set(title, { color: '#fff' });
        
        const otherSections = Array.from(sections).filter(s => s !== section);
        
        const tl = gsap.timeline();

        tl.to(section, { 
            flexGrow: 100,
            duration: animSpeed, 
            ease: 'power4.inOut' 
        }, 0);

        tl.to(otherSections, { 
            flexGrow: 0,
            width: 0,
            paddingLeft: 0,
            paddingRight: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            opacity: 0,
            duration: animSpeed, 
            ease: 'power4.inOut'
        }, 0);
        
        // Show details
        gsap.to(details, {
            opacity: 1,
            pointerEvents: 'auto',
            duration: 0.6,
            delay: animSpeed / 2
        });

        // Enable scroll for detail content
        gsap.to(scrollDetail, {
            opacity: 1,
            pointerEvents: 'auto',
            duration: 0.6,
            delay: animSpeed / 2
        });

        addScrollListener(section);
        document.body.style.overflow = 'auto';
    }

    function collapseAll() {
        if (!activeSection) return;

        document.body.style.overflow = 'hidden';

        // Reset header color
        gsap.to(headerElements, { color: '#1f2937', duration: 0.4 });
        
        const details = activeSection.querySelector('.details-content');
        const scrollDetail = activeSection.querySelector('.scroll-detail-content');
        gsap.to([details, scrollDetail], {
            opacity: 0,
            pointerEvents: 'none',
            duration: 0.3
        });
        
        // 단순하게 flex-grow만 사용하여 축소
        const otherSections = Array.from(sections).filter(s => s !== activeSection);
        
        gsap.to(activeSection, { 
            flexGrow: 1,
            duration: animSpeed, 
            ease: 'power4.inOut' 
        });

        gsap.to(otherSections, { 
            flexGrow: 1,
            width: 'auto',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            borderLeftWidth: '1px',
            borderRightWidth: '1px',
            opacity: 1,
            duration: animSpeed, 
            ease: 'power4.inOut'
        });

        // 애니메이션 완료 후 배경과 텍스트 색상 초기화
        gsap.delayedCall(animSpeed, () => {
            sections.forEach(s => {
                const bg = s.querySelector('.bg-image-container');
                const title = s.querySelector('.section-title');
                // 배경을 즉시 아래로 이동 (애니메이션 없이)
                gsap.set(bg, { top: '100%' });
                gsap.set(title, { color: '#1f2937' });
            });
            activeSection = null;
        });

        removeScrollListener(activeSection);
    }

    function addScrollListener(section) {
        const scrollDetail = section.querySelector('.scroll-detail-content');
        
        function handleScroll() {
            if (activeSection !== section) return;
            
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            
            if (scrollTop > windowHeight * 0.3) {
                gsap.to(scrollDetail, {
                    y: -scrollTop + windowHeight * 0.3,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            } else {
                gsap.to(scrollDetail, {
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        }
        
        section.scrollHandler = handleScroll;
        window.addEventListener('scroll', handleScroll);
    }

    function removeScrollListener(section) {
        if (section.scrollHandler) {
            window.removeEventListener('scroll', section.scrollHandler);
            section.scrollHandler = null;
        }
    }

    sections.forEach((section, index) => {
        const bgContainer = section.querySelector('.bg-image-container');
        const title = section.querySelector('.section-title');
        
        section.addEventListener('mouseenter', () => {
            if (activeSection) return;
            gsap.to(bgContainer, { top: '0%', duration: 0.6, ease: 'power3.inOut' });
            gsap.to(title, { color: '#fff', duration: 0.6 });
        });
        
        section.addEventListener('mouseleave', () => {
            if (activeSection) return;
            gsap.to(bgContainer, { top: '100%', duration: 0.6, ease: 'power3.inOut' });
            gsap.to(title, { color: '#1f2937', duration: 0.6 });
        });
        
        section.addEventListener('click', (e) => {
            if (e.target.closest('.close-btn')) {
                collapseAll();
                return;
            }

            if (!activeSection) {
                expandSection(section);
            } else if (activeSection === section) {
                // Allow clicking the active section to collapse it
                collapseAll();
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && activeSection) {
            collapseAll();
        }
    });
}); 