// Generated by CoffeeScript 1.7.1
(function() {
  console.log($("#t0").val(), $("#O6").html().replace("天氏通", "======="));

  $(".ke-icon-source").trigger("click");

  setTimeout(function() {
    $(".ke-textarea").eq(1).val($(".ke-textarea").eq(1).val().replace("天氏通", "天氏通通"));
    return $(".ke-icon-source").trigger("click");
  }, 200);

  setTimeout(function() {
    return $("input[value='保存设置']").trigger("click");
  }, 500);

}).call(this);
