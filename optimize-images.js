const sharp = require('sharp');
const glob = require('glob');
const fs = require('fs');
const path = require('path');

const inputDir = 'assets/images';
const outputDir = 'assets/images-optimized';
const maxWidth = 1920; // 최대 너비
const quality = 80; // WebP, JPEG 품질

// 출력 디렉토리가 없으면 생성
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// 이미지 처리 함수
const processImage = async (imagePath) => {
    const filename = path.basename(imagePath);
    const filenameWithoutExt = path.parse(filename).name;

    try {
        const image = sharp(imagePath);
        const metadata = await image.metadata();

        // 1. WebP로 변환 및 저장
        const webpOutputPath = path.join(outputDir, `${filenameWithoutExt}.webp`);
        await image
            .resize({
                width: Math.min(metadata.width, maxWidth),
                withoutEnlargement: true, // 원본보다 작을 때만 리사이즈
            })
            .webp({ quality: quality })
            .toFile(webpOutputPath);

        console.log(`✅ [WebP] ${filename} -> ${filenameWithoutExt}.webp`);

        // 2. 최적화된 JPG로 변환 및 저장 (폴백용)
        const jpgOutputPath = path.join(outputDir, `${filenameWithoutExt}.jpg`);
        await image
            .resize({
                width: Math.min(metadata.width, maxWidth),
                withoutEnlargement: true,
            })
            .jpeg({ quality: quality, progressive: true, optimizeScans: true })
            .toFile(jpgOutputPath);

        console.log(`✅ [JPG]  ${filename} -> ${filenameWithoutExt}.jpg (optimized)`);

    } catch (err) {
        console.error(`❌ Error processing ${filename}:`, err);
    }
};

// 모든 jpg 파일 찾아서 처리
glob(`${inputDir}/**/*.jpg`, (err, files) => {
    if (err) {
        console.error('❌ Could not find files:', err);
        return;
    }

    if (files.length === 0) {
        console.log('ℹ️ No JPG files to process.');
        return;
    }

    console.log(`🚀 Found ${files.length} images to optimize...`);
    Promise.all(files.map(processImage)).then(() => {
        console.log('\n🎉 All images have been optimized!');
    });
}); 