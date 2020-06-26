String.prototype.format = function () {
  var i = 0, args = arguments;
  return this.replace(/{}/g, function () {
    return typeof args[i] != 'undefined' ? args[i++] : '';
  });
};

// Notes for updating this Page:
// 1. only change the 'post' variable which is a JSON object
// 2. You can have any number of Posts (min 1 is required)
// 3. Any update here will be reflected on ALL the blog posts
// 4. Add comma at the end of each post
// 5. Give unique key number (increasing order)
// 6. Don't put comma after last post


function load_insta_images(){

  // Ignores post 0, just to show the structure required for updating this page
  // Three details for each post is required: Link to Insta page, Source of Image, and some part of the caption.
  var posts = {
    // "0":{'link':"#", 'img_src':"#", 'caption':"."},
    "1":{'link': "https://www.instagram.com/p/CA7IicjpcN2/",
         'img_src':"../assets/Instagram/index1.jpg",
         'caption':"Missing all the..."},
    "2":{'link': "https://www.instagram.com/p/CA9iNVkpeIr/",
        'img_src':"../assets/Instagram/index2.jpg",
        'caption':"Remember my previous post on 5 cruelty free makeup brands in India?"},
    "3":{'link': "https://www.instagram.com/p/CBARdzIpKbS/",
         'img_src':"../assets/Instagram/index3.jpg",
         'caption':"DRINKING TURMERIC WATER EVERYDAY!"}
  }

  for (var key in posts){

    link = posts[key]["link"];
    src = posts[key]["img_src"];
    caption = posts[key]["caption"];

    var new_post=`<a href="{}" target="_blank">
                    <div class="item d-flex align-items-center">
                      <div class="image"><img src="{}" alt="..." class="img-fluid"></div>
                      <div class="title"><strong>{}</strong></div>
                    </div>
                  </a>`.format(link, src, caption);

    var x = document.getElementById("insta_posts_section").innerHTML;
    document.getElementById("insta_posts_section").innerHTML = x+new_post;
  }
}