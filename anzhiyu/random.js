var posts=["2024/11/28/我是男的李瑶瑶/","2024/11/28/【每日早报】-2024-11-28 - 星期四/","2024/11/27/hello-world/","2024/11/25/这是一篇新的博文-1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };