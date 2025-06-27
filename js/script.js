document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.getElementById('main-container');
    
    // 메인 페이지가 아니면 실행하지 않음 (이중 안전장치)
    if (!mainContainer) return;

    // 메인 페이지 헤드라인 애니메이션 (블러 효과)
    const mainHeadline = document.querySelector('header .text-right h1');
    if (mainHeadline) {
        const chars = mainHeadline.textContent.split('');
        mainHeadline.innerHTML = '';
        chars.forEach(char => {
            const span = document.createElement('span');
            span.style.display = 'inline-block';
            span.style.opacity = '0';
            span.style.filter = 'blur(8px)';
            span.innerHTML = char === ' ' ? '&nbsp;' : char;
            mainHeadline.appendChild(span);
        });

        gsap.to(mainHeadline.children, {
            opacity: 1,
            filter: 'blur(0px)',
            duration: 1.0,
            stagger: 0.04,
            ease: 'power2.out',
            delay: 0.2
        });
    }

    mainContainer.innerHTML = ''; // 중복 생성 방지
    const header = document.querySelector('header');
    const headerElements = header.querySelectorAll('a, h1');
    const headerDescription = document.getElementById('header-description');
    const animSpeed = 0.8;
    let activeSection = null;

    const sectionsData = [
        {
            title: 'Life Design </br>Studio',
            description: '공간에 대한 깊은 이해와 다년간의 경험을 바탕으로, 단순한 미학을 넘어 당신의 삶의 방식과 가치를 반영하는 가장 잘 맞는 맞춤형 디자인을 제안합니다.',
            link: 'studio.html',
            imageUrl: './assets/images/hero-1.jpg'
        },
        {
            title: '인테리어 </br>솔루션',
            description: '주거 공간부터 상업 공간까지, 일관성 있고 영감을 주는 환경을 보장하는 종합적인 인테리어 디자인 솔루션을 제공합니다.',
            link: 'solutions.html',
            imageUrl: './assets/images/hero-2.jpg'
        },
        {
            title: '가구 </br>디자인',
            description: '장인의 정교한 손길과 지속가능한 최고급 소재가 만나, 시간이 흐를수록 가치를 더하는 특별한 가구를 탄생시킵니다.',
            link: 'furniture.html',
            imageUrl: './assets/images/hero-3.jpg'
        },
        {
            title: '우리의 </br>디자인 팀',
            description: '우리 팀은 창의적인 비전과 숙련된 기술을 바탕으로, 고객의 꿈을 현실로 만들어가는 열정적인 아티스트와 장인들로 구성되어 있습니다. 함께 특별한 공간을 창조해 보세요.',
            link: 'team.html',
            imageUrl: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1780'
        }
    ];

    sectionsData.forEach((data, index) => {
        const section = document.createElement('div');
        section.className = 'section relative flex-1 flex flex-col justify-between p-8 border-r border-gray-300 cursor-pointer overflow-hidden';
        if (index === sectionsData.length - 1) {
            section.classList.remove('border-r');
        }

        section.innerHTML = `
            <div class="bg-image-container">
                <div class="bg-image" style="background-image: url('${data.imageUrl}');"></div>
            </div>
            <div class="white-overlay absolute inset-0 bg-white" style="transform: translateY(100%); z-index: 1;"></div>
            <div class="relative z-10"><p class="text-sm">${data.topText || ''}</p></div>
            <div class="relative z-10"><h2 class="section-title text-5xl font-semibold uppercase" style="white-space: nowrap;">${data.title}</h2></div>
            <div class="details-content absolute inset-0 text-gray-100 flex flex-col items-end justify-center pr-24 p-8 opacity-0 pointer-events-none">
                <button class="close-btn absolute top-8 right-8 text-gray-100 text-4xl hover:text-gray-300 transition-colors z-20">&times;</button>
            </div>
        `;
        mainContainer.appendChild(section);
    });

    const sections = document.querySelectorAll('.section');

    function expandSection(section, index) {
        if (activeSection) return;
        activeSection = section;
        const description = sectionsData[index].description;
        const link = sectionsData[index].link;
        const details = section.querySelector('.details-content');
        const bgContainer = section.querySelector('.bg-image-container');
        const title = section.querySelector('.section-title');
        const otherSections = Array.from(sections).filter(s => s !== section);
        
        gsap.to(headerElements, { color: 'white', duration: 0.4 });
        gsap.set(bgContainer, { y: '0%' });
        gsap.set(title, { color: '#fff' });

        const tl = gsap.timeline();
        tl.to(section, { flexGrow: 100, duration: animSpeed, ease: 'power4.inOut' }, 0)
          .to(otherSections, { flexGrow: 0, width: 0, paddingLeft: 0, paddingRight: 0, borderLeftWidth: 0, borderRightWidth: 0, opacity: 0, duration: animSpeed, ease: 'power4.inOut' }, 0)
          .to(details, { opacity: 1, pointerEvents: 'auto', duration: 0.6, delay: animSpeed * 0.4 }, 0);

        // 이전 애니메이션 정리 및 컨테이너 초기화
        gsap.killTweensOf(headerDescription.children);
        headerDescription.innerHTML = '';
        gsap.set(headerDescription, { opacity: 1 }); // 중요: 컨테이너를 다시 보이게 함

        // 설명 텍스트를 글자 단위로 분리하여 span으로 추가
        description.split('').forEach(char => {
            const span = document.createElement('span');
            span.style.display = 'inline-block';
            span.innerHTML = char === ' ' ? '&nbsp;' : char;
            headerDescription.appendChild(span);
        });

        // 화살표 링크 추가
        const linkElement = document.createElement('a');
        linkElement.href = link;
        linkElement.className = "group inline-block pointer-events-auto ml-2";
        linkElement.innerHTML = `<span class="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>`;
        headerDescription.appendChild(linkElement);
        
        // GSAP 애니메이션 적용
        gsap.from(headerDescription.children, {
            opacity: 0,
            y: 10,
            duration: 0.5,
            stagger: 0.02,
            delay: animSpeed * 0.5,
            ease: 'power2.out'
        });
    }

    function collapseAll() {
        if (!activeSection) return;
        const details = activeSection.querySelector('.details-content');
        gsap.to(details, { opacity: 0, pointerEvents: 'none', duration: 0.3 });
        gsap.to(headerElements, { color: '#1f2937', duration: 0.4 });
        
        // 상세 설명 숨기기
        gsap.to(headerDescription, { 
            opacity: 0, 
            duration: 0.3, 
            onComplete: () => { 
                headerDescription.innerHTML = ''; 
            }
        });
        
        const otherSections = Array.from(sections).filter(s => s !== activeSection);
        
        const tl = gsap.timeline({ onComplete: () => {
            activeSection = null;
            sections.forEach(s => {
                 const bg = s.querySelector('.bg-image-container');
                 const overlay = s.querySelector('.white-overlay');
                 const title = s.querySelector('.section-title');
                 gsap.set(bg, { y: '100%' });
                 gsap.set(overlay, { y: '100%' });
                 gsap.set(title, { color: '#1f2937' });
            });
        }});

        tl.to(activeSection, { flexGrow: 1, duration: animSpeed, ease: 'power4.inOut' }, 0)
          .to(otherSections, { flexGrow: 1, width: 'auto', paddingLeft: '2rem', paddingRight: '2rem', borderLeftWidth: '1px', borderRightWidth: '1px', opacity: 1, duration: animSpeed, ease: 'power4.inOut' }, 0);
    }

    sections.forEach((section, index) => {
        section.addEventListener('mouseenter', () => {
            if (activeSection) return;
            sections.forEach(s => {
                const bg = s.querySelector('.bg-image-container');
                const overlay = s.querySelector('.white-overlay');
                const title = s.querySelector('.section-title');
                if (s === section) {
                    gsap.to(bg, { y: '0%', duration: 1.2, ease: 'power3.out', overwrite: 'auto' });
                    gsap.to(overlay, { y: '100%', duration: 1.2, ease: 'power3.out', overwrite: 'auto' });
                    gsap.to(title, { color: '#fff', duration: 1.2, ease: 'power3.out', overwrite: 'auto' });
                } else {
                    gsap.to(overlay, { y: '0%', duration: 0.7, ease: 'power2.inOut', overwrite: 'auto' });
                    gsap.to(bg, { y: '-25%', duration: 0.8, ease: 'power2.inOut', overwrite: 'auto' });
                    gsap.to(title, { color: '#1f2937', duration: 0.7, ease: 'power2.inOut', overwrite: 'auto' });
                }
            });
        });

        mainContainer.addEventListener('mouseleave', () => {
            if (activeSection) return;
            sections.forEach(s => {
                const bg = s.querySelector('.bg-image-container');
                const overlay = s.querySelector('.white-overlay');
                const title = s.querySelector('.section-title');
                gsap.to(bg, { y: '100%', duration: 0.8, ease: 'power3.inOut' });
                gsap.to(overlay, { y: '100%', duration: 0.8, ease: 'power3.inOut' });
                gsap.to(title, { color: '#1f2937', duration: 0.8 });
            });
        });

        section.addEventListener('click', (e) => {
            if (e.target.closest('.close-btn')) {
                collapseAll();
                return;
            }
            if (e.target.closest('.details-link')) { return; }
            if (!activeSection) {
                expandSection(section, index);
            } else if (activeSection === section) {
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
