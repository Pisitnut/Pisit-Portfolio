// ==========================
// THEME
// ==========================

const themeBtn = document.getElementById("themeBtn");


function updateThemeIcon(){

    if(!themeBtn) return;


    if(document.body.classList.contains("light")){

        themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }else{

        themeBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

    }

}



// Load Theme

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light");

}


updateThemeIcon();





if(themeBtn){

themeBtn.addEventListener("click",()=>{


    document.body.classList.toggle("light");


    if(document.body.classList.contains("light")){

        localStorage.setItem("theme","light");

    }else{

        localStorage.setItem("theme","dark");

    }


    updateThemeIcon();


});

}





// ==========================
// LANGUAGE
// ==========================


const langBtn = document.getElementById("langBtn");
const langText = document.getElementById("langText");


let currentLang =
localStorage.getItem("lang") || "th";





const language = {


en:{


navHome:"Home",
navAbout:"About",
navSkills:"Skills",
navProjects:"Projects",
navCertificate:"Certificates",
navActivities:"Activities",
navContact:"Contact",



heroName:"Pisit Suebsai",

heroDesc:
"Software Development • Data Science • AI • Cybersecurity",



projectBtn:"View Projects",

resumeBtn:"Download Resume",



aboutTitle:"About Me",


aboutIntro:`

I am a Computer Science student specializing in

<strong>
Data Science and Cybersecurity
</strong>

at Bangkok University.

I am interested in Software Development,
Data Science, Artificial Intelligence (AI),
and Cybersecurity.

I enjoy creating practical solutions
using technology.

`,



aboutEducation:`

<strong>
Computer Science - Data Science and Cybersecurity
</strong>

<br>

Faculty of Information Technology and Innovation,
Bangkok University

`,



aboutSkills:`

<strong>
Full-Stack Development
</strong>

<br>

Web Application Development,
Data Analytics,
AI Model Development,
and Cybersecurity Fundamentals.

`,



aboutExperience:`

<strong>
Academic & Collaborative Projects
</strong>

<br>

Experience from academic projects
and teamwork including AI projects with

<strong>
TrueX Digital Group
</strong>

`,




skillTitle:"Skills",

projectTitle:"Projects",


project1Title:"Speed Detection",

project1Desc:
"Real-time vehicle speed detection system using Arduino Uno R3 and Ultrasonic Sensor HC-SR04.",


project2Title:"Penetration Test",

project2Desc:
"Security assessment through penetration testing, vulnerability analysis, vulnerability assessment, and security report preparation.",


project3Title:"AI Fridge-to-Meal Assistant",

project3Desc:
"AI system that recommends meals from refrigerator ingredients using Computer Vision and Large Language Model.",


project4Title:"Superstore Sales Analysis",

project4Desc:
"Retail sales analysis with sales forecasting using Machine Learning.",


project5Title:"FindCam",

project5Desc:
"YOLO model testing for Object Detection and Real-time Object Tracking.",


project6Title:"Teenoi Database Management",

project6Desc:
"Full Stack Development project.",

certificateTitle:"Certificates",

contactTitle:"Contact",



activityTitle:"Activities & Experience",


activityTitle1:
"IT Empowering Day: in the Era of AI",

activityDesc1:
"Participated in AI and Information Technology activities. Learned about AI applications in industry, technology trends, and future career skills.",


activityTitle2:
"AI Technology Experience at TrueX Digital Group",

activityDesc2:
"Visited TrueX Digital Group to explore a real technology workplace environment. Learned about AI applications in business, software development workflow, and essential skills for future technology careers.",

activityTitle3:
"BU Cyber Fortress Challenge & Career Expo 2026",

activityDesc3:
"Participated in BU Cyber Fortress Challenge & Career Expo 2026 to explore cybersecurity careers and information security technologies. Gained knowledge through discussions with cybersecurity professionals and company representatives about career opportunities, job roles, and essential skills required for entering the cybersecurity field. Received valuable advice and guidance for preparing myself for future career development.",

activityTitle4: "Meet The Youth Cyber Guardians & White Hat Thailand 2026",

activityDesc4: "Participated in Meet The Youth Cyber Guardians & White Hat Thailand 2026 to learn about Cybersecurity, White Hat Hacker concepts, and approaches to protecting against cyber threats. Gained insights into cybersecurity career roles, ethical security practices, and skills needed to prepare for a future career in Cybersecurity.",

activityTitle5: "Faculty Futsal Competition – 1st Place",

activityDesc5: "Participated in a faculty-level futsal competition and achieved 1st place. This experience helped me develop teamwork, communication, and planning skills while working with my teammates. I also learned how to solve problems and handle pressure during the competition while working together toward a common goal.",

},






th:{


navHome:"หน้าหลัก",
navAbout:"เกี่ยวกับ",
navSkills:"ทักษะ",
navProjects:"ผลงาน",
navCertificate:"ใบประกาศ",
navActivities:"กิจกรรม",
navContact:"ติดต่อ",



heroName:"พิสิษฐ์ สืบสาย",

heroDesc:
"Software Development • Data Science • AI • Cybersecurity",



projectBtn:"ดูผลงาน",

resumeBtn:"ดาวน์โหลด Resume",



aboutTitle:"เกี่ยวกับผม",



aboutIntro:`

ผมเป็นนักศึกษาสาขา

<strong>
Computer Science - Data Science and Cybersecurity
</strong>

มหาวิทยาลัยกรุงเทพ

มีความสนใจด้าน Software Development,
Data Science, AI และ Cybersecurity

พร้อมนำความรู้ทางเทคนิค
มาสร้าง Solution ที่ใช้งานได้จริง

`,



aboutEducation:`

<strong>
Computer Science - Data Science and Cybersecurity
</strong>

<br>

คณะเทคโนโลยีสารสนเทศและนวัตกรรม
มหาวิทยาลัยกรุงเทพ

`,



aboutSkills:`

<strong>
Full-Stack Development
</strong>

<br>

การพัฒนาเว็บแอปพลิเคชัน
การวิเคราะห์ข้อมูล
การพัฒนาโมเดล AI
และพื้นฐาน Cybersecurity

`,



aboutExperience:`

<strong>
Academic & Collaborative Projects
</strong>

<br>

ประสบการณ์จากการทำโครงงาน
ทั้งแบบเดี่ยวและแบบทีม

รวมถึงโครงการด้าน AI
ร่วมกับ

<strong>
TrueX Digital Group
</strong>

`,



skillTitle:"ทักษะ",

projectTitle:"ผลงาน",


project1Title:"Speed Detection",

project1Desc:
"ระบบตรวจจับความเร็วรถแบบ Real-time โดยใช้ Arduino Uno R3 และ Ultrasonic Sensor HC-SR04",


project2Title:"Penetration Test",

project2Desc:
"ประเมินความปลอดภัยของระบบด้วยการทดสอบเจาะระบบ วิเคราะห์ช่องโหว่ พร้อมจัดทำรายงานผลและแนวทางแก้ไข",


project3Title:"AI Fridge-to-Meal Assistant",

project3Desc:
"ระบบ AI แนะนำเมนูอาหารจากวัตถุดิบในตู้เย็นด้วย Computer Vision และ Large Language Model",


project4Title:"Superstore Sales Analysis",

project4Desc:
"วิเคราะห์ข้อมูลยอดขายธุรกิจค้าปลีก พร้อมพยากรณ์ยอดขายด้วย Machine Learning",


project5Title:"FindCam",

project5Desc:
"ทดสอบโมเดล YOLO สำหรับ Object Detection และ Real-time Object Tracking",


project6Title:"Teenoi Database Management",

project6Desc:
"โครงการพัฒนาระบบ Full Stack Development",

certificateTitle:"ใบประกาศ",

contactTitle:"ติดต่อ",




activityTitle:"กิจกรรมและประสบการณ์",


activityTitle1:
"IT Empowering Day: in the Era of AI",


activityDesc1:
"ได้เข้าร่วมกิจกรรมการเรียนรู้ด้าน AI และเทคโนโลยีสารสนเทศ เรียนรู้การประยุกต์ใช้ AI ในภาคอุตสาหกรรม รวมถึงแนวโน้มเทคโนโลยีและทักษะที่จำเป็นสำหรับการทำงาน",



activityTitle2:
"AI Technology Experience at TrueX Digital Group",

activityDesc2:
"เข้าร่วมกิจกรรมด้าน AI และเทคโนโลยีสารสนเทศ พร้อมเยี่ยมชมสถานที่ทำงานจริงของ TrueX Digital Group เพื่อเรียนรู้สภาพแวดล้อมการทำงานขององค์กรเทคโนโลยี การประยุกต์ใช้ AI ในภาคธุรกิจ รวมถึงทักษะสำคัญสำหรับสายงาน Software Development และ Data Science",



activityTitle3:
"BU Cyber Fortress Challenge & Career Expo 2026",

activityDesc3:
"เข้าร่วมกิจกรรม BU Cyber Fortress Challenge & Career Expo 2026 เพื่อเรียนรู้เกี่ยวกับสายงานด้าน Cybersecurity และเทคโนโลยีความปลอดภัยสารสนเทศ ได้พูดคุยและแลกเปลี่ยนความรู้กับผู้เชี่ยวชาญด้าน Cybersecurity รวมถึงตัวแทนจากบริษัทต่าง ๆ เกี่ยวกับตำแหน่งงาน ทักษะที่จำเป็น และแนวทางการเตรียมตัวเข้าสู่สายอาชีพ พร้อมได้รับคำแนะนำที่เป็นประโยชน์สำหรับการพัฒนาตนเองในอนาคต",

activityTitle4:
"Meet The Youth Cyber Guardians & White Hat Thailand 2026",

activityDesc4:
"เข้าร่วมกิจกรรม Meet The Youth Cyber Guardians & White Hat Thailand 2026 เพื่อเรียนรู้แนวคิดด้าน Cybersecurity และ White Hat Hacker รวมถึงแนวทางการป้องกันภัยคุกคามทางไซเบอร์ ได้เรียนรู้เกี่ยวกับบทบาทของบุคลากรด้าน Cybersecurity แนวคิดการใช้ทักษะด้านความปลอดภัยอย่างมีจริยธรรม และแนวทางการพัฒนาตนเองเพื่อเตรียมความพร้อมสู่สายอาชีพด้าน Cybersecurity ในอนาคต",

activityTitle5: "การแข่งขันฟุตซอลระดับคณะ – รางวัลชนะเลิศอันดับ 1",

activityDesc5: "ได้เข้าร่วมการแข่งขันฟุตซอลระดับคณะและได้รับรางวัลชนะเลิศอันดับ 1 จากการแข่งขันครั้งนี้ ทำให้ได้ฝึกการทำงานเป็นทีม การสื่อสาร และการวางแผนร่วมกับเพื่อน ๆ รวมถึงการแก้ปัญหาเฉพาะหน้าและการรับมือกับความกดดันระหว่างการแข่งขัน ซึ่งเป็นประสบการณ์ที่ช่วยพัฒนาทักษะการทำงานร่วมกับผู้อื่นได้เป็นอย่างดี",


}


};









