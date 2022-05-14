const Active = 'active';

const active_video = document.querySelectorAll('.main-structure .content video');
const active_video_overlay = document.querySelector('.main-structure .content .videos-overlay');

const primary_header = document.querySelector('.content .text-description h1');
const secondary_header =  document.querySelector('.content .text-description h2');
const main_content = document.querySelector('.content .text-description p');
const link_text = document.querySelector('.content .text-description a');

active_video[0].classList.remove(Active);
active_video[0].classList.add(Active);
active_video_overlay.className = 'videos-overlay videos-overlay-island';

primary_header.innerHTML = Content_info.island.h1;
secondary_header.innerHTML = Content_info.island.h2;
main_content.innerHTML = Content_info.island.p;
link_text.innerHTML = 'Explore'

const menu_Logo2 = document.querySelector('header .menu-logo');
const main_structure2 = document.querySelector('.main-structure');
const eachMenu_btn = document.querySelectorAll('.aside-menu a');

menu_Logo2.addEventListener('click' , () => {
  menu_Logo2.classList.toggle(Active); 
  main_structure2.classList.toggle(Active); 
});

eachMenu_btn.forEach((button,index) => {
  button.addEventListener('click', () => {
    active_video.forEach((each_video) => {
      each_video.classList.remove(Active);
    });
    active_video[index].classList.add(Active);
    modify_content(index);
  });

});

function modify_content(index) {
  switch(index) {
    case 0:
      primary_header.innerHTML = Content_info.island.h1;
      secondary_header.innerHTML = Content_info.island.h2;
      main_content.innerHTML = Content_info.island.p
      active_video_overlay.className = 'videos-overlay videos-overlay-island';
      break;

    case 1:
      primary_header.innerHTML = Content_info.spring.h1;
      secondary_header.innerHTML = Content_info.spring.h2;
      main_content.innerHTML = Content_info.spring.p
      active_video_overlay.className = 'videos-overlay videos-overlay-spring';
      break;

    case 2:
      primary_header.innerHTML = Content_info.summer.h1;
      secondary_header.innerHTML = Content_info.summer.h2;
      main_content.innerHTML = Content_info.summer.p
      active_video_overlay.className = 'videos-overlay videos-overlay-summer';
      break;

    case 3:
      primary_header.innerHTML = Content_info.autumn.h1;
      secondary_header.innerHTML = Content_info.autumn.h2;
      main_content.innerHTML = Content_info.autumn.p
      active_video_overlay.className = 'videos-overlay videos-overlay-autumn';
      break;

    case 4:
      primary_header.innerHTML = Content_info.winter.h1;
      secondary_header.innerHTML = Content_info.winter.h2;
      main_content.innerHTML = Content_info.winter.p
      active_video_overlay.className = 'videos-overlay videos-overlay-winter';
      break;

    default:
      break;
  }
}