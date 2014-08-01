console.log $("#t0").val(), $("#O6").html().replace("天氏通","=======")

#$("#t0").val($("#t0").val().replace("天氏通","天氏通."))
$(".ke-icon-source").trigger("click")
setTimeout(-> 
	$(".ke-textarea").eq(1).val($(".ke-textarea").eq(1).val().replace("天氏通","天氏通通"))
	$(".ke-icon-source").trigger("click")
, 200)

setTimeout(->
	$("input[value='保存设置']").trigger("click")
,500)