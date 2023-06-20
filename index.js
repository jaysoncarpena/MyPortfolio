function sendMail() {
    var params = {
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value ,
        subject: document.getElementById("subject").value ,
        message: document.getElementById("message").value ,
    };

    const serviceID ="service_wmjxegq";
    const templateID ="template_apoegfi";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            swal({
                title: "Thank You!",
                text: "Your message sent successfully!",
                icon: "success",
                button: "Close",
              });
        })
        .catch((err) => console.log(err));
}

