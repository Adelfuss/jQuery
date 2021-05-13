// це однакові функції : 
// jQuery();
// $();

$('a');   // - отримуємо усі силки на сторінці.
$('.logo');
$('#recive');

$('nav menu');
$('.icons > div');
$('.icons img + h4');

$('img[height=150]');
$('img[src^=img]');
$('img[src$=png]');
$("a[href*='#']");   // альтернативний запис.

// фильтрация выборок:
// деякі фільтри з css, а деякі фільтри кастомні у jquery.
$('menu li:even');   // вибирає усі чотні елементи.  
$('menu li:odd');  // вибирає  нечотні елементи.
$('img:not(.logo img)'); // исключаемо деякі елементи з виборки.
$('li:has(a)');  // провіряємо чи елемент має в середині себе тег(елемент) a
$('p:contains(client)');   // провіряємо чи є наявний контент у елементі.
$('li:first');
$('li:last');
$('div:hidden');   // вибирає усі блоки, які скриті на сторінці.
$('div:visible');  // вибирає усі блоки, які нескриті.
// дані фільтри вище - вони кастомні у jquery.

$('li:nth-child(2)');   // можна і записати не кастомний варіант з jquery, а той варіант який працює у чистому css.


// $(document).ready(function(){
     // код, який буде виконуватися тоді, коли весь наший html документ - прогрузився.
// });

// другий спосіб написання обробника вище:

// $(function(){
    
// });


// Урок №7

// $(function(){
     //var tagP = $('.mainText p').text();    // отримали текст, якщо передати параметр у дану функцію - то ми перезапишемо текст.
     //tagP = $('.mainText p').hide();   // виставляє елемент у display:none   
     // також можна передавати значення - яке слугує часом анімації зникнення. І другим аргументом можна передати функцію, яка визиветься після виконання функції hide.
     //tagP = $('.mainText p').show(); // - показує елемент.
     // show - має аналогічні аргументи як і у hide.
// });


// Урок №9

// $(function(){
//     // методи у jQuery - можуть примінятися не до одного конкретного елемента, а до цілої виборки елементів.
//     $('.icons > div').hide();
// });

// Урок №10

// $(function(){
//     var w = $('.btn').width();   // дозволяє взнати та переоприділити width.
//     console.log(w);
// });


// Урок №11

// $(function(){
//     //$('.mainText').html();   // отримуємо html код у вигляді строки, який знаходиться в середині даного елементу.
//     $('.mainText').html('<b>Новый заголовок </b>');   // переписуємо html код, який знаходиться в середині елемента.
// });


// Урок №12

// $(function(){
//     //$('.mainText').fadeOut(2000);   // робить елемент display:none
//     //$('.mainText').fadeIn(2000);
// другими параметрами - приймають функцію.


// });


// Урок № 13

// $(function(){
//     $('.mainText').fadeTo(4000,0.5);
// також третім параметром можна передати функцію.
// });


// Урок №14

// $(function(){
//      $('.mainText').slideUp(2000).slideDown(2000);
// });


// Урок №15

// $(function(){
//      // $('.logo img').attr('src');    // отримали значення атрибута.
//      //$('.logo img').attr('src','img/icon1.png'); // перезаписали значення атрибута.
//      //$('.logo img').attr('title','Logo'); // добавлення нового атрибута.

//      // $('.logo img').removeAttr('src');   // видалення атрибуту.
// });


// Урок №16

// $(function(){
//      $('nav menu').addClass('border');   // добавляємо клас.
//      $('nav menu').removeClass('border');  // видаляємо клас.
// });


// Урок № 17

// $(function(){
//      //$('nav menu').css('font-size');  // отримати значення властивості прям з css.
//      //$('nav menu li a').css('color','red');  // переоприділити стилі.

//      // передавання по цепочкі.
//      // $('nav menu li a').css('color','red').css('font-size','25px');
//      // інший варіант передавання декількох властивостей:
//      $('nav menu li a').css({
//           color: 'red',
//           'font-size': '25px',
//           padding: '10px'
//      });
// });


// Урок №18

// animate - аналогічна функція css, за вийнятком того, що може добавляти час переходу властивостей.
// також третім параметром можна передати функцію.
// $(function(){
//      $('nav menu li a').animate({
//           color: "red",
//           'font-style': '25px',
//           padding: '25px'
//      },400);
// });


// Урок №19

// $(function(){
//      $('.mainText').before('<span>New span</span>');
//      $('.mainText').after('<span>New span</span>');
//      $('.mainText').append('<span>New span</span>');
//      $('.mainText').prepend('<span>New span</span>');
// });


// Урок №20

// $(function(){
//     $('.icons img').each(function(){
//          if ($(this).attr('src') === 'img/icon3.png') {
//               $(this).fadeOut(1000);
//          }
//     });
// });


