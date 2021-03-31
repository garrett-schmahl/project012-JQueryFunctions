$(document).ready(function() { 
  $('#add_class_button').click(function(){
    $('#add_class_contain p').addClass("red")
  })

  $('#add_color_button').click(function(){
    $(this).css("background-color","blue")
  })

  $('#slide_toggle_button').click(function(){
    $('#yamada_in_your_internet').slideToggle("slow", function() {
      console.log("hello this is yamada")
    })
  }) 

  $('#append_button').click(function(){
    $('#append_contain p').append("We’re no strangers to love, You know the rules and so do I. A full commitment’s what I’m thinking of, You wouldnt get this from any other guy. I just wanna tell you how I’m feeling, Gotta make you understand… Never gonna give you up. Never gonna let you down, Never gonna run around and desert you. Never gonna make you cry, Never gonna say goodbye, Never gonna tell a lie and hurt you.")
    $('#append_contain img').fadeIn(400,function(){})
  })

  $('#dissapear_button').click(function(){
    $('#container').fadeOut(1000,function(){})
  })
  $('#kaboom_button').click(function(){
    $('#galo_image').toggle(0,function(){
      $('#kaboom_button').text("Wait go back")
      $('#show_target').html('<a href="#" id="regret_button">I regret</a>')
      $('#regret_button').click(function(){
        console.log("it's happening")
        $('#more_stuff_contain').slideUp("slow",function(){})
      })
    })
  })
  $('#idk_button').click(function(){
    $("#more_stuff_contain h1").before("string before")
    $("#more_stuff_contain p").after("string after")
  })

  $("#your_thoughts").keyup(function() {
    var value = $(this).val();
    $("#more_stuff_contain p").text(value);
  })
  .keyup();

  $("#check_box_contain input").change(function() {
    var $input = $( this );
    $("#check_box_contain p").html( ".attr( 'checked' ): <b>" + $input.attr( "checked" ) + "</b><br>" +
      ".prop( 'checked' ): <b>" + $input.prop( "checked" ) + "</b><br>" +
      ".is( ':checked' ): <b>" + $input.is( ":checked" ) + "</b>" );
  })
  .change();

  // function(e){
  //e.preventDefault() }

  
})