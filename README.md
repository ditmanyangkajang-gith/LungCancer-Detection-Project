<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    Lung Cancer Detection
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav>
            <div class="logo">
                <h1><a href="#">LungCancer Detection</a></h1>
            </div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div class="burger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </nav>
    </header>

    <main>
        <section id="home" class="hero">
            <div class="hero-content">
                <h2>Welcome to Lung Cancer Detection</h2>
                <p>Lung cancer is cancer that forms in tissues of the lung, usually in the cells that line the air passages.
                     It is the leading cause of cancer death in both men and women. There are two main types: small cell lung 
                     cancer and non-small cell lung cancer. These two types grow differently and are treated differently. 
                     In South Sudan, there is poor diagnostics procedures, delayed times for lab results, and poor image 
                     results interpretation of lung cancer detection in CT Scans. These problems are encounter in most of 
                     the government hospitals in South Sudan like Juba Teaching Hospital (JIT), Gieda Military Hospitals 
                     and Al-Sabah Children Hospital which lead to poor image analysis and Poor treatment.</p>
                <a href="#projects" class="btn">View Projects</a>
            </div>
        </section>

        <section id="about" class="about-section">
            <div class="container">
                <h2>About Us</h2>
                <p>This Project is a team work. The team members are ; Abraham Dit Manyang, Marko Ngor Wek
                    , Godrich Mangar Makur, Sapano Makuei Meen, and Monica Ayen Bol.<p> <h3>Mission</h3>The mission statement is to Eradicate Cancer in South Sudan
                    .</p>  <h2>Problem Statement:</h2>
                    In South Sudan, there’s poor diagnostic procedures; delayed time for lab results, CT Scanned Image Interpretation, MRI image interpretation, Cancer Cells tumor interpretation Cardiovascular diseases cells identification and brain image interpretation. Identifying cancerous tumors in breast cancer screenings (mammography), lung cancer detection in CT scans, and prostate cancer detection in MRI images. Neurological conditions: Detecting abnormalities in brain scans for Alzheimer's disease, stroke, or multiple sclerosis 
                    Cardiovascular disease: Assessing coronary artery disease from angiograms. Ophthalmology: Detecting diabetic retinopathy in fundus images. Medical image analysis using deep learning algorithms
                    
                    <h2>Core idea and approach of of solution:</h2>
                    Medical image diagnostic using deep learning involves utilizing advanced artificial intelligence algorithms, particularly convolutional neural networks (CNNs), to analyze medical images like X-rays, CT Scans, or MRIs, automatically detecting abnormalities and assisting health care professionals in diagnosing diseases with high accuracy, often by identifying patterns and features that might be difficult for humans to perceive manually; this can lead to earlier detection, improved treatment planning, and better patient outcomes.
                    Detecting tumors, identifying lesions, assessing disease progression, classifying different types of abnormalities, segmenting anatomical structures, and evaluating treatment response across various medical specialties like radiology, oncology, and pathology. 
                    
                   <h2> Unique aspect of our project:</h2>
                    Automatically detecting abnormalities and assisting health care professionals in diagnosing diseases with high accuracy, often by identifying patterns and features that might be difficult for humans to perceive manually; this can lead to earlier detection, improved treatment planning, and better patient outcomes.</p>
                <p>You can add more paragraphs here to provide detailed information.</p>
            </div>
        </section>

        <section id="projects" class="projects-section">
            <div class="container">
                <h2>Our Projects</h2>
                <div class="project-grid">
                    <div class="project-item">
                        <h3>Lung Cancer Detect</h3>
                        <p>Lung cancer is cancer that forms in tissues of the lung, usually in the cells that line the air passages.
                            It is the leading cause of cancer death in both men and women. There are two main types: small cell lung 
                            cancer and non-small cell lung cancer. These two types grow differently and are treated differently. 
                            In South Sudan, there is poor diagnostics procedures, delayed times for lab results, and poor image 
                            results interpretation of lung cancer detection in CT Scans. These problems are encounter in most of 
                            the government hospitals in South Sudan like Juba Teaching Hospital (JIT), Gieda Military Hospitals 
                            and Al-Sabah Children Hospital which lead to poor image analysis and Poor treatment.
                        We have designed Machine Learning application which analyze medical images of CT Scans.</p>
                        <a href="#" class="btn-small">Learn More</a>
                    </div>
                    <div class="project-item">
                        <h3>Brain Tumor detection</h3>
                        <p>This project is still at the ideation stage. It will targets tumor markers using machine learning algorithms.</p>
                        <a href="#" class="btn-small">Learn More</a>
                    </div>
                    <div class="project-item">
                        <h3>VR/AR Lab for Medical Experimentation</h3>
                        <p>This project is still at the development stage. It impacts will be to help medical students do virtual practicals.</p>
                        <a href="#" class="btn-small">Learn More</a>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact" class="contact-section">
            <div class="container">
                <h2>Get in Touch</h2>
                <p>Have a question or want to collaborate? Feel free to reach out!</p>
                <form class="contact-form">
                    <input type="text" placeholder="Your Name" required>
                    <input type="email" placeholder="Your Email" required>
                    <textarea placeholder="Your Message" rows="5"></textarea>
                    <button type="submit" class="btn">Send Message</button>
                </form>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <p>&copy; 2025 Lung Cancer Detection. All rights reserved.</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
