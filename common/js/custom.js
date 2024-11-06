
/***********stickey********** */

$(window).scroll(function() {
  if ($(this).scrollTop() > 1){  
      $('header').addClass("sticky");
    }
    else{
      $('header').removeClass("sticky");
    }
  });

  //$(window).scroll(function() {
    //if ($(this).scrollTop() > 58){  
     //   $('.booking-box').addClass("sticky");
     // }
   //   else{
      //  $('.booking-box').removeClass("sticky");
     // }
    //});


   //$(window).scroll(function() {
    //  if ($(this).scrollTop() > 300){  
     //     $('.two-part-layout aside').addClass("sticky");
     //   }
       // else{
       //  $('.two-part-layout aside').removeClass("sticky");
       // }
      //});


    /*************************************************************** */

$( document ).ready(function() {
  // tabbed content
  $(".tab_content").hide();
  $(".tab_content:first").show();
  
  /* if in tab mode */
  $("ul.sub-header-tabs li").click(function() {
  
    $(".tab_content").hide();
    var activeTab = $(this).attr("rel"); 
    $("#"+activeTab).fadeIn();		
  
    $("ul.sub-header-tabs li").removeClass("active");
    $(this).addClass("active");
  
  $(".tab_drawer_heading").removeClass("d_active");
  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
  
  });
  
  /* if in drawer mode */
  $(".tab_drawer_heading").click(function() {
    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel"); 
    $("#"+d_activeTab).fadeIn();
  
  $(".tab_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");
  
  $("ul.sub-header-tabs li").removeClass("active");
  $("ul.sub-header-tabs li[rel^='"+d_activeTab+"']").addClass("active");
  });
  
  //$('ul.sub-header-tabs li').last().addClass("tab_last");
  
  });

  /********************************/
$(document).ready(function() {
  $('.login-signup').click(function(){
     $('body').addClass('fixed');
     $('.login-signup-container').css("top", "50%");
    });
    $('.login-signup-container .close-icon').click(function(){
      $('.login-signup-container').css("top", "-1200px");
      $('body').removeClass('fixed')
      });
  
  $('#get-otp').click(function(){
    $('#step1').css("display","none")
  $('#step2').css("display","block")
  $('.otp-verified').animate({
    top: "-81px",
    }, 100);
  
  });
  
  
  
  $('#continue').click(function(){
    $('#step2').css("display","none")
  $('#step3').css("display","block")
  });
  });
  /*******************************/

/****************Service Tabs*********************/

$( document ).ready(function() {
// tabbed content
$(".service_tab_content").hide();
$(".service_tab_content:first").show();

/* if in tab mode */
$("ul.service-tabs li").click(function() {

  $(".service_tab_content").hide();
  var activeTab = $(this).attr("rel"); 
  $("#"+activeTab).fadeIn();		

  $("ul.service-tabs li").removeClass("active");
  $(this).addClass("active");
});

});
/*******************service tab-end*****************/

/****************Dashboard inner Tabs*********************/

$( document ).ready(function() {
  // tabbed content
  $(".dashboard_innertab_content").hide();
  $(".dashboard_innertab_content:first").show();
  
  /* if in tab mode */
  $(".service-tabs ul li").click(function() {
  
    $(".dashboard_innertab_content").hide();
    var activeTab = $(this).attr("rel"); 
    $("#"+activeTab).fadeIn();		
  
    $(".service-tabs ul li").removeClass("active");
    $(this).addClass("active");
  });
  
  });
  /*******************Dashboard inner Tabs*****************/







/****************dashboard Tabs*********************/

$( document ).ready(function() {
  // tabbed content
  $(".dashboard_tab_content").hide();
  $(".dashboard_tab_content:first").show();
  
  /* if in tab mode */
  $("ul.dashboard-tabs li").click(function() {
  
    $(".dashboard_tab_content").hide();
    var activeTab = $(this).attr("rel"); 
    $("#"+activeTab).fadeIn();		
  
    $("ul.dashboard-tabs li").removeClass("active");
    $(this).addClass("active");
  });
  
  });
  /*******************dashboard tab-end*****************/


  /****************invoice Tabs*********************/

$( document ).ready(function() {
  // tabbed content
  $(".invoice_tab_content").hide();
  $(".invoice_tab_content:first").show();
  
  /* if in tab mode */
  $("ul.invoice-tabs li").click(function() {
  
    $(".invoice_tab_content").hide();
    var activeTab = $(this).attr("rel"); 
    $("#"+activeTab).fadeIn();		
  
    $("ul.invoice-tabs li").removeClass("active");
    $(this).addClass("active");
  });
  
  });
  /*******************invoice tab-end*****************/



    /****************Transactions Tabs*********************/

$( document ).ready(function() {
  // tabbed content
  $(".Transactions_tab_content").hide();
  $(".Transactions_tab_content:first").show();
  
  /* if in tab mode */
  $("ul.Transactions-tabs li").click(function() {
  
    $(".Transactions_tab_content").hide();
    var activeTab = $(this).attr("rel"); 
    $("#"+activeTab).fadeIn();		
  
    $("ul.Transactions-tabs li").removeClass("active");
    $(this).addClass("active");
  });
  
  });
  /*******************Transactions tab-end*****************/

  






