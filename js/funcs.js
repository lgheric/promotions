//
flighthub = "https://www.flighthub.com/?campaign=371&utm_campaign=Yazing&utm_content=2179451-2639103&utm_medium=affiliate&utm_source=cj&cjevent=1ce6b21c357311ec83ab75600a1c0e12";
travelocity = "https://yazing.com/deals/travelocity/saverneo";
clearme = "https://yazing.com/deals/clearme/saverneo";
rvshare = "https://yazing.com/deals/rvshare/saverneo";
adrenaline = "https://yazing.com/go/33961872/saverneo";
flyingblue = "https://yazing.com/go/19565839/saverneo";
airportlax = "https://yazing.com/go/19565839/saverneo";

$(function () {

    $("div").click(function () {
        //$(this)表示当前点击的标签
        switch($(this).attr("data-target")){
            case "flighthub" : window.location.href= flighthub;break;
            case "travelocity" : window.location.href= travelocity;break;
            case "clearme" : window.location.href= clearme;break;
            case "rvshare" : window.location.href= rvshare;break;
            case "adrenaline" : window.location.href= adrenaline;break;
            case "flyingblue" : window.location.href= flyingblue;break;
            case "airportlax" : window.location.href= flyingblue;break;
            default:break;
        }
    });

});