// ==========================
// UPDATE LANGUAGE
// ==========================


function setText(id,text,html=false){

    const el=document.getElementById(id);

    if(!el) return;


    if(html){

        el.innerHTML=text;

    }else{

        el.textContent=text;

    }

}






function updateLanguage(){


setText(
"langText",
currentLang.toUpperCase()
);



document.documentElement.lang=currentLang;



const lang = language[currentLang];



// ==========================
// NAVBAR
// ==========================

setText("navHome",lang.navHome);
setText("navAbout",lang.navAbout);
setText("navSkills",lang.navSkills);
setText("navProjects",lang.navProjects);
setText("navCertificate",lang.navCertificate);
setText("navActivities",lang.navActivities);
setText("navContact",lang.navContact);




// ==========================
// HERO
// ==========================

setText("heroName",lang.heroName);

setText(
"heroDesc",
lang.heroDesc,
true
);



setText(
"projectBtn",
lang.projectBtn
);


setText(
"resumeBtn",
lang.resumeBtn
);




// ==========================
// ABOUT
// ==========================

setText(
"aboutTitle",
lang.aboutTitle
);


setText(
"aboutIntro",
lang.aboutIntro,
true
);


setText(
"aboutEducation",
lang.aboutEducation,
true
);


setText(
"aboutSkills",
lang.aboutSkills,
true
);


setText(
"aboutExperience",
lang.aboutExperience,
true
);




// ==========================
// SECTION TITLE
// ==========================

setText(
"skillTitle",
lang.skillTitle
);


setText(
"projectTitle",
lang.projectTitle
);


setText(
"certificateTitle",
lang.certificateTitle
);


setText(
"contactTitle",
lang.contactTitle
);





// ==========================
// ACTIVITY
// ==========================

setText(
"activityTitle",
lang.activityTitle
);


setText(
"activityTitle1",
lang.activityTitle1
);


setText(
"activityDesc1",
lang.activityDesc1
);


setText(
"activityTitle2",
lang.activityTitle2
);


setText(
"activityDesc2",
lang.activityDesc2
);


setText(
"activityTitle3",
lang.activityTitle3
);


setText(
"activityDesc3",
lang.activityDesc3
);


setText(
    "activityTitle4",
    lang.activityTitle4
);

setText(
    "activityDesc4",
    lang.activityDesc4
);




setText(
    "activityTitle5",
    lang.activityTitle5
);

setText(
    "activityDesc5",
    lang.activityDesc5
);




// ==========================
// PROJECTS
// ==========================

setText(
"project1Title",
lang.project1Title
);

setText(
"project1Desc",
lang.project1Desc
);



setText(
"project2Title",
lang.project2Title
);

setText(
"project2Desc",
lang.project2Desc
);



setText(
"project3Title",
lang.project3Title
);

setText(
"project3Desc",
lang.project3Desc
);



setText(
"project4Title",
lang.project4Title
);

setText(
"project4Desc",
lang.project4Desc
);



setText(
"project5Title",
lang.project5Title
);

setText(
"project5Desc",
lang.project5Desc
);



setText(
"project6Title",
lang.project6Title
);

setText(
"project6Desc",
lang.project6Desc
);


}





