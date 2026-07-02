<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio  Yabeth Solis</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>

<body>
    <header class="header">
        <div class="header-left">
            <h1>Yabeth Solis</h1>
            <p>yabeth1801@gmail.com</p>
            <p>3317470460</p>
        </div>
        <nav class="header-right">
            <a href="#about">About Me</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#recommendations">Recommendations</a>
        </nav>
    </header>
    <main>
        <!-- ================= ABOUT ================= -->
        <section id="about" class="intro">
            <div class="intro-image">
                <img src="me.jpg" alt="Foto de perfil">
            </div>
            <div class="intro-text">
                <h2>Hi, I'm <span>Yabeth Solis</span></h2>
                <h3>Full Stack Developer</h3>
                <p>
                    Passionate about web development and software engineering.
                    I enjoy creating modern, responsive and user-friendly
                    applications while continuously learning new technologies.
                </p>
            </div>
        </section>
        <!-- ================= SKILLS ================= -->
        <section id="skills" class="skills">
            <h2>Skills</h2>
            <div class="skills-container">
                <div class="skill-box">
                    <h3>Frontend</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                </div>
                <div class="skill-box">
                    <h3>Backend</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Java</li>
                        <li>PHP</li>
                    </ul>
                </div>
                <div class="skill-box">
                    <h3>Tools</h3>
                    <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>VS Code</li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- ================= PROJECTS ================= -->
        <section id="projects" class="projects">
            <h2>Projects</h2>
            <p>
                The first project is a web-based system for a dessert shop where users can view the product
                catalog and place orders interactively.
                To develop it, I used HTML and CSS for the interface, JavaScript to make the page interactive, 
                and Python for communication between the different pages and for data processing.
            </p>
            <br>
            <p>
                My second project is an Amazon-inspired online store focused on selling Funko Pop figures.
                I used HTML and CSS for the design, JavaScript for user interaction, and PHP along with MySQL 
                to manage the database and product information.
            </p>
        </section>
        <!-- ================= RECOMMENDATIONS ================= -->
        <section id="recommendations" class="recommendations">
    <h2>Recommendations</h2>
    <div id="all_recommendations" class="recommendations-container">
        <div class="recommendation">
            <p>
                "Yabeth is a quick learner and has demonstrated great commitment in every project."
            </p>
        </div>
        <div class="recommendation">
            <p>
                "Always willing to collaborate and solve problems. Excellent teammate."
            </p>
        </div>
        <div class="recommendation">
            <p>
                "Shows responsibility, creativity and initiative when developing software."
            </p>
        </div>
    </div>
    <!-- FORMULARIO -->
    <div class="recommendation-form">
        <h3>Leave a Recommendation</h3>
        <input type="text"  placeholder="Your Name (Optional)">
        <textarea
            id="new_recommendation"
            placeholder="Write your recommendation here..."
            rows="6">
        </textarea>
        <button onclick="addRecommendation()">
            Submit
        </button>
    </div>

</section>
<!-- PPUP -->

<div id="popup" class="popup">
    <div class="popup-content">
        <h3>🎉 Thank you!</h3>
        <p>Your recommendation has been added successfully.</p>
        <button onclick="showPopup(false)">
            Close
        </button>
    </div>

</div>
    </main>

</body>

</html>
