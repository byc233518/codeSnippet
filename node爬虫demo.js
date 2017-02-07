var http = require('http');
var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
var i = 0;
var url = "http://www.maczapp.com/lol";

var mongoose = require('mongoose')
mongoose.connect('mongodb://byc:byc@210.209.85.192/byc')
var db = mongoose.connection
var Schema = mongoose.Schema
var userSchema = new Schema({
  title: String,
  time: String,
  link: String,
  size: String,
  langue: String,
  i: Number
})

var User = mongoose.model('User', userSchema)



function fetchPage(x) {     //封装了一层函数
  startRequest(x);
}


function startRequest(x) {
  //采用http模块向服务器发起一次get请求
  http.get(x, function (res) {
    var html = '';        //用来存储请求网页的整个html内容
    var titles = [];
    res.setEncoding('utf-8'); //防止中文乱码
    //监听data事件，每次取一块数据
    res.on('data', function (chunk) {
      html += chunk;
    });
    //监听end事件，如果整个网页内容的html都获取完毕，就执行回调函数
    res.on('end', function () {

      var $ = cheerio.load(html); //采用cheerio模块解析html

      var news_item = {
        //获取文章的标题
        title: $('.read_wrap h1').text().trim(),
        //获取文章发布的时间
        time: $('.read_info_list li:nth-child(4) i:first-child').text().trim(),
        //获取图片的url
        link: $(".cover a img").attr('src'),
        //获取大小
        size: $('.read_info_list li:nth-child(4) i:last-child').text().trim(),
        //获取语言
        langue: $('.read_info_list li:nth-child(7)').text().trim(),
        i: i = i + 1,
      };

      var arvind = new User(news_item)
      arvind.save(function(err,data){
        if(err){
          console.log(err)
        }else{
          console.log('saved')
        }
      })

      // console.log(news_item);     //打印新闻信息

      // var news_title = $('div.article-title a').text().trim();

      // savedContent($, news_title);  //存储每篇文章的内容及文章标题

      // savedImg($, news_title);    //存储每篇文章的图片及图片标题


      //下一篇文章的url
      var nextLink = "http://www.maczapp.com" + $(".i_1 a").attr('href');
      str1 = nextLink;
      str = encodeURI(str1);
      if (str == nextLink) {
        str = "http://www.maczapp.com" + $(".tui_img ul").eq(parseInt(Math.random(1,10))).find('li:last-child a').attr('href')
      }
      // 这是亮点之一，通过控制I,可以控制爬取多少篇文章.
      if (i <= 100) {
        fetchPage(str);
      }

    });

  }).on('error', function (err) {
    console.log(err);
  });

}
//该函数的作用：在本地存储所爬取的新闻内容资源
// function savedContent($, news_title) {
//   $('.article-content p').each(function (index, item) {
//     var x = $(this).text();
//
//     var y = x.substring(0, 2).trim();
//
//     if (y == '') {
//       x = x + '\n';
// //将新闻文本内容一段一段添加到/data文件夹下，并用新闻的标题来命名文件
//       fs.appendFile('./data/' + news_title + '.txt', x, 'utf-8', function (err) {
//         if (err) {
//           console.log(err);
//         }
//       });
//     }
//   })
// }
//该函数的作用：在本地存储所爬取到的图片资源
// function savedImg($, news_title) {
//   $('.article-content img').each(function (index, item) {
//     var img_title = $(this).parent().next().text().trim();  //获取图片的标题
//     if (img_title.length > 35 || img_title == "") {
//       img_title = "Null";
//     }
//     var img_filename = img_title + '.jpg';
//
//     var img_src = 'http://www.ss.pku.edu.cn' + $(this).attr('src'); //获取图片的url
//
// //采用request模块，向服务器发起一次请求，获取图片资源
//     request.head(img_src, function (err, res, body) {
//       if (err) {
//         console.log(err);
//       }
//     });
//     request(img_src).pipe(fs.createWriteStream('./image/' + news_title + '---' + img_filename));     //通过流的方式，把图片写到本地/image目录下，并用新闻的标题和图片的标题作为图片的名称。
//   })
// }
fetchPage(url);      //主程序开始运行