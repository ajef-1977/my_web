$(document).ready(function () {

  // val 總筆數千位分隔的格式
  $(".val , .display_total").each(function () {
    const value = parseFloat($(this).text());
    if (!isNaN(value)) {
      $(this).text(value.toLocaleString());
    }
  });

  // 金額數值千位分隔的格式
  $(".money").each(function () {
    const value = parseFloat($(this).text());
    if (!isNaN(value)) {
      $(this).text(`$${value.toLocaleString()}`);
    }
  });

  // 格式化數值為千位分隔
  function formatMoney(value) {
    if (!value) return "";
    const number = parseFloat(value.replace(/,/g, ""));
    if (isNaN(number)) return value;
    return number.toLocaleString();
  }

  // 初始化：將所有帶 class="money" 的 input 預設值格式化
  $(".money").each(function () {
    const value = $(this).val();
    $(this).val(formatMoney(value));
  });

  // 即時轉換：監聽輸入事件
  $(".money").on("input", function () {
    const cursorPos = this.selectionStart;
    const formattedValue = formatMoney($(this).val());
    $(this).val(formattedValue);

    // 確保光標位置正確
    const newCursorPos = formattedValue.length - ($(this).val().replace(/,/g, "").length -
      cursorPos);
    this.setSelectionRange(newCursorPos, newCursorPos);
  });

  // 確保失去焦點時格式正確
  $(".money").on("blur", function () {
    const formattedValue = formatMoney($(this).val());
    $(this).val(formattedValue);
  });

  // ------------------------------------------------------------------------------------------------

  // 點擊 Modal 外部關閉
  $('#myModal').modal({
    backdrop: true, // 點擊背景可關閉
    keyboard: true // 按 ESC 可關閉
  });

  // ------------------------------------------------------------------------------------------------


});


// 最後執行
window.onload = function () {



};