(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.collapsible').collapsible();
    $('.scrollspy').scrollSpy();

  var options = [

    {selector: '#serhii', offset: 300, callback: function(el) {
      Materialize.fadeInImage($(el)); } },
    {selector: '#word1', offset: 200, callback: function(el) {
      Materialize.showStaggeredList($(el)); } },
    {selector: '#word2', offset: 200, callback: function(el) {
      Materialize.showStaggeredList($(el)); } },
    {selector: '#row1', offset: 200, callback: function(el) {
      Materialize.fadeInImage($(el)); } },
    {selector: '#row2', offset: 300, callback: function(el) {
      Materialize.fadeInImage($(el)); } }
  ];
  Materialize.scrollFire(options);

  }); // end of document ready
})(jQuery); // end of jQuery name space
