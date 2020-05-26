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
    "1":{'link': "https://www.instagram.com/p/CAacgtxJhDr/",
         'img_src':"https://instagram.fbom18-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/99111342_108922540702754_1920149122972883120_n.jpg?_nc_ht=instagram.fbom18-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=OG6nO42AadYAX-LJJny&oh=9227281c2f2a5e445daea40f9a57e362&oe=5EF36235",
         'caption':"Pastel colours always stand out."},
    "2":{'link': "https://www.instagram.com/p/CAFx6MZp8ZD/",
        'img_src':"https://instagram.fbom18-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/97370907_952730725157218_7564860030487757801_n.jpg?_nc_ht=instagram.fbom18-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=nBjotdck2P8AX8PzmXR&oh=5e4988eae917d720e02d0fd692859007&oe=5EF36BDF",
        'caption':"Who would have thought that Quarantine birthday can be the best birthday ever!"},
    "3":{'link': "https://www.instagram.com/p/B__yzPFpYfX/",
         'img_src':"https://scontent-frt3-2.cdninstagram.com/v/t51.2885-15/96787855_336155107351059_1777086886480529196_n.jpg?_nc_cat=101&_nc_sid=8ae9d6&_nc_ohc=iXHqoWeTpHAAX9gGUjx&_nc_ht=scontent-frt3-2.cdninstagram.com&oh=1afcac1d222f587c7f36cca0a2a032ec&oe=5EEB04BA",
         'caption':"Open pores- my oldest friend!"}
  }

  for (var key in posts){

    link = posts[key]["link"];
    src = posts[key]["img_src"];
    caption = posts[key]["caption"];

    var new_post=`<a href="{}">
                    <div class="item d-flex align-items-center">
                      <div class="image"><img src="{}" alt="..." class="img-fluid"></div>
                      <div class="title"><strong>{}</strong></div>
                    </div>
                  </a>`.format(link, src, caption);

    var x = document.getElementById("insta_posts_section").innerHTML;
    document.getElementById("insta_posts_section").innerHTML = x+new_post;
  }
}