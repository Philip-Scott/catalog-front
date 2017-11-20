if (!String.format) {
    String.format = function (format) {
        var args = Array.prototype.slice.call (arguments, 1);
        return format.replace (/{(\d+)}/g, function (match, number) { 
        return typeof args[number] != 'undefined'
          ? args[number] 
          : match;
        });
    };
}

function makeIdEditable (id) {
  get (id).contentEditable = "true";
}

function get (id) {
  // console.log (String.format ("Getting: {0}", id));
  return document.getElementById(id);
}

function downloadString (element, fileName, mime) {
  var dlAnchorElem = document.getElementById ('download-anchor');
  
  if (dlAnchorElem === null) {
    document.getElementById ("body").innerHTML += '<a id="download-anchor" style="display:none"></a>';
    dlAnchorElem = document.getElementById ('download-anchor');
  }  

  var dataStr = "data:" + mime + ";charset=utf-8," + encodeURIComponent(element);
  var dlAnchorElem = document.getElementById ('download-anchor');
  dlAnchorElem.setAttribute ("href", dataStr);
  dlAnchorElem.setAttribute ("download", fileName);
  dlAnchorElem.click ();
}

function parse_query_string(query) {
  var vars = query.split("&");
  var query_string = {};
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
      // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
      query_string[pair[0]] = arr;
      // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
}

function addParameterToURL(param){
  _url = location.href;
  _url += _url.split('?')[0];
  return _url;
}
