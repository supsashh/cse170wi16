
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
    'portfolios': [
      { 'title': 'Your GoTo List',
        'image1': 'acai.jpg',
        'image2': 'coffee.jpg',
        'image3': 'pastries.jpg',
        'image4': 'fries.jpg',
        'image5': 'pancakes.jpg',
        'id': 'goto'
      },
      { 'title': 'Today is Taco Tuesday',
        'image1': 'taco1.jpg',
        'image2': 'taco2.jpg',
        'image3': 'taco3.jpg',
        'image4': 'taco4.jpg',
        'image5': 'taco5.jpg',
        'id': 'today'
      },
      { 'title': 'Recommended for you',
        'image1': 'eggs.jpg',
        'image2': 'sushi.jpg',
        'image3': 'toffee.jpg',
        'image4': 'macarons.jpg',
        'image5': 'salad.jpg',
        'id': 'recommended'
      },
      { 'title': 'Your friends recommend',
        'image1': 'pho.jpg',
        'image2': 'donuts.jpg',
        'image3': 'scallops.jpg',
        'image4': 'ice-cream.jpg',
        'image5': 'cookies.jpg',
        'id': 'friend-recommended'
      }
    ],
    'cuisines': [
      {
        'id': 'American',
        'image': 'americanbutton.png'
      },
      {
        'id': 'Mexican',
        'image': 'mexicanbutton.png'
      },
      {
        'id': 'Japanese',
        'image': 'japanesebutton.png'
      },
      {
        'id': 'Italian',
        'image': 'italianbutton.png'
      }
    ]
  });
};