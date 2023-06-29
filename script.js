$(document).ready(function() {
  // Alert once the page has loaded
  alert("Welcome to our restaurant!");

  // Change the background once the page has loaded
  $("body").css("background-color", "#f0f0f0");

  // Function to change a single paragraph's styling
  $(".image-container p").css("font-weight", "bold");

  /**
  // Fade out any clicked object
  $("body").on("click", "*", function() {
    $(this).fadeOut();
  });
  */

  // Dropdown menu with accordion animation
  $(".dropdown-section").hover(
    function() {
      $(this).find(".dropdown-content").stop().slideDown();
    },
    function() {
      $(this).find(".dropdown-content").stop().slideUp();
    }
  );

  // Fade in and out the image
  $(".fade-in-btn").click(function() {
    $(this).parent().siblings("img").fadeIn(3000);
  });

  $(".fade-out-btn").click(function() {
    $(this).parent().siblings("img").fadeOut(3000);
  });

  // Stop the image animation
  $("#stop-animation-btn").click(function() {
    $(".image-container img").stop(true, true);
  });

  // Save for Later functionality
  let savedItemsCount = 0;

  $(".save-for-later-btn").click(function() {
    savedItemsCount++;
    alert("Item saved for later. Total items in your folder: " + savedItemsCount);
  });

  // Create form to leave comments
  $(".actions").append('<form class="comment-form"><input type="text" placeholder="Leave a comment"><button type="submit">Submit</button></form>');

  // Create forms to "like" an item/article/etc.
  $(".like-btn").each(function() {
    if ($(this).siblings(".like-form").length === 0) {
      $(this).after('<form class="like-form"><button type="submit">Like</button></form>');
    }
  });

  // Create form for contacting
  $("body").append('<div class="contact-form-container"><h2>Contact Us</h2><form class="contact-form"><input type="text" placeholder="Name"><input type="email" placeholder="Email"><textarea placeholder="Message"></textarea><button type="submit">Send</button></form></div>');
});
