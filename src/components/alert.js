import Swal from 'sweetalert2';

export const notification = ({ title, text, icon }) => Swal.fire({ 
  title,
  text,
  timer: 4000,
  showConfirmButton: false,
  position: 'center',
  timerProgressBar: true,
  icon: icon || 'info'
});

export const question = ({ title, text }) => Swal.fire({
  title,
  text,
  showCancelButton: true,
  icon: 'question',
  focusCancel: true,
  confirmButtonColor: 'red',
});