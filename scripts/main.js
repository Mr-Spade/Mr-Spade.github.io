let sig=
[
  "从一缕微光开始",
  "我心中那团青色的怒火，终将燃烧这片大地",
  "世人苦被明日累，秋天漠漠向昏黑",
  "您可能是个人英雄主义的受害者",
  "三小时工作，八小时休息，剩下的十三小时留给自己",
  "愿我在人生路上偶遇闪光者时，不再会觉得自惭形秽",
  /*"我深深地动情于这个世界，为清晨自行车把上的每一滴早露，为午后撒在楼梯间的每一缕阳光，为他人穿过01的电子给我带来的每一分理想与感动",*/
];

function add_child(father,tname,tclass,ttext)//快速为father添加一个子项
{
  let res=document.createElement(tname);
  res.className=tclass;
  if(res.textContent!==undefined&&res.textContent!==null)
    res.textContent=ttext;
  father.appendChild(res);
  return res;
}

function is_local()//是否本地测试
{
  return location.pathname.length>=3&&location.pathname.substr(1,2)==="F:";
}

function get_repath()//找到当前路径相对于主站的位置
{
  let str="";
  let cnt=location.pathname.split('/').length-(is_local()?4:2);
  for(let i=0;i<cnt;i++)
    str+="../";
  return str;
}

function adjust_height(tmp)//动态调整iframe的高度
{
  if(tmp.contentDocument!==null)//有一个鬼畜的问题，本地的contentDocument总是null，所以本地干脆大力把高度调成5000
    tmp.height=tmp.contentDocument.body.scrollHeight;
  else
    tmp.height=5000;
}

function to_url_code(str)//因为encode由于奇怪的原因不能转化'#'，所以重新写了一个
{
  str=encodeURI(str);
  let res="";
  for(let i=0;i<str.length;i++)
    if(str[i]=='#')
      res+="%23";
    else
      res+=str[i];
  return res;
}

(function write_navigation()
{
  //let my_navigation=document.createElement("div");
  //my_navigation.className="navigation";
  let my_navigation=add_child(document.querySelector("body"),"div","navigation","");
  //let my_title_img=document.createElement("img");
  //my_title_img.className="title-img f-bu";
  let my_a=add_child(my_navigation,"a","","");
  my_a.setAttribute("href",get_repath()+(is_local()?"index.html":""));
  let my_title_img=add_child(my_a,"img","title-img","");
  my_title_img.src=get_repath()+"images/title.png";
  // if(location.pathname.length>=2&&location.pathname.substr(1,2)==="F:")
  // {
  //   let str="";
  //   let cnt=location.pathname.split('/').length-4;
  //   for(let i=0;i<cnt;i++)
  //   {
  //     str+="../";
  //   }
  //   my_a.setAttribute("href",str+"index.html");
  //   my_title_img.src=str+"images/title.png";
  // }
  // else
  // {
  //   let str="";
  //   let cnt=location.pathname.split('/').length-2;
  //   for(let i=0;i<cnt;i++)
  //   {
  //     str+="../";
  //   }
  //   my_a.setAttribute("herf",str);
  //   my_title_img.src=str+"images/title.png";
  // }
  // let my_signature=document.createElement("div");
  // my_signature.className="signature";
  // my_signature.textContent=sig[Math.floor(Math.random()*sig.length)];
  let my_signature=add_child(my_navigation,"div","signature",sig[Math.floor(Math.random()*sig.length)]);
  //随机一条签名
  // my_navigation.appendChild(my_signature);
  // let my_first_list=document.createElement("ul");
  // my_first_list.className="first-list";
  let my_music_button=add_child(my_navigation,"img","music-button f-bu","");
  my_music_button.src=get_repath()+"images/start.png";
  my_music_button.style.display="none";
  

  let my_first_list=add_child(my_navigation,"ul","first-list","");
  // let my_li=document.createElement("li");
  let my_first_li=add_child(my_first_list,"li","","");
  // let my_span=document.createElement("span");
  // my_span.className="toggle f-bu";
  // my_span.textContent="学习";
  add_child(my_first_li,"span","toggle f-bu","学习");
  // my_li.appendChild(my_span);
  let my_second_list=add_child(my_first_li,"ul","second-list","");
  let my_second_li=add_child(my_second_list,"li","","");
  my_a=add_child(my_second_li,"a","","OI");
  my_a.setAttribute("href",get_repath()+"study/OI/"+(is_local()?"index.html":""));
  my_second_li=add_child(my_second_list,"li","","");
  my_a=add_child(my_second_li,"a","","数学");
  my_a.setAttribute("href",get_repath()+"study/math/"+(is_local()?"index.html":""));
  // add_child(my_second_list,"li","","数学");
  my_first_li=add_child(my_first_list,"li","","");
  add_child(my_first_li,"span","toggle f-bu","生活");
  my_second_list=add_child(my_first_li,"ul","second-list","");
  my_second_li=add_child(my_second_list,"li","","");
  my_a=add_child(my_second_li,"a","","杂记");
  my_a.setAttribute("href",get_repath()+"life/notes/"+(is_local()?"index.html":""));
  my_second_li=add_child(my_second_list,"li","","");
  my_a=add_child(my_second_li,"a","","比赛游记");
  my_a.setAttribute("href",get_repath()+"life/records/"+(is_local()?"index.html":""));
  add_child(my_second_list,"li","","板绘");
  add_child(my_second_list,"li","","食堂测评");
  my_first_li=add_child(my_first_list,"li","","");
  my_a=add_child(my_first_li,"a","","荣誉陈列架");
  my_a.setAttribute("href",get_repath()+"gallery/"+(is_local()?"index.html":""));
  my_first_li=add_child(my_first_list,"li","","客观履历");
  my_first_li=add_child(my_first_list,"li","","友情链接");
}
)();
//绘制导航栏
$(document).ready(function(){$(".toggle").next().hide();});
//侧边列表默认收缩
$(document).ready(function(){$(".toggle").click(function(){$(this).next().slideToggle();});});
//侧边列表点击可以展开/收缩子项