// โหลดภาษาครั้งแรก

updateLanguage();





// เปลี่ยนภาษา

if(langBtn){


langBtn.addEventListener("click",()=>{


currentLang =
currentLang==="th"
?"en"
:"th";



localStorage.setItem(
"lang",
currentLang
);



updateLanguage();


});


}


// ==========================
// SKILLS FILTER
// ==========================

const filterBtns = document.querySelectorAll(".filter-btn");
const skillCards = document.querySelectorAll(".skill-card");


// โหลดหน้าแรก แสดง Front-End

skillCards.forEach(card => {

    if(card.classList.contains("frontend")){

        card.style.display = "";

    }else{

        card.style.display = "none";

    }

});



filterBtns.forEach(btn => {


    btn.addEventListener("click", () => {


        // active button

        filterBtns.forEach(b => {

            b.classList.remove("active");

        });


        btn.classList.add("active");



        const filter = btn.dataset.filter;



        skillCards.forEach(card => {


            if(card.classList.contains(filter)){


                card.style.display = "";


            }else{


                card.style.display = "none";


            }


        });


    });


});


const projectData = {

1:{


category:{
th:"โปรเจกต์ Embedded System",
en:"EMBEDDED SYSTEM PROJECT"
},


title:{
th:"ระบบตรวจจับความเร็วรถด้วย Arduino Uno R3",
en:"Speed Detection System using Arduino Uno R3"
},


main:"images/pro1.2.jpg",

img1:"images/pro1.3.jpg",

img2:"images/pro1.4.jpg",



overview:{


th:
"ระบบตรวจจับความเร็วรถโดยใช้ Arduino Uno R3 ร่วมกับ Ultrasonic Sensor HC-SR04 จำนวน 2 ตัว เพื่อวัดความเร็วแบบ Real-time พร้อมแสดงผลผ่าน LCD I2C",


en:
"Vehicle speed detection system using Arduino Uno R3 with two HC-SR04 Ultrasonic Sensors to measure real-time speed and display results through LCD I2C."

},



contribution:{


th:
"ออกแบบวงจร เขียนโปรแกรม Arduino ควบคุม Sensor และพัฒนาระบบแจ้งเตือนด้วย LED และ Buzzer",


en:
"Designed circuits, programmed Arduino to control sensors, and developed warning systems using LED and Buzzer."

},



tech:[
"Arduino Uno R3",
"C/C++",
"Arduino IDE",
"HC-SR04",
"LCD I2C",
"LED",
"Buzzer"
],


pdf:"pdf/speed_detection.pdf"


},





2:{


category:{
th:"Cybersecurity",
en:"CYBERSECURITY"
},



title:{
th:"การทดสอบเจาะระบบ (Penetration Test)",
en:"Penetration Test"
},



main:"images/pro2.1.jpg",

img1:"images/pro2.png",

img2:"",



overview:{


th:
"การทดสอบความปลอดภัยของระบบด้วยแนวทาง Penetration Testing เพื่อวิเคราะห์ช่องโหว่และประเมินความปลอดภัยของระบบ",


en:
"Security assessment using penetration testing methodologies to identify vulnerabilities and evaluate system security."

},



contribution:{


th:
"ทำการทดสอบระบบ วิเคราะห์ช่องโหว่ จัดทำรายงานผลการทดสอบ และเสนอแนวทางแก้ไข",


en:
"Performed security testing, vulnerability analysis, prepared assessment reports, and suggested improvement solutions."

},



tech:[
"Cybersecurity",
"Penetration Testing",
"Kali Linux",
"Network Analysis"
],


pdf:"pdf/Pentest_Report.pdf"


},





3:{


category:{
th:"AI Transformation Project",
en:"AI TRANSFORMATION PROJECT"
},



title:{
th:"AI Fridge-to-Meal Assistant",
en:"AI Fridge-to-Meal Assistant"
},



main:"images/pro3.png",

img1:"images/per3.1.png",

img2:"images/per3.2.png",



overview:{


th:
"ระบบ AI ที่ช่วยวิเคราะห์วัตถุดิบจากภาพถ่ายภายในตู้เย็นด้วย Computer Vision และแนะนำเมนูอาหารพร้อมขั้นตอนการปรุงโดยใช้ Large Language Model (LLM) เพื่อช่วยลด Food Waste และลดเวลาในการเลือกเมนูอาหาร",


en:
"AI system that analyzes refrigerator ingredients using Computer Vision and recommends meals with cooking instructions using Large Language Model (LLM) to reduce food waste and decision-making time."

},



contribution:{


th:
"ร่วมออกแบบระบบ วิเคราะห์ความต้องการของโครงการ พัฒนา Web Application ออกแบบ Prompt สำหรับ LLM เชื่อมต่อระบบ AI และทดสอบระบบ",


en:
"Designed system architecture, analyzed requirements, developed Web Application, created LLM prompts, integrated AI services, and tested the system."

},



tech:[
"Computer Vision",
"Large Language Model (LLM)",
"Prompt Engineering",
"OpenAI GPT / Gemini",
"Hugging Face",
"Streamlit",
"Python"
],



pdf:"pdf/Tensura_Report.pdf",


github:
"https://github.com/Pisitnut/AI_Fridge_Project"


},



4:{


category:{
th:"Data Analytics and Mining",
en:"DATA ANALYTICS AND MINING"
},



title:{
th:"วิเคราะห์ข้อมูลยอดขาย Superstore",
en:"Superstore Sales Analysis"
},



main:"images/pro4.png",



youtube:
"https://youtu.be/B2VgVg-wk00",



overview:{


th:
"วิเคราะห์ข้อมูลยอดขายธุรกิจค้าปลีกด้วย Data Analytics และ Machine Learning เพื่อค้นหา Insight ทางธุรกิจ พร้อมสร้างโมเดลพยากรณ์ยอดขาย",


en:
"Retail sales analysis using Data Analytics and Machine Learning to discover business insights and build sales forecasting models."

},



contribution:{


th:
"ทำ Data Cleaning, Exploratory Data Analysis (EDA), วิเคราะห์ข้อมูลยอดขาย และพัฒนาโมเดล Machine Learning สำหรับ Forecasting",


en:
"Performed Data Cleaning, Exploratory Data Analysis (EDA), sales analysis, and developed Machine Learning forecasting models."

},



tech:[
"Python",
"Pandas",
"Matplotlib",
"Scikit-learn",
"Random Forest"
],



pdf:"pdf/Superstore Sales Analysis.pdf"


},






5:{


category:{
th:"การทดสอบโมเดล YOLO และ Object Tracking",
en:"YOLO MODEL TESTING & OBJECT TRACKING"
},



title:{
th:"FindCam",
en:"FindCam"
},



video:
"clip/clip5.mp4",



youtube:
"https://youtu.be/B2VgVg-wk00",



figma:
"https://www.figma.com/proto/ANQ5ID8ukLhBRE1nPmEVZQ/Findcam?node-id=0-1&t=G6DKtjh9MKnrhCGq-1",



overview:{


th:
"โครงงานด้าน Computer Vision สำหรับทดสอบและประเมินประสิทธิภาพของโมเดล YOLO ในการตรวจจับและติดตามวัตถุแบบเรียลไทม์ โดยประมวลผลข้อมูลจากกล้องและส่งผลการตรวจจับผ่าน API ไปยังเว็บแอปพลิเคชันเพื่อแสดงผลแบบเรียลไทม์",


en:
"Computer Vision project for testing and evaluating YOLO model performance in real-time object detection and tracking. Detection results are processed from camera input and sent through API to a web application."

},



contribution:{


th:
"ออกแบบ Prototype ของเว็บแอปพลิเคชันด้วย Figma วิเคราะห์ความต้องการของระบบ ทดสอบโมเดล YOLO และปรับปรุงประสิทธิภาพของระบบ",


en:
"Designed web application prototype using Figma, analyzed system requirements, tested YOLO models, and improved system performance."

},



tech:[
"Python",
"YOLOv8",
"Computer Vision",
"AI Model Testing",
"Figma"
],



pdf:
"pdf/FindCam.pdf"


},






6:{


category:{
th:"โปรเจกต์ออกแบบฐานข้อมูล",
en:"DATABASE DESIGN PROJECT"
},



title:{
th:"ระบบฐานข้อมูลร้านตี๋น้อย",
en:"Tee Noi Restaurant Database System"
},



main:
"images/pro6.png",



overview:{


th:
"ออกแบบฐานข้อมูลระบบจัดการข้อมูลอาหารร้านตี๋น้อย สำหรับบริหารจัดการเมนูอาหาร วัตถุดิบ ราคา โปรโมชั่น สาขา พนักงาน โต๊ะ และระบบชำระเงิน เพื่อให้ข้อมูลเป็นระบบและลดความซ้ำซ้อน",


en:
"Designed a restaurant database management system for managing menus, ingredients, prices, promotions, branches, employees, tables, and payment systems to improve data organization and reduce redundancy."

},



contribution:{


th:
"ออกแบบตารางสำหรับจัดเก็บข้อมูล พร้อมช่วยออกแบบ ER Diagram เพื่อกำหนดความสัมพันธ์ระหว่าง Entity และโครงสร้างฐานข้อมูล",


en:
"Designed database tables and created ER Diagram to define relationships between entities and database structures."

},



tech:[
"Database Design",
"ER Diagram",
"SQL",
"Normalization",
"System Analysis"
],



pdf:
"pdf/teenoi-proposal.pdf"


}



};



