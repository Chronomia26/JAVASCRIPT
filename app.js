function compile() {
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  var code = document.getElementById("code").contentWindow.document;
  var transferredText = sessionStorage.getItem('textToTransfer');
  var iframe = document.getElementById('code')
  if (transferredText){
    document.getElementById('html').value = transferredText;
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.writeln(transferredText);
    iframeDocument.close();
  }
  document.body.onkeyup = function() {
    code.open();
    code.writeln(html.value);
    code.close();
  };
}

compile();
