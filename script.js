const posts = [
  {
    userProfileImage: 'https://i.pravatar.cc/150?img=12',
    userName: 'aarav.codes',
    isFollowed: true,
    isLiked: false,
    likeCount: 1240,
    commentCount: 87,
    caption: 'Late night coding vibes ✨💻',
    videoUrl: './assets/reels/video1.mp4',
  },
  {
    userProfileImage: 'https://i.pravatar.cc/150?img=28',
    userName: 'travel.with.riya',
    isFollowed: false,
    isLiked: true,
    likeCount: 9820,
    commentCount: 310,
    caption: 'Lost in mountains 🌿🏔️',
    videoUrl: './assets/reels/video2.mp4',
  },
  {
    userProfileImage: 'https://i.pravatar.cc/150?img=45',
    userName: 'fitnessbyaditya',
    isFollowed: true,
    isLiked: false,
    likeCount: 5600,
    commentCount: 142,
    caption: 'Morning grind mode 💪🔥',
    videoUrl: './assets/reels/video3.mp4',
  },
  {
    userProfileImage: 'https://i.pravatar.cc/150?img=17',
    userName: 'artsy.naina',
    isFollowed: false,
    isLiked: false,
    likeCount: 2340,
    commentCount: 64,
    caption: 'Colors speak louder 🎨✨',
    videoUrl: './assets/reels/video4.mp4',
  },
  {
    userProfileImage: 'https://i.pravatar.cc/150?img=39',
    userName: 'techguru.milan',
    isFollowed: true,
    isLiked: true,
    likeCount: 11200,
    commentCount: 501,
    caption: 'AI is the future 🤖🚀',
    videoUrl: './assets/reels/video5.mp4',
  },
  {
    userProfileImage: 'https://i.pravatar.cc/150?img=4',
    userName: 'foodie.ayaan',
    isFollowed: false,
    isLiked: false,
    likeCount: 870,
    commentCount: 29,
    caption: 'Perfect plate today 🍱✨',
    videoUrl: './assets/reels/video6.mp4',
  },
  {
    userProfileImage: 'https://i.pravatar.cc/150?img=14',
    userName: 'streetshots.me',
    isFollowed: true,
    isLiked: true,
    likeCount: 6500,
    commentCount: 190,
    caption: 'City lights forever 🌆✨',
    videoUrl: './assets/reels/video7.mp4',
  },
  {
    userProfileImage: 'https://i.pravatar.cc/150?img=32',
    userName: 'gamingwithsid',
    isFollowed: false,
    isLiked: false,
    likeCount: 3400,
    commentCount: 140,
    caption: 'New level unlocked 🎮🔥',
    videoUrl: './assets/reels/video8.mp4',
  },
  {
    userProfileImage: 'https://i.pravatar.cc/150?img=52',
    userName: 'minimal.aura',
    isFollowed: true,
    isLiked: true,
    likeCount: 2100,
    commentCount: 58,
    caption: 'Soft vibes only 🌙🤍',
    videoUrl: './assets/reels/video9.mp4',
  },
  {
    userProfileImage: 'https://i.pravatar.cc/150?img=7',
    userName: 'bike.with.vik',
    isFollowed: false,
    isLiked: false,
    likeCount: 4800,
    commentCount: 203,
    caption: 'Ride the wind 🏍️💨',
    videoUrl: './assets/reels/video10.mp4',
  },
];

let clutter = '';

posts.forEach(function (post) {
  clutter += `<div class="reel">
          <div class="sound"><i class="ri-volume-mute-fill"></i></div>
          <div class="play visible"><i class="ri-play-fill"></i></div>
          <video preload="auto" muted autoplay loop src="${post.videoUrl}"></video>
          <div class="bottom">
            <div class="user">
              <img
                src="${post.userProfileImage}"
                alt=""
              />
              <h2>${post.userName}</h2>
              <div id="dot"></div>
              <button>${post.isFollowed ? 'Follow' : 'Unfollow'}</button>
            </div>
            <p class="caption">${post.caption}</p>
            <div class="right">
              <div class="like">
                <h4 class="like-icon">${
                  post.isLiked ? `<i class="ri-heart-3-fill liked"></i>` : `<i class="ri-heart-3-line"></i>`
                }</h4>
                <h6 class="like-count">${post.likeCount}</h6>
              </div>
              <div class="comment">
                <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                <h6 class="comment-count">${post.commentCount}</h6>
              </div>
              <div class="share">
                <h4 class="share-icon"><i class="ri-send-plane-fill"></i></h4>
              </div>
              <div class="share">
                <h4 class="share-icon"><i class="ri-bookmark-line"></i></h4>
              </div>
              <div class="menu">
                <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>
              </div>
            </div>
          </div>
        </div>`;
});

document.querySelector('.reels-container').innerHTML = clutter;

/* -------------------------------------------------------------------------- */
const videos = document.querySelectorAll('.reel video');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const video = entry.target;

      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  },
  {
    threshold: 0.6,
  }
);

videos.forEach(video => observer.observe(video));

/* -------------------------------------------------------------------------- */

let reels = document.querySelectorAll('.reel');

let isMuted = true;
let isPlaying = true;

let muteBtn = document.querySelectorAll('.sound');

reels.forEach(function (reel, idx) {
  let reelVideo = reel.childNodes[5];

  let muteBtn = reel.childNodes[1];

  muteBtn.addEventListener('click', function () {
    document.querySelectorAll('.sound').forEach(btn => {
      isMuted
        ? (btn.innerHTML = `<i class="ri-volume-up-fill"></i>`)
        : (btn.innerHTML = `<i class="ri-volume-mute-fill"></i>`);
    });

    document.querySelectorAll('.reel video').forEach(vid => {
      isMuted ? (vid.muted = false) : (vid.muted = true);
    });

    isMuted ? (isMuted = false) : (isMuted = true);
  });

  reel.addEventListener('click', function (event) {
    if (isPlaying) {
      event.target.pause();
      isPlaying = false;
      reel.childNodes[3].style.transform = `translate(-50%, -50%) scale(1)`;
    } else {
      event.target.play();
      isPlaying = true;
      reel.childNodes[3].style.transform = `translate(-50%, -50%) scale(0)`;
    }
  });

  let button = reel.childNodes[7].childNodes[1].childNodes[7];
  button.addEventListener('click', function (event) {
    event.stopPropagation();
    button.innerHTML === 'Follow' ? (button.innerHTML = 'Unfollow') : (button.innerHTML = 'Follow');
  });

  let likeIcon = reel.childNodes[7].childNodes[5].childNodes[1].childNodes[1];
  let likeCount = +reel.childNodes[7].childNodes[5].childNodes[1].childNodes[3].textContent;
  // console.log(likeCount)
  likeIcon.addEventListener('click', function (event) {
    event.stopPropagation();
    if (likeIcon.innerHTML === `<i class="ri-heart-3-line"></i>`) {
      likeIcon.innerHTML = `<i class="ri-heart-3-fill liked"></i>`;
      reel.childNodes[7].childNodes[5].childNodes[1].childNodes[3].textContent =
        +reel.childNodes[7].childNodes[5].childNodes[1].childNodes[3].textContent + 1;
    } else {
      likeIcon.innerHTML = `<i class="ri-heart-3-line"></i>`;
      reel.childNodes[7].childNodes[5].childNodes[1].childNodes[3].textContent =
        +reel.childNodes[7].childNodes[5].childNodes[1].childNodes[3].textContent - 1;
    }
  });
});
