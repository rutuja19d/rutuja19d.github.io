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


function load_all_blogs(){

  // Ignores post 0, just to show the structure required for updating this page
  // Four details for each post is required: Name of the blog file (without .html extension), Source of Image (check how the path is mentioned in examples),
  // category('HEALTHY LIVING' or 'SUSTAINABLE LIVING' ONLY), title that you want to appear on the main blog page.
  var blog_posts = {
    // "0":{'filename':"#", 'img_src':"#", 'category':".", 'title':''},
    "1":{'filename': "Drink_Green_Tea",
         'img_src':'./assets/img/blog_pics/p6.jpg',
         'category':"HEALTHY LIVING",
          'title': 'Drink Green Tea for weight loss'},
    "2":{'filename': "CRUELTY_FREE_Make_Up_Brands",
         'img_src':'./assets/img/blog_pics/sl_p4.jpg',
         'category':"SUSTAINABLE LIVING",
          'title': '7 popular CRUELTY FREE Make Up Brands in India'}
    }

  for (var key in blog_posts){

    filename = blog_posts[key]["filename"];
    img_src = blog_posts[key]["img_src"];
    category = blog_posts[key]["category"];
    title = blog_posts[key]["title"];

    var new_post =`<div class="collection-item-6 w-dyn-item w-col w-col-2">
                      <a data-w-id="54a2ea44-ecc4-7f9d-887a-ea450ab9597f" href="/blog/post?{}" class="link-block-7 w-inline-block">
                          <div style="background-image: url({}); filter: brightness(90%);" class="background-for-blog-posts-holder"></div>
                          <div class="content-holder-blog-posts shorter">
                              <div class="category-holder">
                                  <div class="category-blog-post">{}</div>
                                  <div class="category-line"></div>
                              </div>
                              <h1 class="home---blogpost-title bigger-font">{}</h1>
                          </div>
                      </a>
                  </div>`.format(filename, img_src, category, title);


    var content = document.getElementById("ALL_blogs").innerHTML;
    document.getElementById("ALL_blogs").innerHTML = content + new_post;

    if(category=="HEALTHY LIVING"){
      var content = document.getElementById("HL_blogs").innerHTML;
      document.getElementById("HL_blogs").innerHTML = content + new_post;
    }

    if(category=="SUSTAINABLE LIVING"){
      var content = document.getElementById("SL_blogs").innerHTML;
      document.getElementById("SL_blogs").innerHTML = content + new_post;
    }
  }
}