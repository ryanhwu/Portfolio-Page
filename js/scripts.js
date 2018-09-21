console.log("Hello world")
$(document).ready(function(){
    $("#work").click(function(){
        $("#containerwork").slideToggle("slow");
    });
});
</script>
<script>
$(document).ready(function(){
    $("#about-me").click(function(){
        $("#aboutmecontent").slideToggle("slow");
    });
});
