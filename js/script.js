$(function(){
  $('#root').carousel();

  var template = $('#templ').html();

  var data = {
    name: 'Костенко Виталий Викторович',
    img: '<img src="images/img1.jpg" alt="Моя фотка">',
    job: 'Главный бухгалтер',
    info: ['Это интересно' , 'Это хорошо оплачивается', 'Это востребованно'],
    phone: '+3(097)3603260',
    vkAccount: '<a href="https://vk.com/id6406014">vk.com</a>',
    feedback: 'Могу и забор построить если надо'
  };

  var content = tmpl(template, data);

  $('.template').append(content);

});
