;(function ($) {
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
    :root {
  --dark-primary-color: rgba(51, 51, 51, 1);
  --light-primary-color: rgba(144, 144, 144, 1);
  --light-background-color: rgba(245, 245, 245, 1);
  --light-primary-color: rgba(255, 255, 255, 0.5);
}

.inf-panel-container {
  display: none;
}

/* modal trigger button */
.inf-panel-container .btn.btn-light.trigger-icon--shirt {
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

.inf-panel-container .fixed-panel-header{
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
  display: -ms-flexbox;
  display: flex;
  padding: 10px;
  -ms-flex-pack: center;
      justify-content: center;
  -ms-flex-align: start;
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

.inf-panel-container #info-content #modalInfoAccordion{
  padding-top: 65px;
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

.inf-panel-container .size-table thead th {
  font-weight: 400;
  text-wrap: nowrap;
}

.inf-panel-container .size-table tr {
  display: block;
}

.inf-panel-container .size-table thead tr {
  border: none;
}

.inf-panel-container .size-table tbody tr {
  margin-bottom: 6px;
}

.inf-panel-container th,
.inf-panel-container td {
  width: 100px;
  padding: 12px 18px;
}

.inf-panel-container .size-table thead th {
  position: sticky;
  /* background: #fff; */
  top: 0;
  z-index: 2; /* 保證表頭高於內容 */
}

.inf-panel-container .size-table tbody td:first-child,
.inf-panel-container .size-table thead th:first-child {
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
  margin: 0px;
  padding: 20px;
  z-index: 1050;
  background-color: white;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.15);
  transform: translateX(0%);
  transition: -webkit-transform 350ms ease;
  transition: transform 350ms ease;
  transition: transform 350ms ease, -webkit-transform 350ms ease;
  -webkit-transition: transform 350ms ease;
  -moz-transition: transform 350ms ease;
  -ms-transition: transform 350ms ease;
  -o-transition: transform 350ms ease;
  -webkit-transform: translateX(0%);
  -moz-transform: translateX(0%);
  -ms-transform: translateX(0%);
  -o-transform: translateX(0%);
}

.inf-panel-container #panel-content.offcanvas-body {
  // padding: 18px 0;
  padding: 0;
  overflow-y: hidden;
  position: relative;
}

.offcanvas-backdrop.show {
  opacity: 1 !important;
  background-color: rgba(0, 0, 0, 0.3) !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
}

.inf-panel-container .offcanvas.offcanvas-bottom {
  position: fixed;
  width: 95vw;
  max-width: 400px;
  z-index: 1050;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.inf-panel-container .offcanvas-bottom.main-modal,
.inf-panel-container .offcanvas-end.main-modal {
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

.inf-panel-container .offcanvas-end.main-modal {
  margin: 20px;
  width: 400px;
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
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: end;
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
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: start;
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
  overflow: hidden;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
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
  font-size: 18px;
  color: black !important;
}

.inf-panel-container #modalAttributeInfo td > span {
  text-align: center;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  box-sizing: border-box;
  padding: 0px 12px;
  font-weight: 400;
  color: rgb(144, 144, 144);
}

.inf-panel-container #modalAttributeInfo td.active > span {
  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  -o-border-radius: 20px;
  background-color: #F3F3EF;
  color: #3B3B32;
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
  overflow-y: auto;
  border-radius: 21px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  // margin-top: 20px;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.inf-panel-container #ai-content::-webkit-scrollbar {
  display: none;
}
.inf-panel-container #info-content {
  max-height: 95vh;
}
.inf-panel-container #ai-content .iframe-container {
  width: 100%;
  height: 95vh;
  overflow-y: hidden; /* 隱藏 iframe 自身的滾動條 */
  display: none;
}

#inffits_cblock,
#ctryon,
#inffits_tryon_window {
  width: 100%;
  height: 100%;
}