$(document).ready(function(){$(".music-button").click(function(){
  let bg=document.querySelector(".bgm");
  if($(this).attr("src")===get_repath()+"images/start.png")
  {
      bg.play();
      $(this).attr("src",get_repath()+"images/stop.png");
  }
  else
  {
      bg.pause();
      $(this).attr("src",get_repath()+"images/start.png");
  }
});});
//音乐播放按钮，在有音乐时会控制背景音乐播放

add_child(document.querySelector("body"),"div","main-box","");

// document.querySelector(".title-img").onclick=function()
// {
//   if(location.pathname.length>=2&&location.pathname.substr(1,2)==="F:")//本地测试
//   {
//     location.search='';
//     location.pathname="/F:/Mr-Spade.github.io/index.html";
//   }
//   else//网页
//   {
//     location.search='';
//     location.pathname="/";
//   }
// };

// document.querySelector(".b-OI").onclick=function()
// {
//   if(location.pathname.length>=2&&location.pathname.substr(1,2)==="F:")//本地测试
//   {
//     location.search='';
//     location.pathname="/F:/Mr-Spade.github.io/study/OI/index.html";
//   }
//   else//网页
//   {
//     location.search='';
//     location.pathname="/study/OI";
//   }
// };

// let onresize_cnt=0;//记录缩放次数特判最开始的加载
window.onresize=function()//每次缩放网页都要调整iframe窗口高度
{
  // if(++onresize_cnt>1)
  // {
  let tmp=document.querySelectorAll(".post-box");
  for(let i=0;i<tmp.length;i++)
    adjust_height(tmp[i]);
  // }
}

function get_value(tar_id)//从location.search中提取tar_id的值
{
    let tmp=location.search.split('?');
    let tot=tmp[tmp.length-1].split('&');
    for(let i=0;i<tot.length;i++)
    {
        let id=tot[i].split('=')[0];
        let val=tot[i].split('=')[1];
        if(id===tar_id)
            return val;
    }
    return -1;
}