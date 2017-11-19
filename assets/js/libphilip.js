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
