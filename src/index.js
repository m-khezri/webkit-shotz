import $ from 'jquery';
import 'bootstrap';
import './index.scss';

$('.btn').on('click', () => {
  $('#stuff').append('<p>hi</p>');
});