@media (max-width: 991px) {
.inf-panel-container #ai-content .iframe-container {
  height: 700px; /* 固定 iframe 容器的高度 */
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

  .inf-panel-container .offcanvas-bottom.main-modal,
  .inf-panel-container .offcanvas-end.main-modal {
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
  .inf-panel-container #ai-content .iframe-container {
      // height: 600px;
  }
}
@media (max-width: 360px) {
.inf-panel-container .fixed-panel-header{
    padding: 10px;
  }
  .inf-panel-container .toggle-btn-container {
    gap: 8px;
  }
}
@media (max-width: 320px) {
.inf-panel-container .fixed-panel-header{
    padding: 8px;
  }
.inf-panel-container .toggle-btn-container {
    gap: 6px;
  }
}

  `;
  document.head.appendChild(customCSS);

  // 添加 html template
  var panelTemplate = `
      <div class="inf-panel-container relative">
      <div class="relative">
        <!-- mobile bottom sheet -->
        <button
          class="btn btn-light trigger-icon trigger-icon--shirt"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottomPanel"
          aria-controls="offcanvasBottomPanel"
        >
          <img
            src="https://raw.githubusercontent.com/infFITSDevelopment/pop-ad/d75982f3200164aff6aff272b1b26bcf02793f37/shirt-icon.svg"
            alt=""
          />
        </button>
        <div
          class="offcanvas offcanvas-bottom offcanvas-end main-modal"
          tabindex="-1"
          id="offcanvasBottomPanel"
          data-bs-scroll="true"
          data-bs-backdrop="false"
          aria-labelledby="offcanvasBottomLabel"
        >
          <div
            style="
              position: absolute;
              top: -8px;
              right: -8px;
              background: #fff;
              border-radius: 50%;
              width: 21px;
              height: 21px;
              display: flex;
              justify-content: center;
              align-items: center;
              box-shadow: 0px 0px 0.5px 0px rgba(0, 0, 0, 0.25) inset;
              z-index: 99999;
            "
          >
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              style="font-size: 8px; color: #3b3b32"
            ></button>
          </div>
          <div class="offcanvas-body small" id="panel-content">
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
                                ><img
                                  src="https://inffits.com/webDesign/HTML/img/002-checked-symbol.png"
                                  width="18px"
                              /></span>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-body py-0" id="ai-content"">
              <div class="iframe-container">
              <div id="inffits_cblock">
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
                    id="inffits_tryon_window"
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
  document.body.insertAdjacentHTML("beforeend", panelTemplate);
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

        $(".inf-panel-container").show();
      });
    getPanelInfo();

    var mymPanelOffcanvas = document.getElementById("offcanvasBottomPanel");
    mymPanelOffcanvas.addEventListener("shown.bs.offcanvas", function () {
      // do something...
      $("#svgContainerPanel").show();
      $(".size-btn--panel")[0].click();

    });
    mymPanelOffcanvas.addEventListener("hidden.bs.offcanvas", function () {
      // do something...
      $("#guideBtn").click();
    });

  });
  window.isScrolling = 0;
  document
    .querySelector("#modalSizeInfo")
    .addEventListener("scroll", function () {
      isScrolling = this.scrollLeft > 0; // 判斷是否滾動

      document
        .querySelectorAll(".size-table tbody td:first-child")
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
        .querySelectorAll(".size-table thead th:first-child")
        .forEach(function (cell) {
          if (isScrolling) {
            cell.style.backgroundColor = "#eaeaea"; // 滾動時表頭背景色
          } else {
            cell.style.backgroundColor = "transparent"; // 未滾動時移除表頭背景色
          }
        });
    });

  const breakpoint = 992;

  // 取得 offcanvas 元素
  const offcanvasElement = document.getElementById("offcanvasBottomPanel");

  // 監聽窗口大小變化
  window.addEventListener("resize", handleWindowResize);

  // 首次載入時執行檢查
  handleWindowResize();

  function handleWindowResize() {
    // 取得當前視窗寬度
    const windowWidth = window.innerWidth;

    // 當視窗寬度大於等於 992px (桌面版)
    if (windowWidth >= breakpoint) {
      // 移除底部顯示的 class，並新增右側顯示的 class
      offcanvasElement.classList.remove("offcanvas-bottom");
      offcanvasElement.classList.add("offcanvas-end");
      offcanvasElement.setAttribute("data-bs-scroll", "true");
      offcanvasElement.setAttribute("data-bs-backdrop", "false");
    } else {
      // 當視窗寬度小於 992px (手機版)
      // 移除右側顯示的 class，並新增底部顯示的 class
      offcanvasElement.classList.remove("offcanvas-end");
      offcanvasElement.classList.add("offcanvas-bottom");
      offcanvasElement.setAttribute("data-bs-scroll", "false");
      offcanvasElement.setAttribute("data-bs-backdrop", "true");
    }
  }
  var userAgent = navigator.userAgent.toLowerCase();
  var isEdgeIOS = userAgent.includes("edgios");
  var isMobile = window.innerWidth < 992;
  var infoContent = $("#info-content");
  var aiContent = $("#ai-content");
  var offcanvasBottom = $(".inf-panel-container .offcanvas.offcanvas-bottom");
  // FIXME
  if (isMobile) {
    // infoContent.css("max-height", "calc(80lvh - 60px)");
    offcanvasBottom.css("height", "calc(90lvh - 60px)");
    if (isEdgeIOS) {
      infoContent.css("max-height", "calc(90lvh - 10px)");
      aiContent.css("max-height", "calc(90lvh - 10px)");
      // offcanvasBottom.css("height", "fit-content");
      offcanvasBottom.css("height", "calc(90lvh - 10px)");
    }
  }

  /* 取得資料 */
  function getPanelInfo() {
    var Gender_ClothID = "M&INFS_20240507MT2749&U";
    var ClothID_sizeinfo = "INFS_20240507MT2749";
    var Brand = "INFS";
    var SizeInfo;
    var dataUrl =
      "https://etpbgcktrk.execute-api.ap-northeast-1.amazonaws.com/v0/model";
    $.ajax({
      url: dataUrl,
      method: "GET",
      dataType: "text",
      data: "ClothID=" + ClothID_sizeinfo + "&Brand=" + Brand,
      crossDomain: true,
      async: true,
      success: (res) => {
        console.log("res", JSON.parse(res));
        var response = JSON.parse(res);
        console.log("response", response);

        var sizeInfoTable = createSizeInfoTable(JSON.parse(response.SizeInfo));
        console.log(sizeInfoTable);
        // $("#sizeInfo").html(sizeInfoTable);
        $("#modalSizeInfo").html(sizeInfoTable);
        //SVG
        if ("ChartInfo" in JSON.parse(res)) {
          svg_display(JSON.parse(res));
        }
        if (
          !Gender_ClothID.split("&")[1]
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

        $("#guideBtn").click();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  /* 建立尺寸表 */
  function createSizeInfoTable(sizeInfo) {
    var headers = Object.keys(sizeInfo[0]);

    var table = '<table class="size-table"><thead><tr>';
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
        .querySelectorAll(".size-table tbody td:first-child")
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
        .querySelectorAll(".size-table tbody td:first-child")
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

  $("#guideBtn").click(function () {
    $("#guideBtn").removeClass("btn-white");
    $("#guideBtn").addClass("btn-active");

    $("#AIbtn").removeClass("btn-active");
    $("#AIbtn").addClass("btn-white");
    $("#ai-content.modal-body").hide();
    $("#info-content.modal-body").show();
    $(".iframe-container").hide();
  });

  $("#AIbtn").click(function () {
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
    function displaytable_TR(Avatar, table, showChest) {
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
      function FitP_translater(string) {
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
                trs[i].children[j].innerText = FitP_translater(
                  ResortAvatar[i - 1][keys[j]]
                );
              }
            }
          }
        }
      }
    }
    function checkChest(Avatar) {
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
      for(i=0;i<JSON.parse(TRcontent).length;i++){
        if(JSON.parse(TRcontent)[i]['Height']<=150){
            height_group150down_panel.push(JSON.parse(TRcontent)[i])
        }
        else if(JSON.parse(TRcontent)[i]['Height']<=160 && JSON.parse(TRcontent)[i]['Height']>=150){
            height_group150_panel.push(JSON.parse(TRcontent)[i])
        }else if(JSON.parse(TRcontent)[i]['Height']<=170 && JSON.parse(TRcontent)[i]['Height']>=160){
            height_group160_panel.push(JSON.parse(TRcontent)[i])
        }else if(JSON.parse(TRcontent)[i]['Height']>=170 && JSON.parse(TRcontent)[i]['Height']<=180){
            height_group170_panel.push(JSON.parse(TRcontent)[i])
        }
        else if(JSON.parse(TRcontent)[i]['Height']>=180){
            height_group180up_panel.push(JSON.parse(TRcontent)[i])
        }
    }
  }
    var height_group150down_panel = [];
    var height_group150_panel = [];
    var height_group160_panel = [];
    var height_group170_panel = [];
    var height_group180up_panel = [];
  console.log('height_group150_panel', height_group150_panel)
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
    if ("ontouchstart" in window) {
      $(".filter-button--panel").on("touchstart", function () {
        filterTablePanel($(this).data("height"), this);
      });
    } else {
      $(".filter-button--panel").on("click", function () {
        filterTablePanel($(this).data("height"), this);
      });
    }

    var showChest = checkChest(TRcontent);
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

    displaytable_TR(
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
  function svg_display(json_res) {
    function resize_svg(data, Labels) {
      const svgContainerPanel = document.getElementById("svgContainerPanel");
      const squaresize = document.getElementById("svgContainerPanel").offsetWidth;
      function derive_svg_circum(svg_data, a, b, centerX, centerY) {
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
      function derive_svg_line(svg_data, x1, y1, x2, y2) {
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
      function derive_svg_exline(svg_data, x1, y1, x2, y2, p, direction) {
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
      function derive_svg_exline_sl(svg_data, x1, y1, x2, y2, p1, p2, angle) {
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
          //         svg_data = derive_svg_exline_sl(svg_data, x1 * squaresize, y1 * squaresize, x2 * squaresize, y2 * squaresize, p1 * squaresize, p2/1.95 * squaresize, angle)
          //         svg_data = derive_svg_line(svg_data, x1*1.45 * squaresize, y1 * squaresize, x2*1.195 * squaresize, y2 * squaresize) // gen line // 直线的起始和结束坐标  //[item.sizeRequired ? item.size : '']
          //     }
          //     else
          //     {
          //         svg_data = derive_svg_exline_sl(svg_data, x1 * squaresize, y1 * squaresize, x2 * squaresize, y2 * squaresize, p1 * squaresize, p2 * squaresize, angle)
          //         svg_data = derive_svg_line(svg_data, x1*1.075 * squaresize, y1/1.55 * squaresize, x2*1.055 * squaresize, y2/1.35 * squaresize) // gen line // 直线的起始和结束坐标  //[item.sizeRequired ? item.size : '']
          //     }

          // }
          // else{
          // svg_data = derive_svg_exline_sl(svg_data, x1 * squaresize, y1 * squaresize, x2 * squaresize, y2 * squaresize, p1 * squaresize, p2 * squaresize, angle)
          svg_data = derive_svg_line(
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
          svg_data = derive_svg_circum(
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
            svg_data = derive_svg_exline(
              svg_data,
              x1 * squaresize,
              y1 * squaresize,
              x2 * squaresize,
              y2 * squaresize,
              0.1 * squaresize,
              (direction = "-Y")
            );
          }
          svg_data = derive_svg_line(
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
            svg_data = derive_svg_exline(
              svg_data,
              x1 * squaresize,
              y1 * 1.6 * squaresize,
              x2 * squaresize,
              y2 * 1.6 * squaresize,
              (p / 1.7) * squaresize,
              (direction = "-Y")
            );

            svg_data = derive_svg_line(
              svg_data,
              x1 * squaresize,
              y1 * squaresize,
              x2 * squaresize,
              y2 * squaresize
            ); // gen line // 直线的起始和结束坐标
          } else {
            svg_data = derive_svg_exline(
              svg_data,
              x1 * squaresize,
              y1 * squaresize,
              x2 * squaresize,
              y2 * squaresize,
              p * squaresize,
              (direction = "-Y")
            );
            svg_data = derive_svg_line(
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

      //透過API取值呈現內容  derive_svg_circum/derive_svg_line/derive_svg_exline_sl

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

    function mapMeasurement(input) {
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
          let mappedMeasurement = mapMeasurement(size_header);
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
          output_svg = resize_svg(output_svg.data, output_svg.Labels);
          $("#svgContainerPanel").find("text").hide().fadeIn();
          console.log(output_svg, "!!!!!!!!!!!!!!!!!!");
        }

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
      //       if (dataname_list.includes(mapMeasurement(size_header))) {
      //           output_svg.data[mapMeasurement(size_header)].value = global_sizeinfo[activeIndex][size_header];
      //       }
      //   }

      //   //show_svg
      //   output_svg = resize_svg(output_svg.data, output_svg.Labels);
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
            $(i).next().children()[0].innerHTML =
              '<img src="https://inffits.com/webDesign/HTML/img/cross-mark-on-a-black-circle-background.png" width=18px>';
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
    var buttons = document.getElementsByClassName('filter-button--panel');
    for (i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    button.classList.add('active');
  };
})(jQuery);
