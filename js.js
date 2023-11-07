$(document).ready(function(){
       // HTML의 form 요소와 submit 버튼 요소를 가져옵니다.
   var form = document.querySelector("form");
   var submitButton = document.querySelector(".submit");

   // 입력 필드 요소들을 가져옵니다.
   var nameInput = document.querySelector(".nameInput");
   var ageInput = document.querySelector(".ageInput");
   var phoneInput = document.querySelector(".phoneInput");

   // 동의 체크박스 요소와 상세보기 링크 요소를 가져옵니다.
   var agreeCheck = document.querySelector(".agreeCheck");

   // 모든 입력 필드와 동의 체크박스의 상태를 모니터링하는 함수를 정의합니다.
   function checkForm() {
   // 모든 입력 필드가 비어있지 않고, 동의 체크박스가 체크되어 있을 때만 submit 버튼을 활성화합니다.
       if (nameInput.value !== "" && ageInput.value !== "" && phoneInput.value !== "" && agreeCheck.checked) {
           submitButton.disabled = false;
       } else {
           submitButton.disabled = true;
       }
   }

   // 입력 필드와 동의 체크박스의 변경 이벤트를 감지하여 checkForm 함수를 호출합니다.
   nameInput.addEventListener("input", checkForm);
   ageInput.addEventListener("input", checkForm);
   phoneInput.addEventListener("input", checkForm);
   agreeCheck.addEventListener("change", checkForm);

   // 초기에는 submit 버튼을 비활성화합니다.
   submitButton.disabled = true;

   // HTML의 초기화 버튼 요소를 가져옵니다.
   var resetButton = document.querySelector("input[type='reset']");

   // 초기화 버튼을 클릭했을 때 실행할 함수를 정의합니다.
   function handleReset() {
   // 입력 필드와 동의 체크박스를 모두 초기화하고 submit 버튼을 비활성화합니다.
   nameInput.value = "";
   ageInput.value = "";
   phoneInput.value = "";
   agreeCheck.checked = false;
   submitButton.disabled = true;
   }

   // 초기화 버튼의 클릭 이벤트를 감지하여 handleReset 함수를 호출합니다.
   resetButton.addEventListener("click", handleReset);
      $(".showText").click(function(){
           $(".agreedesc").show();
       });
      $(".agreeClose").click(function(){
           $(".agreedesc").hide();
       });
      $(".submit").click(function(){
           $(".resultShow").show();
       });
      $(".resultClose").click(function(){
           $(".resultShow").hide();
       });
});