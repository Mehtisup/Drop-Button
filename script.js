<script>
function selectFunction() {
    document.getElementById("myList").classList.toggle("display");
}

window.onclick = function(event) {
    if (!event.target.matches('.btn')) {
        var list = document.getElementsByClassName("list");
        var i;
        for (i = 0 ; i < list.length ; i++) {
            var myList = list[i];
            if (myList.classList.contains('display')) {
                myList.classList.remove('display');
            }
        }
    }
}
</script>
