  var datatypes = document.getElementById('datatypes');
  var reserved = document.getElementById('reserved');
  var whatisjavascript = document.getElementById('whatisjavascript');
  var arithmetic = document.getElementById('arithmetic');
  var loops = document.getElementById('loops');
  var decisionmaking = document.getElementById('decisionmaking');
  var functions = document.getElementById('functions');
  var link1 = document.getElementById('link1')
  var link2 = document.getElementById('link2')
  var link3 = document.getElementById('link3')
  var link4 = document.getElementById('link4')
  var link5 = document.getElementById('link5')
  var link6 = document.getElementById('link6')
  var link7 = document.getElementById('link7')
  function changeContent(link) {

      if (link.textContent == "Datatypes and Variables") {
          whatisjavascript.style.display = "none";
          datatypes.style.display = "block";
          reserved.style.display = "none";
          operators.style.display = "none";
          decisionmaking.style.display = "none";
          loops.style.display = "none";
          functions.style.display = "none";
          link1.classList.remove('linkcolor')
          link2.classList.add('linkcolor')
          link3.classList.remove('linkcolor')
          link4.classList.remove('linkcolor')
          link5.classList.remove('linkcolor')
          link6.classList.remove('linkcolor')
          link7.classList.remove('linkcolor')
          document.title = "Datatypes and Variables"

      } else if (link.textContent == "Reserved Words") {
          whatisjavascript.style.display = "none";
          datatypes.style.display = "none";
          reserved.style.display = "block";
          operators.style.display = "none";
          decisionmaking.style.display = "none";
          loops.style.display = "none";
          functions.style.display = "none";
          link1.classList.remove('linkcolor')
          link2.classList.remove('linkcolor')
          link3.classList.add('linkcolor')
          link4.classList.remove('linkcolor')
          link5.classList.remove('linkcolor')
          link6.classList.remove('linkcolor')
          link7.classList.remove('linkcolor')
          document.title = "Reserved Words"

      } else if (link.textContent == "What is an Operator?") {
          whatisjavascript.style.display = "none";
          datatypes.style.display = "none";
          reserved.style.display = "none";
          operators.style.display = "block";
          decisionmaking.style.display = "none";
          loops.style.display = "none";
          functions.style.display = "none";
          link1.classList.remove('linkcolor')
          link2.classList.remove('linkcolor')
          link3.classList.remove('linkcolor')
          link4.classList.add('linkcolor')
          link5.classList.remove('linkcolor')
          link6.classList.remove('linkcolor')
          link7.classList.remove('linkcolor')
          document.title = "What is an Operator?"

      } else if (link.textContent == "Decision Making Statements") {
          whatisjavascript.style.display = "none";
          datatypes.style.display = "none";
          reserved.style.display = "none";
          operators.style.display = "none";
          decisionmaking.style.display = "block";
          loops.style.display = "none";
          functions.style.display = "none";
          link1.classList.remove('linkcolor')
          link2.classList.remove('linkcolor')
          link3.classList.remove('linkcolor')
          link4.classList.remove('linkcolor')
          link5.classList.add('linkcolor')
          link6.classList.remove('linkcolor')
          link7.classList.remove('linkcolor')
          document.title = "Decision Making Statements"
      
      } else if (link.textContent == "Loops") {
          whatisjavascript.style.display = "none";
          datatypes.style.display = "none";
          reserved.style.display = "none";
          operators.style.display = "none";
          loops.style.display = "block";
          decisionmaking.style.display ="none";
          functions.style.display = "none";
          link1.classList.remove('linkcolor')
          link2.classList.remove('linkcolor')
          link3.classList.remove('linkcolor')
          link4.classList.remove('linkcolor')
          link5.classList.remove('linkcolor')
          link6.classList.add('linkcolor')
          link7.classList.remove('linkcolor')
          document.title = "Loops"
      
      } else if (link.textContent == "Functions") {
          whatisjavascript.style.display = "none";
          datatypes.style.display = "none";
          reserved.style.display = "none";
          operators.style.display = "none";
          loops.style.display = "none";
          decisionmaking.style.display ="none";
          functions.style.display ="block";
          link1.classList.remove('linkcolor')
          link2.classList.remove('linkcolor')
          link3.classList.remove('linkcolor')
          link4.classList.remove('linkcolor')
          link5.classList.remove('linkcolor')
          link6.classList.remove('linkcolor')
          link7.classList.add('linkcolor')
          document.title = "Functions"

      } else {
          whatisjavascript.style.display = "block";
          datatypes.style.display = "none";
          reserved.style.display = "none";
          operators.style.display = "none";
          loops.style.display = "none";
          decisionmaking.style.display = "none";
          functions.style.display = "none";
          link1.classList.add('linkcolor')
          link2.classList.remove('linkcolor')
          link3.classList.remove('linkcolor')
          link4.classList.remove('linkcolor')
          link5.classList.remove('linkcolor')
          link6.classList.remove('linkcolor')
          link7.classList.remove('linkcolor')
          document.title = "What is Javascript?"
      }
  }

  function arrow(link) {
      if (link.textContent == '<') {
          if (whatisjavascript.style.display == "block"){
              whatisjavascript.style.display = "none";
              datatypes.style.display = "none";
              reserved.style.display = "none";
              operators.style.display = "none";
              decisionmaking.style.display = "none";
              loops.style.display = "none";
              functions.style.display = "block";
              link1.classList.remove('linkcolor')
              link2.classList.remove('linkcolor')
              link3.classList.remove('linkcolor')
              link4.classList.remove('linkcolor')
              link5.classList.remove('linkcolor')
              link6.classList.remove('linkcolor')
              link7.classList.add('linkcolor')
              document.title = "Functions"
          } else if (functions.style.display == "block"){
              whatisjavascript.style.display = "none";
              datatypes.style.display = "none";
              reserved.style.display = "none";
              operators.style.display = "none";
              decisionmaking.style.display = "none";
              loops.style.display = "block";
              functions.style.display = "none";
              link1.classList.remove('linkcolor')
              link2.classList.remove('linkcolor')
              link3.classList.remove('linkcolor')
              link4.classList.remove('linkcolor')
              link5.classList.remove('linkcolor')
              link6.classList.add('linkcolor')
              link7.classList.remove('linkcolor')
              document.title = "Loops"
          } else if (loops.style.display == "block"){
              whatisjavascript.style.display = "none";
              datatypes.style.display = "none";
              reserved.style.display = "none";
              operators.style.display = "none";
              decisionmaking.style.display = "block";
              loops.style.display = "none";
              functions.style.display = "none";
              link1.classList.remove('linkcolor')
              link2.classList.remove('linkcolor')
              link3.classList.remove('linkcolor')
              link4.classList.remove('linkcolor')
              link5.classList.add('linkcolor')
              link6.classList.remove('linkcolor')
              link7.classList.remove('linkcolor')
              document.title = "Decision Making Statements"
          }else if (decisionmaking.style.display == "block"){
              whatisjavascript.style.display = "none";
              datatypes.style.display = "none";
              reserved.style.display = "none";
              arithmetic.style.display = "block";
              decisionmaking.style.display = "none";
              loops.style.display = "none";
              functions.style.display = "none";
              link1.classList.remove('linkcolor')
              link2.classList.remove('linkcolor')
              link3.classList.remove('linkcolor')
              link4.classList.add('linkcolor')
              link5.classList.remove('linkcolor')
              link6.classList.remove('linkcolor')
              link7.classList.remove('linkcolor')
              document.title = "What is an Operator?"
          } else if (arithmetic.style.display == "block"){
              whatisjavascript.style.display = "none";
              datatypes.style.display = "none";
              reserved.style.display = "block";
              operators.style.display = "none";
              decisionmaking.style.display = "none";
              loops.style.display = "none";
              functions.style.display = "none";
              link1.classList.remove('linkcolor')
              link2.classList.remove('linkcolor')
              link3.classList.add('linkcolor')
              link4.classList.remove('linkcolor')
              link5.classList.remove('linkcolor')
              link6.classList.remove('linkcolor')
              link7.classList.remove('linkcolor')
              document.title = "Reserved Words"
          } else if (reserved.style.display == "block"){
              whatisjavascript.style.display = "none";
              datatypes.style.display = "block";
              reserved.style.display = "none";
              operators.style.display = "none";
              decisionmaking.style.display = "none";
              loops.style.display = "none";
              functions.style.display = "none";
              link1.classList.remove('linkcolor')
              link2.classList.add('linkcolor')
              link3.classList.remove('linkcolor')
              link4.classList.remove('linkcolor')
              link5.classList.remove('linkcolor')
              link6.classList.remove('linkcolor')
              link7.classList.remove('linkcolor')
              document.title = "Datatypes and Variables"
          } else {
              whatisjavascript.style.display = "block";
              datatypes.style.display = "none";
              reserved.style.display = "none";
              operators.style.display = "none";
              decisionmaking.style.display = "none";
              loops.style.display = "none";
              functions.style.display = "none";
              link1.classList.add('linkcolor')
              link2.classList.remove('linkcolor')
              link3.classList.remove('linkcolor')
              link4.classList.remove('linkcolor')
              link5.classList.remove('linkcolor')
              link6.classList.remove('linkcolor')
              link7.classList.remove('linkcolor')
              document.title = "What is JavaScript?"
          }
      } else {
          if (whatisjavascript.style.display == "block"){
              whatisjavascript.style.display = "none";
              datatypes.style.display = "block";
              reserved.style.display = "none";
              operators.style.display = "none";
              decisionmaking.style.display = "none";
              loops.style.display = "none";
              functions.style.display = "none";
              link1.classList.remove('linkcolor')
              link2.classList.add('linkcolor')
              link3.classList.remove('linkcolor')
              link4.classList.remove('linkcolor')
              link5.classList.remove('linkcolor')
              link6.classList.remove('linkcolor')
              link7.classList.remove('linkcolor')
              document.title = "Datatypes and Variables"
          } else if (datatypes.style.display == "block"){
              whatisjavascript.style.display = "none";
              datatypes.style.display = "none";
              reserved.style.display = "block";
              operators.style.display = "none";
              decisionmaking.style.display = "none";
              loops.style.display = "none";
              functions.style.display = "none";
              link1.classList.remove('linkcolor')
              link2.classList.remove('linkcolor')
              link3.classList.add('linkcolor')
              link4.classList.remove('linkcolor')
              link5.classList.remove('linkcolor')
              link6.classList.remove('linkcolor')
              link7.classList.remove('linkcolor')
              document.title = "Reserved Words"
          } else if (reserved.style.display == "block"){
              whatisjavascript.style.display = "none";
              datatypes.style.display = "none";
              reserved.style.display = "none";
              arithmetic.style.display = "block";
              decisionmaking.style.display = "none";
              loops.style.display = "none";
              functions.style.display = "none";
              link1.classList.remove('linkcolor')
              link2.classList.remove('linkcolor')
              link3.classList.remove('linkcolor')
              link4.classList.add('linkcolor')
              link5.classList.remove('linkcolor')
              link6.classList.remove('linkcolor')
              link7.classList.remove('linkcolor')
              document.title = "What is an Operator?"
          } else if (arithmetic.style.display == "block"){
              whatisjavascript.style.display = "none";
              datatypes.style.display = "none";
              reserved.style.display = "none";
              operators.style.display = "none";
              decisionmaking.style.display = "block";
              loops.style.display = "none";
              functions.style.display = "none";
              link1.classList.remove('linkcolor')
              link2.classList.remove('linkcolor')
              link3.classList.remove('linkcolor')
              link4.classList.remove('linkcolor')
              link5.classList.add('linkcolor')
              link6.classList.remove('linkcolor')
              link7.classList.remove('linkcolor')
              document.title = "Decision Making Statements"
          } else if (decisionmaking.style.display == "block"){
              whatisjavascript.style.display = "none";
              datatypes.style.display = "none";
              reserved.style.display = "none";
              operators.style.display = "none";
              decisionmaking.style.display = "none";
              loops.style.display = "block";
              functions.style.display = "none";
              link1.classList.remove('linkcolor')
              link2.classList.remove('linkcolor')
              link3.classList.remove('linkcolor')
              link4.classList.remove('linkcolor')
              link5.classList.remove('linkcolor')
              link6.classList.add('linkcolor')
              link7.classList.remove('linkcolor')
              document.title = "Loops"
          } else if (loops.style.display == "block"){
              whatisjavascript.style.display = "none";
              datatypes.style.display = "none";
              reserved.style.display = "none";
              operators.style.display = "none";
              decisionmaking.style.display = "none";
              loops.style.display = "none";
              functions.style.display = "block";
              link1.classList.remove('linkcolor')
              link2.classList.remove('linkcolor')
              link3.classList.remove('linkcolor')
              link4.classList.remove('linkcolor')
              link5.classList.remove('linkcolor')
              link6.classList.remove('linkcolor')
              link7.classList.add('linkcolor')
              document.title = "Functions"
          } else {
              whatisjavascript.style.display = "block";
              datatypes.style.display = "none";
              reserved.style.display = "none";
              operators.style.display = "none";
              decisionmaking.style.display = "none";
              loops.style.display = "none";
              functions.style.display = "none";
              link1.classList.add('linkcolor')
              link2.classList.remove('linkcolor')
              link3.classList.remove('linkcolor')
              link4.classList.remove('linkcolor')
              link5.classList.remove('linkcolor')
              link6.classList.remove('linkcolor')
              link7.classList.remove('linkcolor')
              document.title = "What is JavaScript?"
          }
      }
  }

  function toggleMode() {
      var body = document.body;
      if (body.classList.contains('light-mode')) {
          body.classList.remove('light-mode');
          body.classList.add('dark-mode');
      } else {
          body.classList.remove('dark-mode');
          body.classList.add('light-mode');
      }
  }