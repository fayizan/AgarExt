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
                        $('body').append( '<div id="swyaz" class="time-hud-color" style="position: absolute;font-size: 75%; text-align: center; top:250px; right:10px;" title="Kopyalamak için tıkla"></div>' );
			$("#gamemode").after('<br><br><input id="server" class="form-control" style="width: 59%;  display: inline-block; margin-right: 5px"><button type="submit" id="connect" class="btn btn-primary" style="width: 25%; display: inline-block; margin-right: 5px">Connect</button><button type="button" id="reconnect" class="btn btn-info" style="display: inline-block"><i class="glyphicon glyphicon-refresh"></i></button>');
			$("#swyaz").click(function() {
                		var temp = document.createElement("input");
                		var wsadres=$("#swyaz").html();
                		temp.setAttribute("value", wsadres);
                		document.body.appendChild(temp);
                		temp.select();
                		document.execCommand("copy");
                		document.body.removeChild(temp);
                		$("#swyaz").html('<div class="alert alert-success">Ws Adresi Kopyalandı</div>').css( {"background-color": "green", "opacity": "0.8"});
          			setTimeout(function(){$("#swyaz").html(wsadres).css({"background-color": "#000000", "opacity": "0.2"});}, 1000);
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
