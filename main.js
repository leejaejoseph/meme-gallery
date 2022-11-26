const $gallery = document.querySelector('main');

const imageUrls = [
  'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/84019889_109566187267807_1637055213258932224_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Sm8y06y9b4QAX-Brmb4&_nc_ht=scontent-sjc3-1.xx&oh=00_AfB1pJsQFbJbkFn5XrvyWG3mtrn5eOVeFwgZwtBC6XQbTA&oe=63A9DDB3',
  'https://i0.wp.com/hyperallergic-newspack.s3.amazonaws.com/uploads/2022/07/lettuce.jpg?fit=1200%2C753&quality=100&ssl=1',
  'https://i.kym-cdn.com/entries/icons/original/000/022/945/beanscroc.JPG'
];

const $imageUrlInput = document.querySelector('input');
const $addImageButton = document.querySelector('button');

$addImageButton.addEventListener('click', function () {
  if ($imageUrlInput.value !== '') {
    imageUrls.push($imageUrlInput.value);
  }
  $imageUrlInput.value = '';
  updateGallery();
});

function updateGallery() {
  $gallery.innerHTML = '';
  for (let i = 0; i < imageUrls.length; i++) {
    const $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imageUrls[i];
    $gallery.appendChild($imageElement);
  }
}
updateGallery();
