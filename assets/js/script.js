// Block Scope for Mobile Menu //

{
    function openNav() {
        document.getElementById("mobileMenu").style.width = "300px";
        document.body.classList.add("myStyle");
      }
      
      function closeNav() {
        document.getElementById("mobileMenu").style.width = "0";
        document.body.classList.remove("myStyle");
      }
}
// for fixed header
{
  
  window.onscroll = function() {
    headerScroll()
  };

  var header = document.getElementById("header");

  function headerScroll() {
    if (window.pageYOffset > 100 ) {
      header.classList.add("fixed-header");
    } else {
      header.classList.remove("fixed-header");
    }
  }

}

// for market risk tab
{
  function marketRiskTab(evt, marketRiskTabShow) {
    var i, tabcontents, tablinks;
    tabcontents = document.getElementsByClassName("marketRiskTabContent");
    for (i = 0; i < tabcontents.length; i++) {
      tabcontents[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("marketRiskTabBtn");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" market-risk-active", "");
    }
    document.getElementById(marketRiskTabShow).style.display = "block";
    evt.currentTarget.className += " market-risk-active";
  }
}

// for integration tool

{
  function integrationToolTab(evt, integrationToolTabShow) {
    var i, tabcontents, tablinks;
    tabcontents = document.getElementsByClassName("integrationToolTabContent");
    for (i = 0; i < tabcontents.length; i++) {
      tabcontents[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("integrationToolTabBtn");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" tools-tab-active", "");
    }
    document.getElementById(integrationToolTabShow).style.display = "block";
    evt.currentTarget.className += " tools-tab-active";
  }
}