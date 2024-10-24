;(function ($) {
  var BRAND = "INFS";
  // 檢查是否為觸控設備
  var isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  // 定義觸發的事件
  var eventType = isTouchDevice ? "touchstart" : "click";
  var response = "";
  // 動態添加 Google 字體連結
  var googleFontLink = document.createElement("link");
  googleFontLink.rel = "preconnect";
  googleFontLink.href = "https://fonts.googleapis.com";
  document.head.appendChild(googleFontLink);

  var googleFontLink2 = document.createElement("link");
  googleFontLink2.rel = "preconnect";
  googleFontLink2.href = "https://fonts.gstatic.com";
  googleFontLink2.crossorigin = "anonymous";
  document.head.appendChild(googleFontLink2);

  var googleFontLink3 = document.createElement("link");
  googleFontLink3.rel = "stylesheet";
  googleFontLink3.href =
    "https://fonts.googleapis.com/css2?family=Chocolate+Classical+Sans&family=Figtree:ital,wght@0,300..900;1,300..900&family=Noto+Sans+TC:wght@100..900&display=swap";
  document.head.appendChild(googleFontLink3);

  // 動態添加 Bootstrap Bundle
  var bootstrapScript = document.createElement("script");
  bootstrapScript.src =
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
  bootstrapScript.crossorigin = "anonymous";
  document.head.appendChild(bootstrapScript);

  // 動態添加 Bootstrap scoped CSS
  var bootstrapScopedStyle = document.createElement("style");
  bootstrapScopedStyle.id = "bootstrap-scoped";
  document.head.appendChild(bootstrapScopedStyle);
  // 動態添加自定 CSS
  var customCSS = document.createElement("style");
  customCSS.type = "text/css";
  customCSS.innerHTML = `
  @charset "UTF-8";
:root {
  --dark-primary-color: rgba(51, 51, 51, 1);
  --light-primary-color: rgba(144, 144, 144, 1);
  --light-background-color: rgba(245, 245, 245, 1);
  --light-primary-color: rgba(255, 255, 255, 0.5);
}

/* modal trigger button */
.trigger-icon--text{
  box-sizing: border-box;
  font-family:"Chocolate Classical Sans", sans-serif;
  color: #F3F3EF;
  opacity: 0.9;
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.78px;
  overflow-wrap: break-word;
}
#panelTagBtn.trigger-icon--shirt{
position: fixed; right: 0px; top: calc(50vh - 88.5px);
display: flex;
padding: 11px 10px;
flex-direction: column;
justify-content: center;
align-items: center;
width:40px;
gap: 4px;
box-sizing: border-box;
border-radius: 13px 0px 0px 13px;
background:  #1E1E19;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='110' viewBox='0 0 40 110' fill='none'%3E%3Cpath d='M0 0H40V110H0V0Z' fill='%231E1E19'/%3E%3Cpath d='M0 0H40V110H0V0Z' fill='black' fill-opacity='0.1'/%3E%3C/svg%3E");
background-size: cover;
background-position:center;
background-repeat: no-repeat;
box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.14), 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
  font-family: "Chocolate Classical Sans", sans-serif;
  z-index:1000000000; cursor: pointer
  ; transition:background 300ms ease-out;opacity 0.3s ease-out; opacity: 1; pointer-events: auto; font-weight: 400; left: auto;
  
}
  #panelTagBtn.trigger-icon--shirt:hover{
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='110' viewBox='0 0 40 110' fill='none'%3E%3Cg clip-path='url(%23clip0_403_4114)'%3E%3Cpath d='M51.5 5L-8 52.5' stroke='white' stroke-opacity='0.07' stroke-width='10'/%3E%3Cpath opacity='0.07' d='M53.5 65L-8 113' stroke='%23F3F3EF' stroke-width='3'/%3E%3Cpath opacity='0.07' d='M58.5 43L-8 94.5' stroke='%23F3F3EF' stroke-width='14'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_403_4114'%3E%3Cpath d='M0 13C0 5.8203 5.8203 0 13 0H40V110H13C5.8203 110 0 104.18 0 97V13Z' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;
    background-repeat: no-repeat;
  }
  #panelTagBtn.trigger-icon--shirt:hover #svg-shirt,
  #panelTagBtn.trigger-icon--shirt:hover span{
    opacity: 1;
  }

.inf-panel-container .btn.btn-light.trigger-icon--shirt {
  display: none;
  position: fixed;
  bottom: 18px;
  right: 18px;
  background: #fff;
  box-shadow: 0px 0.5px 5px 0px rgba(0, 0, 0, 0.25), 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
  width: 70px;
  height: 70px;
  cursor: pointer;
  border-radius: 25px;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  -ms-border-radius: 25px;
  -o-border-radius: 25px;
  z-index: 99;
}

.inf-panel-container .fixed-panel-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 12px;
  z-index: 999;
}

.inf-panel-container .toggle-btn-container {
  border-radius: 100px;
  border: 1px solid rgba(59, 59, 50, 0.18);
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
}

.inf-panel-container button#guideBtn,
.inf-panel-container button#AIbtn {
  cursor: pointer;
  padding: 10px 0;
  width: 100%;
  color: rgba(59, 59, 50, 0.5);
  font-family: "Chocolate Classical Sans", "Figtree", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
}

.inf-panel-container .btn-custom-size {
  font-size: 14px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
}

.inf-panel-container .btn.btn-white {
  /* background-color: #ebebeb; */
  background-color: var(--light-background-color);
  border: 0cm;
  font-weight: 400;
  color: rgb(144, 144, 144) !important;
}

.inf-panel-container .btn.btn-active {
  background-color: var(--dark-primary-color) !important;
  border: none;
  z-index: 1060;
  color: #f3f3ef !important;
  font-family: "Chocolate Classical Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px; /* 135.714% */
}

/* .inf-panel-container .overlap-btn {
  width: calc(50% + 15px);
  z-index: 1;
}

.inf-panel-container .overlap-btn:first-child {
  margin-right: -30px;
} */
.inf-panel-container .btn.overlap-btn:hover {
  z-index: 1070;
  /* background-color: rgb(184, 184, 184); */
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
  /* color: #6a675d; */
}

.inf-panel-container #info-content {
  padding: 0 18px;
  height: 100%;
}

.inf-panel-container #info-content #modalInfoAccordion {
  padding-top: 65px;
  padding-bottom: 12px;
}

.inf-panel-container .accordion-button.collapsed,
.accordion-button:not(.collapsed) {
  background: transparent;
  border-bottom: none;
}

.inf-panel-container .accordion-item,
.inf-panel-container .accordion-button {
  background-color: transparent !important;
}

.inf-panel-container .accordion-header {
  padding: 21px 0;
}

/* accordion */
.inf-panel-container .accordion-button {
  padding: 0;
  font-size: 14px;
  color: #333;
  font-family: "Noto Sans TC", sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 19px; /* 135.714% */
}

.inf-panel-container .accordion-button.collapsed,
.inf-panel-container .accordion-button:not(.collapsed) {
  background: #fff;
  border-bottom: 1px solid var(--light-primary-color);
}

.inf-panel-container .accordion-button,
.inf-panel-container .accordion-button:focus {
  box-shadow: none;
  border-color: transparent;
}

.inf-panel-container .accordion-button.collapsed:not(:last-child) {
  border-color: var(--light-primary-color);
}

/* .accordion-button::after {

} */
.inf-panel-container .accordion-button:not(.collapsed)::after {
  transform: rotate(0deg);
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  background-image: url("https://raw.githubusercontent.com/infFITSDevelopment/pop-ad/refs/heads/main/more.svg");
  background-size: auto;
  background-position: center;
}

.inf-panel-container .accordion-button.collapsed::after {
  background-image: url("https://raw.githubusercontent.com/infFITSDevelopment/pop-ad/refs/heads/main/more.svg");
  background-size: auto;
  background-position: center;
  transform: rotate(-90deg);
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
}

.inf-panel-container div.accordion-body {
  padding: 8px;
}

.inf-panel-container #modalSizeInfo {
  max-width: 100%;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.inf-panel-container #modalSizeInfo::-webkit-scrollbar {
  display: none;
}

/* table */
.inf-panel-container table {
  text-align: center;
  width: 100%;
  border-collapse: separate;
  color: #000;
  font-family: "Chocolate Classical Sans", "Figtree", sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
}

.inf-panel-container .size-table--panel thead th {
  font-weight: 400;
  text-wrap: nowrap;
}

.inf-panel-container .size-table--panel tr {
  display: block;
}

.inf-panel-container .size-table--panel thead tr {
  border: none;
}

.inf-panel-container .size-table--panel tbody tr {
  margin-bottom: 6px;
}

.inf-panel-container th,
.inf-panel-container td {
  width: 100px;
  padding: 12px 18px;
}

.inf-panel-container .size-table--panel thead th {
  position: sticky;
  /* background: #fff; */
  top: 0;
  z-index: 2; /* 保證表頭高於內容 */
}

.inf-panel-container .size-table--panel tbody td:first-child,
.inf-panel-container .size-table--panel thead th:first-child {
  position: sticky;
  left: 0;
  z-index: 99;
  /*保證左邊第一列高於其它列*/
  transition: background-color 0.3s ease;
  -webkit-transition: background-color 0.3s ease;
  -moz-transition: background-color 0.3s ease;
  -ms-transition: background-color 0.3s ease;
  -o-transition: background-color 0.3s ease;
}

.inf-panel-container .size-btn--panel {
  cursor: pointer;
  color: rgb(144, 144, 144);
  transition: color 0.3s;
  -webkit-transition: color 0.3s;
  -moz-transition: color 0.3s;
  -ms-transition: color 0.3s;
  -o-transition: color 0.3s;
}

.inf-panel-container .size-btn:hover {
  color: rgba(144, 144, 144, 0.75);
}

.inf-panel-container .size-btn:not(.selected) {
  border-radius: 13px;
  border: 1px solid rgba(59, 59, 50, 0.14);
  background: #fff;
  -webkit-border-radius: 13px;
  -moz-border-radius: 13px;
  -ms-border-radius: 13px;
  -o-border-radius: 13px;
}

.inf-panel-container .size-btn--panel.selected {
  color: #000;
  font-weight: 500;
  border: 1px solid #3b3b32;
  background: #f3f3ef;
  border-radius: 13px;
  -webkit-border-radius: 13px;
  -moz-border-radius: 13px;
  -ms-border-radius: 13px;
  -o-border-radius: 13px;
}

.inf-panel-container .size-btn--panel.selected:hover {
  color: rgba(51, 51, 51, 0.75);
}

/* .size-btn--panel.selected td:first-child {
  background-color: rgba(240, 240, 240, 1);
} */
.inf-panel-container .modal-right-top {
  display: block;
  position: absolute;
  top: 2vh;
  right: 1vw;
  max-width: 100vw;
  width: 400px;
  height: 95vh;
  max-height: 700px;
  margin: 0px;
  padding: 20px;
  z-index: 1050;
  background-color: white;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.15);
  transform: translateX(0%);
  transition: transform 350ms ease;
  -webkit-transition: transform 350ms ease;
  -moz-transition: transform 350ms ease;
  -ms-transition: transform 350ms ease;
  -o-transition: transform 350ms ease;
  -webkit-transform: translateX(0%);
  -moz-transform: translateX(0%);
  -ms-transform: translateX(0%);
  -o-transform: translateX(0%);
}

.inf-panel-container #panel-content.panelOffcanvas-body {
  padding: 0;
  overflow: hidden;
  position: relative;
}

.panelOffcanvas-backdrop {
  visibility: "hidden";
  opacity: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  transition: visibility 0s linear 0.2s, opacity 0.2s linear; /* 動畫效果 */
}

.panelOffcanvas-backdrop.show {
  opacity: 1 !important;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.3) !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
}

.inf-panel-container .panelOffcanvas-bottom.main-modal,
.inf-panel-container .panelOffcanvas-end.main-modal {
  border-radius: 21px;
  background: rgba(255, 255, 255, 0.72);
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(38px);
  -webkit-backdrop-filter: blur(38px);
  -webkit-border-radius: 21px;
  -moz-border-radius: 21px;
  -ms-border-radius: 21px;
  -o-border-radius: 21px;
}
  .inf-panel-container .panelOffcanvas-bottom.main-modal{
    background: rgba(255, 255, 255, 1);
  }

.inf-panel-container #svg_size--panel,
.inf-panel-container #svg_unit--panel {
  color: var(--dark-primary-color);
}

.inf-panel-container #svg_size--panel {
  padding-bottom: 40px;
}

.inf-panel-container #svg_unit--panel {
  font-size: 12px;
  display: flex;
  justify-content: flex-end;
}

.inf-panel-container #TryonTable-container--panel {
  width: 100%;
  border: 1px solid rgb(185, 185, 185);
  border-radius: 5px;
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.inf-panel-container #TryonTable-container--panel::-webkit-scrollbar {
  display: none;
}

.inf-panel-container #modalFilterInfo .filter-container--panel {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.inf-panel-container #modalFilterInfo .filter-container--panel::-webkit-scrollbar {
  display: none;
}

.inf-panel-container #modalFilterInfo .filter-button--panel {
  margin-left: 0.25em;
  padding: 4px 12px;
  border: none;
  outline: none;
  background-color: white;
  cursor: pointer;
  border-radius: 20px;
  font-size: 13px;
  color: #666;
  white-space: nowrap;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  -o-border-radius: 20px;
  transition: background-color 0.3s, color 0.3s;
  -webkit-transition: background-color 0.3s, color 0.3s;
  -moz-transition: background-color 0.3s, color 0.3s;
  -ms-transition: background-color 0.3s, color 0.3s;
  -o-transition: background-color 0.3s, color 0.3s;
}

.inf-panel-container #modalFilterInfo .filter-button--panel::-webkit-scrollbar {
  display: none;
}

.inf-panel-container #modalFilterInfo .filter-button--panel:hover {
  background-color: #ddd;
}

.inf-panel-container #modalFilterInfo .filter-button--panel.active {
  background-color: #333;
  color: #fff;
}

.inf-panel-container #modalFilterInfo table {
  width: 100%;
  border-collapse: collapse;
  overflow-x: scroll;
}

.inf-panel-container #modalFilterInfo th,
.inf-panel-container #modalFilterInfo td {
  padding: 8px;
  text-align: center;
  white-space: nowrap;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 10px;
  text-align: center;
  color: rgb(51, 51, 51);
  border: 0.5px solid rgb(185, 185, 185);
}

.inf-panel-container #modalFilterInfo th::-webkit-scrollbar,
.inf-panel-container #modalFilterInfo td::-webkit-scrollbar {
  display: none;
}

.inf-panel-container #modalFilterInfo th {
  color: rgb(51, 51, 51);
  font-weight: 400;
  background-color: rgb(240, 240, 240);
}

/* modalAttributeInfo */
.inf-panel-container #modalAttributeInfo {
  border: 1px solid rgb(185, 185, 185);
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
}

.inf-panel-container #modalAttributeInfo table {
  width: 100%;
  border-collapse: collapse;
  // overflow-x: scroll;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
}
.inf-panel-container #modalAttributeInfo tbody th:first-child{
  position: sticky;
  left: 0;
  z-index: 99;
}

.inf-panel-container #modalAttributeInfo th,
.inf-panel-container #modalAttributeInfo td {
  padding: 10px;
  text-align: center;
  color: rgb(51, 51, 51);
  background-color: rgba(255, 255, 255, 0.9);
}

.inf-panel-container #modalAttributeInfo th {
  border: 1px solid #ddd;
  background-color: #f2f2f2;
  font-weight: 400;
  white-space: nowrap;
}

.inf-panel-container #modalAttributeInfo .checkmark {
  // font-size: 18px;
  color: black !important;
}

.inf-panel-container #modalAttributeInfo td > span {
  text-align: center;
  white-space: nowrap;
  width: -moz-fit-content;
  width: fit-content;
  box-sizing: border-box;
  padding: 0px 12px;
  font-weight: 400;
  color: rgb(144, 144, 144);
}
.inf-panel-container #modalAttributeInfo{
  overflow-x: scroll;
}
.inf-panel-container #modalAttributeInfo td.active > span {
  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  -o-border-radius: 20px;
  background-color: #f3f3ef;
  color: #3b3b32;
  font-size: 13px;
  line-height: 16px; /* 123.077% */
  letter-spacing: 0.52px;
}

.inf-panel-container #modalAttributeInfo tr:not(:last-child) {
  background: radial-gradient(circle at bottom, rgb(144, 144, 144) 10px, transparent 0px) repeat-x bottom;
  background-size: 10px 1px;
}

.inf-panel-container rect {
  fill: #333;
}

.inf-panel-container text {
  fill: #fff;
}

.inf-panel-container .accordion-flush > .accordion-item > .accordion-header .accordion-button {
  box-shadow: none;
  border: none;
}

.inf-panel-container .accordion-button:not(.collapsed) {
  color: #333;
  font-family: "Noto Sans TC";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 19px;
}

.inf-panel-container #ai-content {
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 21px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.inf-panel-container #ai-content::-webkit-scrollbar {
  display: none;
}

#intro-content {
  overflow: hidden;
  border-radius: 21px;
  background-color: #fff;
  // position: fixed;
  // margin: auto;
  // left: 0;
  // right: 0;
  // top: 0;
  // bottom: 0;
  display: flex;
  flex-direction: column;
  max-height: 700px;
  width:100%;
  position: relative;
  height:calc(90lvh - 60px);
}
@media screen and (min-width: 768px){
#intro-content {
  height: 95vh;
  // border-radius: 28px;
}
}
#intro-content #intro-bg{
  height: 0;
  padding: 0; /* remove any pre-existing padding, just in case */
  padding-bottom: 85%; /* for a 4:3 aspect ratio */
  background-image: url(https://raw.githubusercontent.com/infFITSDevelopment/pop-ad/refs/heads/main/panel-intro.png);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;

}
#intro-content #intro-section{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align:left;
  width:100%;
  padding: 0 16px;
  gap: 9px;
  padding-top: 24px;
}
@media screen and (min-width: 768px){
#intro-content #intro-section{
  gap: 11px;
  padding: 0 18px;
  padding-top: 36px;
}
}

#intro-content #intro-section div{
  width:100%;
}
#intro-content #intro-section .intro-tag{
  color: #1E1E19;
  font-family: "Chocolate Classical Sans";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px; /* 115.385% */
  letter-spacing: 0.52px;
  opacity: 0.7;
}
@media screen and (min-width: 768px){
  #intro-content #intro-section .intro-tag{
    font-size: 15px;
    line-height: 18px; /* 120% */
    letter-spacing: 0.6px;
  }
}
#intro-content #intro-section .intro-title{
  color: #1E1E19;
  font-family: "Noto Sans TC", "Chocolate Classical Sans", "Figtree";
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 123.81% */
  letter-spacing: 0.63px;
}
@media screen and (min-width: 768px){
  #intro-content #intro-section .intro-title{
    font-size: 24px;
    line-height: 34px; /* 141.667% */
    letter-spacing: 0.48px;
  }
  #intro-content #intro-section .intro-title.en{
    font-family: "Figtree";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 34px;
  }
}
#intro-content #intro-section .intro-desc{
  color: #1E1E19;
  font-family: "Chocolate Classical Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 120% */
  letter-spacing: 0.6px;
  opacity: 0.7;
}
@media screen and (min-width: 768px){
  #intro-content #intro-section .intro-desc{
    font-size: 16px;
    line-height: 19px; /* 118.75% */
    letter-spacing: 0.64px;
  }
}

#intro-content #intro-footer{
  margin-top: auto;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  gap:12px;
}

@media screen and (min-width: 768px){
#intro-content #intro-footer{
  flex-direction: column;
  padding: 18px;
}
#intro-content #intro-footer .intro-btn--secondary{
  order:2;
}
}

#intro-content #intro-footer .intro-btn{
  display: flex;
  width:100%;
  height: 40px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border:none;
  border-radius: 10px;
  text-align: center;
  font-family: Figtree;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px; /* 113.333% */
  opacity: 0.9;
}
  #intro-content #intro-footer .intro-btn:hover{
    opacity: 1;
  }

#intro-content #intro-footer .intro-btn--primary{
    background-color: rgba(30, 30, 25, 0.85);
    color: #FFF;

}
#intro-content #intro-footer .intro-btn--secondary{
   background-color: #F3F3EF;
   color: #1E1E19;
}

.inf-panel-container #info-content {
  max-height: 700px;
}

.inf-panel-container #ai-content .iframe-container {
  width: 100%;
  height: 95vh;
  max-height: 700px;
  overflow: hidden; /* 隱藏 iframe 自身的滾動條 */
  display: none;
}

#inffits_cblock,
#ctryon,
#inffits_ctryon_window {
  width: 100%;
  height: 100%;
}

@media (max-width: 991px) {
  .inf-panel-container #ai-content .iframe-container {
    height: 700px; /* 固定 iframe 容器的高度 */
    max-height: calc(90vh - 60px);
    max-height: calc(90lvh - 60px);
  }
  .inf-panel-container #intro-content {
    max-height: calc(90vh - 60px);
    max-height: calc(90lvh - 60px);
    }
  .inf-panel-container #info-content {
    padding: 0 16px;
    max-height: calc(90vh - 60px);
    max-height: calc(90lvh - 60px);
  }
  .inf-panel-container #ai-content {
    max-height: calc(90vh - 60px);
    max-height: calc(90lvh - 60px);
  }
  .inf-panel-container .panelOffcanvas-bottom.main-modal,
  .inf-panel-container .panelOffcanvas-end.main-modal {
    backdrop-filter: blur(48px);
    -webkit-backdrop-filter: blur(48px);
  }
  .inf-panel-container #info-content {
    padding: 0 18px;
  }
}
@media (max-width: 767px) {
  .inf-panel-container .btn.btn-light.trigger-icon--shirt {
    bottom: 58px;
  }
}
@media (max-width: 360px) {
  .inf-panel-container .fixed-panel-header {
    padding: 10px;
  }
  .inf-panel-container .toggle-btn-container {
    gap: 8px;
  }
}
@media (max-width: 320px) {
  .inf-panel-container .fixed-panel-header {
    padding: 8px;
  }
  .inf-panel-container .toggle-btn-container {
    gap: 6px;
  }
}
.inf-panel-container .panelOffcanvas {
  display: none;
  position: fixed;
  width: 95vw;
  max-width: 400px;
  max-height: 700px;
  z-index: 1050;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
@media screen and (min-width: 768px) {
  .inf-panel-container .panelOffcanvas {
    right: 20px;
    left: unset;
  }
}
.inf-panel-container .panelOffcanvas #ai-content {
  overflow: hidden !important;
  border-radius: 21px;
}

.inf-panel-container {
  /* 定義 offcanvas 從右滑入的動畫 */
  /* 關閉 offcanvas 的滑出動畫 */
}
.inf-panel-container .slide-in {
  animation: slideIn 0.5s both;
}
.inf-panel-container .slide-out {
  animation: slideOut 0.5s both;
}
@keyframes slideIn {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes slideOut {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(110%);
  }
}/*# sourceMappingURL=index.css.map */
  `;
  document.head.appendChild(customCSS);

  // 添加 html template
  var panelTemplate = `
<div id="panelTagBtn" class="trigger-icon--shirt" style="display:none;">
<svg xmlns="http://www.w3.org/2000/svg" style="box-sizing:border-box" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g id="svg-shirt" opacity="0.9">
    <path d="M10.0001 3.75C11.2923 3.75 12.3716 2.74297 12.5001 1.48438C12.5118 1.36719 12.3829 1.25 12.2657 1.25C12.2024 1.25006 12.1396 1.26199 12.0806 1.28516C12.0728 1.28828 11.2564 1.60156 10.0001 1.60156C8.74385 1.60156 7.92588 1.28906 7.91963 1.28516C7.85306 1.262 7.78309 1.25011 7.7126 1.25H7.71026C7.68106 1.25155 7.65245 1.25884 7.62607 1.27147C7.59969 1.28409 7.57606 1.3018 7.55654 1.32357C7.53702 1.34534 7.52198 1.37076 7.5123 1.39835C7.50261 1.42594 7.49847 1.45518 7.5001 1.48438C7.63096 2.74063 8.71104 3.75 10.0001 3.75Z" fill="#F3F3EF"/>
    <path d="M18.9565 3.51165L13.9061 1.74368C13.8845 1.73613 13.8615 1.73343 13.8387 1.73577C13.8159 1.73811 13.794 1.74542 13.7743 1.7572C13.7547 1.76897 13.7379 1.78493 13.7251 1.80392C13.7123 1.82291 13.7038 1.84449 13.7003 1.86711C13.5542 2.74253 13.1023 3.53775 12.425 4.11134C11.7477 4.68494 10.889 4.99972 10.0015 4.99972C9.11393 4.99972 8.25517 4.68494 7.5779 4.11134C6.90062 3.53775 6.44875 2.74253 6.30263 1.86711C6.2992 1.84411 6.29068 1.82216 6.27769 1.80287C6.2647 1.78358 6.24757 1.76743 6.22755 1.7556C6.20752 1.74377 6.18511 1.73657 6.16194 1.7345C6.13878 1.73244 6.11544 1.73557 6.09364 1.74368L1.04325 3.51165C0.901896 3.56113 0.783008 3.65973 0.708232 3.78949C0.633456 3.91926 0.607763 4.07156 0.635831 4.21868L1.28544 7.65618C1.31044 7.7872 1.3767 7.90679 1.47454 7.99745C1.57237 8.08812 1.69665 8.14511 1.82919 8.16008L3.73857 8.37571C3.81651 8.3845 3.8883 8.42227 3.93967 8.48154C3.99105 8.54081 4.01827 8.61723 4.01591 8.69563L3.72958 18.1058C3.72579 18.2271 3.75738 18.3468 3.8205 18.4505C3.88362 18.5541 3.97554 18.6371 4.08505 18.6894C4.17608 18.7305 4.27501 18.7512 4.37489 18.7499H15.6249C15.7248 18.7512 15.8237 18.7305 15.9147 18.6894C16.0242 18.6371 16.1162 18.5541 16.1793 18.4505C16.2424 18.3468 16.274 18.2271 16.2702 18.1058L15.9839 8.69563C15.9815 8.61723 16.0087 8.54081 16.0601 8.48154C16.1115 8.42227 16.1833 8.3845 16.2612 8.37571L18.1706 8.16008C18.3031 8.14511 18.4274 8.08812 18.5252 7.99745C18.6231 7.90679 18.6893 7.7872 18.7143 7.65618L19.364 4.21868C19.392 4.07156 19.3663 3.91926 19.2916 3.78949C19.2168 3.65973 19.0979 3.56113 18.9565 3.51165Z" fill="#F3F3EF"/>
    <path d="M9.625 8.6C9.625 8.44087 9.69085 8.28826 9.80806 8.17574C9.92527 8.06321 10.0842 8 10.25 8C10.4158 8 10.5747 8.06321 10.6919 8.17574C10.8092 8.28826 10.875 8.44087 10.875 8.6C10.875 8.75913 10.8092 8.91174 10.6919 9.02426C10.5747 9.13679 10.4158 9.2 10.25 9.2C10.0842 9.2 9.92527 9.13679 9.80806 9.02426C9.69085 8.91174 9.625 8.75913 9.625 8.6ZM9 10.4C9 10.1788 9.1862 10 9.41667 10H10.25C10.4805 10 10.6667 10.1788 10.6667 10.4V13.2H11.0833C11.3138 13.2 11.5 13.3787 11.5 13.6C11.5 13.8212 11.3138 14 11.0833 14H9.41667C9.1862 14 9 13.8212 9 13.6C9 13.3787 9.1862 13.2 9.41667 13.2H9.83333V10.8H9.41667C9.1862 10.8 9 10.6213 9 10.4Z" fill="#1E1E19" stroke="#1E1E19" stroke-width="0.25"/>
  </g>
</svg>
<span class="trigger-icon--text">
  智能尺寸
</span>
</div>
      <div class="panelOffcanvas-backdrop" style="display: none;"></div>
      <div class="inf-panel-container relative" style="display: none;">
      <div class="relative">
        <!-- mobile bottom sheet -->
        <button
          class="btn btn-light trigger-icon trigger-icon--shirt"
          type="button"
        >
          <img
            src="https://raw.githubusercontent.com/infFITSDevelopment/pop-ad/d75982f3200164aff6aff272b1b26bcf02793f37/shirt-icon.svg"
            alt=""
          />
        </button>
        <div
          class="panelOffcanvas panelOffcanvas-bottom panelOffcanvas-end main-modal"
          tabindex="-1"
          id="panelOffcanvasBottomPanel"
          style="display: none;"
        >
          <div
            class="btn-close-container"
            style="
              position: absolute;
              top: -8px;
              right: -8px;
              background: #fff;
              border-radius: 50%;
              width: 28px;
              height: 28px;
              display: flex;
              justify-content: center;
              align-items: center;
              box-shadow: 0px 0px 0.5px 0px rgba(0, 0, 0, 0.25) inset;
              z-index: 9999999;
            "
          >
            <button
              type="button"
              class="btn-close btn-close--panel"
              aria-label="Close"
              style="font-size: 12px; color: #3b3b32"
            ></button>
          </div>
          <div class="panelOffcanvas-body small" id="panel-content">
          <div class="fixed-panel-header">
            <div class="d-flex justify-content-between toggle-btn-container">
              <button
                id="guideBtn"
                class="btn rounded-pill px-3 btn-white overlap-btn btn-active btn-custom-size"
                type="button"
              >
                尺寸指南
              </button>
              <button
                id="AIbtn"
                class="btn rounded-pill px-3 btn-white overlap-btn btn-custom-size"
                type="button"
              >
                AI找尺寸
              </button>
            </div>
            </div>
            <div class="modal-body py-0" id="intro-content">
                  <div
                  class="close-intro-container"
            style="
              position: absolute;
              top: 8px;
              left: 8px;
              border-radius: 50%;
              width: 24px;
              height: 24px;
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 9999999;
            "
          >
            <button
              type="button"
              class="btn-close btn-close--intro"
              aria-label="Close"
              style="font-size: 12px; color: #3b3b32"
            ></button>
          </div>
                <div id="intro-bg"></div>
                <div id="intro-section">
                  <div class="intro-tag">智能尺寸</div>
                  <div class="intro-title">使用 <span class="en" lang="en">infFITS AI</span> 找尋合適的尺寸，智慧精準購物。</div>
                  <div class="intro-desc">全面了解商品特徵，選取最佳尺寸。</div>
                </div>
                 <div id="intro-footer">
                    <button class="intro-btn intro-btn--secondary">立即了解商品</button>
                    <button class="intro-btn intro-btn--primary">找尋合適尺寸</button>
                  </div>
            </div>
            <div class="modal-body py-0 overflow-auto" id="info-content">
              <!-- 手風琴折疊 -->
              <div class="accordion accordion-flush" id="modalInfoAccordion">
                <!-- 尺寸表內容 -->
                <div class="accordion-item">
                  <h2 class="accordion-header" id="modalSizeInfoHeader">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#sizeInfoCollapse"
                      aria-expanded="true"
                      aria-controls="sizeInfoCollapse"
                    >
                      尺寸表
                    </button>
                  </h2>
                  <div
                    id="sizeInfoCollapse"
                    class="accordion-collapse collapse show"
                    aria-labelledby="modalSizeInfoHeader"
                  >
                    <div class="accordion-body">
                      <div id="modalSizeImg"></div>
                      <div id="svg_size--panel" class="px-2">
                        Size:&nbsp;<span></span>
                      </div>
                      <div id="modalSizeInfo">
                        <!-- 尺寸表內容將由JavaScript動態填充 -->
                      </div>
                      <div id="svg_unit--panel" class="py-1">
                        單位:&nbsp;<span></span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 試穿資訊內容 -->
                <div class="accordion-item">
                  <h2 class="accordion-header" id="modalFilterInfoHeader">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#filterInfoCollapse"
                      aria-expanded="false"
                      aria-controls="filterInfoCollapse"
                    >
                      試穿資訊
                    </button>
                  </h2>
                  <div
                    id="filterInfoCollapse"
                    class="accordion-collapse collapse"
                    aria-labelledby="modalFilterInfoHeader"
                  >
                    <div class="accordion-body">
                      <div id="modalFilterInfo">
                        <!-- 試穿資訊內容將由JavaScript動態填充 -->
                        <div class="filter-container--panel">
                          <div class="filter-btn-container--panel"></div>
                        </div>
                        <div id="TryonTable-container--panel">
                          <table id="TryonTable--panel">
                            <thead>
                              <tr id="th_tr_size_TR--panel"></tr>
                            </thead>
                            <tbody id="tbody_size_TR--panel"></tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 商品屬性內容 -->
                <div class="accordion-item">
                  <h2 class="accordion-header" id="modalAttributeInfoHeader">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#attributeInfoCollapse"
                      aria-expanded="false"
                      aria-controls="attributeInfoCollapse"
                    >
                      商品屬性
                    </button>
                  </h2>
                  <div
                    id="attributeInfoCollapse"
                    class="accordion-collapse collapse"
                    aria-labelledby="modalAttributeInfoHeader"
                  >
                    <div class="accordion-body">
                      <div id="modalAttributeInfo">
                        <!-- 商品屬性內容將由JavaScript動態填充 -->
                        <table>
                          <tr>
                            <th class="properties-header--panel" name="Elasticity">
                              彈性
                            </th>
                            <td><span>無彈</span></td>
                            <td><span>適中</span></td>
                            <td><span>超彈</span></td>
                          </tr>
                          <tr>
                            <th class="properties-header--panel" name="Cut">版型</th>
                            <td><span>合身</span></td>
                            <td><span>適中</span></td>
                            <td><span>寬鬆</span></td>
                          </tr>
                          <tr>
                            <th class="properties-header--panel" name="Thickness">
                              厚度
                            </th>
                            <td><span>輕薄</span></td>
                            <td><span>適中</span></td>
                            <td><span>厚實</span></td>
                          </tr>
                          <tr>
                            <th class="properties-header--panel" name="Materials">
                              材質
                            </th>
                            <td
                              colspan="3"
                              style="color: black; font-weight: 400"
                            ></td>
                          </tr>
                          <tr>
                            <th class="properties-header--panel" name="Lining">
                              內襯
                            </th>
                            <td colspan="3" style="text-align: center">
                              <span class="checkmark"
                                >
                                有
                              </span>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-body py-0" id="ai-content">
              <div class="iframe-container">
              <div id="inffits_cblock" style="width:101%">
                <div
                  id="ctryon"
                  style="
                    margin: auto;
                    top: 0px;
                    text-align: left;
                    visibility: visible;
                    outline: none;
                  "
                >
                  <iframe
                    id="inffits_ctryon_window"
                    style="
                      width: 100%;
                      height: 100%;
                      visibility: visible;
                      border: none;
                      outline: none;
                      z-index: 14;
                    "
                    src="https://inffits.com/webDesign/HTML/js/iframe/indexwebiframe_CA_tw_wss.html?MF&WSS_20230928MT0928129&U"
                  ></iframe>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  $(function () {

    console.log("DOM is ready");
    // Fetch the Bootstrap CSS from CDN
    fetch(
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    )
      .then((response) => response.text())
      .then((css) => {
        // Scope the Bootstrap CSS to only work under .custom-scope class
        const scopedCSS = css.replace(
          /(^|\})\s*([^{]+)\s*\{/g,
          function (match, p1, p2) {
            // Ignore keyframes and other special rules
            if (p2.startsWith("@") || p2.startsWith(":root")) {
              return match;
            }
            return p1 + " .inf-panel-container " + p2 + " {";
          }
        );

        // Inject the scoped CSS into the page
        document.getElementById("bootstrap-scoped").textContent = scopedCSS;
      });
    document.body.insertAdjacentHTML("afterbegin", panelTemplate);

    // getPanelInfo();
    // Call SizeAI
    api_Products();
  window.isScrolling = 0;
  document
    .querySelector("#modalSizeInfo")
    .addEventListener("scroll", function () {
      isScrolling = this.scrollLeft > 0; // 判斷是否滾動

      document
        .querySelectorAll(".size-table--panel tbody td:first-child")
        .forEach(function (cell) {
          // 如果該行是選中的，不修改它的背景色
          if (cell.parentElement.classList.contains("selected")) {
            cell.style.backgroundColor = "rgba(240, 240, 240, 1)"; // 保持選中行背景色
            cell.style.borderRadius = "13px";
          } else if (isScrolling) {
            cell.style.borderRadius = "13px";
            cell.style.backgroundColor = "#fff"; // 滾動時為其他行添加背景色
          } else {
            cell.style.backgroundColor = "transparent"; // 未滾動時移除背景色
          }
        });
      // 同樣處理表頭
      document
        .querySelectorAll(".size-table--panel thead th:first-child")
        .forEach(function (cell) {
          if (isScrolling) {
            // cell.style.backgroundColor = "#eaeaea"; // 滾動時表頭背景色
            cell.style.backgroundColor = "#fff"; // 滾動時表頭背景色
          } else {
            cell.style.backgroundColor = "transparent"; // 未滾動時移除表頭背景色
          }
        });
    });

  const breakpoint = 768;

  // 取得 panelOffcanvas 元素
  const panelOffcanvasElement = document.getElementById(
    "panelOffcanvasBottomPanel"
  );

  // 監聽窗口大小變化
  window.addEventListener("resize", handleWindowResize);

  // 首次載入時執行檢查
  handleWindowResize();

  function handleWindowResize() {
    // 取得當前視窗寬度
    const windowWidth = window.innerWidth;

    // 當視窗寬度大於等於 768px (桌面版)
    if (windowWidth >= breakpoint) {
    } else {
    }
  }
  var userAgent = navigator.userAgent.toLowerCase();
  var isEdgeIOS = userAgent.includes("edgios");
  var isMobile = window.innerWidth < 992;
  var infoContent = $("#info-content");
  var aiContent = $("#ai-content");
  var panelOffcanvasBottom = $(
    ".inf-panel-container .panelOffcanvas.panelOffcanvas-bottom"
  );
  // FIXME
  if (isMobile) {
    // infoContent.css("max-height", "calc(80lvh - 60px)");
    panelOffcanvasBottom.css("height", "calc(90lvh - 60px)");
    if (isEdgeIOS) {
      infoContent.css("max-height", "calc(90lvh - 10px)");
      aiContent.css("max-height", "calc(90lvh - 10px)");
      // panelOffcanvasBottom.css("height", "fit-content");
      panelOffcanvasBottom.css("height", "calc(90lvh - 10px)");
    }
  }
  function api_Products() {
    var Gender_ClothID;
    var dataUrl = "https://api.inffits.com/gpi/model/";
    var Payload = {
      Brand: BRAND,
      url: decodeURI(document.location.href).split("?")[0],
      CONFIG: "on",
    };

    $.ajax({
      url: dataUrl,
      method: "POST",
      dataType: "text",
      data: JSON.stringify(Payload),
      async: true,
      success: (res) => {
        console.log(res);
        var Results = JSON.parse(res);
        Gender_ClothID = Results["Gender_ClothID"];

        //%%%%%%%Size AI Toggle%%%%%%%%//
        if (document.querySelector(".quantity-wrapper") !== null) {
          var t1 = document.querySelector(".quantity-wrapper"); //
        } else if (document.querySelector(".quantity") !== null) {
          var t1 = document.querySelector(".quantity"); //
        }

        if (t1 !== null) {
          t1.insertAdjacentHTML(
            "beforebegin",
            '<div id="infFITS_size" type="button" style="font-size:14px;font-weight: 400;font-family: Noto Sans TC,sans-serif;cursor: pointer;display: block;position: relative;letter-spacing: .1rem;opacity: 1;-webkit-animation: fadeIn_wrapper 1s 0.4s ease forwards;animation: fadeIn_wrapper 1s 0.4s ease forwards;padding: 8px 0;margin: 16px 0; "><div style="color:black;border-radius:2px; border: 1px solid rgb(50,50,50);padding: 10px;font-size: 12px;position: relative; font-family: Noto Sans TC,sans-serif;text-align: center;display: flex;justify-content: center;align-items: center;"><span style=""><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" class="eva eva-arrow-forward-outline" fill="black"><g data-name="Layer 2"><g data-name="arrow-forward"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"></rect><path d="M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23 1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2z"></path></g></g></svg></span><span">&nbsp; 開啟 「 AI 智能 快速選擇尺寸」</span></div></div>'
          );
          // t1.insertAdjacentHTML("beforebegin",`<div id="infFITS_sizefast" style="/* width: 100%; font-size:14px;*/font-weight: 600;font-family: Noto Sans TC,sans-serif;cursor: pointer;display: block;position: relative;padding: 10px 0;letter-spacing: .1rem;margin-bottom:24px;opacity: 0;-webkit-animation: fadeIn_wrapper 1s 0.4s ease forwards; animation: fadeIn_wrapper 1s 0.4s ease forwards;"><div style="position: absolute;right: -6px;border: 0;opacity: 0.5;bottom:-20px"><img src="https://inffits.com/webDesign/HTML/img/infFITS_Logo_2019_center.png" height="30px"></div><div id="infFITS_sizefast_wrapper"><div class="wrapper-flex"><div class="inf_sf-container"><div class="inf_sf-maintext"></div><div class="inf_sf-main"><div id="loader"><img src="https://myinffits.com/images/inffits_f_black.png" height="15px"><div class="cssload-speeding-wheel"></div></div><div class="inf_sf-section"><div class="inf_sf-section-block active"><span id="front_top_size"></span>&nbsp;<span class='front_per active' id="front_top_per" style="font-size: 12px;font-weight: 300;"></span><img src="https://inffits.com/webDesign/HTML/img/002-checked-symbol.png" width="10px" height="10px" style="position: absolute; right: 3px; top: 3px; display: block;"></div></div><div class="inf_sf-section"><div class="inf_sf-section-block"><span id="front_sec_size"></span>&nbsp;<span class="front_per" style="font-size: 12px;font-weight: 300;" id="front_sec_per"></span><img src="https://inffits.com/webDesign/HTML/img/002-checked-symbol.png" width="10px" height="10px" style="position: absolute; right: 3px; top: 3px; display: none;"></div></div></div></div><div class="logo-img-container"><div class="logo-img"></div></div><div style="/* top: -3px; */position: relative;/* display: none; */line-height: 45px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.19 15.56" style="fill:none;stroke:#000000;stroke-width:2px;height: 10px;position: absolute;top: 40%;right: 0;"><path d="m.71.71l7.07,7.07L.71,14.85"></path></svg></div></div></div></div>`)
          $("#infFITS_size").on("pointerdown", function () {
            $(".panelOffcanvas")
              .removeClass("slide-out")
              .addClass("slide-in")
              .show();
            $("#svgContainerPanel").show();
            // $(".size-btn--panel")[0].click();
            if (window.innerWidth < 768) {
              $(".panelOffcanvas-backdrop").addClass("show");
              document.body.style.overflow = "hidden";
            }
            $(".trigger-icon--shirt").hide();
          });
        }
        //%%%%%%%%Size AI Toggle%%%%%%%% END //

        //Get Panel
        getPanelInfo(Gender_ClothID);
        //Get Panel END
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  /* 取得資料 */
  function getPanelInfo(Gender_ClothID) {
    var Gender_ClothID__panel = Gender_ClothID;
    var ClothID_sizeinfo__panel = Gender_ClothID__panel.split("&")[1];
    var Brand__panel = Gender_ClothID__panel.split("&")[1].split("_")[0];

    var dataUrlPanel =
      "https://etpbgcktrk.execute-api.ap-northeast-1.amazonaws.com/v0/model";
    $.ajax({
      url: dataUrlPanel,
      method: "GET",
      dataType: "text",
      data: "ClothID=" + ClothID_sizeinfo__panel + "&Brand=" + Brand__panel,
      crossDomain: true,
      async: true,
      success: (res) => {
        console.log("res", JSON.parse(res));
        response = JSON.parse(res);

        var sizeInfoTable = createSizeInfoTablePanel(
          JSON.parse(response.SizeInfo)
        );
        $("#modalSizeInfo").html(sizeInfoTable);

         //EVENT & MESSAGE
         document.getElementById('inffits_ctryon_window').setAttribute('src', 'https://inffits.com/webDesign/HTML/js/iframe/indexwebiframe_CA_tw_' + Brand__panel.toLowerCase() + '.html?' + Gender_ClothID__panel)

         var SizeAIFast_switch = false
         window.addEventListener('message', function (event) {
           if (event.data["MsgHeader"] == "IDRxReady") {
 
             var member_id = "";
             var given_id = "";
             var lgiven_id = "";
             var tryonwindow = document.getElementById("inffits_ctryon_window").contentWindow;
 
             //avoid always got
             var chklog1 = '"currentUser\\"';
             var chklog2 = ':null';
             //document.documentElement.innerHTML.includes('"currentUser\\":null')
 
             //member_id
             if (!document.documentElement.innerHTML.includes(chklog1 + chklog2)) {
               if (document.documentElement.innerHTML.split('href="/users/')[1].split('",')[0].split('/edit"')[0].length < 30) {
                 member_id = document.documentElement.innerHTML.split('href="/users/')[1].split('",')[0].split('/edit"')[0];
               }
               else member_id = "";
             }
 
             // Always Generate a pair of GVID
             gvid_exist = false;
             try {
               if (typeof localStorage["GVID"] !== 'undefined') {
                 gvid_exist = true;
               }
               else {
                 gvid_exist = false;
               }
             }
             catch (e) {
               gvid_exist = false;
             }
             if (gvid_exist) {
               given_id = localStorage["GVID"];
             }
             else {
               given_id = makeid(20);
               localStorage.setItem("GVID", given_id);
             }
             // Always Generate a pair of LGVID
             lgvid_exist = false;
             try {
               if (typeof localStorage["LGVID"] !== 'undefined') {
                 lgvid_exist = true;
               }
               else {
                 lgvid_exist = false;
               }
             }
             catch (e) {
               lgvid_exist = false;
             }
             if (lgvid_exist) {
               lgiven_id = localStorage["LGVID"];
             }
             else {
               lgiven_id = makeid(20);
               localStorage.setItem("LGVID", lgiven_id);
             }
 
             IDRxGet(member_id, given_id, tryonwindow, lgiven_id, test, SizeAIFast_switch);
 
             //Flow Adjustment
             document.getElementById("inffits_ctryon_window").contentWindow.postMessage({ MsgHeader: "RemoveWaistFlow" }, "*");
 
 
           }
           else if (event.data["MsgHeader"] == "AddtoCart") {
 
             RecomText = event.data['Size'];
             Message_AddtoCartold(true);
             $('.btn-close').click();
 
           }
         }, false);

        //SVG
        if ("ChartInfo" in JSON.parse(res)) {
          svg_display_panel(JSON.parse(res));
        }
        if (
          !Gender_ClothID__panel.split("&")[1]
            .split("_")[1]
            .match(/[A-Z]+/)[0]
            .includes("A")
        ) {
          // 試穿資訊
          showTryonReportPanel(JSON.parse(res).Avatar);
        }
        // 商品屬性
        if ("AttributeInfo" in JSON.parse(res)) {
          clothes_attributes_display_panel(JSON.parse(res));
        }

        $("#AIbtn").click();
        showIntroPanel();
        $("#panelTagBtn").show()
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  /* 建立尺寸表 */
  function createSizeInfoTablePanel(sizeInfo) {
    var headers = Object.keys(sizeInfo[0]);

    var table = '<table class="size-table--panel"><thead><tr>';
    headers.forEach(function (header) {
      table += "<th>" + header + "</th>";
    });
    table += "</tr></thead><tbody>";
    sizeInfo.forEach(function (size, index) {
      table += '<tr class="size-btn--panel" data-row-index="' + index + '">';
      headers.forEach(function (header) {
        table += "<td>" + size[header] + "</td>";
      });
      table += "</tr>";
    });
    table += "</tbody></table>";

    // 添加點擊事件監聽器
    $(document).on("click", "table tbody tr", function () {
      var rowIndex = $(this).data("row-index");
      var selectedSize = sizeInfo[rowIndex];
      console.log("選中的尺寸：", selectedSize);
      // 在這裡可以添加更多處理選中尺寸的邏輯
      document
        .querySelectorAll(".size-table--panel tbody td:first-child")
        .forEach(function (cell) {
          if (isScrolling) {
            cell.style.backgroundColor = "#fff";
            if (cell.parentElement.classList.contains("selected")) {
              cell.style.backgroundColor = "transparent";
              cell.style.borderRadius = "0";
            }
          }
        });
      $(this).addClass("selected").siblings().removeClass("selected");
      document
        .querySelectorAll(".size-table--panel tbody td:first-child")
        .forEach(function (cell) {
          console.log("this", this);

          console.log("cell", cell);
          if (isScrolling) {
            if (cell.parentElement.classList.contains("selected")) {
              cell.style.transition = "background-color 0s";
              cell.style.backgroundColor = "rgba(240, 240, 240, 1)"; // 保持選中行背景色
            } else {
              cell.style.backgroundColor = "#fff";
            }
          } else {
            cell.style.backgroundColor = "transparent";
          }
        });
    });

    return table;
  }

  $("#panelTagBtn.trigger-icon--shirt").on("click", function () {
    $(".panelOffcanvas").removeClass("slide-out").addClass("slide-in").show();
    if (window.innerWidth < 768) {
      $(".panelOffcanvas-backdrop").addClass("show");
      document.body.style.overflow = "hidden";
    }
    $(".inf-panel-container").show();
    $("#panelTagBtn.trigger-icon--shirt").hide();
  });
  $(".btn-close--panel").on(eventType, function () {
    $(".panelOffcanvas").removeClass("slide-in").addClass("slide-out");
    $("#panelTagBtn.trigger-icon--shirt").fadeIn();
    if (window.innerWidth < 768) {
      $(".panelOffcanvas-backdrop").removeClass("show");
      document.body.style.overflow = "";
    }
    // 在動畫結束後隱藏元素
    setTimeout(function () {
      $(".panelOffcanvas").hide();
    }, 500);
  });

  $(".btn-close--intro").on(eventType, function () {
    $(".panelOffcanvas").removeClass("slide-in").addClass("slide-out");
    $("#panelTagBtn.trigger-icon--shirt").fadeIn();
    if (window.innerWidth < 768) {
      $(".panelOffcanvas-backdrop").removeClass("show");
      document.body.style.overflow = "";
    }
    // 在動畫結束後隱藏元素
    setTimeout(function () {
      $(".panelOffcanvas").hide();
    }, 500);
  });

  if (isTouchDevice) {
    $("#guideBtn").on("touchstart", function (event) {
      event.preventDefault(); // 防止雙次觸發
      $(this).trigger("click"); // 手動觸發 click 事件
    });
    $("#AIbtn").on("touchstart", function (event) {
      event.preventDefault(); // 防止雙次觸發
      $(this).trigger("click"); // 手動觸發 click 事件
    });
    $(".accordion-button").on("touchstart", function (event) {
      event.preventDefault(); // 防止雙次觸發
      $(this).trigger("click"); // 手動觸發 click 事件
    });
  }
  function showIntroPanel() {
    $(".btn-close-container").hide();
    $(".fixed-panel-header").hide();
    $("#info-content.modal-body").hide();
    $("#ai-content.modal-body").hide();
    $("#intro-content.modal-body").show();
  }
  $("#guideBtn").on("click", function () {
    $("#guideBtn").removeClass("btn-white");
    $("#guideBtn").addClass("btn-active");

    $("#AIbtn").removeClass("btn-active");
    $("#AIbtn").addClass("btn-white");
    $("#ai-content.modal-body").hide();
    $("#info-content.modal-body").show();
    $(".iframe-container").hide();
    $("#svgContainerPanel").show();
    if ($(".size-btn--panel.selected.active").length > 0) {
      $(".size-btn--panel.selected.active").click();
    } else {
      $(".size-btn--panel")[0].click();
    }
  });

  $("#AIbtn").on("click", function () {
    $(".iframe-container").show();
    $("#AIbtn").removeClass("btn-white");
    $("#AIbtn").addClass("btn-active");

    $("#guideBtn").removeClass("btn-active");
    $("#guideBtn").addClass("btn-white");

    $("#info-content.modal-body").hide();
    $("#ai-content.modal-body")
      .show()
      .scrollTop($("#ai-content.modal-body").height(), { behavior: "smooth" });
  });

  $(".accordion-button").on("click", function () {
    const targetId = $(this).data("bs-target");
    const $target = $(targetId);
    console.log("%target", $target);

    // 確保目標元素已經展開後再滾動
    $target.on("shown.bs.collapse", function () {
      if ($target.attr("id").includes("sizeInfoCollapse")) {
        // 你的邏輯代碼
        console.log("The target's ID contains 'sizeInfoCollapse'");
        $("#svgContainerPanel").show();
        if ($(".size-btn--panel.selected.active").length > 0) {
          $(".size-btn--panel.selected.active").click();
        } else {
          $(".size-btn--panel")[0].click();
        }
      }
      if ($target.attr("id").includes("filterInfoCollapse")) {
        const filterInfoCollapse = document.querySelector(
          "#filterInfoCollapse"
        );
        filterInfoCollapse.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
      if ($target.attr("id").includes("attributeInfoCollapse")) {
        const attributeInfoCollapse = document.querySelector(
          "#attributeInfoCollapse"
        );
        attributeInfoCollapse.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    });
  });

  $(".intro-btn--primary").on(eventType, function () {
    $("#intro-content.modal-body").hide();
    $(".fixed-panel-header").show();
    $(".btn-close-container").show();
    $("#AIbtn").click();
  });

  $(".intro-btn--secondary").on(eventType, function () {
    $("#intro-content.modal-body").hide();
    $(".fixed-panel-header").show();
    $(".btn-close-container").show();
    $("#guideBtn").click();
  });

  //TryonReport Display
  var row_qty_TR = 0;
  var col_qty_TR;
  var col_value_TR = [];
  function showTryonReportPanel(TRcontent) {
    function morerow_TRPanel(
      qty,
      headerdefault,
      n_150d,
      n_150,
      n_160,
      n_170,
      n_180u
    ) {
      if (row_qty_TR == 0) {
        for (k = 0; k < col_qty_TR; k++) {
          $("#th_tr_size_TR--panel").append(
            '<th id="headerTR--panel' +
              k +
              '"><span>' +
              headerdefault[k] +
              "</span></th>"
          );
        }
      }

      for (i = 0; i < n_150d; i++) {
        $("#tbody_size_TR--panel").append(
          '<tr id="rowTR--panel' + row_qty_TR + '" class="150d"></tr > '
        );

        for (k = 0; k < col_qty_TR; k++) {
          $("#rowTR--panel" + row_qty_TR).append(
            '<td id="' +
              row_qty_TR +
              "_" +
              k +
              'TR--panel" style="height: 30px;"></td>'
          );
          if (col_value_TR[k] == null) {
            col_value_TR[k] = [];
          }
          col_value_TR[k].push("");
        }
        row_qty_TR++;
      }

      for (i = 0; i < n_150; i++) {
        $("#tbody_size_TR--panel").append(
          '<tr id="rowTR--panel' +
            row_qty_TR +
            '" class="150" style="display:none"></tr > '
        );

        for (k = 0; k < col_qty_TR; k++) {
          $("#rowTR--panel" + row_qty_TR).append(
            '<td id="' +
              row_qty_TR +
              "_" +
              k +
              'TR--panel" style="height: 30px;"></td>'
          );
          if (col_value_TR[k] == null) {
            col_value_TR[k] = [];
          }
          col_value_TR[k].push("");
        }
        row_qty_TR++;
      }

      for (i = 0; i < n_160; i++) {
        $("#tbody_size_TR--panel").append(
          '<tr id="rowTR--panel' +
            row_qty_TR +
            '" class="160" style="display:none"></tr > '
        );

        for (k = 0; k < col_qty_TR; k++) {
          $("#rowTR--panel" + row_qty_TR).append(
            '<td id="' +
              row_qty_TR +
              "_" +
              k +
              'TR--panel" style="height: 30px;"></td>'
          );
          if (col_value_TR[k] == null) {
            col_value_TR[k] = [];
          }
          col_value_TR[k].push("");
        }
        row_qty_TR++;
      }

      for (i = 0; i < n_170; i++) {
        $("#tbody_size_TR--panel").append(
          '<tr id="rowTR--panel' +
            row_qty_TR +
            '" class="170" style="display:none"></tr > '
        );

        for (k = 0; k < col_qty_TR; k++) {
          $("#rowTR--panel" + row_qty_TR).append(
            '<td id="' +
              row_qty_TR +
              "_" +
              k +
              'TR--panel" style="height: 30px;"></td>'
          );
          if (col_value_TR[k] == null) {
            col_value_TR[k] = [];
          }
          col_value_TR[k].push("");
        }
        row_qty_TR++;
      }

      for (i = 0; i < n_180u; i++) {
        $("#tbody_size_TR--panel").append(
          '<tr id="rowTR--panel' +
            row_qty_TR +
            '" class="180u" style="display:none></tr > '
        );

        for (k = 0; k < col_qty_TR; k++) {
          $("#rowTR--panel" + row_qty_TR).append(
            '<td id="' +
              row_qty_TR +
              "_" +
              k +
              'TR--panel" style="height: 30px;"></td>'
          );
          if (col_value_TR[k] == null) {
            col_value_TR[k] = [];
          }
          col_value_TR[k].push("");
        }
        row_qty_TR++;
      }
    }
    function displaytable_TR_panel(Avatar, table, showChest) {
      var trs = table.rows,
        trl = trs.length,
        i = 0,
        j = 0,
        keys;
      var Cup = ["A", "B", "C", "D", "E", "F", "G"];
      var CupV = [0, 2.5, 5, 7.5, 10, 12.5, 15];

      if (showChest) {
        keys = ["Name", "Height", "Weight", "Chest", "size", "FitP"];
      } else {
        keys = ["Name", "Height", "Weight", "size", "FitP"];
      }

      console.log(keys);
      //Resort Avatar
      // let ResortAvatar = JSON.parse(Avatar)
      ResortAvatar = Avatar;
      ResortAvatar.sort(function (a, b) {
        // 將 "order" 轉換為數字並進行比較
        return parseInt(a.Order) - parseInt(b.Order);
      });
      console.log(ResortAvatar);
      // console.log(JSON.parse(Avatar))
      function FitP_translater_panel(string) {
        if (string == "Tight") output = "緊身";
        else if (string == "Fit") output = "合身";
        else if (string == "Great") output = "適中";
        else if (string == "Comfort") output = "舒適";
        else if (string == "Loose") output = "寬鬆";
        else output = string;
        return output;
      }
      //匿名
      var start = "A";
      var startCharCode = start.charCodeAt(0) - 1;

      for (i = 0; i < trl; i++) {
        if (i == 0) {
          for (var j = 0; j < trs[i].children.length; j++) {
            var info_header;
            info_header = keys[j];
            console.log(info_header);
            //                        trs[i].children[j].querySelector('span').innerHTML = info_header;
          }
        } else {
          for (j = 0; j < trs[i].children.length; j++) {
            if (keys[j] == "Chest") {
              //trs[i].children[j].innerText = parseInt(ResortAvatar[i - 1]['Chest'].substring(0, 2)) * 2.5 + CupV[Cup.indexOf(JSON.parse(Avatar)[i - 1]['Chest'].substring(2, 3))]
              trs[i].children[j].innerText = "test"; // TO BE Checked
            } else if (
              keys[j] == "Name" &&
              Object.keys(ResortAvatar[i - 1]).includes("Image_src")
            ) {
              trs[i].children[j].innerHTML =
                '<div style="height: 60px;width: 60px;display: flex;align-items: center;margin: auto;"><img width=100% height=100% style="border-radius:60px" src="' +
                ResortAvatar[i - 1]["Image_src"] +
                '"></div>';
            } else if (keys[j] == "Name") {
              trs[i].children[j].innerText = String.fromCharCode(
                startCharCode + i
              );
            } else {
              if (typeof ResortAvatar[i - 1][keys[j]] == "undefined") {
                trs[i].children[j].innerText = "-";
              } else {
                trs[i].children[j].innerText = FitP_translater_panel(
                  ResortAvatar[i - 1][keys[j]]
                );
              }
            }
          }
        }
      }
    }
    function checkChestPanel(Avatar) {
      var trl = JSON.parse(Avatar).length,
        showChest = true;
      for (i = 0; i < trl; i++) {
        if (JSON.parse(Avatar)[i]["Chest"].includes("-")) {
          showChest = false;
        }
      }
      return showChest;
    }

    function group_by_height_panel(TRcontent) {
      for (i = 0; i < JSON.parse(TRcontent).length; i++) {
        if (JSON.parse(TRcontent)[i]["Height"] <= 150) {
          height_group150down_panel.push(JSON.parse(TRcontent)[i]);
        } else if (
          JSON.parse(TRcontent)[i]["Height"] <= 160 &&
          JSON.parse(TRcontent)[i]["Height"] >= 150
        ) {
          height_group150_panel.push(JSON.parse(TRcontent)[i]);
        } else if (
          JSON.parse(TRcontent)[i]["Height"] <= 170 &&
          JSON.parse(TRcontent)[i]["Height"] >= 160
        ) {
          height_group160_panel.push(JSON.parse(TRcontent)[i]);
        } else if (
          JSON.parse(TRcontent)[i]["Height"] >= 170 &&
          JSON.parse(TRcontent)[i]["Height"] <= 180
        ) {
          height_group170_panel.push(JSON.parse(TRcontent)[i]);
        } else if (JSON.parse(TRcontent)[i]["Height"] >= 180) {
          height_group180up_panel.push(JSON.parse(TRcontent)[i]);
        }
      }
    }
    var height_group150down_panel = [];
    var height_group150_panel = [];
    var height_group160_panel = [];
    var height_group170_panel = [];
    var height_group180up_panel = [];
    console.log("height_group150_panel", height_group150_panel);
    group_by_height_panel(TRcontent);
    const filterBtnContainer = $(".filter-btn-container--panel");
    if (height_group150down_panel.length) {
      filterBtnContainer.append(
        `<button class="filter-button--panel active" data-height="150d">150 down</button>`
      );
    }
    if (height_group150_panel.length) {
      filterBtnContainer.append(
        `<button class="filter-button--panel" data-height="150">150 ~ 160</button>`
      );
    }
    if (height_group160_panel.length) {
      filterBtnContainer.append(
        `<button class="filter-button--panel" data-height="160">160 ~ 170</button>`
      );
    }
    if (height_group170_panel.length) {
      filterBtnContainer.append(
        `<button class="filter-button--panel" data-height="170">170 ~ 180</button>`
      );
    }
    if (height_group180up_panel.length) {
      filterBtnContainer.append(
        `<button class="filter-button--panel" data-height="180u">180 up</button>`
      );
    }
    $(".filter-button--panel").on(eventType, function () {
      filterTablePanel($(this).data("height"), this);
      // const filterInfoCollapse = document.querySelector("#filterInfoCollapse");
      // filterInfoCollapse.scrollIntoView({
      //   behavior: "smooth",
      //   block: "start",
      // });
    });

    var showChest = checkChestPanel(TRcontent);
    if (showChest) {
      col_qty_TR = 6;
      morerow_TRPanel(
        Object.keys(JSON.parse(TRcontent)).length,
        ["人員", "身高", "體重", "尺寸", "胸圍", "試穿偏好"],
        height_group150down_panel.length,
        height_group150_panel.length,
        height_group160_panel.length,
        height_group170_panel.length,
        height_group180up_panel.length
      );
    } else {
      col_qty_TR = 5;
      morerow_TRPanel(
        Object.keys(JSON.parse(TRcontent)).length,
        ["人員", "身高", "體重", "尺寸", "試穿偏好"],
        height_group150down_panel.length,
        height_group150_panel.length,
        height_group160_panel.length,
        height_group170_panel.length,
        height_group180up_panel.length
      );
    }

    displaytable_TR_panel(
      [
        ...height_group150down_panel,
        ...height_group150_panel,
        ...height_group160_panel,
        ...height_group170_panel,
        ...height_group180up_panel,
      ],
      document.getElementById("TryonTable--panel"),
      showChest
    );
    var widthPercentage = 100 / col_qty_TR; // 計算每列寬度的百分比
    $("#TryonTable--panel th, #TryonTable--panel td").css(
      "width",
      widthPercentage + "%"
    ); // 設定寬度
  }

  //SVG Display
  function svg_display_panel(json_res) {
    function resize_svg_panel(data, Labels) {
      const svgContainerPanel = document.getElementById("svgContainerPanel");
      const squaresize =
        document.getElementById("svgContainerPanel").offsetWidth;
      function derive_svg_circum_panel(svg_data, a, b, centerX, centerY) {
        // 定义椭圆和直线的属性
        //let a = 150; // 椭圆的长轴半径
        //let b = 30;  // 椭圆的短轴半径
        //let centerX = 250; // 椭圆中心的 X 坐标
        //let centerY = 250; // 椭圆中心的 Y 坐标
        let pathData =
          `M ${centerX} ${centerY - b} ` +
          `a ${a} ${b} 0 1 0 0 ${2 * b} ` +
          `a ${a} ${b} 0 1 0 0 ${-2 * b}`;

        // 完整的 SVG 结构
        svg_dat = `<path d="${pathData}" stroke="rgb(27, 27, 27)" fill="none" stroke-dasharray="1, 1"/>`;
        svg_data += svg_dat;
        return svg_data;
        //return svg_dat
      }
      function derive_svg_line_panel(svg_data, x1, y1, x2, y2) {
        m = 0; // m : margin
        if (y1 == y2) {
          y1_m = y1;
          y2_m = y2;
          if (x1 > x2) {
            x1_m = x1 - m;
            x2_m = x2 + m;
          } else {
            x1_m = x1 + m;
            x2_m = x2 - m;
          }
        } else if (x1 == x2) {
          //x1==x2
          x1_m = x1;
          x2_m = x2;
          if (y1 > y2) {
            y1_m = y1 - m;
            y2_m = y2 + m;
          } else {
            y1_m = y1 + m;
            y2_m = y2 - m;
          }
        } else {
          x1_m = x1;
          x2_m = x2;
          y1_m = y1;
          y2_m = y2;
        }
        // "4, 4"虛線
        svg_dat = `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="rgb(27, 27, 27)" stroke-width="1" stroke-dasharray="none"/>
                            <!-- 起点圆球 --> <circle cx="${x1_m}" cy="${y1_m}" r="3" fill="rgb(27, 27, 27)"/>
                            <!-- 终点圆球 --> <circle cx="${x2_m}" cy="${y2_m}" r="3" fill="rgb(27, 27, 27)"/>`;
        svg_data += svg_dat;
        return svg_data;
      }
      function derive_svg_exline_panel(svg_data, x1, y1, x2, y2, p, direction) {
        o_p = 15; // o_p is coounter-overshoot length, p is extend length
        if (direction == "Y") {
          x1_p = x1;
          x2_p = x2;
          y1_p = y1 + p;
          y2_p = y2 + p;
          y1 -= o_p;
          y2 -= o_p;
        } else if (direction == "-Y") {
          x1_p = x1;
          x2_p = x2;
          y1_p = y1 - p;
          y2_p = y2 - p;
          y1 += o_p;
          y2 += o_p;
        } else if (direction == "X") {
          x1_p = x1 + p;
          x2_p = x2 + p;
          x1 -= o_p;
          x2 -= o_p;
          y1_p = y1;
          y2_p = y2;
        } else if (direction == "-X") {
          x1_p = x1 - p;
          x2_p = x2 - p;
          x1 += o_p;
          x2 += o_p;
          y1_p = y1;
          y2_p = y2;
        }
        svg_dat = `<line x1="${x1}" y1="${y1}" x2="${x1_p}" y2="${y1_p}" stroke="darkgray" stroke-width="1" stroke-dasharray="1, 1"/>
                       <line x1="${x2}" y1="${y2}" x2="${x2_p}" y2="${y2_p}" stroke="darkgray" stroke-width="1" stroke-dasharray="1, 1"/>
                      `;
        svg_data += svg_dat;
        return svg_data;
      }
      function derive_svg_exline_panel_sl(
        svg_data,
        x1,
        y1,
        x2,
        y2,
        p1,
        p2,
        angle
      ) {
        // Calculate the unit direction vector of the original line
        // let dx = x2 - x1;
        // let dy = y2 - y1;
        // let length = Math.sqrt(dx*dx + dy*dy);
        // dx /= length; // Normalize
        // dy /= length; // Normalize

        // Convert angle to radians for JavaScript trig functions
        let angleRad = (angle * Math.PI) / 180;

        // Calculate the direction vector based on the angle
        let dx = Math.cos(angleRad);
        let dy = Math.sin(angleRad);

        // Calculate the new points (x1_p, y1_p) and (x2_p, y2_p) along the direction of the line
        let x1_p = x1 + p1 * dx;
        let y1_p = y1 + p1 * dy;
        let x2_p = x2 + p2 * dx;
        let y2_p = y2 + p2 * dy;

        // Calculate overshoot points if necessary (can use dx, dy for direction)

        // Create SVG lines (modify as needed for overshoot or aesthetics)
        let svg_dat = `<line x1="${x1}" y1="${y1}" x2="${x1_p}" y2="${y1_p}" stroke="darkgray" stroke-width="1" stroke-dasharray="1, 1"/>
                           <line x1="${x2}" y1="${y2}" x2="${x2_p}" y2="${y2_p}" stroke="darkgray" stroke-width="1" stroke-dasharray="1, 1"/>
                          `;
        svg_data += svg_dat;
        return svg_data;
      }
      var svg_data = "";

      for (var l = 0; l < Labels.length; l++) {
        console.log(data);
        console.log(Labels[l]);
        console.log(data[Labels[l]]);
        console.log(data[Labels[l]].param);

        if (
          data[Labels[l]].linetype_id == "DottedVertical" &&
          "angle" in data[Labels[l]].param
        ) {
          //斜線
          console.log("斜線");
          let x1 = data[Labels[l]].param.x1;
          let x2 = data[Labels[l]].param.x2;
          let y1 = data[Labels[l]].param.y1;
          let y2 = data[Labels[l]].param.y2;
          let p1 = data[Labels[l]].param.p1;
          let p2 = data[Labels[l]].param.p1;
          let angle = data[Labels[l]].param.angle;
          let avg_x = (parseFloat(x1) + parseFloat(x2)) / 2;
          let avg_y = (parseFloat(y1) + parseFloat(y2)) / 2;
          // if(data[Labels[l]].linename_id=="SleeveLength")
          // {
          //     if(data[Labels[l]].id=="shirt_longsleeve")
          //     {
          //         svg_data = derive_svg_exline_panel_sl(svg_data, x1 * squaresize, y1 * squaresize, x2 * squaresize, y2 * squaresize, p1 * squaresize, p2/1.95 * squaresize, angle)
          //         svg_data = derive_svg_line_panel(svg_data, x1*1.45 * squaresize, y1 * squaresize, x2*1.195 * squaresize, y2 * squaresize) // gen line // 直线的起始和结束坐标  //[item.sizeRequired ? item.size : '']
          //     }
          //     else
          //     {
          //         svg_data = derive_svg_exline_panel_sl(svg_data, x1 * squaresize, y1 * squaresize, x2 * squaresize, y2 * squaresize, p1 * squaresize, p2 * squaresize, angle)
          //         svg_data = derive_svg_line_panel(svg_data, x1*1.075 * squaresize, y1/1.55 * squaresize, x2*1.055 * squaresize, y2/1.35 * squaresize) // gen line // 直线的起始和结束坐标  //[item.sizeRequired ? item.size : '']
          //     }

          // }
          // else{
          // svg_data = derive_svg_exline_panel_sl(svg_data, x1 * squaresize, y1 * squaresize, x2 * squaresize, y2 * squaresize, p1 * squaresize, p2 * squaresize, angle)
          svg_data = derive_svg_line_panel(
            svg_data,
            x1 * squaresize,
            y1 * squaresize,
            x2 * squaresize,
            y2 * squaresize
          ); // gen line // 直线的起始和结束坐标  //[item.sizeRequired ? item.size : '']
          //}

          let offset =
            parseFloat(x1) > 0.5 ? 0.16 * squaresize : -0.16 * squaresize;
          console.log(offset);
          // svg_data = svg_data + `<text letter-spacing="1px" x=${x1*squaresize+offset} y=${avg_y*squaresize} fill="rgb(27, 27, 27)" font-size="12">${data[Labels[l]].linename} ${['value' in data[Labels[l]] ? data[Labels[l]].value : '']}</text>`
          let font_size = 11;
          let rect_width =
            font_size *
            (data[Labels[l]].linename.length +
              (data[Labels[l]].value.length < 3
                ? data[Labels[l]].value.length + 1
                : data[Labels[l]].value.length)) *
            1.1; //100
          let rect_height = font_size * 1.5; //50
          let x_offset =
            avg_x * squaresize - 0.5 * rect_width > 0
              ? 0
              : 1 - (avg_x * squaresize - 0.5 * rect_width);
          svg_data =
            svg_data +
            `<rect x=${
              avg_x * squaresize - 0.5 * rect_width > 0
                ? avg_x * squaresize - 0.5 * rect_width
                : 1
            } y=${
              avg_y * squaresize - 0.5 * rect_height
            } width=${rect_width} height=${rect_height} rx="10" ry="10" fill="white" stroke="rgb(27, 27, 27)" stroke-width="1"/><text letter-spacing="1px" x=${
              avg_x * squaresize + x_offset
            } y=${
              avg_y * squaresize
            } text-anchor="middle" dominant-baseline="central"  fill="rgb(27, 27, 27)" font-size="12">${
              data[Labels[l]].linename
            } ${[
              "value" in data[Labels[l]] ? data[Labels[l]].value : "",
            ]}</text> `;
        } else if (data[Labels[l]].linetype_id == "Round") {
          //圍度線
          let a = data[Labels[l]].param.a;
          let b = data[Labels[l]].param.b;
          let X = data[Labels[l]].param.X;
          let Y = data[Labels[l]].param.Y;
          let avg_x = (parseFloat(X) + parseFloat(X)) / 2;
          let avg_y = (parseFloat(Y) + parseFloat(Y)) / 2;
          svg_data = derive_svg_circum_panel(
            svg_data,
            a * squaresize,
            b * squaresize,
            (centerX = X * squaresize),
            (centerY = Y * squaresize)
          ); // gen circum
          // svg_data = svg_data + `<text letter-spacing="1px" x=${X*squaresize-12} y=${Y*squaresize+4} fill="rgb(27, 27, 27)" font-size="12">${data[Labels[l]].linename} ${['value' in data[Labels[l]] ? data[Labels[l]].value : '']}</text>`
          let font_size = 11;
          let rect_width =
            font_size *
            (data[Labels[l]].linename.length +
              (data[Labels[l]].value.length < 3
                ? data[Labels[l]].value.length + 1
                : data[Labels[l]].value.length)) *
            1.1; //100
          console.log(data[Labels[l]].linename.length + 1);
          console.log(data[Labels[l]].linename);
          let rect_height = font_size * 1.5; //50
          svg_data =
            svg_data +
            `<rect x=${avg_x * squaresize - 0.5 * rect_width} y=${
              avg_y * squaresize - 0.5 * rect_height
            } width=${rect_width} height=${rect_height} rx="10" ry="10" fill="white" stroke="rgb(27, 27, 27)" stroke-width="1"/><text letter-spacing="1px" x=${
              avg_x * squaresize
            } y=${
              avg_y * squaresize
            } text-anchor="middle" dominant-baseline="central"  fill="rgb(27, 27, 27)" font-size="12">${
              data[Labels[l]].linename
            } ${[
              "value" in data[Labels[l]] ? data[Labels[l]].value : "",
            ]}</text> `;
        } else if (data[Labels[l]].linetype_id == "DottedRound") {
          // 橫線
          let x1 = data[Labels[l]].param.x1;
          let x2 = data[Labels[l]].param.x2;
          let y1 = data[Labels[l]].param.y1;
          let y2 = data[Labels[l]].param.y2;
          let avg_x = (parseFloat(x1) + parseFloat(x2)) / 2;
          if (data[Labels[l]].linename_id != "ChestWidth") {
            svg_data = derive_svg_exline_panel(
              svg_data,
              x1 * squaresize,
              y1 * squaresize,
              x2 * squaresize,
              y2 * squaresize,
              0.1 * squaresize,
              (direction = "-Y")
            );
          }
          svg_data = derive_svg_line_panel(
            svg_data,
            x1 * squaresize,
            y1 * squaresize,
            x2 * squaresize,
            y2 * squaresize
          ); // gen line // 直线的起始和结束坐标
          let x_calibration = data[Labels[l]].linename.length == 3 ? 18 : 12;
          // svg_data = svg_data + `<text letter-spacing="1px" x=${avg_x*squaresize-x_calibration} y=${y1*squaresize-4} fill="rgb(27, 27, 27)" font-size="12">${data[Labels[l]].linename} ${['value' in data[Labels[l]] ? data[Labels[l]].value : '']}</text>`
          let font_size = 11;
          let rect_width =
            font_size *
            (data[Labels[l]].linename.length +
              (data[Labels[l]].value.length < 3
                ? data[Labels[l]].value.length + 1
                : data[Labels[l]].value.length)) *
            1.1; //100
          let rect_height = font_size * 1.5; //50
          svg_data =
            svg_data +
            `<rect x=${avg_x * squaresize - 0.5 * rect_width} y=${
              y1 * squaresize - 0.5 * rect_height
            } width=${rect_width} height=${rect_height} rx="10" ry="10" fill="white" stroke="rgb(27, 27, 27)" stroke-width="1"/><text letter-spacing="1px" x=${
              avg_x * squaresize
            } y=${
              y1 * squaresize
            } text-anchor="middle" dominant-baseline="central"  fill="rgb(27, 27, 27)" font-size="12">${
              data[Labels[l]].linename
            } ${[
              "value" in data[Labels[l]] ? data[Labels[l]].value : "",
            ]}</text> `;
        } else if (data[Labels[l]].linetype_id == "DottedVertical") {
          //直線 重疊
          console.log("直線");
          let x1 = data[Labels[l]].param.x1;
          let x2 = data[Labels[l]].param.x2;
          let y1 = data[Labels[l]].param.y1;
          let y2 = data[Labels[l]].param.y2;
          let p = data[Labels[l]].param.p;
          if (data[Labels[l]].linename_id == "ShoulderWidth") {
            svg_data = derive_svg_exline_panel(
              svg_data,
              x1 * squaresize,
              y1 * 1.6 * squaresize,
              x2 * squaresize,
              y2 * 1.6 * squaresize,
              (p / 1.7) * squaresize,
              (direction = "-Y")
            );

            svg_data = derive_svg_line_panel(
              svg_data,
              x1 * squaresize,
              y1 * squaresize,
              x2 * squaresize,
              y2 * squaresize
            ); // gen line // 直线的起始和结束坐标
          } else {
            svg_data = derive_svg_exline_panel(
              svg_data,
              x1 * squaresize,
              y1 * squaresize,
              x2 * squaresize,
              y2 * squaresize,
              p * squaresize,
              (direction = "-Y")
            );
            svg_data = derive_svg_line_panel(
              svg_data,
              x1 * squaresize,
              y1 * squaresize,
              x2 * squaresize,
              y2 * squaresize
            ); // gen line // 直线的起始和结束坐标
          }
          let avg_x = (parseFloat(x1) + parseFloat(x2)) / 2;
          let avg_y = (parseFloat(y1) + parseFloat(y2)) / 2;
          console.log(x1);
          console.log(x2);
          console.log(avg_x);
          console.log(avg_y);
          let x_calibration = data[Labels[l]].linename.length == 3 ? 18 : 12;
          // console.log(svg_data)
          // svg_data = svg_data + `<text letter-spacing="1px" x=${avg_x*squaresize-x_calibration} y=${y1*squaresize-4} fill="rgb(27, 27, 27)" font-size="12">${data[Labels[l]].linename} ${['value' in data[Labels[l]] ? data[Labels[l]].value : '']}</text>`
          let font_size = 11;
          let rect_width =
            font_size *
            (data[Labels[l]].linename.length +
              (data[Labels[l]].value.length < 3
                ? data[Labels[l]].value.length + 1
                : data[Labels[l]].value.length)) *
            1.1; //100
          let rect_height = font_size * 1.5; //50
          svg_data =
            svg_data +
            `<rect x=${avg_x * squaresize - 0.5 * rect_width} y=${
              avg_y * squaresize - 0.5 * rect_height
            } width=${rect_width} height=${rect_height} rx="10" ry="10" fill="white" stroke="rgb(27, 27, 27)" stroke-width="1"/><text letter-spacing="1px" x=${
              avg_x * squaresize
            } y=${
              avg_y * squaresize
            } text-anchor="middle" dominant-baseline="central"  fill="rgb(27, 27, 27)" font-size="12">${
              data[Labels[l]].linename
            } ${[
              "value" in data[Labels[l]] ? data[Labels[l]].value : "",
            ]}</text> `;
        }
      }

      //透過API取值呈現內容  derive_svg_circum_panel/derive_svg_line_panel/derive_svg_exline_panel_sl

      const svgStructure =
        `<svg width="` +
        squaresize +
        `" height="` +
        1.05 * squaresize +
        `" xmlns="http://www.w3.org/2000/svg">` +
        svg_data +
        `</svg>`;

      // 初始化 SVG
      svgContainerPanel.innerHTML = svgStructure;

      return { data: data, Labels: Labels };
    }
    let output_svg = json_res.ChartInfo;
    let global_sizeinfo = JSON.parse(json_res.SizeInfo);
    let SizeStringList = [];
    for (let s = 0; s < global_sizeinfo.length; s++) {
      SizeStringList.push(global_sizeinfo[s]["尺寸"]);
    }

    document.querySelector("#modalSizeImg").insertAdjacentHTML(
      "beforebegin",
      `
    <div id="SVG-Display" class="d-flex align-items-center justify-content-center" >
        <div >
            <div class='garment-svg' style="margin-bottom: 45px;">
                <img id="svg_imgsrc--panel"  onerror="this.style.display='none';">
                <div id='svgContainerPanel'></div>    
            </div>
            <div class="size-btn-wrapper" data-labels="${json_res.ChartInfo.Labels}">
            </div>
        </div>
    </div>
    `
    );

    //svg image
    $("#svg_imgsrc--panel")[0].src =
      "https://www.myinffits.com/images/garment_svgs/" +
      output_svg.data.filename +
      ".svg";
    //svg unit
    if (json_res.punit == "cm")
      $("#svg_unit--panel").find("span").text("cm(±2)");
    else $("#svg_unit--panel").find("span").text("英吋inch(±2)");

    function mapMeasurementPanel(input) {
      const measurementGroups = {
        ChestWidth: ["胸寬", "衣寬", "身寬"],
        ChestCircum: ["胸圍", "衣圍", "上胸圍"],
        ClothLength: ["衣長", "身長", "全長"],
        HemWidth: ["下擺寬", "下擺"],
        ShoulderWidth: ["肩寬"],
        SleeveLength: ["袖長"],
        HipCircum: ["臀圍"],
        HipWidth: ["臀寬"],
        PantHemWidth: ["褲口寬", "褲口"],
        PantLength: ["褲長", "全長"],
        SkirtLength: ["裙長", "全長"],
        WaistCircum: ["腰圍"],
        WaistWidth: ["腰寬"],
      };

      for (const measurementType in measurementGroups) {
        if (measurementGroups.hasOwnProperty(measurementType)) {
          const keywords = measurementGroups[measurementType];
          if (keywords.some((keyword) => input.includes(keyword))) {
            return measurementType;
          }
        }
      }

      return null; // 或其他預設值
    }

    //size-btn
    // for (let s = 0; s < SizeStringList.length; s++) {
    //     $('.size-btn-wrapper').append('<div class="size-btn--panel" >' + SizeStringList[s] + '</div>');
    // }
    $(document).ready(function () {
      // //     $("table").delegate("td","click",function(){
      // //       $('td').removeClass('active')
      // //       $(this).addClass('active');
      // //       //value change
      // //       let activeIndex = $('.active').index('td');
      // //       let size_active = $('.active').find('td:first').text();
      // //       $('#svg_size--panel').find('span').text(size_active)
      // //       console.log('activeIndex', activeIndex)
      // //       console.log('size_active', size_active)
      // //       alert('I am' + size_active);
      // // });
      function smoothScroll(element, to, duration) {
        const start = element.scrollTop;
        const change = to - start;
        const startTime = performance.now();
        function animateScroll(currentTime) {
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1);
          const easeInOutQuad =
            progress < 0.5
              ? 2 * progress * progress
              : 1 - Math.pow(-2 * progress + 2, 2) / 2;

          element.scrollTop = start + change * easeInOutQuad;

          if (timeElapsed < duration) {
            requestAnimationFrame(animateScroll);
          }
        }

        requestAnimationFrame(animateScroll);
      }

      $(document).on("click", ".size-btn--panel", function () {
        // 移除所有按钮的 'active' 类
        $(this).addClass("size-btn--panel");
        $(".size-btn--panel").removeClass("active");
        // 为当前点击的按钮添加 'active' 类
        $(this).addClass("active");
        let activeIndex = $(this).index();
        // let size_active = $(this).text();
        // let activeIndex = $('.size-btn--panel.active').index('.size-btn--panel');
        let size_active = $(this).find("td:first").text();
        $("#svg_size--panel").find("span").text(size_active);
        console.log(
          $("#svg_size--panel").find("span").text(size_active),
          " $('#svg_size--panel').find('span').text(size_active);"
        );
        let dataname_list = $(".size-btn-wrapper").data("labels").split(",");
        for (let gs = 1; gs < Object.keys(global_sizeinfo[0]).length; gs++) {
          let size_header = Object.keys(global_sizeinfo[0])[gs];
          let mappedMeasurement = mapMeasurementPanel(size_header);
          if (
            dataname_list.includes(mappedMeasurement) &&
            output_svg.data &&
            output_svg.data[mappedMeasurement]
          ) {
            console.log(global_sizeinfo[activeIndex], "global_sizeinfo");
            output_svg.data[mappedMeasurement].value =
              global_sizeinfo[activeIndex][size_header];
          }
        }

        if (output_svg && output_svg.data) {
          output_svg = resize_svg_panel(output_svg.data, output_svg.Labels);
          $("#svgContainerPanel").find("text").hide().fadeIn();
          console.log(output_svg, "!!!!!!!!!!!!!!!!!!");
        }
        // const sizeInfoCollapse = document.querySelector("#sizeInfoCollapse");
        // sizeInfoCollapse.scrollIntoView({
        //   behavior: "smooth",
        //   block: "end",
        // });

        // $("#info-content.modal-body").animate(
        //   {
        //     scrollTop: 0,
        //   },
        //   500
        // );
        // const contentElement = document.querySelector(
        //   "#info-content.modal-body"
        // );
        // smoothScroll(contentElement, 0, 500);

        // var sizeGuide = $(".container").html();
        // $(".modal-body").html(sizeGuide);
      });

      // $('.size-btn--panel').on('click', function () {
      //   $('.size-btn--panel').removeClass('active')
      //   $(this).addClass('active');
      //   //value change
      //   let activeIndex = $('.size-btn--panel.active').index('.size-btn--panel');
      //   let size_active = $('.size-btn--panel.active').find('td:first').text();

      //   $('#svg_size--panel').find('span').text(size_active)

      //   let dataname_list = $('.size-btn-wrapper').data('labels').split(',')
      //   for (let gs = 1; gs < Object.keys(global_sizeinfo[0]).length; gs++) {
      //       let size_header = Object.keys(global_sizeinfo[0])[gs]
      //       if (dataname_list.includes(mapMeasurementPanel(size_header))) {
      //           output_svg.data[mapMeasurementPanel(size_header)].value = global_sizeinfo[activeIndex][size_header];
      //       }
      //   }

      //   //show_svg
      //   output_svg = resize_svg_panel(output_svg.data, output_svg.Labels);
      //   $('#svgContainerPanel').find('text').hide().fadeIn()
      //   console.log(output_svg, "!!!!!!!!!!!!!!!!!!");
      //   var sizeGuide = $(".container").html();
      //   $(".modal-body").html(sizeGuide);
      // })
    });
    // setTimeout(function () {
    //   //initial
    //   //let e = new Event(mytap);
    //   //document.querySelector('.size-btn--panel').dispatchEvent(e)
    //   // $('.garment-svg').css('margin-bottom', $('.garment-svg').width() - $('#svg_imgsrc--panel').width())

    //   //show at the end of svg display
    // FIXME before
    //   $("#svgContainerPanel").show();
    //   $(".size-btn--panel")[0].click();
    // }, 250);

    var styles = `
        .svg-container{
          position: relative;
          text-align: center;
        }
        .garment-svg{
          position: relative;
          display: flex;
          width:40%;
          min-width:300px;
          height: auto;
          margin:auto;
          margin-bottom:150px;
        }
        #svg_unit--panel--panel, #svg_size--panel{
            color:black;font-size:14px;width:100%;margin-right:0;margin: auto;
            display: flex;
            justify-content: end;
        }
        #svg_imgsrc--panel{
            width: 70%;height: 70%;margin: auto;transform: translate(0%, 20%);opacity: 0.5;
        }
        #svgContainerPanel{
            position: absolute;width: 100%;height: 100%;top: 0;left: 0; display:none;
        }
        .size-btn-wrapper{
          position:relative;
          /*display: flex;*/
          width: 100%;
          /*width: 90%;*/
          margin: auto;
          overflow: scroll;
          justify-content: center;
        //   margin-bottom:16px;
          scrollbar-width: none; /* 隱藏標準的捲動條 */
		  -ms-overflow-style: none; /* 隱藏IE/Edge中的捲動條 */
          border-collapse: collapse;
        }

        .size-btn-wrapper .size-btn{
            border: 1px solid lightgray;
            padding: 12px 20px;
            /*border-radius: 20px;*/
            cursor: pointer;
            /*margin: 0 4px;*/
            text-align: center;
            font-size: 12px;
            display: table-cell;
            border: 1px solid #333;
            min-width: 80px;
            color:#333;
          }
          
        .size-btn-wrapper.size-btn--panel.active{
          background: #858585;
          color:white;
        }
        
        `;
    var styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  }

  //Attribute Display
  function clothes_attributes_display_panel(json_res) {
    let global_attributeinfo = json_res.AttributeInfo;
    //     <div class="card-header" style='z-index:1;position:relative'>
    //     <h4 class="cloattr-header-title">商品屬性</h4>
    // </div>
    // document.querySelector(".inf-panel-container").insertAdjacentHTML(
    //   "beforeend",
    //   `
    //       <br><br><div id="Clothes_Attributes">
    //       <h5 onclick="toggleHandler('attribute')" class="toggle-title">
    //               <span style="font-size:16px">商品屬性</span>
    //               <img src="./more.png" width="18" class="toggle-icon toggle-icon--attribute" />
    //           </h5>
    //           <br>
    //       <div class="table-container" id="attributeContent">
    //       <table>
    //           <tr>
    //               <th class="properties-header--panel" name="Elasticity">彈性</th>
    //               <td>無彈</td>
    //               <td>適中</td>
    //               <td>超彈</td>
    //           </tr>
    //           <tr>
    //               <th class="properties-header--panel" name="Cut">版型</th>
    //               <td>合身</td>
    //               <td>適中</td>
    //               <td>寬鬆</td>
    //           </tr>
    //           <tr>
    //               <th class="properties-header--panel" name="Thickness">厚度</th>
    //               <td>輕薄</td>
    //               <td>適中</td>
    //               <td>厚實</td>
    //           </tr>
    //           <tr>
    //               <th class="properties-header--panel" name="Materials">材質</th>
    //               <td colspan="3" style="color:black;font-weight:400;"></td>
    //           </tr>
    //           <tr>
    //               <th class="properties-header--panel" name="Lining">內襯</th>
    //               <td colspan="3" style="text-align: center;"><span class="checkmark"><img src="https://inffits.com/webDesign/HTML/img/002-checked-symbol.png" width=18px></span></td>
    //           </tr>
    //       </table>
    //   </div>

    //              </div>
    //           `
    // );

    for (let ca in json_res.AttributeInfo) {
      $(".properties-header--panel").each(function (idx, i) {
        if ($(i).attr("name") == ca && ca !== "Lining") {
          $(i)
            .siblings()
            .each(function (idx, i) {
              if (
                i.textContent.trim().replace(/\s+/g, " ") ==
                json_res.AttributeInfo[ca]
              ) {
                // $(i).find('.square').addClass('active')
                $(i).addClass("active");
              }
            });
        } else if ($(i).attr("name") == ca && ca === "Lining") {
          if (json_res.AttributeInfo[ca] === "無") {
            $(i).next().children()[0].innerText = json_res.AttributeInfo[ca];
            // $(i).next().children()[0].innerHTML =
            //   '<img src="https://inffits.com/webDesign/HTML/img/cross-mark-on-a-black-circle-background.png" width=18px>';
          }
        }
      });
    }
    for (let M = 0; M < json_res.AttributeInfo.Materials.length; M++) {
      console.log(json_res.AttributeInfo.Materials[M]);
      $('.properties-header--panel[name="Materials"]')
        .siblings()
        .append(json_res.AttributeInfo.Materials[M].split("(")[0] + " ");
    }

    //style adjustment
    if (window.innerWidth < 440) {
      $(".square").parent().parent().css("justify-content", "start");
    }
  }

  window.filterTablePanel = function (heightRange, button) {
    var table, rows, i;
    table = document.getElementById("TryonTable--panel");
    rows = table.getElementsByTagName("tr");

    for (i = 1; i < rows.length; i++) {
      rows[i].style.display = "none"; // hide all rows
      if (rows[i].classList.contains(heightRange)) {
        rows[i].style.display = ""; // show only rows that match the filter
      }
    }
    var buttons = document.getElementsByClassName("filter-button--panel");
    for (i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");
    }
    button.classList.add("active");
  };
});

})(jQuery);
