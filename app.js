const formTable = document.querySelector("#form");
const btn = document.querySelector(".btn");
const inputTag = document.querySelector(".form-input");
const content = document.querySelector(".content");

btn.addEventListener("click", addTable);

function addTable(e) {
  e.preventDefault();
  const inputVal = inputTag.value;
  const API_KEY =
    "urIcbpoTLWxb29j%2Fwpj%2BW0Kit7O7x3D0cuZgu8AmBU53BswjDvNTfzkbeZjILO%2BzvBhsrnS1JcyK80dGJmMsKw%3D%3D";
  const url = `http://apis.data.go.kr/1262000/OverviewKorRelationService/getOverviewKorRelationList?serviceKey=${API_KEY}&cond[country_nm::EQ]=${inputVal}&pageNo=1&numOfRows=197&_type=json`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const datafirst = data.data[0];

      content.innerHTML = `
        <div class="content-item">
        <p>영어 국가명 : ${datafirst.country_eng_nm}</p>
        <p>한글 국가명 : ${datafirst.country_nm}</p>
        <p>외교관계 : ${datafirst.diplomatic_relations}</p>
        <p>투자현황 : ${datafirst.investment_status}</p>
        <p>교민현황 : ${datafirst.oks_status}</p>
        <p>수출액 : ${datafirst.export_amount}₩</p>
        <p>수입액 : ${datafirst.import_amount}₩</p>
        </div>
     `;
    })
    .catch((err) => {
      content.innerHTML = `
            <h1>에러,,,다시 입력하세요</h1>
        `;
    });
    
    inputTag.value = "";
}
