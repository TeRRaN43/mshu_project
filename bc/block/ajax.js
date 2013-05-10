//Ajax===============================================================================
function createRequestObject() {
  if (typeof XMLHttpRequest === 'undefined') {
    XMLHttpRequest = function() {
      try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
        catch(e) {}
      try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
        catch(e) {}
      try { return new ActiveXObject("Msxml2.XMLHTTP"); }
        catch(e) {}
      try { return new ActiveXObject("Microsoft.XMLHTTP"); }
        catch(e) {}
      throw new Error("This browser does not support XMLHttpRequest.");
    };
  }
  return new XMLHttpRequest();
}
var idd;
function vote(io,param,id1)
{
	idd = id1;
	io = "html/"+io+".html";
	//param = null;
//эта функция сработает при клике на кнопку.
	req = new XMLHttpRequest(); //new обязательно -иначе в ие и хроме не пашет
    if (req) {
        req.open("POST", io, true); //скрипт к которому обращаемся
		req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); // заголовок в посте это обязательный атрибут

        req.onreadystatechange = processReqChange; // обработчик приёма ответа
        req.send(param); // значения
    }
		  document.getElementById('content').innerHTML = "<img style='position: absolute; left: 50%; top: 50%;' src='img/350.png' width='32' height='32'>";	  
}

function processReqChange()
{
var statusElem = document.getElementById(idd)
  try {
    if (req.readyState == 4) {
        // для статуса "OK"
        if (req.status == 200) {
			
           	statusElem.innerHTML = req.responseText;
			
        } else {
            alert("Не удалось получить данные:\n" +
                req.statusText);
        }
    }
  }
  catch( e ) {
  }
  
}