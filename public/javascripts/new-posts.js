let imagePath = '';

document.addEventListener('DOMContentLoaded', function() {
  const uploadForm = document.forms[0];
  const imageForm = document.forms[1];
  document.getElementById('imageForm').addEventListener('submit', (e) => {
    e.preventDefault();
    $.ajax({
    url: '/admin/upload-image',
    method: 'POST',
    data: new FormData(imageForm),
    contentType: false,
    cache: false,
    processData: false,
    success: (response) => {
      imagePath = response;
      $('#modelId').modal('hide');
    }
  });
  });

  document.getElementById('uploadForm').addEventListener('submit', (e) => {
    e.preventDefault();
    $.ajax({
      url: '/admin/create-post',
      method: 'POST',
      data: {
        title: uploadForm['title'].value,
        content: uploadForm['content'].value,
        imageUrl: imagePath
      },
      success: (response) => {
        alert(response);
      }, 
      error: (e) => {
        console.log(e);
        alert('One or more fields are empty');
      }
    });
  });
});