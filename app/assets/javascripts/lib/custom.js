$(function() {
  $("#search_country").customselect();
  $( "#item_category" ).autocomplete({
    source: "/resources/item_list",
    select: function( event, ui ) {
      $("#item_category_id").val(ui.item.id);
    }
  });
  $('#campaign_goal_amount').number( true, 2 );
  // $("a").not('#lnkLogOut').click(function () {
  //   window.onbeforeunload = null;
  // });
  // $(".btn").click(function () {
  //  window.onbeforeunload = null;
  // });
});

// window.onbeforeunload = function (event) {
//   // $('#log_out').click();
//   $.ajax({
//     // type: 'GET',
//     // dataType: 'json',
//     // url: $('#log_out').attr('href')
//     url:  "/clearSession",
//     dataType: "json",
//     data: {}
//   });
// };


$(document).on("change","#search_country",function(){
  if (this.value=="United States"){
    $("#postal_code").attr("placeholder", "Zip");
  }
  else{
    $("#postal_code").attr("placeholder", "Postal Code");
  }
  $.ajax({
    url: "/places/state_list",
    method: "get",
    data: {country: this.value,controller_name: $(this).attr("name").split("[")[0]}
  });
});

$(document).on("change","#states",function(){
  $.ajax({
    url: "/places/city_list",
    method: "get",
    data: {state: this.value,country: $("#search_country").val(),controller_name: $(this).attr("name").split("[")[0]}
  });
});

$(document).on("change","#campaign_campaign_category_id",function(){
  $("#campaign_category").val($(this).find('option:selected').text());
});

$(document).on("click","#upload-btn", function() {
  $("#upload_photo").click();
});

$(document).on("change","#upload_photo", function() {
  $('#file-display').text($(this).val().replace(/^.*[\\\/]/, ''));
});
