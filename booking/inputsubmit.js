console.log("Script is working properly")

$(document).ready(() => 
{
    console.log("inputsubmit is ready")
    $("#submit_button").click(() =>
    {
        let data = 
        {
            name: $("#event_name").val(),
            date_start: $("#datetime_start").val(),
            datetime_end: $("#datetime_end").val(),
            desc: $("#event_description").val()
        }

        // document.getElementById("log").innerHTML = data.name + " " + data.date_start + " " + data.datetime_end + " " + data.desc

        $.post("https://sunshineshownodered.mybluemix.net/photoclub/newevent/",data,() =>
        {
            console.log(data);
        })
    })
})
