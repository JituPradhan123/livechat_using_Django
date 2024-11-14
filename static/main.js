$(document).on('submit','#message',(e)=>{
    e.preventDefault();
    $.ajax({
        type:'POST',
        url:"",
        data:{
            message:$('#msg').val(),
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
        }
    });
    $(".parent").load(window.location.href + " .parent");
})

$(document).ready(()=>{
    setInterval(()=>{
        $(".message").load(window.location.href + " .message");
    },100)
})