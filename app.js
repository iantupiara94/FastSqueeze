// NavBar Menu
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

const homeid=document.querySelector("a[href='#home']");
const aboutid=document.querySelector("a[href='#about']");
const productsid=document.querySelector("a[href='#products']");
const contactid=document.querySelector("a[href='#contact']");

const doNavBar = () => {
	//Toggle Now
	nav.classList.toggle("nav-active");
	//Animate Links
	if(screen.width<1024){
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${
					index / 5 + 0.45
				}s`;
			}
		});
	}
	//Burger Animation
	burger.classList.toggle("toggle");
}


// Animations



const showcase = document.querySelector(".showcase");
const navbar1 = document.querySelectorAll(".nav-links li");
const logo = document.querySelector(".logo");
const info = document.querySelector(".info");
const info2 = document.querySelector(".info2");

const tl = new TimelineMax();

if(screen.width>1024){
	//Home Section
	tl.fromTo(
		showcase,
		1,
		{ height: "0%" },
		{ height: "90vh", ease: Power2.easeInOut }
	)
	.fromTo(
		logo,
		1.2,
		{ x: "80%", y:"400px",scale: 5.0, opacity: 0 },
		{ x: "0%", y:"0%",scale:1, opacity: 1, ease: SlowMo.easeInOut })
	.fromTo(
		navbar1,
		0.8,
		{ x: "10%", opacity: 0 },
		{ x: "0%", opacity: 1, ease: Power2.easeInOut })
	.fromTo(
		info2, 0.5,
		{ opacity: 0, x: 30 },
		{ opacity: 1, x: 0 },
		"=0.2");

	// About Section
	gsap.from(".about", {
		scrollTrigger: ".about1", // start the animation when ".box" enters the viewport (once)
		x: -200,
		opacity:0,
		duration: 2
	});
	
	gsap.from(".about1, .about2", {
		scrollTrigger: ".about1", // start the animation when ".box" enters the viewport (once)
		y: -40,
		opacity:0,
		duration: 2,
		delay:0.5
		});
	
	gsap.from(".about3", {
		scrollTrigger: ".about1", // start the animation when ".box" enters the viewport (once)
		y: 40,
		opacity:0,
		duration: 2,
		delay: 1
		});

	// Products Section
	gsap.from(".products",{
		scrollTrigger:".products",
		x:200,
		opacity:0,
		duration:1,
	});
	gsap.from("#slideshow1",{
		scrollTrigger:"#slideshow1",
		y:40,
		opacity:0,
		duration:2,
		delay:0.5
	});
	gsap.from(".products-text h3",{
		scrollTrigger:"#slideshow1",
		opacity:0,
		duration:3,
		delay:2
	});
	gsap.from(".products-text ul li",{
		scrollTrigger:"#slideshow1",
		opacity:0,
		duration:0.6,
		delay:2.8,
		stagger:0.7
	});
	gsap.from(".products-text p",{
		scrollTrigger:"#slideshow1",
		opacity:0,
		y:100,
		duration:3,
		delay:8,
	});

	// Contact Section
	gsap.from(".contact",{
		scrollTrigger:".contact",
		x:200,
		opacity:0,
		duration:0.8,
	});
	gsap.from(".facebook",{
		scrollTrigger:".facebook",
		x:-100,
		y: 10,
		scale:3,
		duration:1,
		delay: 0.7
	});
	gsap.from(".instagram",{
		scrollTrigger:".instagram",
		y: 10,
		scale:3,
		duration:1,
		delay: 1.7
	});
	gsap.from(".whatsapp",{
		scrollTrigger:".whatsapp",
		y: 10,
		x:100,
		scale:3,
		duration:1,
		delay: 2.7
	});
}



$(document).ready(function(){
	if(screen.width> 1024){
		// document.querySelector("body").style.ov
	}
	// Nav Bar Animation
	
	burger.addEventListener("click", () => {
		doNavBar();
	});
	homeid.addEventListener("click", () =>{
		doNavBar();
	});
	
	aboutid.addEventListener("click", () =>{
		doNavBar();
	});
	
	productsid.addEventListener("click", () =>{
		doNavBar();
	});
	
	contactid.addEventListener("click", () =>{
		doNavBar();
	});

	// Add smooth scrolling to all links
	$("a").on('click', function(event) {
	
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();
	
		// Store hash
		var hash = this.hash;
	
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 800, function(){
		
			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		});
		} // End if
	});


	// Slideshows for pictures in Products Page
	$("#slideshow1 > div:gt(0)").hide();

	setInterval(function() {
	$('#slideshow1 > div:first')
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('#slideshow1');
	}, 4000);

	//Slideshow for pictures in Contact Page
	$("#slideshow2 > div:gt(0)").hide();

	setInterval(function() {
	$('#slideshow2 > div:first')
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('#slideshow2');
	}, 4000);


	});


	
