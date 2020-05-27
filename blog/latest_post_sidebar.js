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


function load_latest_posts(){

  // Ignores post 0, just to show the structure required for updating this page
  // Three details for each post is required: Link to Insta page, Source of Image, and some part of the caption.
  var posts = {
    // "0":{'link':"#", 'img_src':"#", 'caption':"."},
    "1":{'link': "/blog/post?Is-SWEAT-a-Measure",
         'img_src':"'../../assets/img/blog_pics/p2.jpg'",
         'caption':"Is SWEAT a measure of how hard you are working out?"},
    "2":{'link': "/blog/post?Sustainable_Fashion",
        'img_src':"../../assets/img/blog_pics/sl_p3.jpeg",
        'caption':"Sustainable Fashion- What you can do"},
    "3":{'link': "/blog/post?Are_fruit_juices_good_for_you",
         'img_src':"../../assets/img/blog_pics/p4.jpg",
         'caption':"Are fruit juices good for you?"}
  }

  for (var key in posts){

    link = posts[key]["link"];
    src = posts[key]["img_src"];
    caption = posts[key]["caption"];

    var new_post=`<a href="{}" target="_parent">
                    <div class="item d-flex align-items-center">
                      <div class="image"><img src={} alt="..." class="img-fluid"></div>
                      <div class="title"><strong>{}</strong></div>
                    </div>
                  </a>`.format(link, src, caption);

    var x = document.getElementById("latest_post_section").innerHTML;
    document.getElementById("latest_post_section").innerHTML = x+new_post;
  }
}