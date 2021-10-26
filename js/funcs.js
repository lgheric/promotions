//
flighthub = "https://www.flighthub.com/?campaign=371&utm_campaign=Yazing&utm_content=2179451-2639103&utm_medium=affiliate&utm_source=cj&cjevent=1ce6b21c357311ec83ab75600a1c0e12";

$(function () {         //当文档加载完毕自动执行此处代码

    $("img").click(function () {        //绑定事件（方法一）
        //$(this)表示当前点击的标签
        switch($(this).attr("data-target")){
            case "flighthub" : window.location.href= flighthub;
        }
    });

    $("span").click(function () {        //绑定事件（方法一）
        //$(this)表示当前点击的标签
        switch($(this).attr("data-target")){
            case "flighthub" : window.location.href= flighthub;
        }
    });

});
