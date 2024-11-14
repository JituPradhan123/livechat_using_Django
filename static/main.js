
// Submit message and refresh chat
$(document).on('submit','#message',(e)=>{
    e.preventDefault();
    $.ajax({
        type:'POST',
        url:"",
        data:{
            message:$('#msg').val(),
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
        },
        success: function(){
            $('#msg').val(''); // Clear input after submission
            scrollToBottom(); // Scroll to the bottom after sending
        }
    });
    $(".parent").load(window.location.href + " .parent", function(){
        //scrollToBottom(); // Scroll to bottom after reloading the messages
    });
});

// Refresh chat every 100 ms and scroll to bottom
$(document).ready(()=>{
    setInterval(()=>{
        $(".message").load(window.location.href + " .message", function() {
            //scrollToBottom(); // Scroll to the bottom after content loads
        });
        //scrollToBottom();
    },100);
    scrollToBottom(); // Initial scroll to the bottom on page load
});

// Function to scroll to the bottom of the chat container
function scrollToBottom(){
    const chatContainer = document.getElementById('chat-container');
    chatContainer.scrollTop = chatContainer.scrollHeight;
}