// ================= CURRENT PROJECT =================

let currentProjectID = null;


// ================= OPEN PROJECT =================

function openProject(id){

    currentProjectID = id;

    const project = projectData[id];


    const layout = document.querySelector(".image-layout");


    const mainImage = document.getElementById("mainImage");
    const subImage1 = document.getElementById("subImage1");
    const subImage2 = document.getElementById("subImage2");


    const video = document.getElementById("projectVideo");



    // ================= TITLE =================


    document.getElementById("projectCategory").innerHTML =
    project.category[currentLang];


    document.getElementById("projectTitleText").innerHTML =
    project.title[currentLang];





    // ================= MEDIA =================


    if(project.video){



        video.style.display = "block";



        if(
            project.video.includes("youtube") ||
            project.video.includes("youtu.be")
        ){



            let videoID = "";



            if(project.video.includes("youtu.be")){


                videoID = project.video
                .split("youtu.be/")[1]
                .split("?")[0];


            }


            else{


                videoID = project.video
                .split("v=")[1]
                .split("&")[0];


            }



            video.innerHTML = `

            <iframe

            src="https://www.youtube.com/embed/${videoID}"

            width="100%"

            height="100%"

            frameborder="0"

            allowfullscreen>

            </iframe>

            `;


        }



        else{


            video.innerHTML = `

            <video controls>

            <source src="${project.video}" type="video/mp4">

            </video>

            `;


        }




        mainImage.style.display = "none";
        subImage1.style.display = "none";
        subImage2.style.display = "none";



    }



    else{



        video.innerHTML = "";

        video.style.display = "none";



        // ================= IMAGE =================


        mainImage.style.display = "block";


        mainImage.src = project.main;




        if(project.img1 && project.img1 !== ""){


            subImage1.style.display = "block";

            subImage1.src = project.img1;


        }

        else{


            subImage1.style.display = "none";


        }





        if(project.img2 && project.img2 !== ""){


            layout.classList.remove("two-images");


            subImage2.style.display = "block";


            subImage2.src = project.img2;


        }

        else{


            layout.classList.add("two-images");


            subImage2.style.display = "none";


        }



    }







    // ================= TEXT =================


    document.getElementById("projectOverview").innerHTML =
    project.overview[currentLang];



    document.getElementById("projectContribution").innerHTML =
    project.contribution[currentLang];







    // ================= TECHNOLOGY =================


    let techHTML = "";


    project.tech.forEach(function(item){


        techHTML += `<span>${item}</span>`;


    });



    document.getElementById("projectTech").innerHTML =
    techHTML;







    // ================= PDF =================


    const documentBtn =
    document.getElementById("projectDocument");



    if(project.pdf){


        documentBtn.href = project.pdf;


        documentBtn.style.display =
        "inline-flex";


    }

    else{


        documentBtn.style.display =
        "none";


    }








    // ================= GITHUB =================


    const githubBtn =
    document.getElementById("projectGithub");



    if(project.github){


        githubBtn.href = project.github;


        githubBtn.style.display =
        "inline-flex";


    }

    else{


        githubBtn.style.display =
        "none";


    }







    // ================= YOUTUBE =================


    const youtubeBtn =
    document.getElementById("projectYoutube");



    if(project.youtube){


        youtubeBtn.href = project.youtube;


        youtubeBtn.style.display =
        "inline-flex";


    }

    else{


        youtubeBtn.style.display =
        "none";


    }







    // ================= FIGMA =================


    const figmaBtn =
    document.getElementById("projectFigma");



    if(project.figma){


        figmaBtn.href = project.figma;


        figmaBtn.style.display =
        "inline-flex";


    }

    else{


        figmaBtn.style.display =
        "none";


    }







    // ================= SHOW MODAL =================


    document.getElementById("projectModal").style.display =
    "flex";


}







