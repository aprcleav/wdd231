// Course List

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

createCourseCard(courses);

// Links menu items to filtered array cards
const all = document.querySelector("#all");
const cse = document.querySelector("#CSE");
const wdd = document.querySelector("#WDD");


all.addEventListener("click", () => {
    createCourseCard(courses);
});

cse.addEventListener("click", () => {
    createCourseCard(courses.filter(course => course.subject == "CSE"));
});

wdd.addEventListener("click", () => {
    createCourseCard(courses.filter(course => course.subject == "WDD"));
});

// Creates and populates cards
function createCourseCard(filteredCourses)
{
    document.querySelector(".course-grid").innerHTML = "";

    filteredCourses.forEach(course => {
        let card = document.createElement("section");
        let subject = document.createElement("p");
        let number = document.createElement("p");
        let completed = document.createElement("p");
        
        subject.textContent = course.subject;
        number.textContent = course.number;

        if (course.completed == true) {
            completed.textContent = "✅";
            card.setAttribute("class", "card");
        }
        else {
            completed.textContent = "";
            card.setAttribute("class", "card incomplete");
        }
        
        card.appendChild(completed);
        card.appendChild(subject);
        card.appendChild(number);

        // Uses reduce function to get the total number of credits for the filtered courses
        const total = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
        document.querySelector('#credit-count').textContent = total;

        document.querySelector(".course-grid").appendChild(card);

    });
}




