$('#Page1 a[href="#Page1"]').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
});

$('#Page2 a[href="#Page2"]').click(function (e) {
    e.preventDefault()
    $(this).tab('show')

});

$('#Page3 a[href="#Page3"]').click(function (e) {
    e.preventDefault()
    $(this).tab('show')

});

$('#Page4 a[href="#Page4"]').click(function (e) {
    e.preventDefault()
    $(this).tab('show')

});

$('#Page5 a[href="#Page5"]').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
});

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  e.target // newly activated tab
  e.relatedTarget // previous active tab
});