// ================= CLOSE PROJECT =================


function closeProject(){


    document.getElementById("projectModal")
    .style.display = "none";


}

/* ==========================
   SHOW MORE CERTIFICATES
========================== */

const toggleBtn = document.getElementById("toggleCertificates");
const hiddenCards = document.querySelectorAll(".hidden-certificate");

let expanded = false;

toggleBtn.addEventListener("click", () => {

    expanded = !expanded;

    hiddenCards.forEach(card => {

        if(expanded){

            card.style.display = "block";
            card.classList.add("show");

        }else{

            card.style.display = "none";
            card.classList.remove("show");

        }

    });

    toggleBtn.textContent = expanded ? "Show Less" : "Show More";

});

/* ==========================
   CERTIFICATE MODAL
========================== */

const modal = document.getElementById("certificateModal");
const modalImg = document.getElementById("certificateImage");
const closeModal = document.querySelector(".close-modal");

// เปิดจากรูป Certificate
document.querySelectorAll(".certificate-img").forEach(img => {

    img.addEventListener("click", () => {

        modal.style.display = "flex";
        modalImg.src = img.dataset.img;

    });

});

// ปิดด้วยปุ่ม X
closeModal.addEventListener("click", () => {

    modal.style.display = "none";

});

// ปิดเมื่อคลิกพื้นหลัง
modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});

// ปิดเมื่อกดปุ่ม ESC
document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        modal.style.display = "none";

    }

});

/* ==========================
   สำหรับเปิด/ปิดเมนู
========================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){

        menuIcon.className="fa-solid fa-xmark";

    }else{

        menuIcon.className="fa-solid fa-bars";

    }

});

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");
        menuIcon.className="fa-solid fa-bars";

    });

});
