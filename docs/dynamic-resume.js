const dynamicCV = () => {
    return `
    <!doctype html>
<html lang="en">

<head>

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <link rel="stylesheet" href="style-green.css" /> ·
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    <title>CV Generator</title>
    <style>
    .resume {
        width: 6.1in;
        height: 7.86in;
    }
    
    .box {
        background-color: rgb(183, 182, 255);
        width: 100%;
        height: 100%;
    }
    
    .left-side {
        color: rgb(255, 255, 255);
        width: 33%;
        height: 100%;
        background-color: rgb(12, 36, 58);
    
    }
    
    .right-side {
        height: 100%;
        width: 65%;
        color: rgb(1, 0, 66);
    }
    
    .name {
        font-size: 1.2rem;
    }
    
    .profile-image {
        width: 90%;
        margin-left: 5%;
        margin-top: 3%;
    }
    
    .profile-image img {
        border-radius: 50%;
    }
    
    .heading-text {
        font-size: 0.9rem;
    }
    
    .para,
    .per-info {
        font-size: 0.7rem !important;
    }
    
    .about .para{
        width: 93%;
    }
    .key-skills li{
        font-size: 0.7rem;
    }

    </style>

</head>

<body>
    <div class="resume border shadow d-flex aligh-items-center jusify-content-center">
        <div class="box">
            <!-- SPELLING MISTAKE -->
            <div class="left-side d-inline-block">
                <div class="profile-image">
                    <img class="img-fluid"
                        src="https://m.media-amazon.com/images/M/MV5BMzhhNTJhYmEtMjk5Yy00OTc0LTlmMTgtZTU5YTFiMmNjMTFiXkEyXkFqcGdeQXVyNjMwOTA1MDM@._V1_.jpg"
                        alt="Profile picture">
                </div>
                <div class="contact ml-2 mt-2">
                    <div class="heading-text text-uppercase">Contact</div>
                    <p class="para mb-1">
                        House no: 69 ghetto street <br>
                        +1234567890 <br>
                        +123456789 <br>
                        example@gmail.com <br>
                        www.website-domain.com
                    </p>
                </div>
                <div class="expert ml-2 mt-2">
                    <div class="heading-text text-uppercase">Expertise Area</div>
                    <p class="para mb-1">
                        Web development <br>
                        Web Design <br>
                        Video Editing <br>
                        Digital marketing<br>
                    </p>
                </div>

                <div class="skill ml-2 mt-2">
                    <div class="heading-text text-uppercase">IT Skill</div>
                    <p class="para mb-1">
                        React, JavaScript, Python<br>
                        Docs, EViews, Digital Marketing, <br>
                        Video Editing, Windows, <br>
                        Web Developer (Freelancer)<br>
                    </p>
                </div>


                <div class="hobbies ml-2 mt-2">
                    <div class="heading-text text-uppercase">hobbies</div>
                    <p class="para mb-1">
                        Rugby<br>
                        Fitness<br>
                        Anime<br>
                        Travel<br>
                    </p>
                </div>
            </div>
            <div class="right-side d-inline-block m-0 p-0 align-top">
                <h2 class="name text-uppercase ml-3 my-2">Scott Dennis</h2>

                <div class="contact ml-3 mt-3">
                    <div class="heading-text text-uppercase">About Me</div>
                    <p class="para mb-1">
                        Multi-telented with knowledge of accounting & financial analysis, digital merketing,
                        web development and others consistently rewarded for success in planning and operational
                        improvements. Expert in IT and good in delivering effective and engaging presentations to
                        variety of audiences
                    </p>
                </div>
                <div class="personal ml-3 mt-3">
                    <div class="heading-text text-uppercase">Personal Informations</div>
                    <table class="per-info">
                        <tbody>
                            <tr class="border">
                                <td>Father's Name</td>
                                <td>Rayaan</td>
                            </tr>
                            <tr class="border">
                                <td>Mather's Name</td>
                                <td>Shane</td>
                            </tr>
                            <tr class="border">
                                <td>Date of Birth</td>
                                <td>12 feb 2022</td>
                            </tr>
                            <tr class="border">
                                <td>Permanent Address</td>
                                <td>Cape Town</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
                <div class="education ml-3 mt-3">
                    <div class="heading-text text-uppercase">Educational informations</div>
                    <table class="per-info">
                        <tbody>
                            <tr class="border">
                                <td>2020-2022</td>
                                <td>
                                    sdaaaaaaaaaaa <br>
                                    Casddddddddd <br>
                                    asdddddddddd <br>
                                    sdaaaaaaaaaaaaaaaaaaaaaa
                                </td>
                            </tr>
                            <tr class="border">
                                <td>2022-2022</td>
                                <td>
                                    agfd <br>
                                    dsfffffffffffffff <br>
                                    dsfffffffffffffffffff <br>
                                    dsfffffffffffffffffffffffffffff
                                </td>
                            </tr>
                            <tr class="border">
                                <td>2020-2022</td>
                                <td>
                                    asd <br>
                                    sadddddddddddd <br>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>



                <div class="key-skills ml-3 mt-3">
                    <div class="heading-text text-uppercase">Key Skills</div>
                    <ul class="pl-1">
                        <li>Interpersonal skills</li>
                        <li>Computer literate</li>
                        <li>Strong analytical and problem solving skills</li>
                        <li>Excellent interpersonal, cross-cultural</li>
                        <li>Encourating and inspiring to others</li>
                        <li>Verbal and written communications skill</li>

                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    -->
</body>

</html>

</body>

</html>`;
}


module.exports = dynamicCV;