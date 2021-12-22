# LinkedIT 링크드잇

- 비즈니스 전문 소셜 미디어 '[링크드인(LinkedIn)](https://www.linkedin.com/)'을 클론 코딩한 프로젝트입니다.
- 기간: 2021.10.25 ~ 2021.11.05 (12일)
- 인원: 프론트엔드 5명, 백엔드 2명
- [🎥 프로젝트 Demo 영상 보기](https://youtu.be/0SEaP6M2wdg)

<img alt="LinkedIT Demo Thumbnail" src="./public/images/readme_demo_thumbnail.png" width="50%" height="50%">

<br/>

## 🤝 Back-end Repository

https://github.com/wecode-bootcamp-korea/fullstack2-2nd-Linked-IT-backend

<br/>

## 🛠 기술

#### `Front-end`

<p float="left">
  <img src="https://cdn.icon-icons.com/icons2/2415/PNG/128/react_original_logo_icon_146374.png" alt="React" style="display:inline-block; width:30px; margin-right:5px; margin-left:40px">
  <img src="https://cdn.icon-icons.com/icons2/2248/PNG/128/hook_icon_138483.png" alt="React-Hooks" style="display:inline-block; width:30px; margin-right:5px;">
  <img src="https://cdn.icon-icons.com/icons2/649/PNG/128/sign_icon-icons.com_59775.png" alt="React-Router" style="display:inline-block; width:30px; margin-right:5px;">
  <img src="https://cdn.icon-icons.com/icons2/2107/PNG/128/file_type_styled_icon_130142.png" alt="Styled-Components" style="display:inline-block; width:30px; margin-right:5px;">
</p>

React, React-Hooks, React-Router, Styled-Components

#### `Back-end`

<p float="left">
  <img src="https://cdn.icon-icons.com/icons2/2699/PNG/128/nodejs_logo_icon_169910.png" alt="Node.js" style="display: inline-block; width: 30px; margin-right: 5px; margin-left:40px">
  <img src="https://cdn.icon-icons.com/icons2/2415/PNG/128/express_original_logo_icon_146527.png" alt="Express" style="display:inline-block; width:30px; margin-right:5px;">
  <img src="https://cdn.icon-icons.com/icons2/2415/PNG/128/mysql_original_wordmark_logo_icon_146417.png" alt="MySQL" style="display:inline-block; width:30px; margin-right:5px;">
  <img src="https://cdn.icon-icons.com/icons2/2107/PNG/128/file_type_light_prisma_icon_130444.png" alt="Prisma" style="display:inline-block; width:30px; margin-right:5px;">
  <img src="https://cdn.icon-icons.com/icons2/3053/PNG/128/postman_macos_bigsur_icon_189815.png" alt="Postman" style="display:inline-block; width:30px; margin-right:5px;">
  <img src="https://cdn.icon-icons.com/icons2/2107/PNG/128/file_type_jest_snapshot_icon_130513.png" alt="Jest" style="display:inline-block; width:30px; margin-right:5px;">
</p>

Node.js, Express, MySQL, Prisma, Postman, Jest, JWT, Bcrypt

<br/>

## 📌 구현 기능 개요

- 사이트 전체 범위에 대한 검색 기능, 검색 결과 페이지 및 TopNav & Button 컴포넌트 구현

<br/>

## 📑 구현 기능 상세

### 1. 공통 구현 사항

- TopNav
  - 검색 창 레이아웃 및 검색 결과 표시 기능을 Dropdown 효과로 구현
  - 아이콘을 클릭하면, 각 페이지의 경로로 이동하는 기능을 NavLink 컴포넌트를 활용하여 구현
- Button
  - 주어진 Props에 따라 버튼의 색상, 아이콘 포함 여부 및 아이콘 위치 변경 등을 설정할 수 있도록 가변적으로 설계

### 2. MainSearch(검색 결과) 페이지

- User가 입력한 검색어와 연관된 인맥 및 회사의 결과를 각각 3개씩 보여주는 기능 구현
- 인맥 및 회사의 검색 결과가 각각 3개 이상인 경우에는 '결과 모두 보기' 버튼을 조건부 렌더링으로 구현
- '결과 모두 보기' 버튼 클릭 시, 해당 결과에 대한 Pagination 구현

<br/>

### ※ References

---

- 본 프로젝트는 팀원들의 학습을 목적으로 [링크드인(LinkedIn)](https://www.linkedin.com/)을 참고하여 만들었습니다. 이 코드를 활용하여 상업적인 이득을 취하거나 무단으로 배포할 경우에는 법적으로 문제 될 수 있습니다.
- 본 프로젝트에서 사용하고 있는 각종 이미지들은 [Unsplash](https://unsplash.com/) 등에서 무료로 배포 중인 이미지들로 대체하였습니다.
