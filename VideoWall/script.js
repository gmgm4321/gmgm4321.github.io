let currentVideoIndex = 0;
const videoPaths = [
    'Video/eliter360.mp4',
    'Video/WebARMMD.mp4',
    'Video/GroundProjection01.mp4',
    'Video/GroundProjection02.mp4',
    'Video/EDH_PD01.mp4',
    'Video/GhostBoat.mp4',
    'Video/UnityWebAR.mp4',
    'Video/Boya_Mosasaurus.mp4',
    'Video/Olympic.mp4'
];

const thumbnailPaths = [
    'Video/thumbnail1.jpg',
    'Video/thumbnail2.jpg',
    'Video/thumbnail3.jpg',
	'Video/thumbnail4.jpg',
	'Video/thumbnail5.jpg',
	'Video/thumbnail6.jpg',
	'Video/thumbnail7.jpg',
	'Video/thumbnail8.jpg',
	'Video/thumbnail9.jpg'
];

function getVideoTitle(path) {
    // 提取文件名並移除擴展名
    return path.split('/').pop().split('.').shift();
}

function loadVideo(index) {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoSource = document.getElementById('videoSource');
    const videoTitle = document.getElementById('videoTitle');
    
    videoSource.src = videoPaths[index];
    videoPlayer.load();
    videoPlayer.play(); // 自動播放影片
    videoTitle.textContent = getVideoTitle(videoPaths[index]);
    
    updateThumbnails(index);
}

function nextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videoPaths.length;
    loadVideo(currentVideoIndex);
}

function prevVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videoPaths.length) % videoPaths.length;
    loadVideo(currentVideoIndex);
}

function updateThumbnails(index) {
    const prevThumbnail = document.getElementById('prevThumbnail');
    const nextThumbnail = document.getElementById('nextThumbnail');
    const prevIndex = (index - 1 + thumbnailPaths.length) % thumbnailPaths.length;
    const nextIndex = (index + 1) % thumbnailPaths.length;
    
    prevThumbnail.src = thumbnailPaths[prevIndex];
    nextThumbnail.src = thumbnailPaths[nextIndex];
}

// Initial load
loadVideo(currentVideoIndex);
