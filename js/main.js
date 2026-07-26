console.log("连江口镇旅游网页加载完毕，轮播自动播放");function goSearch(e){
    e.preventDefault();
    let key = document.getElementById("searchKey").value.trim();
    let searchMap = {
        "浈阳峡":"spot/zhenyangxia.html",
        "江口古镇":"spot/jiangkou.html",
        "北江游船":"spot/beijiang.html",
        "麻竹笋":"farm/mazhu.html",
        "粉葛":"farm/fenge.html",
        "北江河米":"farm/hemi.html",
        "黄皮":"farm/huangpi.html",
        "北江河鲜":"food/hexian.html",
        "笋干焖肉":"food/sunrou.html",
        "钵仔糕":"food/zugaogao.html",
        "粉葛羹":"food/gegeng.html"
    };
    if(searchMap[key]){
        location.href = searchMap[key];
    }else{
        alert("暂无该景点/特产");
    }
}
console.log("网页加载完成");