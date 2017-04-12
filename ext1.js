(function(a, c) {
    function r(a, d) {
        if (d) {
            var f = new Date;
            f.setTime(f.getTime() + 864E5 * d);
            f = "; expires=" + f.toGMTString()
        } else f = "";
        document.cookie = "agario_redirect=" + a + f + "; path=/"
    }




		// _x_start
		$(function() {
                        $('<h5 id="swyaz" class="hud-main-color" style="cursor:pointer; position: absolute; z-index:1000; font-size: 16px; text-align: center;" title="Kopyalamak için tıkla"></h5>').appendTo('#leaderboard-positions');
			$("#gamemode").after('<input id="server" class="form-control" style="width: 59%;  display: inline-block; margin-right: 5px"><button type="submit" id="connect" class="btn btn-primary" style="width: 25%; display: inline-block; margin-right: 5px">Connect</button><button type="button" id="reconnect" class="btn btn-info" style="display: inline-block"><i class="glyphicon glyphicon-refresh"></i></button>');
			$("#swyaz").click(function() {
                		var temp = document.createElement("input");
                		var wsadres= $("#swyaz").html();
                		temp.setAttribute("value", wsadres);
                		document.body.appendChild(temp);
                		temp.select();
                		document.execCommand("copy");
                		document.body.removeChild(temp);
                		$("#swyaz").html('WS Adresi Kopyalandı').css( {"background-color": "green", "opacity": "1.0"});
          			setTimeout(function(){$("#swyaz").html(wsadres).css("background-color", "rgba(0, 0, 0, .5)");}, 1000);
             	});
			$("#connect").click(function() {
                a.core.connect($("#server").val())
            });
			$("#reconnect").click(function() {
                MC.reconnect()
		adres();	
			})
//----------------
$( "#region" ).on('change', function() {
 MC.setRegion($('#region').val());   
  adres();
});
           
$('#gamemode').on('change', function() {
  adres();
});      
//-----------------------
        })
		// _x_end
//-----------------------
   adres();         
function adres() {
    var adrs = WebSocket.prototype.send;
    window.__WS_send = WebSocket.prototype.send, WebSocket.prototype.send = function(b) {
          $("#server").val(this.url);
        var tmz=this.url;
        tmz=tmz.replace("ip-", "");
        tmz=tmz.replace(/-/g,".");    
        tmz=tmz.replace(".tech.agar.io","");
        $("#swyaz").html(tmz);
        try {
            adrs.apply(this, [b]), WebSocket.prototype.send = adrs
        } catch (e) {
            window.__WS_send.apply(this, [b]), WebSocket.prototype.send = window.__WS_send
        }
    }
}
//-----------------------
})(window, window.jQuery);
