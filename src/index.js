import $ from 'jquery';
import 'bootstrap';
import './index.scss';

$('.btn').on('click', () => {
  $('#stuff').append('<h1>hi</h1>');
});
