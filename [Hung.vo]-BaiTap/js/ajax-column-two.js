$.ajax({
    method: "get",
    url: "http://5cff0d8bd691540014b0d7be.mockapi.io/articles",
    success: function (data) {
        // console.log(data);
        let id = "";
        data.forEach(article => {
            id += "<h2>" + article.id + "</h2>";
        });

        let titles = "";
        data.forEach(article => {
            titles += "<li>" + "<a href='#' id='" + article.id + "' onclick=' getContent(this.id)'>" + article.title + "</a>" + "</li>";
        });
        $('#titles').html(titles);


    },
    error: function () {
        alert("The content is not found")
    }
})

function getContent(id) {
    $.ajax({
        method: "get",
        url: "http://5cff0d8bd691540014b0d7be.mockapi.io/articles/" + id,
        success: function (data) {
            let content = "";
            content += "<p>" + data.content + "</p>";
            $('#contentAPI').html(content);
        },
        error: function () {
            alert("The content is not found")
        }
    })
}