// Урок №21

// $(function(){
//      $('div').length; // взнаваємо кількість елементів у виборці з jquery обекта.
// });


// Урок №22

// $(function(){
//      var mainText = $('.mainText').clone();  // клонує jquery обект.
//      // метод remove() - видаляє елемент з dom дерева.
// });


// Урок №23

// $(function(){
//      $('img,a');   // вибираємо відразу декілька типів елементів через кому.
// });


// Урок №24

// $(function(){
//      // $('.logo').mouseover(function(){
//      //      console.log('mouseover');
//      // });
//      // $('.logo').mouseout(function(){
//      //      console.log('mouseout');
//      // });
//      // $('.logo').click(function(){
//      //      console.log('click');
//      // });
//      // $('.logo').mousemove(function(){
//      //      console.log('mousemove');
//      // });
//      // $('.logo').mouseup(function(){
//      //      console.log('mouseup');
//      // });

//      // submit,focus,blur,change,reset - інші події, які також обробляються у jquery.
//      // keypress, keydown,keyup   - події клавіатури.
//      //load , ready - події сторінки.
// });


// Урок №25-26

// $(function(){
//      // $(window).scroll(function(){
//      //     console.log('scroll'); 
//      // });

//      $('.arrowDown').click(function(){
//           console.log('Click');
//           var clone = $(this).clone();
//           $(this).after(clone);
//      });
// });


// Урок №27

// $(function(){
//      // var link = $('menu li a');   // собитие приміняється до всіх елементів виборки.
//      // link.mouseover(function(){
//      //      $(this).addClass('border');
//      // });
//      // link.mouseout(function(){
//      //      $(this).removeClass('border');
//      // });


//      // у jquery - є натівна подія hover
//      var links = $('menu li a');
//      links.hover(function(){
//           $(this).addClass('border');
//      },
//      function(){
//           $(this).removeClass('border');
//      }
//      );
// });


// Урок №28

// $(function(){
//      // у функцію-обробник - можна передати обект події.
//      $('.mainText').click(function(e){
//           console.log(e); // має аналогічні поля, які має даний обект у натівному js.
//           console.log(e.target);
//      });
// });


// Урок №29

// $(function(){
//      $('.btn,.arrowDown').click(function(e){
//           e.preventDefault();
//      });
// });


// Урок №31

// $(function(){
//      //$(':checkbox').fadeOut(1000);
//      // $(':radio').fadeOut(1000);
//      // $(':submit').fadeOut(1000);
//      // $(':reset').fadeOut(1000);
//      // $(':file').fadeOut(1000);
//      // $(':button').fadeOut(1000);
//      // $(':text').fadeOut(1000);
//      // $(':password').fadeOut(1000);
//      // $(':input').fadeOut(1000);
//      // $('.form1 :input').fadeOut(1000);   - // вибірка всіх елементів input з форми (.form1)
// });



// Урок №32

// $(function(){
//      $('.form1 :checkbox:checked').fadeOut(1000);  // выборка выбраного checkbox
//      $('.form1 :radio:checked').fadeOut(1000);   // аналогічно для radio
//      $('.form1 :selected').remove();  // вибірка selected елемента у тегі select
// });


// Урок №33

// $(function(){
//      // val() - вертає значення тільки для одного дом обекта. 
//      $(':submit').click(function(e){
//           e.preventDefault();
//           // var value = $('#select1 :selected').val();
//           // console.log(value);
//           var value = $(':checkbox').each(function(){
//                var value = $(this).val();
//                console.log(value);
//           });
//      });
// });


// Урок № 34

// $(function(){
//      // $('.form1').submit(function(e){
//      //      if($('.text1').val() == ""){
//      //           e.preventDefault();
//      //           console.log('Fill input');
//      //      }
//      // });

//      // $('.text1').focus(function(){
//      //      $(this).css({
//      //           border: '2px double red',
//      //           background: 'green',
//      //      });
//      // });


// });


// Урок №35

// $(function(){
//      // $('.text1').focus(function(){
//      //      $(this).addClass('border');
//      // });
//      // $('.text1').blur(function(){
//      //      $(this).removeClass('border');
//      // });
//      // $('#select1').change(function(){
//      //      var value = $('#select1 :selected').val();
//      //      if(value == 1){
//      //           $('#select2').html('<option value="1">Значение номер 1</option><option value = "2">Значение номер 2</option>');
//      //      }
//      // });
// });


// Урок №36

// $(function(){
//    $(':submit').click(function(e){
//         $('.text2').attr('disabled','disabled');
//         e.preventDefault();
//    }); 
//    $(':reset').click(function(e){
//         $('.text2').removeAttr('disabled');
//         e.preventDefault();
//    }); 
// });


