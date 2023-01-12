$(document).ready(function(){

    // slider

    if(window.location.href.indexOf('index') > -1){

        $(".galeria").bxSlider({
            mode: "fade",
            slideWidth: 1200,
            responsive: true,
            pager: true
        });
    }


    // posts
    if(window.location.href.indexOf('index') > -1){

        const posts = [
            {
                title: 'Prueba de titulo 1',
                date: 'Publicado el dia ' + moment().format("dddd") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur rem, perferendis quasi adipisci mollitia temporibus nam deleniti! Omnis perspiciatis commodi nemo! Assumenda accusamus reiciendis debitis saepe, quia exercitationem alias nulla explicabo rerum voluptatibus aspernatur vel incidunt ut sint, commodi veritatis asperiores quos unde? Vitae doloremque dolorum sapiente. Perferendis sed mollitia deleniti, sint assumenda laudantium dolorem dignissimos fugit? Maiores minus impedit autem, aspernatur, consequuntur molestias excepturi tempora asperiores voluptas quod sed eligendi quae adipisci ad odit temporibus! Amet facere officiis minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reprehenderit quis aliquid ratione inventore maiores excepturi temporibus omnis nam animi.'
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el dia ' + moment().format("dddd") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur rem, perferendis quasi adipisci mollitia temporibus nam deleniti! Omnis perspiciatis commodi nemo! Assumenda accusamus reiciendis debitis saepe, quia exercitationem alias nulla explicabo rerum voluptatibus aspernatur vel incidunt ut sint, commodi veritatis asperiores quos unde? Vitae doloremque dolorum sapiente. Perferendis sed mollitia deleniti, sint assumenda laudantium dolorem dignissimos fugit? Maiores minus impedit autem, aspernatur, consequuntur molestias excepturi tempora asperiores voluptas quod sed eligendi quae adipisci ad odit temporibus! Amet facere officiis minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reprehenderit quis aliquid ratione inventore maiores excepturi temporibus omnis nam animi.'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el dia ' + moment().format("dddd") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur rem, perferendis quasi adipisci mollitia temporibus nam deleniti! Omnis perspiciatis commodi nemo! Assumenda accusamus reiciendis debitis saepe, quia exercitationem alias nulla explicabo rerum voluptatibus aspernatur vel incidunt ut sint, commodi veritatis asperiores quos unde? Vitae doloremque dolorum sapiente. Perferendis sed mollitia deleniti, sint assumenda laudantium dolorem dignissimos fugit? Maiores minus impedit autem, aspernatur, consequuntur molestias excepturi tempora asperiores voluptas quod sed eligendi quae adipisci ad odit temporibus! Amet facere officiis minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reprehenderit quis aliquid ratione inventore maiores excepturi temporibus omnis nam animi.'
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el dia ' + moment().format("dddd") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur rem, perferendis quasi adipisci mollitia temporibus nam deleniti! Omnis perspiciatis commodi nemo! Assumenda accusamus reiciendis debitis saepe, quia exercitationem alias nulla explicabo rerum voluptatibus aspernatur vel incidunt ut sint, commodi veritatis asperiores quos unde? Vitae doloremque dolorum sapiente. Perferendis sed mollitia deleniti, sint assumenda laudantium dolorem dignissimos fugit? Maiores minus impedit autem, aspernatur, consequuntur molestias excepturi tempora asperiores voluptas quod sed eligendi quae adipisci ad odit temporibus! Amet facere officiis minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reprehenderit quis aliquid ratione inventore maiores excepturi temporibus omnis nam animi.'
            },
            {
                title: 'Prueba de titulo 5',
                date: 'Publicado el dia ' + moment().format("dddd") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur rem, perferendis quasi adipisci mollitia temporibus nam deleniti! Omnis perspiciatis commodi nemo! Assumenda accusamus reiciendis debitis saepe, quia exercitationem alias nulla explicabo rerum voluptatibus aspernatur vel incidunt ut sint, commodi veritatis asperiores quos unde? Vitae doloremque dolorum sapiente. Perferendis sed mollitia deleniti, sint assumenda laudantium dolorem dignissimos fugit? Maiores minus impedit autem, aspernatur, consequuntur molestias excepturi tempora asperiores voluptas quod sed eligendi quae adipisci ad odit temporibus! Amet facere officiis minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reprehenderit quis aliquid ratione inventore maiores excepturi temporibus omnis nam animi.'
            },
            {
                title: 'Prueba de titulo 6',
                date: 'Publicado el dia ' + moment().format("dddd") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur rem, perferendis quasi adipisci mollitia temporibus nam deleniti! Omnis perspiciatis commodi nemo! Assumenda accusamus reiciendis debitis saepe, quia exercitationem alias nulla explicabo rerum voluptatibus aspernatur vel incidunt ut sint, commodi veritatis asperiores quos unde? Vitae doloremque dolorum sapiente. Perferendis sed mollitia deleniti, sint assumenda laudantium dolorem dignissimos fugit? Maiores minus impedit autem, aspernatur, consequuntur molestias excepturi tempora asperiores voluptas quod sed eligendi quae adipisci ad odit temporibus! Amet facere officiis minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reprehenderit quis aliquid ratione inventore maiores excepturi temporibus omnis nam animi.'
            },
        ]
        posts.forEach((item, index) => {
            let posts = `
                <article class="posts">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p> ${item.content}</p>
                <a href="#" class="button-more">Leer más</a>
                </article>
                `;
                
                $("#posts").append(posts);
        });
    }

    // Selector de tema

    const theme = $("#theme");

    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    });

    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    });
    
    // Scroll arriba de la web
    $('.subir').click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0  
        }, 500);

        return false
    });

    // Login falso

    $("#login form").submit(function(){
        let form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });

    let form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
        let about_parrafo = $("#about p");
        

        about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong> ");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });

    }
    // Acordeon

    if(window.location.href.indexOf('about') > -1){
         $("#acordeon").accordion();   
    }

    // Reloj
    if(window.location.href.indexOf('reloj') > -1){
        
        setInterval(function(){
            let reloj = moment().format("hh:mm:ss");
            $('#reloj').html(reloj);

        }, 1000);
   }

   // Validacion formulario
   if(window.location.href.indexOf('contact') > -1){

       $("form input[name='date']").datepicker({
        dateFormat: 'dd-mm-yy'
       });

       $.validate({
        lang: 'es'

       });

   }

});

